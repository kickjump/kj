import * as npmWhich from 'npm-which';

export const which = (cmd: string) => {
  return new Promise<string>((resolve, reject) => {
    const w = npmWhich(process.cwd());
    w(cmd, (err, path) => {
      if (err) {
        reject(err);
      }
      resolve(path);
    });
  });
};

export const whichSync = (cmd: string) => {
  const { sync } = npmWhich(process.cwd());
  return sync(cmd);
};
