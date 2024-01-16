function loanrange(newloan) {
    document.getElementById('range-value2').innerHTML = newloan + '/-'
}

function range(newrange) {
    document.getElementById('range-value').innerHTML = newrange + ' Months'
}

function Calc() {
    var loanType = document.getElementById('loanType').value
    var amt = parseFloat(document.getElementById('range-value2').innerHTML)
    var period = parseFloat(document.getElementById('range-value').innerHTML)
    var RI = ''
    switch (loanType) {
        case 'Car':
            RI = 11
            break;
        case 'Home':
            RI = 9
            break;
        case 'Personal':
            RI = 18
            break
        default:
            alert('select any option')
            return;
    }

    let interest = ''
    let totalAmt = ''

    if (isNaN(amt) || isNaN(period)) {
        alert('Error: Please enter valid loan amount and period.');
    } else {
        interest = (amt * period * RI) / (100 * 12);
        totalAmt = amt + interest;
        document.getElementById('result').innerHTML = totalAmt;
    }
}

function clearval() {
    document.getElementById('range-value').innerHTML = ''
    document.getElementById('range-value2').innerHTML = ''
    document.getElementById('loanType').value = ''
    document.getElementById('result').innerHTML = ''
}