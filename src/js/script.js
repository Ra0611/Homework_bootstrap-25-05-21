
const [...inputs] = document.querySelectorAll('#form input')
const [...text] = document.querySelectorAll('#form textarea')

let formData = {
    name: '',
    company: '',
    phone: '',
    email: '',
}

inputs[0].oninput = function (e) {
    formData.name = e.target.value

}

inputs[1].oninput = function (e) {
    formData.company = e.target.value

}
inputs[2].oninput = function (e) {
    formData.phone = e.target.value
}

inputs[3].oninput = function (e) {
    formData.email = e.target.value
}

text[0].oninput = function (e) {
    formData.dataText = e.target.value
}

const sendFunc = function (status) {
    if (status) {
        document.querySelector('.modal-castom').style.display = 'block'
        setTimeout(function () {
            document.querySelector('.modal-castom').style.display = 'none'
            inputs[0].value = ''
            inputs[1].value = ''
            inputs[2].value = ''
            inputs[3].value = ''
        }, 2000)
    } else {
        console.log('sacces')
    }
}

btnSend.onclick = function () {
    let statusSend = false
    if (!formData.name) {
        inputs[0].style.borderColor = 'red'
    } else {
        inputs[0].style.borderColor = '#616161'
    }
    if (formData.phone.length === 12) {
        inputs[2].style.borderColor = '#616161'
    } else {
        inputs[2].style.borderColor = 'red'
    }
    if (formData.company.length >= 3 && formData.company.length < 20) {
        inputs[1].style.borderColor = '#616161'
    } else {
        inputs[1].style.borderColor = 'red'
    }
    if (formData.email.length >= 5) {
        inputs[3].style.borderColor = '#616161'
    } else {
        inputs[3].style.borderColor = 'red'
    }
    if (formData.dataText.length < 20) {
        alert('слишком мало текста')
    }
    if (inputs[0].style.borderColor !== 'red'
        && inputs[1].style.borderColor !== 'red'
        && inputs[2].style.borderColor !== 'red'
        && inputs[3].style.borderColor !== 'red') {
        statusSend = true
    } else {
        statusSend = false
    }
    sendFunc(statusSend)
}