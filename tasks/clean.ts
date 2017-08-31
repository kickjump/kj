import * as del from 'del';

export function clean() {
  return del(['_book', 'coverage/**']);
}
