
//打印你好
//var gulp = require('gulp');
//	
//	gulp.task('default', function() {
//	  // 将你的默认的任务代码放在这
//	  
//	  console.log('hello gulp');
//	});
	
           		var gulp = require('gulp');
//	  压缩js
// 
//	 1.安装压缩js的模块  cnpm install gulp gulp-uglify --save--dev
//	 
//	 2.找文档
	 
	 			
				var uglify = require('gulp-uglify');
				gulp.task('minifyJs',function(){
					//执行的操作
					gulp.src('js/*')  //要压缩的目录
					.pipe(uglify())   //执行压缩
					.pipe(gulp.dest('dist/js'));   //输出的目录	
					
				})
				
			// 获取 cleancss 模块（用于压缩 CSS）
			// cnpm install gulp-clean-css --save--dev
			var cleanCSS = require('gulp-clean-css');
			// 压缩 css 文件
			// 在命令行使用 gulp csscompress 启动此任务
			gulp.task('csscompress', function() {
			    // 1. 找到文件
			  return  gulp.src('css/*.css')
			    // 2. 压缩文件
			        .pipe(cleanCSS())
			        // 3. 另存压缩后的文件
			        .pipe(gulp.dest('dist/css'));
			});
			
			//压缩图片
			//cnpm install gulp-imagemin –save-dev
			var imagemin = require('gulp-imagemin');
			
			gulp.task('testImagemin', function () {
			    gulp.src('images/*.{png,jpg,gif,ico}')
			        .pipe(imagemin())
			        .pipe(gulp.dest('dist/images'));
			});

			//gulp-imagemin其他参数
			var	imagemin = require('gulp-imagemin');
				
				gulp.task('testImagemin', function () {
				    gulp.src('images/*.{png,jpg,gif,ico}')
				        .pipe(imagemin({
				            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
				            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
				            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
				            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
				        }))
				        .pipe(gulp.dest('dist/images'));
			});
			
			//压缩Html
			//cnpm install gulp-htmlmin --save--dev 
				var  htmlmin = require('gulp-htmlmin');

				gulp.task('testHtmlmin', function () {
				    var options = {
				        removeComments: true,//清除HTML注释
				        collapseWhitespace: true,//压缩HTML
				        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
				        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
				        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
				        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
				        minifyJS: true,//压缩页面JS
				        minifyCSS: true//压缩页面CSS
				    };
				    gulp.src('*.html')
				        .pipe(htmlmin(options))
				        .pipe(gulp.dest('dist/'));
				});
				
				//一次执行多个
//				var uglify = require('gulp-uglify');	//压缩JS
//				var cleanCSS = require('gulp-clean-css');	//压缩css
//				var imagemin = require('gulp-imagemin');	//压缩图片
//				var  htmlmin = require('gulp-htmlmin');		//压缩Html
				gulp.task('default',['minifyJs','csscompress','testImagemin','testHtmlmin'], function() {
				 
				  
				  console.log('hello gulp');
				});	
				
				
				//处理兼容前缀问题
				//cnpm install gulp-autoprefixer --save--dev
				
			    var autoprefixer = require('gulp-autoprefixer');
			 
				gulp.task('testAutoFx', function () {
				    gulp.src('css/style.css')
				        .pipe(autoprefixer({
				            browsers: ['last 2 versions', 'Android >= 4.0','> 5%'],
				            cascade: true, //是否美化属性值 默认：true 像这样：
				            //-webkit-transform: rotate(45deg);
				            //        transform: rotate(45deg);
				            remove:true //是否去掉不必要的前缀 默认：true 
				        }))
				        .pipe(gulp.dest('dist/css'));
				});
				
				//重命名
				var rename = require('gulp-rename') 
				gulp.task('uglify', function () {
				    gulp.src(['js/fn.js'])  //这里如果是 有很多js文件 ['js/*.js']
				    .pipe(uglify())
				    .pipe(rename({suffix: '_lin'}))  // 上面如果是 ['js/*.js'],要把所有的文件都添加.min.js后缀
				    .pipe(gulp.dest('dist/js'));
				});
				

					//合并
					var concat = require('gulp-concat');

					gulp.task("taskName",function(){
					    // 把1.js和2.js合并为main.js，输出到dest/js目录下
					    gulp.src('js/*.js')
					    .pipe(concat('main.js'))
					    .pipe(gulp.dest('dist/js'));
					})
						
						
					
					//先处理前缀    压缩css  合并  重命名
					
					var autoprefixer = require('gulp-autoprefixer');	//前缀
					var rename = require("gulp-rename");	   //重命名
					var cleanCSS = require('gulp-clean-css');	//压缩css
					
					var concat = require('gulp-concat');  //合并
					
					gulp.task('woshishei', function () {
									    gulp.src('css/*.css')
									        .pipe(autoprefixer({
									            browsers: ['last 2 versions', 'Android >= 4.0','> 5%'],
									            cascade: true, //是否美化属性值 默认：true 像这样：
									            //-webkit-transform: rotate(45deg);
									            //        transform: rotate(45deg);
									            remove:true //是否去掉不必要的前缀 默认：true 
									        }))
									        
									        .pipe(cleanCSS())
									        .pipe(concat('w.css'))
									        .pipe( rename('w.css'))

									        .pipe(gulp.dest('dist/css'));
									});
									
								
								
								 	
								 // 用来设置开启服务器环境的任务
								 //cnpm install --save-dev gulp-connect --save--dev
//								gulp.task('server', function() {
//								    connect.server({	    	
//								        port: 8000, // 更改端口号的  直接放上你要的端口号	       
//								        livereload: true
//								    });
//								});
								
								gulp.task('watchFile', ['csscompress', 'minifyJs'], function() {

								    gulp.watch('js/*.js', ['minifyJs']);
								    gulp.watch('css/*.css', ['csscompress'])
								
								});
								
									
//							//监听文件改变的任务  只要文件改变就会重新调用压缩css的任务
//							gulp.task('watchFile', ['csstask','server'], function() {
//							
//								//检测到css文件的变化  执行压缩的任务
//							    gulp.watch('css/*.css', ['csstask']); 
//							    
//							    //gulp.watch('js/*.js', ['jstask']); 
//							
//							});
						
						