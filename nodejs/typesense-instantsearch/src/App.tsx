import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  DynamicWidgets,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from 'react-instantsearch';

import { Panel } from './Panel';

import type { Hit } from 'instantsearch.js';

import './App.css';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const future = { preserveSharedStateOnUnmount: true };

export function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">typesense-instantsearch</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="instant_search" future={future} >
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <DynamicWidgets fallbackComponent={RefinementList}>
                <Panel header="type">
                  <RefinementList attribute="type" />
                </Panel>
                <Panel header="brand">
                  <RefinementList attribute="brand" />
                </Panel>
                <Panel header="price">
                  <RefinementList attribute="price" />
                </Panel>
                <Panel header="rating">
                  <RefinementList attribute="rating" />
                </Panel>
                <Panel header="categories">
                  <RefinementList attribute="categories" />
                </Panel>
                <Panel header="popularity">
                  <RefinementList attribute="popularity" />
                </Panel>
                <Panel header="price_range">
                  <RefinementList attribute="price_range" />
                </Panel>
                <Panel header="free_shipping">
                  <RefinementList attribute="free_shipping" />
                </Panel>
                <Panel header="hierarchicalCategories.lvl0">
                  <RefinementList attribute="hierarchicalCategories.lvl0" />
                </Panel>
                <Panel header="hierarchicalCategories.lvl1">
                  <RefinementList attribute="hierarchicalCategories.lvl1" />
                </Panel>
                <Panel header="hierarchicalCategories.lvl2">
                  <RefinementList attribute="hierarchicalCategories.lvl2" />
                </Panel>
                <Panel header="hierarchicalCategories.lvl3">
                  <RefinementList attribute="hierarchicalCategories.lvl3" />
                </Panel>
                <Panel header="hierarchicalCategories.lvl4">
                  <RefinementList attribute="hierarchicalCategories.lvl4" />
                </Panel>
              </DynamicWidgets>
            </div>

            <div className="search-panel__results">
              <SearchBox placeholder="" className="searchbox" />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

type HitProps = {
  hit: Hit;
};

function Hit({ hit }: HitProps) {
  return (
    <article>
      <img src={ hit.image } alt={ hit.name } />
      <div>
        <h1>
          <Highlight attribute="name" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="description" hit={hit} />
        </p>
        <p>
          <Highlight attribute="categories" hit={hit} />
        </p>
      </div>
    </article>
  );
}
