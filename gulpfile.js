const gulp = require('gulp');
const run = require('gulp-run');

function defaultTask(cb) {
  // place code for your default task here
  run('git -C ./public add .').exec();
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
  run('git -C ./public commit -m "Better msg here"').exec();
  // Replace 'node-sleep' module
  // see https://github.com/erikdubbelboer/node-sleep
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
  run('git -C ./public push', verbosity = 3).exec();
  cb();
};

exports.default = defaultTask
