module.exports = {
  extends: '../.eslintrc.js',
  env: {
    mocha: true
  },
  globals: {
    sinon: true,
    expect: true,
    should: true,
    testTempFolder: true,
    testPath: true,
    createFilePath: true
  },
  rules: {
    'no-unused-expressions': 0
  }
}
