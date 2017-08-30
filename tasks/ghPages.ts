import * as ghPages from 'gh-pages';

export function deployGHPages(done: (error?: Error) => void) {
  ghPages.publish('_book', done);
}
