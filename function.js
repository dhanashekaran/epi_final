const scriptURL = 'https://script.google.com/macros/s/AKfycbz9qQiXfN2HKgTM0VS5dlEIgezEsr76rVYw174RbCB4SyUdaE18KSjD3DTNXownYxCl/exec'
const form = document.forms['quotation_form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response),
    alert("Thanks for your interest 😃."),
    form.reset())
    .catch(error => console.error('Error!', error.message))
})