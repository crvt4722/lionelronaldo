setTimeout(()=>{
    const logoutBtn = document.querySelector('.fa-power-off')

    logoutBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log('logout')
        let xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessLogout', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              console.log(1111)
            }
          };
        xhr.send()
        
        setTimeout(()=>{
            location.reload()
        },100)
    })
}, 1000)