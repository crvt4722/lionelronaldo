const modalForm = document.querySelector('.modal .modal-content')
const modalPhone = document.querySelector('#modal__phone')
const modalAddress = document.querySelector('#modal__address')
const modalSizes = document.querySelectorAll('.modal__radio-btn')
const modalQuantity = document.querySelector('#modal__quantity')
const modalPaymentMethod = document.querySelector('#modal__payment-method')

modalForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let phone = modalPhone.value
    let address = modalAddress.value
    let quantity = modalQuantity.value
    let paymentMethod = modalPaymentMethod.value
    let size = 'S'
    let club = localStorage.getItem("club")
    let season = localStorage.getItem("season")
    let orderShirtType = localStorage.getItem("orderShirtType")

    for (let modalSize of modalSizes){
        if(modalSize.checked == true){
            size = modalSize.value
            break
        }
    }

    console.log(phone, address, size, quantity, paymentMethod)

    let data = JSON.stringify({
        "phone": phone,
        "address": address,
        "size": size,
        "quantity": quantity,
        "paymentMethod":paymentMethod,
        "club": club,
        "season": season,
        "orderShirtType": orderShirtType
    })

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessOrder', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(1111)
        }
    };
    xhr.send(data)
})