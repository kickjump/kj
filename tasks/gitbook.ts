import { spawn } from 'child_process';
import { whichSync } from './utils';

export function gitbookBuild() {
  const cmd: string = whichSync('gitbook');
  return spawn(cmd, ['build']);
}

export function gitbookInstall() {
  const cmd: string = whichSync('gitbook');
  return spawn(cmd, ['install']);
}
