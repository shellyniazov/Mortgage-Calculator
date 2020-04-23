function calc() {


    let amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest_rate').value;
    let months = document.getElementById('months').value;
    let salary = document.getElementById('salary').value;



    var sum = (amount * (interest_rate * 1)) / months;

    document.getElementById('payment').innerHTML = sum.toFixed(2) + "₪ =  החזר חודשי ";


    if (salary > sum) {
        document.getElementById('payment1').innerHTML = "הסכום נמוך, הינך יכולה לשלם אותו"
    } else {
        document.getElementById('payment1').innerHTML = "הסכום גבוה, תנסה להקטין את הקרן או שתקטין את התקופה בחודשים"
    }
}

let input = [
    'amount',
    'interest_rate',
    'months',
    'salary'
]

let check = document.getElementsByTagName('input')

function checkInput(input) {
    let value = Number(input.target.value)

    if (isNaN(value) || Number(input.target.value) < 0) {
        input.target.style.border = '1px solid red'
    } else {
        input.target.style.border = ''
    }

}

for (let i = 0; i < input.length; i++) {
    check[i].addEventListener('change', checkInput)
}