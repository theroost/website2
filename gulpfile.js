var gulp = require('gulp'),
    $    = require('gulp-load-plugins')()
    ;

gulp.task('less', function() {
    return gulp.src('less/color.less')
        .pipe($.less())
        .pipe(gulp.dest('2015/build'))
        ;
});

gulp.task('css', ['less'], function() {
    var input = [
            'bootstrap/css/bootstrap.css',
            'stylesheets/hiding-nav.css',
            'stylesheets/menu-transition.css',
            'stylesheets/parallax-layers.css',
            'stylesheets/home-06.css',
            'stylesheets/slimmenu.css',
            'stylesheets/venobox.css',
            'stylesheets/main.css',
            'stylesheets/main-responsive.css',
            'stylesheets/main-retina.css',
            '2015/build/color.css',
            '2015/style.css'
        ];

    return gulp.src(input)
        .pipe($.concat('style.css'))
        .pipe($.minifyCss())
        .pipe(gulp.dest('2015/build'))
        ;
});

gulp.task('js', function () {
    var input = [
        'bootstrap/js/jquery.js',
        'javascripts/imagesloaded.pkgd.min.js',
        'javascripts/jquery.easing.1.3.js',
        'bootstrap/js/bootstrap.js',
        'javascripts/device.min.js',
        'javascripts/modernizr.js',
        'javascripts/retina.js',
        'javascripts/responsive-nav.js',
        'javascripts/navi-slidedown.js',
        'javascripts/equalheights.js',
        'javascripts/venobox.min.js',
        'javascripts/venobox-init.js',
        'javascripts/equalheights-init.js',
        'javascripts/main.js',
        '2015/members.js',
        '2015/ejs.min.js',
        '2015/main.js',
    ];
    var output = '2015/build';

    return gulp.src(input)
        .pipe($.concat('main.js', {newLine: ';'}))
        .pipe(gulp.dest(output))
        ;
});

gulp.task('watch', function () {
    gulp.watch(['javascripts/*.js', '2015/*.js'], ['js']);
    gulp.watch(['stylesheets/*.css', '2015/*.css'], ['css']);
});

gulp.task('default', ['less', 'css', 'js']);