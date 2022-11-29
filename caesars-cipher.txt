function rot13(str) {
  let normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rotshifted = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  str = str.split(/\s/);
  console.log(str);
  let alphaCheck = (/[A-Za-z]/);
  for (let i = 0; i < str.length; i++) {
    let word = [];
    for (let j = 0; j < str[i].length; j++) {
      if (alphaCheck.test(str[i][j])) {
        let normalIndex = normal.indexOf(str[i][j]);
        let rotshiftedChar = rotshifted[normalIndex];
        word.push(rotshiftedChar);
      } else {
        word.push(str[i][j]);
      }
    }
    word = word.join("");
    str[i] = word;
  }
  str = str.join(" ");
  console.log(str);
  return str;
}

//rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
rot13("SERR PBQR PNZC.");