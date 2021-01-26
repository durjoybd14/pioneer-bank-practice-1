//login part

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
    const login = document.getElementById("login");
    login.style.display = "none";

    const transaction = document.getElementById("transaction");
    transaction.style.display = "block" ;


})

//deposit part

const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function(){
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const depositNumber = parseFloat(currentDeposit) ;

    const depositAmount = document.getElementById("depositAmount").value;
    const depositAdd = parseFloat(depositAmount);

    const balance = depositNumber + depositAdd ;

    document.getElementById("currentDeposit").innerText = balance ;

    document.getElementById("depositAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerText;
    currentBalanceNumber = parseFloat(currentBalance);

    totalBalance = currentBalanceNumber + depositAdd ;
    document.getElementById("currentBalance").innerText = totalBalance;

})

//withdraw part

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function(){
    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const withdrawNumber = parseFloat(currentWithdraw) ;

    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawMoney = parseFloat(withdrawAmount);

    const totalWithdraw = withdrawNumber + withdrawMoney ;

    document.getElementById("currentWithdraw").innerText = totalWithdraw ;

    document.getElementById("withdrawAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerText;
    currentBalanceNumber = parseFloat(currentBalance);

    finalBalance = currentBalanceNumber - totalWithdraw ;
    document.getElementById("currentBalance").innerText = finalBalance;

})