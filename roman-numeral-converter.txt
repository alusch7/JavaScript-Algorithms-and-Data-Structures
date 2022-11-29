function convertToRoman(num) {
  let romanNumFormatList = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let correspInts = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  let romanNum = [];
  for (let i = correspInts.length-1; i >= 0; i--) {
    while (num - correspInts[i] >= 0) {
      num -= correspInts[i];
      romanNum.push(romanNumFormatList[i]);
    }
  }
  romanNum = romanNum.join("");
  return romanNum;
}

convertToRoman(36);