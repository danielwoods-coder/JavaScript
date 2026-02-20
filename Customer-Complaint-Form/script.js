const fullName = document.querySelector("#full-name");
const emailAdd = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const proCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");
const comGro = document.querySelector("#complaints-group");
const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const otherCom = document.querySelector("#other-complaint");
const comDes = document.querySelector("#complaint-description");
const comArr = Array.from(checkBoxes);
const radioes = document.querySelectorAll("input[type='radio']");
const solArr = Array.from(radioes);
const solGro = document.querySelector("#solutions-group");
const otherSol = document.querySelector("#other-solution");
const solDes = document.querySelector("#solution-description");
//const btn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");

function greenOrRed(boo) {
  return boo ? "green" : "red"
}

function isFullnameValid() {
  return fullName.value === "" ? false : true
}

function isEmailValid() {
  let regexOfEmail = /^[\w.+-]+@[a-zA-Z0-9-]+\.[[a-zA-Z0-9-.]+$/
  let email = emailAdd.value;
  return regexOfEmail.test(email)
}

function isOrderNoValid() {
  const regexOfOrderNo = /^2024\d{6}$/
  const orderNum = orderNo.value
  return regexOfOrderNo.test(orderNum)
}

function isProductCodeValid() {
  const regexOfCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/
  const codeNum = proCode.value
  return regexOfCode.test(codeNum)
}

function isQuanValid() {
  const regexOfQuan = /^\d+$/
  const quanNum = quantity.value
  return regexOfQuan.test(quanNum) && Number(quanNum) >= 1
}

function isComGroValid() {
  return comArr.some(ele =>
    ele.checked === true
  )
}

function isDesOfComValid() {
  const desOfCom = comDes.value
  if (!otherCom.checked) {
    return true
  }
  else if (otherCom.checked && desOfCom.length >= 20) {
    return true
  } else {
    return false
  }
}

function isSolutionValid() {
  return solArr.some(ele =>
    ele.checked === true
  )
}

function isDesOfSolValid() {
  const desOfSol = solDes.value
  if (!otherSol.checked) {
    return true
  }
  else if (otherSol.checked && desOfSol.length >= 20) {
    return true
  } else {
    return false
  }
}

comArr.forEach(item => {
  item.addEventListener("change", function () {
    const isTrue = isComGroValid()
    comGro.style.borderColor = greenOrRed(isTrue)
  })
})

solArr.forEach(item => {
  item.addEventListener("change", function () {
    const isTrue = isSolutionValid()
    solGro.style.borderColor = greenOrRed(isTrue)
  })
})


fullName.addEventListener("change", function () {
  const isTrue = isFullnameValid()
  this.style.borderColor = greenOrRed(isTrue)
})

emailAdd.addEventListener("change", function () {
  const isTrue = isEmailValid()
  this.style.borderColor = greenOrRed(isTrue)
})

orderNo.addEventListener("change", function () {
  const isTrue = isOrderNoValid()
  this.style.borderColor = greenOrRed(isTrue)
})

proCode.addEventListener("change", function () {
  const isTrue = isProductCodeValid()
  this.style.borderColor = greenOrRed(isTrue)
})

quantity.addEventListener("change", function () {
  const isTrue = isQuanValid()
  this.style.borderColor = greenOrRed(isTrue)
})

comDes.addEventListener("change", function () {
  const isTrue = isDesOfComValid()
  this.style.borderColor = greenOrRed(isTrue)
})

solDes.addEventListener("change", function () {
  const isTrue = isDesOfSolValid()
  this.style.borderColor = greenOrRed(isTrue)
})

function validateForm() {
  let obj = {}
  obj["full-name"] = isFullnameValid();
  obj["email"] = isEmailValid();
  obj["order-no"] = isOrderNoValid();
  obj["product-code"] = isProductCodeValid();
  obj["quantity"] = isQuanValid();
  obj["complaints-group"] = isComGroValid();
  obj["complaint-description"] = isDesOfComValid();
  obj["solutions-group"] = isSolutionValid();
  obj["solution-description"] = isDesOfSolValid();
  return obj
}

function isValid(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(obj[key])
  }
  return arr.every(ele => ele)
}


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const validForm = validateForm();
  const isTrue = isValid(validForm)
  if (!isTrue) {
    for (const key in validForm) {
      if (validForm[key] === false) {
        document.querySelector(`#${key}`).style.borderColor = "red";
      }
    }
    return
  }

  form.submit()
})