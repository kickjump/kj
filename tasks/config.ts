import { resolve } from 'path';

export default {
  base: resolve(__dirname, '..'),
  markdown: {
    files: [
      '**/*.md',
      '!**/{node_modules,node_modules/**}',
      '!**/{_book,_book/**}'
    ]
  },
  tslint: {
    files: {
      top: [
        'gulpfile.ts',
        'tasks/*.ts',
        '@kj/**/*.ts?(x)',
        '!**/{node_modules,node_modules/**}'
      ]
    }
  }
};
