export default {
  markdown: {
    files: [
      '**/*.md',
      '!**/{node_modules,node_modules/**}',
      '!**/{_book,_book/**}',
    ],
  },
  tslint: {
    files: {
      top: ['gulpfile.ts', 'tasks/*.ts'],
    },
  },
};
