import { series, task } from 'gulp';
import { clean } from './tasks/clean';
import { deployGHPages } from './tasks/ghPages';
import { gitbookBuild, gitbookInstall } from './tasks/gitbook';
import { lintMarkdown } from './tasks/markdown';

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
