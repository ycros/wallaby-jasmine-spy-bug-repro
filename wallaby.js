module.exports = function(w) {
  return {
    files: ['**/*.js', { pattern: '**/*[Ss]pec.js', ignore: true }],

    tests: ['**/*[Ss]pec.js'],

    testFramework: 'jasmine',

    env: {
      type: 'node'
    }
  };
};
