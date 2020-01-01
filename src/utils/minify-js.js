const UglifyJS = require("uglify-js");

module.exports = function(code) {
  let minified = UglifyJS.minify(code);
  if( minified.error ) {
      console.log("UglifyJS error: ", minified.error);
      return code;
  }
  return minified.code;
}
