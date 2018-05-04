/* eslint-disable */

import chalk from 'chalk';
import fs from 'fs';

function getTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(chalk.blue('Generating new component. This will take a moment...'));

const newHyphenatedName = process.argv[2];

if (!newHyphenatedName) {
  console.error(chalk.red('No component name given.'));
  process.exit(1);
}

const newComponentName = newHyphenatedName
  .split('-')
  .map(segment => getTitleCase(segment))
  .join('');

console.log(chalk.green(`New component name is: ${newComponentName}`));

try {
  process.chdir('app/src/components');
  console.log(chalk.blue(`Changed to directory: ${process.cwd()}`));
} catch (err) {
  console.error(chalk.red(`chdir: ${err}`));
  process.exit(1);
}

console.log(chalk.green(`Making directory: ${newHyphenatedName}...`));
fs.mkdirSync(newHyphenatedName);

const newFiles = [
  '_component.js',
  '_component.doc.js',
  '_component.scss',
  '_component.spec.js',
  'index.js',
];

newFiles.forEach((filename) => {
  try {
    const data = fs.readFileSync(`_component-template/${filename}`, 'utf8');

    const result = data
      .replace(/Foo/g, newComponentName)
      .replace(/foo/g, newHyphenatedName);

    const newFilename = filename.replace(/_component/g, newComponentName);
    console.log(chalk.green(`Generating file: ${newFilename}...`));

    fs.writeFileSync(`${newHyphenatedName}/${newFilename}`, result, 'utf8');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

console.log(chalk.green('Finished generating new component.'));

/* eslint-enable */
