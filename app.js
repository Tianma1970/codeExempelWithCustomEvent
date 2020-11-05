//global variables outside the IIFE
city = "Malmo"
metropol = "Copenhagen"
;(function () {
  //querySelector for button

  // call the global variable which is outside the IIFE on the page
  //two ways to call the global variable which is outside the IIFE (in console)
  console.log("I live in " + city + " and we love our neighbour city, which is " + metropol)
  console.log(`my hometown is ${city} and we love our neighbour city, which is ${metropol}`)

  //create a customEvents triggered by button click
  const surprised = document.querySelector(".surprised")

  const unsurprised = document.querySelector(".unsurprised")
  unsurprised.addEventListener("click", () => {
    location.reload()
  })

  surprised.addEventListener("click", () => {
    const event = new CustomEvent("buttonChange", {})
    console.log(event)
    document.dispatchEvent(event)
  })

  document.addEventListener("buttonChange", () => {
    const gavno = document.querySelector(".gavno")
    gavno.append("My hometown is " + city)

    const capital = document.querySelector(".capital")
    capital.append("my favoured city is " + metropol)
  })

  //eventListeners for showing textarea
  const text = document.querySelector(".text")
  //eventListener for hiding textarea
  const noText = document.querySelector(".noText")
  //eventListeners for handling textarea
  const showHideForm = document.querySelector("form")
  const form = document.querySelector("form")
  const textarea = document.querySelector("textarea")

  text.addEventListener("click", () => {
    //we want to show the showHideForm by remove class 'writeText'
    showHideForm.classList.remove("writeText")
  })

  noText.addEventListener("click", e => {
    e.preventDefault()
    showHideForm.classList.add("writeText")
  })

  //customEvent with textarea
  const textEvent = new CustomEvent("showWrittenText", {
    bubbles: true,
    detail: { text: () => textarea.value }
  })

  form.addEventListener("showWrittenText", e => console.log(e.detail.text()))
  textarea.addEventListener("input", e => e.target.dispatchEvent(textEvent))
})()
