import { series, task } from 'gulp';
import { lintMarkdown } from './tasks/markdown';

task('lint:markdown', series(lintMarkdown));
const lintMarkdownTask = task('lint:markdown');
lintMarkdownTask.description = 'Lint markdown files throughout the project';
