//모듈 불러오기
import gulp        from  "gulp";
import corejs      from  "core-js";
import mkdir       from  "mk-dirs";    // 폴더생성
import writeFile   from  "write";      // 파일생성
import filedel     from  "del";
import gulpCached  from  "gulp-cached";
import gulpWatch   from  "gulp-watch";
import gulpScss    from  "gulp-sass";
import babel       from  "gulp-babel";
import gulpSync    from  "browser-sync";
const  gulpBrowser = gulpSync.create();


// ================================
/*영역, 위치, 파일 변수작성*/
const url = {
	module : './node_modules/',
	before : "./public/source/",
	dest   : './public/assest/'
}

// ================================
/* folder 생성하기 */
async function FnmakeDir(){
	Promise.all([
	  mkdir('public'),
	  mkdir(url.before),
	  mkdir(url.before + 'html'),
	  mkdir(url.before + 'scss/src'),
	  mkdir(url.before + 'scss/base'),
	  mkdir(url.before + 'img'),
	  mkdir(url.before + 'js/base'),
	  mkdir(url.before + 'js/src'),
	  mkdir(url.before + 'media/audio'),
	  mkdir(url.before + 'media/video'),
	  mkdir(url.before + 'font'),
	  mkdir(url.before + 'IE')
	])
  }

/* 기본 파일 생성하기 */
async function Fnmakefile(){
	writeFile.sync(url.before+'index.html',`
  <!DOCTYPE html>\n<!-- index.html --><html lang="ko-KR">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n  <script>\n    window.location = "./html/main.html";\n  </script>\n</head>\n<body>  \n</body>\n</html>`); 

	writeFile.sync(url.before+'html/main.html',`
	<!DOCTYPE html> \n <!--main.html--> \n <html lang = "ko-KR"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport"	content="width=device-width, initial-scale=1.0"> \n <link rel="stylesheet"	href="../font/fontawesome/css/all.css"> \n <link rel="stylesheet"	href="../css/base/normalize.css"> \n <link rel="stylesheet"	href="../css/src/main.css"> \n\ <link rel="shortcut icon"	href="favicon.png" type="image/png"> \n <link rel="apple-touch-icon" href="favicon.png"> \n <title> site name </title>\n</head> \n <body> \n <!--layout--> \n   <div id="wrap"> \n     <header id="headBox"> \n       <h1> <a href="#"> sitename </a></h1> \n       </header>\n    <main id="mainBox">\n      <h2>content</h2> \n     </main>\n    <footer id="footBox">\n      <h2>company infomation</h2> \n     </footer>\n  </div> \n <!--script--> \n <script src="../js/base/jquery.min.js"> </script>\n  <script src="../js/base/jquery-ui.min.js"></script>\n  <script src="../js/src/main.js"></script>\n</body>\n</html>\n`);

	writeFile.sync(url.before+'scss/base/_reset.scss',`
	@charset "UTF-8";html,body{width:100%; height:100%; margin:0; padding:0; color:#333; font-family:"noto sans", "Gothic A1", sans-serif;}h1,h2,h3,h4,h5,h6, ul,li,ol,dl,dt,dd, p,pre,img{margin: 0; padding: 0; border:0;} ul,ol,li{list-style:none;}table, thead, tbody, tfoot, tr, th, td{ margin:0; padding:0; border-spacing:0; border-collapse:collapse; border:1px solid #777;}          a{color:#777; text-decoration:none;}a:hover{color:#f07;}a:focus{outline:2px solid #f06;}abbr{text-decoration:none; text-transform:uppercase;} button{border:0; cursor:pointer; background-color:transparent; border:1px solid #f06;}button:hover{background-color:#fa0;}button:focus{outline:2px solid #f06;}hr{margin:0; padding:0; border-bottom:1px solid #f06;} main, header, footer, aside, nav, section, article, figure, figcaption{display:block;}form, fieldset, legend{margin:0; padding:0; border:0;}legend{position:absolute; width:0; height:0; overflow:hidden;}input{box-sizing:border-box; text-indent:0.5rem; cursor: pointer;}button{border:0; background-color:#07f; color:#fff; cursor:pointer;}select, text-area{box-sizing:border-box;}input[type="text"]:hover,   input[type="password"]:hover,input[type="search"]:hover, input[type="url"]:hover,input[type="email"]:hover,  input[type="tel"]:hover,text-area:hover, select:hover { background-color: #fdc;}input[type="text"]:focus,   input[type="password"]:focus,input[type="search"]:focus, input[type="url"]:focus,input[type="email"]:focus,  input[type="tel"]:focus,text-area:focus, select:focus { background-color: #fcd;}`);

	writeFile.sync(url.before+'scss/base/_common.scss',`
	@charset"UTF-8";.hidden,.hidden_wrap a>span{display:block;width:0;height:0;position:absolute;overflow:hidden}.clearfix:after,.clearfix::after{content:"";display:block;width:0;height:0;clear:both}.float_array{width:100%;height:100%}.float_array>li{float:left;height:100%}.float_array>li:last-child{margin-right:0}#wrap{width:100%;height:100%;margin:auto}`);
	
	writeFile.sync(url.before+'scss/base/normalize.scss',`@import "reset"; @import "common";`);
	
	writeFile.sync(url.before+'scss/src/main.scss',`@charset "utf-8"; /* main.css */`);

	writeFile.sync(url.before+'js/src/main.js', `// main.js \n (function($){\n //jquery start \n})(jQuery);`);
  }


  /* jquery 불러오기 */
  function FnJquery(){
	  gulp.src([url.module + 'jquery/dist/jquery.min.js', url.module + 'jqueryui/jquery-ui.min.js', ])
	      .pipe(gulp.dest(url.before+'js/base/'));
	}

	/* fontawesome 불러오기(fortawesome 으로 이름에 오타가 있음) */
	function FnFontAwesome(){
		gulp.src(url.module + '@fortawesome/fontawesome-free/**')
		    .pipe(gulp.dest(url.before+'font/fontawesome/'));
	}
  
// ================================

/*function files*/
/*SCSS 기능 작성하기*/
const scssOption = {
// 컴파일방법 : nested, expanded, compact, compressed
// 들여쓰기 방법: tab, space
// 들여쓰기에 대한 양(간격)
// 소수점 계산시 몇자리가지 계산?
// 컴파일시 scss의 파일위치를 주석으로 처리 유무
	outputStyle:'compact',
	indentType:'tab',
	indentWidth:2,
	percision:6,
	sourceComment:false
};

async function FnScss(){
 gulp.src(url.before+'scss/**/*.scss')
 	 .pipe(gulpCached('scssFiles'))
 	 .pipe(gulpScss(scssOption).on('error', gulpScss.logError))
 	 .pipe(gulp.dest(url.before+'css/'))
	 .pipe( gulpBrowser.reload({stream:true}) );
}

function FnHtml(){
	gulp.src(url.before+'**/*.html')
		.pipe(gulpCached('htmlFiles'))
		.pipe(gulpBrowser.reload({stream:true}));
}

function FnJs(){
	gulp.src(url.before+'js/**/*.js')
		.pipe(gulpCached('jsFiles'))
		.pipe(babel())
		.pipe(gulpBrowser.reload({stream:true}));
}

function FnCss(){
	gulp.src(url.before+'css/**/*.css')
		.pipe(gulpCached('cssFiles'))
		.pipe(gulpBrowser.reload({stream:true}));
}

/*browser-sync 기능 작성하기*/
function FnSync(){
	gulpBrowser.init({
		server:{ baseDir:url.before }
	});
}

/*실시간 감지 기능 작성하기*/
function FnWatch(){
	gulpWatch(url.before+'**/*.html', FnHtml);
	gulpWatch(url.before+'scss/**/*.scss', FnScss);
	gulpWatch(url.before+'css/**/*.css', FnCss);
	gulpWatch(url.before+'js/**/*.js', FnJs);
}
// ================================
/* 삭제하기 */
function FnAlldel(){
	return filedel(['./public/']);
};

function Fndel(){
	return filedel(['./public/dest/**', '!public']);
}

// ================================
/*외부에서 사용하기(내보내기)*/
export const makedir = FnmakeDir;
export const makefile = gulp.series(FnmakeDir, gulp.parallel(Fnmakefile, FnJquery, FnFontAwesome));
export const scss = FnScss; //gulp scss
export const server = FnSync; //gulp server
export const clean = FnAlldel();
export const destdell = Fndel();


const myWeb = gulp.series(FnScss, gulp.parallel(FnSync, FnWatch));
export default myWeb;

