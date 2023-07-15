// Get references to the Celsius and Fahrenheit input fields
const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");

// Set focus to the Celsius input feild when the page loads
window.addEventListener("load", () => celsius.focus());

//Convert Celsius to Fahrenheit when Celsius value changes
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    //Clear fahrenheit input when celsius input is empty
    if (!celsius.value) fahrenheit.value = "";
});

//convert Fahrenheit to Celsius when Fahrenheit value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    //clear celsious input when fahrenheit input is empty
    if(!fahrenheit.value) celsisus.value = "";
});