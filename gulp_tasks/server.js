'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const path = require('path');
const conf = require('../conf/gulp.conf');

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: path.join(process.cwd(), conf.paths.tmp),
        ext: 'js',
        ignore: [
            'gulpfile.js',
            'node_modules/',
            'typings/',
            'gulp_tasks/'
        ],
        env: {
            'NODE_ENV': 'development',
            'DEBUG': 'appname:*'
        }
    })
        .on('start', () => {
            // ensure start only got called once
            if (!called) { 
                cb();
            }
            called = true;
        })
        .on('restart', () => {
            //console.log('bs restarted');
        });
});
