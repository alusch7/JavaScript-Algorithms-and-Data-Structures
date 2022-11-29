function checkCashRegister(price, cash, cid) {
  let changeDue = cash-price;
  console.log(changeDue)
  const cidCopy = JSON.parse(JSON.stringify(cid));
  console.log(cidCopy);
  let change = [];
  let status = "OPEN";
  let numUsed = 0;
  let pennyFlag = false;
  function coinWorth(coinName) {
    if (coinName === "PENNY") {
      return 0.01;
    } else if (coinName === "NICKEL") {
      return 0.05;
    } else if (coinName === "DIME") {
      return 0.1;
    } else if (coinName === "QUARTER") {
      return 0.25;
    } else if (coinName === "ONE") {
      return 1;
    } else if (coinName === "FIVE") {
      return 5;
    } else if (coinName === "TEN") {
      return 10;
    } else if (coinName === "TWENTY") {
      return 20;
    } else if (coinName === "ONE HUNDRED") {
      return 100;
    } else {
      return -1;
    }
  }
  for (let i = cid.length-1; i >= 0; i--) {
    while ((changeDue >= coinWorth(cid[i][0])) && (cid[i][1] >= coinWorth(cid[i][0]))) {
      changeDue -= coinWorth(cid[i][0]);
      cid[i][1] -= coinWorth(cid[i][0]);
      numUsed += 1;
      if (cid[i][0] === "PENNY") {
        pennyFlag = true;
      }
    }
    if (pennyFlag) {
      change.push([cid[i][0], (coinWorth(cid[i][0])*numUsed)+0.01]);
    } else if (numUsed != 0) {
      change.push([cid[i][0], coinWorth(cid[i][0])*numUsed]);
    }
    numUsed = 0;
  }
  console.log(cidCopy);
  let leftInDrawer = 0;
  console.log("changeDue " + changeDue);
  for (let i = cid.length-1; i >= 0; i--) {
    //console.log(coinWorth(cid[i][0]))
    //console.log(cid[i][1])
    if (Math.floor(changeDue*100)/100 > 0) {
      while ((cid[i][1] >= coinWorth(cid[i][0])) && (coinWorth(cid[i][0]) <= changeDue)) {
        //console.log(cid[i][0]);
        cid[i][1] -= coinWorth(cid[i][0]);
        leftInDrawer += coinWorth(cid[i][0]);
      }
    } else {
      while ((cid[i][1] >= coinWorth(cid[i][0]))) {
        //console.log(cid[i][0]);
        cid[i][1] -= coinWorth(cid[i][0]);
        leftInDrawer += coinWorth(cid[i][0]);
      }
    }
  }
  console.log("floored " + Math.floor(changeDue));
  console.log("LID " + leftInDrawer);
  if (Math.floor(changeDue*100)/100 === leftInDrawer) {
    status = "CLOSED";
    change = cidCopy;
  } else if (changeDue > leftInDrawer) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else {
    status = "OPEN";
  }
   var obj = {
    status: status,
    change: change,
  };
  console.log(status);
  console.log(change);
  return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])