//global variables outside the IIFE
city = "Malmo"
metropol = "Copenhagen"
;(function () {
  //querySelector for button

  //two ways to call the global variable which is outside the IIFE (in console)
  console.log("I live in " + city + " and we love our neighbour city, which is " + metropol)
  console.log(`my hometown is ${city} and we love our neighbour city, which is ${metropol}`)
  // call the global variable which is outside the IIFE on the page

  //create a customEvents triggered by button click
  const surprised = document.querySelector(".surprised")

  const unsurprised = document.querySelector(".unsurprised")
  unsurprised.addEventListener("click", () => {})

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

  //eventListener for showing textarea
  const text = document.querySelector(".text")
  const textarea = document.querySelector("form")
  text.addEventListener("click", () => {
    //we want to show the textarea by remove class 'writeText'
    textarea.classList.remove("writeText")
  })

  //eventListener for hiding textarea
  const noText = document.querySelector(".noText")
  noText.addEventListener("click", e => {
    e.preventDefault()
    textarea.classList.add("writeText")
  })
})()
