// gulpfile.babel.js
// 모듈불러오기 ---------------------------
import gulp      from "gulp";       // 기본 걸프모듈
import corejs    from "core-js";    // async 기능수행
import mkdir     from "mk-dirs";    // 폴더생성
import writeFile from "write";      // 파일삽입 및 내용
import scss      from "gulp-sass";  // scss  호출
import sync      from "browser-sync"; // browser-sync 호출
const browserSync = sync.create();  // 실제사용할 browser-sync


// 기본 폴더위치 설정----------------------
const url = {
  module:'./node_modules/',
  source:'./public/source/',
  dest  :'./public/assest/'
};

//  폴더생성 -------------------------
async function makeDir(){
  Promise.all([
    mkdir('public'),
    mkdir(url.source),
    mkdir(url.source + 'html'),
    mkdir(url.source + 'scss/src'),
    mkdir(url.source + 'scss/base'),
    mkdir(url.source + 'img'),
    mkdir(url.source + 'js/base'),
    mkdir(url.source + 'js/src'),
    mkdir(url.source + 'media/audio'),
    mkdir(url.source + 'media/video'),
    mkdir(url.source + 'fonts'),
    mkdir(url.source + 'IE')
  ])
}
// 파일생성 -------------------------------
async function makefile(){
  writeFile.sync(url.source+'index.html',`
<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n  <script>\n    window.location = "./html/main.html";\n  </script>\n</head>\n<body>  \n</body>\n</html>`); 
  // writeFile.sync(url.source+'html/main.html');
  // writeFile.sync(url.source+'scss/base/reset.scss');
  // writeFile.sync(url.source+'scss/base/common.scss');
}
// ---------------------------------------------------
// scss 기능수행
// 1. scss옵션설정
const scssOption = {
  // 컴파일방법 : nested, expanded, compact, compressed
  outputStyle:'compact',
  // 들여쓰기 방법: tab, space
  indentType:'space',
  // 들여쓰기에 대한 양(간격)
  indentWidth:2,
  // 소수점 계산시 몇자리가지 계산?
  percision:6,
  // 컴파일시 scss의 파일위치를 주석으로 처리 유무
  sourceComments:false
};

// node-sass --watch --output-style compact scss --output css
async function convertCss(){
  gulp.src(url.source+'scss/**/*.scss')
      .pipe( scss(scssOption).on('error', scss.logError) )
      .pipe( gulp.dest(url.source+'css/') )
      .pipe( browserSync.reload({stream:true}) )
}

function watch(){
  convertCss();
  gulp.watch(url.source+'scss/**/*.scss', convertCss);
}

// browser-sync 실행 --------------------------------
function server(){
  browserSync.init({
    server:{baseDir:url.source}
  });
}

// ---------------------------------------------------
// 걸프 외부에서 실행 명령어
export const make = gulp.parallel(makeDir);
export const mkfile = gulp.series(makefile);
const first = gulp.series(makeDir,gulp.parallel(makefile));
export const conScss = watch;

const gulpServer = gulp.parallel(server, conScss, watch);
export default gulpServer;
       