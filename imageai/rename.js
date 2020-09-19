const fs = require('fs')
const path = require('path')
const readFiles = (dirname, onFileContent, onError) => {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + `/${filename}`, function(err, content) {
        if (err) {
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

readFiles(path.resolve('C:/Users/chuva/Downloads/tf2/validate/annotations'), function(name, content) {
  fs.writeFileSync(`2_${name}`, content)
  fs.writeFileSync(`3_${name}`, content)
  fs.writeFileSync(`4_${name}`, content)
})