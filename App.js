const queryBtn1 = document.getElementById("query-btn-1")
const queryBtn2 = document.getElementById("query-btn-2")
const firstNameInput = document.getElementById("first-name-input")
const lastNameInput = document.getElementById("last-name-input")
const emailInput = document.getElementById("email-input")
const messageInput = document.getElementById("message-input")
const submitBtn = document.getElementById("submit-btn")
const firstNameError = document.getElementById("first-name-error")
const lastNameError = document.getElementById("last-name-error")
const emailError = document.getElementById("email-error")
const queryError = document.getElementById("query-error")
const messageError = document.getElementById("message-error")
const checkboxError = document.getElementById("checkbox-error")
const checkboxEl = document.getElementById("checkbox-el")
const notificationEl = document.getElementById("notification-el")

let btn1IsPressed = false
let btn2IsPressed = false
let error = false
let firstNameInputError = false
let lastNameInputError = false
let emailInputError = false
let queryBtnError = false
let messageInputError = false
let checkboxElError = false

queryBtn1.addEventListener("click", () => {
    if(btn2IsPressed) {
        queryBtn2.style = "outline-color: black"
        queryBtn2.style = "background-color: white"

        queryBtn1.style = "outline-color: hsl(169, 82%, 27%)"
        queryBtn1.style = "background-color: hsl(148, 38%, 91%)"

        btn1IsPressed = true
        btn2IsPressed = false
    }
    else {
        queryBtn1.style = "outline-color: hsl(169, 82%, 27%)"
        queryBtn1.style = "background-color: hsl(148, 38%, 91%)"
        btn1IsPressed = true
    }
})

queryBtn2.addEventListener("click", () => {
    if(btn1IsPressed) {
        queryBtn1.style = "outline-color: black"
        queryBtn1.style = "background-color: white"

        queryBtn2.style = "outline-color: hsl(169, 82%, 27%)"
        queryBtn2.style = "background-color: hsl(148, 38%, 91%)"

        btn2IsPressed = true
        btn1IsPressed = false
    }
    else {
        queryBtn2.style = "outline-color: hsl(169, 82%, 27%)"
        queryBtn2.style = "background-color: hsl(148, 38%, 91%)"
        btn2IsPressed = true
    }
})

submitBtn.addEventListener("click", () => {
    const firstNameInputValue = firstNameInput.value.trim()
    const lastNameInputValue = lastNameInput.value.trim()
    const emailInputValue = emailInput.value
    const messageInputValue = messageInput.value.trim()
    
    if(firstNameInputValue) {
        firstNameInput.style = "border: 1px hsl(187, 24%, 22%) solid"
        firstNameError.style = "display: none"
        firstNameInputError = false
    }
    else {
        firstNameInput.style = "border: 1px hsl(0, 89.00%, 57.30%) solid"
        firstNameError.style = "display: block"
        firstNameInputError = true
    }

    if(lastNameInputValue) {
        lastNameInput.style = "border: 1px hsl(187, 24%, 22%) solid"
        lastNameError.style = "display: none"
        lastNameInputError = false
    }
    else {
        lastNameInput.style = "border: 1px hsl(0, 89.00%, 57.30%) solid"
        lastNameError.style = "display: block"
        lastNameInputError = true
    }

    if(emailInputValue.trim() && emailInputValue.includes("@") && emailInputValue.includes(".com")) {
        emailInput.style = "border: 1px hsl(187, 24%, 22%) solid"
        emailError.style = "display: none"
        emailInputError = false
    }
    else {
        emailInput.style = "border: 1px hsl(0, 89.00%, 57.30%) solid"
        emailError.style = "display: block"
        emailInputError = true
    }

    if(!btn1IsPressed && !btn2IsPressed) {
        queryError.style = "display: block"
        queryBtnError = true
    }
    else {
        queryError.style = "display: none"
        queryBtnError = false
    }

    if(messageInputValue) {
        messageInput.style = "border: 1px hsl(187, 24%, 22%) solid"
        messageError.style = "display: none"
        messageInputError = false
    }
    else {
        messageInput.style = "border: 1px hsl(0, 89.00%, 57.30%) solid"
        messageError.style = "display: block"
        messageInputError = true
    }

    if(checkboxEl.checked) {
        checkboxError.style = "display: none"
        checkboxElError = false
    }
    else {
        checkboxError.style = "display: block"
        checkboxElError = true
    }

    if(
        firstNameInputError ||
        lastNameInputError ||
        emailInputError ||
        queryBtnError ||
        messageInputError ||
        checkboxElError
    ) {
        error = true
    }
    else {
        error = false
    }

    if(!error) {
        notificationEl.style = "display: block"
        notificationEl.classList.add("message-animation")
    }
    else {
        notificationEl.style = "display: none"
    }
})