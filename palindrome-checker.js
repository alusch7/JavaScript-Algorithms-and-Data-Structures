function palindrome(str) {
  let regex = (/[_\W\s]/g);
  str = str.replace(regex, "");
  str = str.toLowerCase();
  if (str.length % 2 !== 0) {
    let middleIndex = Math.floor(str.length/2);
    for (let i = 0; i < str.length; i++) {
      if (i === middleIndex) {
        console.log("true");
        return true;
      } else if (str[i] !== str[str.length-1-i]) {
        console.log("false");
        return false;
      }
    }
  } else if (str.length % 2 === 0) {
    let leftMiddle = (str.length/2)-1;
    for (let i = 0; i < str.length; i++) {
      if (i === leftMiddle) {
        if (str[i] === str[i+1]) {
          return true;
        } else {
          return false;
        }
      } else if (str[i] !== str[str.length-1-i]) {
        console.log("false");
        return false;
      }
    }
  }
  console.log(str);
  return true;
}
  
palindrome("not a palindrome")
//palindrome("A man, a plan, a canal. Panama");