function calc() {

    let amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest_rate').value;
    let months = document.getElementById('months').value;
    let salary = document.getElementById('salary').value;


    var sum = (amount * (interest_rate * 1)) / months;

    document.getElementById('payment').innerHTML =  sum.toFixed(2) + "₪ =  החזר חודשי ";


    if (salary > sum) {
        document.getElementById('payment1').innerHTML = "הסכום נמוך, הינך יכולה לשלם אותו"
    } else {
        document.getElementById('payment1').innerHTML = "הסכום גבוה, תנסה להקטין את הקרן או שתקטין את התקופה בחודשים"
    }
}



function checkInput(input) {
    let value = Number(input.value)

    if (isNaN(value) || Number(input.value) < 0) {
        input.style.border = '1px solid red'
    } else {
        input.style.border = ''
    }

}