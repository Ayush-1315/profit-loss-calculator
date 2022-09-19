var costPrice = document.querySelector("#cost-price");
var stocks = document.querySelector("#stocks");
var currentPrice = document.querySelector("#current-price");
var calculate = document.querySelector('input[type="button"]');
var showAnswer = document.querySelector(".answer");
calculate.addEventListener("click", calculateProfitAndLoss);

function calculateProfitAndLoss() {
  let result = 0,
    cP = parseFloat(costPrice.value),
    sP = parseFloat(currentPrice.value),
    resultPercent = 0,
    quantity = parseInt(stocks.value);
  if (isNaN(cP)===true || isNaN(sP)===true|| isNaN(quantity)===true) {
    alert('Please fill out all Fields');
  } 
  else {
    if (cP > sP) {
      result = (cP - sP) * quantity;
      resultPercent = (result / (cP * quantity)) * 100;
      showAnswer.style.color = "#F13C20";
      showAnswer.innerHTML =
        "Oh god 😰! You are at a loss of " +
        result +
        " . And Loss percent: " +
        resultPercent.toFixed(2);
    } else if (cP < sP) {
      result = (sP - cP) * quantity;
      resultPercent = (result / (cP * quantity)) * 100;
      showAnswer.style.color = "#5CDB95";
      showAnswer.innerHTML =
        "Going good 😎! You are at a profit of " +
        result +
        " . And Profit percent: " +
        resultPercent.toFixed(2);
    } else {
      showAnswer.style.color = "#379683";
      showAnswer.innerHTML =
        "No change in prices...Keep holding your stocks 😕";
    }
  }
}
