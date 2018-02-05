module.exports = {
  'env': {
    'es6': true,
    'jest': true,
    'node': true,
    'browser': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  'plugins': ['import'],
  'extends': 'airbnb',
  'rules':{
    'no-console': 0,
    'func-names': ['error', 'never]
  }
};
