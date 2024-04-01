module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      // Add your test files here
      'src/**/*.spec.ts'
    ],
    browsers: ['Chrome'],
    singleRun: true
  });
};