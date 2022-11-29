function telephoneCheck(str) {
  let regex = (/^([1])?([\s])?(([\(]\d{3}[\)])|(\d{3}))([\s-])?(\d{3})([\s-])?(\d{4})$/)
  if (regex.test(str)) {
    console.log("true");
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");