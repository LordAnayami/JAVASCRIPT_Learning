let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cashInput = document.getElementById("cash");
const changeDiv = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");


function checkCashRegister(price, cash, cid) {
  let needToPay = cash - price;
  console.log(needToPay)
  let money = [
    [0.01, 0], [0.05, 0], [0.1, 0], [0.25, 0], [1, 0], [5, 0], [10, 0], [20, 0], [100, 0]
  ];
  console.log(money)
  let change2 = money.map(arr => [...arr]);
 
  for (let i = 0; i < cid.length; i++) {
    money[i][1] = Math.ceil(cid[i][1] / money[i][0]);
  }
  let sumOfCash = 0;
  money.forEach(element => {
    sumOfCash += element[1] * element[0];
  });
  let isEnoughMoney = sumOfCash - needToPay >= 0;
  if (!isEnoughMoney) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  for (let j = money.length - 1; j >= 0; j--) {
    while (needToPay - money[j][0] >= 0 && money[j][1] > 0) {
        needToPay =  Math.ceil((needToPay - money[j][0]) * 1000) / 1000;
        money[j][1]--;
        change2[j][1]++;
    }
  }
  if (needToPay-0.01 > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  let cid2 = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    if (change2[i][1] > 0) {
        cid2.push([cid[i][0], change2[i][1] * money[i][0]]);
    }
  }
  let sumOfCash2 = 0;
  money.forEach(element => {
    sumOfCash2 += element[1] * element[0];
  });
  console.log(cid2)
  if (sumOfCash2-0.01 <= 0) {
    return {status: "CLOSED", change: cid};
  } else {
    return {status: "OPEN", change: cid2};
  }
}

button.addEventListener("click", () => {
  changeDiv.innerHTML= "";
  let cashMoney = parseFloat(cashInput.value);
  if(cashMoney<price){
    alert("Customer does not have enough money to purchase the item")
  }else if (cashMoney === price){
    changeDiv.innerHTML="No change due - customer paid with exact cash"
  }else{
    let results = checkCashRegister(price, cashMoney, cid);
    console.log(results)
    if (results.status === "INSUFFICIENT_FUNDS"){
      changeDiv.innerHTML="Status: INSUFFICIENT_FUNDS";
    }else{
      console.log(results.change)
      let string = `Status: ${results.status}`
      
      Object.entries(results.change).forEach(([key, value]) => {
  if (value !== 0) {
     string+=` ${value[0]}: $${value[1]}`;
  }
  changeDiv.innerHTML = string;
});
    }
  }
})