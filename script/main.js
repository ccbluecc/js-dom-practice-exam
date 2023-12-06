import {
  validateEmail,
  validatePassword,
  validateUsername
} from './validate.js'
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6']

window.addEventListener('load', () => {
  document.body.style = `background-color:${localStorage.getItem('colorArray')}`
})

const colorInput = document.getElementById('color-btn')
colorInput.addEventListener('click', () => {
  let randomcolor = colorArray[Math.floor(Math.random() * colorArray.length)]
  const rainbow = document.getElementById('rainbow')
  console.log(randomcolor)
  rainbow.style = `background-color: ${randomcolor}`
  localStorage.setItem(
    'colorArray',
    colorArray[Math.floor(Math.random() * randomcolor)]
  )
})
const add = document.getElementById('add-btn')

const arr = []
add.addEventListener('click', () => {
  const input = document.getElementById('item-input')
  console.log(input.value)
  const newdiv = document.querySelector('ul')
  const newBackpack = document.createElement('li')
  arr.push(input.value)
  newBackpack.textContent = input.value
  newdiv.appendChild(newBackpack)
  localStorage.setItem('backpack', JSON.stringify(arr))
  input.value = ''
})
const newBackpacks = document.createElement('li')
const storedtext = localStorage.getItem('backpack')
const yourText = JSON.parse(storedtext)
if (yourText !== null && yourText !== undefined && yourText?.length !== 0) {
  if (yourText) {
    newBackpacks.textContent = yourText
  }
}

const error = document.getElementsByClassName('error')[1]
const errortext = document.createElement('p')
const submit = document.getElementById('submit-btn')
submit.addEventListener('click', () => {
  event.preventDefault()
  const username = document.getElementsByClassName('input')[1]
  const email = document.getElementsByClassName('input')[2]
  const password = document.getElementsByClassName('input')[3]
  console.log(username.value)
  console.log(email.value)
  console.log(password.value)
  if (!validateUsername(username.value)) {
    console.log(validateUsername(username.value))
    errortext.textContent = ''
    errortext.textContent += `${username.value} is Invalid make sure to contain uppercase, number and notspecial charcter`
    error.appendChild(errortext)
  } else if (!validateEmail(email.value)) {
    console.log(validateUsername(email.value))
    errortext.textContent = ''
    errortext.textContent += `${email.value} ,This is not a Email format! Contain @ or .com`
    error.appendChild(errortext)
  } else if (!validatePassword(password.value)) {
    console.log(validateUsername(password.value))
    errortext.textContent = ''
    errortext.textContent += `${password.value} ,is not Invalid make sure to contain uppercase,lowercase, number and special character`
    error.appendChild(errortext)
  } else {
    errortext.textContent = ''
    errortext.textContent += 'Successfully! Yay'
    error.appendChild(errortext)
  }
})
