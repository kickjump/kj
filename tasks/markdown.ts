import { src } from 'gulp';
import { colors, log, PluginError } from 'gulp-util';
import * as markdownlint from 'markdownlint';
import * as through2 from 'through2';
import * as markdownlintConfig from '../.markdownlint.json';
import config from './config';

export function lintMarkdown() {
  let failed = false;
  const messages: string[] = [];
  return src(config.markdown.files, {
    read: false,
  })
    .pipe(
      through2.obj((file, env, next) => {
        markdownlint(
          { files: [file.relative], config: markdownlintConfig },
          (error, result) => {
            const resultString = (result || '').toString();
            if (resultString) {
              failed = true;
              messages.push(`./${resultString.replace(/: /, ':')}`);
            }

            next(error, file);
          },
        );
      }),
    )
    .on('end', () => {
      if (failed) {
        messages.forEach(msg => {
          log(colors.red(msg));
        });
        throw new PluginError({
          plugin: 'lint:markdown',
          message: `${colors.red.bold(
            'Please fix the errors in your *.md file(s):',
          )} [ ${colors.blue.italic(
            messages
              .map(msg => msg.split(':').slice(0, 2).join(':'))
              .join(', '),
          )} ]`,
          showProperties: false,
        });
      }
    });
}
