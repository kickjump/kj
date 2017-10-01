import { dest, src } from 'gulp';
import * as ts from 'gulp-typescript';
import { noop } from 'lodash';
import * as merge from 'merge2';
import { readdir, stat } from 'mz/fs';
import { join, resolve } from 'path';
import config from './config';

/**
 * Asynchronously check that a path exists and is a directory.
 *
 * @param {String} path
 * @return {Boolean}
 * @api public
 */
export async function isDirectory(path: string) {
  try {
    const fileStat = await stat(path);
    return fileStat.isFile();
  } catch (e) {
    return false;
  }
}

export function runTypeScript(done: (error?: Error) => void) {
  const tsProject = ts.createProject(resolve(__dirname, 'tsconfig.json'));

  readdir(join(config.base, '@kj'))
    .then(packages => {
      console.log(packages);
    })
    .then(() => {
      merge(
        src('@kj/**/src/**/*.ts?(x)')
          .pipe(ts())
          .pipe(dest('.@kj/build'))
      )
        .on('data', noop)
        .on('', done);
    });
}
