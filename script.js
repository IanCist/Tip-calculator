//Function to Calc and display Tip, Total Bill and amount per person

function calculateAndDisplay(){
    //: Get the values from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //calculate tip, total bill, and the Amount each person owes
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill
    let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)

    //Display the Results in the HTMl
    document.getElementById('tipResut').innerText = 'Tip $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 
    'totalBill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)
}