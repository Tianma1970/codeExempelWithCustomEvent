//global variables outside the IIFE
city = "Malmo"
metropol = "Copenhagen"
;(function () {
  //querySelector for button
  const button = document.querySelector(".button")

  //two ways to call the global variable which is outside the IIFE (in console)
  console.log("I live in " + city + " and we love our neighbor city, which is " + metropol)
  console.log(`my hometown is ${city} and we love our neighbor city, which is ${metropol}`)
  // call the global variable which is outside the IIFE on the page
  const text = document.querySelector(".myText")
  text.append("My hometown is " + city)

  //create a customEvent triggered by button click
  button.addEventListener("click", () => {
    const event = new CustomEvent("buttonChange", {
      //detail: xxxxx
    })
    document.dispatchEvent(event)
    document.addEventListener("buttonChange", () => {
      console.log("TEST")
    })
  })
})()
