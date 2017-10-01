import { series, task } from 'gulp';
import { clean } from './tasks/clean';
import { deployGHPages } from './tasks/ghPages';
import { gitbookBuild, gitbookInstall } from './tasks/gitbook';
import { lintMarkdown } from './tasks/markdown';
import { runTSLint } from './tasks/tslint';
import { runTypeScript } from './tasks/typescript';

task('lint:markdown', series(lintMarkdown));
const lintMarkdownTask = task('lint:markdown');
lintMarkdownTask.description = 'Lint markdown files throughout the project';

task('gitbook', series(gitbookInstall, gitbookBuild));
const gitbookTask = task('gitbook');
gitbookTask.description = 'Build and install gitbook';

task('ghpages', series(deployGHPages));
const ghPagesTask = task('ghpages');
ghPagesTask.description = 'Deploy GitHub Pages';

task('deploy:docs', series(gitbookTask, ghPagesTask));
const deployDocsTask = task('deploy:docs');
deployDocsTask.description = 'Deploy kj documentation';

task('clean', series(clean));
const cleanTask = task('clean');
cleanTask.description = 'Cleans the repo';

task('lint:ts', series(runTSLint()));
const tslintTask = task('lint:ts');
tslintTask.description = 'Lint all the TypeScript files';

task('lint', series('lint:ts', 'lint:markdown'));
const lintTask = task('lint');
lintTask.description = 'Run linting across all packages';

task('prepush', series('lint'));

task('typescript', series(runTypeScript));
const typescriptTask = task('typescript');
typescriptTask.description = 'Run Typescript across all packages.';
