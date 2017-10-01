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
