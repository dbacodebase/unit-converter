/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-id")
const volumeEl = document.getElementById("volume-id")
const massEl = document.getElementById("mass-id")
const inputEl = document.getElementById("input-id")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    inputVal = inputEl.value
    lengthEl.textContent = `${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet
    | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters`
    
    volumeEl.textContent = `${inputVal} liters = ${(inputVal * 0.264).toFixed(3)} gallons
    | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} meters`
    
    massEl.textContent = `${inputVal} kilograms = ${(inputVal * 2.204).toFixed(3)} pounds
    | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilograms`
})