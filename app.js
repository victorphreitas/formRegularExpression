//another option on grabbing those inputs
let inputs = document.querySelectorAll(".form-control")
inputs.forEach(input=>{input.addEventListener('blur',validateName)})

function validateName(event){
  let name,zipcode,email,phone;

  inputs.forEach((input,index)=>{
    if (index === 0){
      name = input.value
    }
    if (index === 1){
      zipcode = input.value
    }
    if (index === 2){
      email = input.value
    }
    if (index === 3){
      phone = input.value
    }
  })
  //regular expression to deal with NAME field 
  let patternName = new RegExp('^[A-Za-z ]{2,11}$')

  if (!patternName.test(name)){
    inputs[0].classList.add('is-invalid')
  } else {
    inputs[0].classList.remove('is-invalid')
  }

  //regular expression to deal with ZIPCODE field 
  let patternZipcode = new RegExp('^[0-9]{5}$')

  if (!patternZipcode.test(zipcode)){
    inputs[1].classList.add('is-invalid')
  } else {
    inputs[1].classList.remove('is-invalid')
  }
   
  //regular expression to deal with EMAIL field
  let patternEmail = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/

  if (!patternEmail.test(email)){
    inputs[2].classList.add('is-invalid')
  } else {
    inputs[2].classList.remove('is-invalid')
  }

  //regular expression to deal with phone number
  let patternPhone = /^[0-9\+]{1,13}$/

  if (!patternPhone.test(phone)){
    inputs[3].classList.add('is-invalid')
  } else {
    inputs[3].classList.remove('is-invalid')
  }

  event.preventDefault()
}