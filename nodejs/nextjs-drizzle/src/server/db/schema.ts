// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  integer,
  primaryKey,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `nextjs-drizzle_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    // name: varchar("name", { length: 256 }),
    name: text("name"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

// Source: https://github.com/remuspoienar/bun-elysia-drizzle-sqlite/blob/main/src/db/schema.ts
// users
export const users = createTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  bio: text("bio").default("https://api.realworld.io/images/smiley-cyrus.jpeg"),
  image: text("image"),
});

export const usersRelations = relations(users, ({ many }) => ({
  articles: many(articles),
  comments: many(comments),
  // followers: many(userFollows, { relationName: "followed" }),
  // following: many(userFollows, { relationName: "follower" }),
  userFavorites: many(userFavorites),
}));

// articles
export const articles = createTable("articles", {
  id: serial("id").primaryKey(),
  authorId: integer("authorId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const articleRelations = relations(articles, ({ one, many }) => ({
  author: one(users, { fields: [articles.authorId], references: [users.id] }),
  comments: many(comments),
  tagsArticles: many(tagsArticles),
  userFavorites: many(userFavorites),
}));

// tags
export const tags = createTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const tagRelations = relations(tags, ({ many }) => ({
  tagsArticles: many(tagsArticles),
}));

export const tagsArticles = createTable(
  "tagsArticles",
  {
    tagId: integer("tagId")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
    articleId: integer("articleId")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.tagId, t.articleId] }),
  }),
);

export const tagsArticlesRelations = relations(tagsArticles, ({ one }) => ({
  tag: one(tags, { fields: [tagsArticles.tagId], references: [tags.id] }),
  article: one(articles, {
    fields: [tagsArticles.articleId],
    references: [articles.id],
  }),
}));

// comments
export const comments = createTable("comments", {
  id: serial("id").primaryKey(),
  authorId: integer("authorId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  articleId: integer("articleId")
    .notNull()
    .references(() => articles.id, { onDelete: "cascade" }),
  body: text("body").notNull(),
  createdAt: timestamp("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const commentRelations = relations(comments, ({ one }) => ({
  author: one(users, { fields: [comments.authorId], references: [users.id] }),
  article: one(articles, {
    fields: [comments.articleId],
    references: [articles.id],
  }),
}));

// // user follows
// export const userFollows = createTable(
//   "userFollows",
//   {
//     followerId: integer("followerId")
//       .notNull()
//       .references(() => users.id, { onDelete: "cascade" }),
//     followedId: integer("followedId")
//       .notNull()
//       .references(() => users.id, { onDelete: "cascade" }),
//   },
//   (t) => ({
//     pk: primaryKey({ columns: [t.followerId, t.followedId] }),
//   }),
// );

// export const userFollowsRelations = relations(userFollows, ({ one }) => ({
//   follower: one(users, {
//     fields: [userFollows.followerId],
//     references: [users.id],
//     relationName: "follower",
//   }),
//   followed: one(users, {
//     fields: [userFollows.followedId],
//     references: [users.id],
//     relationName: "followed",
//   }),
// }));

// user favorites
export const userFavorites = createTable(
  "userFavorites",
  {
    articleId: integer("articleId")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: integer("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.articleId, t.userId] }),
  }),
);

export const userFavoritesRelations = relations(userFavorites, ({ one }) => ({
  article: one(articles, {
    fields: [userFavorites.articleId],
    references: [articles.id],
  }),
  user: one(users, {
    fields: [userFavorites.userId],
    references: [users.id],
  }),
}));
