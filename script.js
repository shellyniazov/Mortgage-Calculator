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




function checkInput1(input) {
    let value = Number(input.target.value)

    if (isNaN(value) || Number(input.target.value) < 0) {
        amount.style.border = '1px solid red'
    } else {
        amount.style.border = ''
    }

}

amount.addEventListener('change', checkInput1);


function checkInput2(input) {
    let value = Number(input.target.value)

    if (isNaN(value) || Number(input.target.value) < 0) {
        interest_rate.style.border = '1px solid red'
    } else {
        interest_rate.style.border = ''
    }

}

interest_rate.addEventListener('change', checkInput2);


function checkInput3(input) {
    let value = Number(input.target.value)

    if (isNaN(value) || Number(input.target.value) < 0) {
        months.style.border = '1px solid red'
    } else {
        months.style.border = ''
    }

}

months.addEventListener('change', checkInput3);


function checkInput4(input) {
    let value = Number(input.target.value)

    if (isNaN(value) || Number(input.target.value) < 0) {
        salary.style.border = '1px solid red'
    } else {
        salary.style.border = ''
    }

}

salary.addEventListener('change', checkInput4);