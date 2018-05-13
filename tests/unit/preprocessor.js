const tsc = require('typescript');
const tsConfig = require('../../tsconfig.json');

// tests failed with module = "esnext"
tsConfig.compilerOptions.module = "commonjs"

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  },
};
