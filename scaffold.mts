import { intro, outro, select, text } from '@clack/prompts';
import { cpSync, readdirSync } from 'fs';
import { exec } from 'child_process';
import { noCase } from 'change-case';
import { promisify } from 'util';

const execAsync = promisify(exec);

intro(`Scaffold new project`);

const projectType = await select({
  message: 'Pick a project type.',
  initialValue: 'nodejs',
  options: [
    { value: 'nodejs', label: 'Node.js' },
    {
      value: 'other',
      label: 'Other',
      hint: 'Browser extension, Obsidian plugin, etc.',
    },
  ],
});

const projectFolder = String(projectType);

const templateFolders = readdirSync(
  new URL(`./${projectFolder}`, import.meta.url)
);

const template = await select({
  message: 'Pick a project type.',
  options: templateFolders.map((folder) => ({
    value: folder,
    label: noCase(folder),
  })),
});

// const templateFolder = join(__dirname, projectFolder, String(template));
const templateFolder = new URL(
  `./${projectFolder}/${String(template)}`,
  import.meta.url
);

const pathToCreate = await text({
  message: 'Where to create the project?',
  initialValue: 'new-project',
  validate(value) {
    if (value.length === 0) return `Value is required!`;
  },
});

cpSync(templateFolder, String(pathToCreate), { recursive: true });

// run npm install if there is a package.json
const files = readdirSync(templateFolder);
if (files.includes('package.json')) {
  console.log('Running npm install...');
  // run npm install
  await execAsync('npm install', { cwd: String(pathToCreate) });
  console.log('npm install done!');
}

outro(`You're all set!`);
