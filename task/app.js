
const buttons = document.querySelectorAll('.petrol-cat-btn')
const inptAmount = document.querySelector('#inptAmount');
const inptLiter = document.querySelector('#inptLiter');
const btnsPaylod = document.querySelectorAll('.btnpaylod')
const cash = document.querySelector('.report')

let petrolPrice = 1
let petrolType = ''
let paymentType = ''

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        inptAmount.value = '';
        inptLiter.value = '';
        buttons.forEach((item) => {
            item.classList.remove('active')
        })

        petrolPrice = +btn.value
        petrolType = btn.dataset.type
        btn.classList.add('active')
        // console.log(btn.value)
    })
})

btnsPaylod.forEach((paylod) => {
    paylod.addEventListener('click', () => {
        btnsPaylod.forEach((item) => {
            item.classList.remove('actives')
        })

        paymentType = paylod.dataset.payment
        paylod.classList.add('actives');
    })
})

cash.addEventListener('click', () => {
    const totalAmount = +inptAmount.value;
    const totalLiter = +inptLiter.value;
    const currentDate = new Date().toLocaleDateString(); //new date
    
    
    const alertMessage = `
        type: ${petrolType}- ${petrolPrice} AZN, 
        liter: ${totalLiter.toFixed(2)} litre, 
        amount: ${totalAmount.toFixed(2)} AZN, 
        payment: ${paymentType}, 
        date: ${currentDate}
    `
    alert(alertMessage)
})




inptAmount.addEventListener('input', () => {
    let amount = +inptAmount.value
    inptLiter.value = amount / petrolPrice
    // console.log(inptAmount.value)
})

inptLiter.addEventListener('input', () => {
    let liter = +inptLiter.value
    inptAmount.value = liter * petrolPrice
    // console.log(inptLiter.value)
})
