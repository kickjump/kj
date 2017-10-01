declare module 'npm-which' {
  interface Options {
    /**
     * If you wish to use something other than process.env (the default)
     * @default process.env
     * @type {string}
     * @memberof Options
     */
    env?: string;

    /**
     * To supply the cwd as a named argument. Mainly for semi-backwards compatibility with npm-which 1.0.0.
     *
     * @type {string}
     * @memberof Options
     */
    cwd?: string;
  }

  function npmWhich(cwd: string): Which;

  interface Which {
    (cmd: string, cb: (err: Error, path: string) => void): void;
    (
      cmd: string,
      options: Options,
      cb: (err: Error, path: string) => void
    ): void;
    sync(cmd: string): string;
    sync(cmd: string, options: Options);
  }

  declare namespace npmWhich {
    declare function sync(cmd: string): string;
    declare function sync(cmd: string, options: Options);
  }
  export = npmWhich;
}
