var webp = require('webp-converter');
const path = require('path');

const inputImageFolder = './images/input';
const fs = require('fs');

// Lê todas as imagens dentro da pasta images/input e as converte pro formato webp 
fs.readdirSync(inputImageFolder).forEach(file => {
  const inputFilePath = './images/input/' + file
  const outputFilePath = './images/webp/' + path.parse(file).name + '.webp'

  //pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
  //pass option(read documentation for options)

  //cwebp(input,output,option,result_callback)
  webp.cwebp(inputFilePath, outputFilePath, "-q 80", function (status, error) {
    //if conversion successful status will be '100'
    //if conversion fails status will be '101'
    status === '101' && console.error(status, error);
  });
});


