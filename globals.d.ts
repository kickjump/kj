declare module 'markdownlint' {
  interface Strings {
    [key: string]: string;
  }

  interface Config {
    default?: boolean;
    // tslint:disable:next-line no-any
    [key: string]: any;
  }

  interface Options {
    files?: string[];
    strings?: Strings;
    config?: Config;
  }

  type Callback = (error?: object, result?: object) => void;
  function markdownlint(options: Options, callback: Callback): void;
  declare namespace markdownlint {

  }
  export = markdownlint;
}

declare module '*.json' {
  // tslint:disable:next-line no-any
  const value: any;
  export default value;
}

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
      cb: (err: Error, path: string) => void,
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

declare module 'gh-pages' {
  declare namespace ghPages {
    interface Config {
      src?: string;
      branch?: string;
    }
    declare function publish(
      basePath: string,
      config: Config,
      callback: (err?: any) => void,
    );
    declare function publish(basePath: string, callback: (err?: any) => void);
  }
  export = ghPages;
}
