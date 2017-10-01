declare module 'gh-pages' {
  declare namespace ghPages {
    interface Config {
      src?: string;
      branch?: string;
    }
    declare function publish(
      basePath: string,
      config: Config,
      callback: (err?: {}) => void
    );
    declare function publish(basePath: string, callback: (err?: {}) => void);
  }
  export = ghPages;
}
