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
  const button = document.querySelector(".button")

  const button1 = document.querySelector(".button1")
  button1.addEventListener("click", () => {
    location.reload()
  })

  button.addEventListener("click", () => {
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
})()
