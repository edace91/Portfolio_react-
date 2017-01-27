var gulp = require('gulp');
var imagemin = require('gulp-imagemin');


gulp.task('imagemin', function(){

	var imgSrc = './src/img/*';
	var imgDst = './public/images';


	return gulp.src(imgSrc)

		.pipe(imagemin())
		.pipe(gulp.dest(imgDst))
});





gulp.task('watch', function(){

	gulp.watch('src/img/*', ['imagemin'])
});






gulp.task('default', ['watch', 'imagemin']);