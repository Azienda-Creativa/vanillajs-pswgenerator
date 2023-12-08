const pswBox = document.getElementById("psw")
const length = 20

const upperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
const lowerCase = upperCase.toLowerCase()
const number = "0123456789"
const symbol = "@#$%^&*()_+|{}[]><?/-=~!"

const allChars = upperCase + lowerCase + number + symbol

function createPSW() {
  let psw = new String()

  psw += upperCase[Math.floor(Math.random() * upperCase.length)]
  psw += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  psw += number[Math.floor(Math.random() * number.length)]
  psw += symbol[Math.floor(Math.random() * symbol.length)]

  while (length > psw.length) {
    psw += allChars[Math.floor(Math.random() * allChars.length)]
  }

  pswBox.value = psw
}

function copyPSW() {
  pswBox.select()
  document.execCommand("copy")
}
