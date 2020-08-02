const frontLogin = document.getElementById("front-login")
frontLogin.addEventListener("click", () => {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})

const depositBtn = document.getElementById("depositButton");
depositBtn.addEventListener("click", () => {
    const depositAmount = document.getElementById("depositAmount").value;
    let depositNumber = 0;

    if (depositAmount <= 0) depositNumber = 0;
    else depositNumber = parseFloat(depositAmount);
    
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("balanceValue", depositNumber);
    document.getElementById("depositAmount").value = "";
})

const withdrawBtn = document.getElementById("withdrawButton");
withdrawBtn.addEventListener("click", () => {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    let withdrawAmountNumber = 0;

    if (withdrawAmount <= 0) withdrawAmountNumber = 0;
    else withdrawAmountNumber = parseFloat(withdrawAmount);

    updateSpanText("currentWithdraw", withdrawAmountNumber);
    const withdrawNumber = -(withdrawAmountNumber);
    updateSpanText("balanceValue", withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function updateSpanText(id, number) {
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    const totalValue = currentValueNumber + number;
    document.getElementById(id).innerText = totalValue;
}