const signupForm = document.querySelector('.signup .modal-content')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    let data = JSON.stringify({
        "fullname": document.querySelector('#fullname__signup').value,
        "email": document.querySelector('#email__signup').value,
        "password": document.querySelector('#password__signup').value,
        "repassword": document.querySelector('#repassword__signup').value
    })

    console.log(data)

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessSignup', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Xử lý phản hồi từ backend.
            console.log('1111')

            
        }
      };
    xhr.send(new FormData(signupForm))
})
