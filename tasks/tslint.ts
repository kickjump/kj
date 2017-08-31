import { src } from 'gulp';
import tslint, { PluginOptions } from 'gulp-tslint';
import { Linter } from 'tslint';
import { Program } from 'typescript';
import config from './config';

let program: Program;

export function runTSLint(opts: PluginOptions = {}) {
  return () => {
    if (!program) {
      program = Linter.createProgram('./tsconfig.json');
    }
    return src(config.tslint.files.top)
      .pipe(
        tslint({
          formatter: 'stylish',
          program,
          ...opts,
        }),
      )
      .pipe(
        tslint.report({
          summarizeFailureOutput: true,
        }),
      );
  };
}
