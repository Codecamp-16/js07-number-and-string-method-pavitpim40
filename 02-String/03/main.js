// Function Expression
const ucFirst = function (str) {
  // "codecamP" => "C" + "odecamP" ==> "CodecamP"

  // #1 : Using slice method to copy string
  // return str[0].toUpperCase() + str.slice(1)

  // #2 : Loop for Manipulate and Copy String
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i == 0) resultStr += str[i].toUpperCase();
    else resultStr += str[i];
  }
  return resultStr;
};

ucFirst('asdadasfasfasf');
ucFirst('bbbzxczczasdad');
