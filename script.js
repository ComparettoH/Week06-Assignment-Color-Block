console.log('🟥 🟦 🟩 🟨');

//First establish that once browser is loaded to begin anything listed in onReady function
$(document).ready(onReady);

//second create ready function
function onReady() {
//## Required Functionality for Part One!
// You are provided with 4 buttons that read 
// 'Red', 'Blue', 'Green', and 'Yellow'.
// When you **click on a button**, it should:
// - Add a color block of that color to the DOM.
// Additionally, when you **click on a color block**,
// it should:
// - Remove that block from the DOM

//Link to red button and create action/response
$('#red-btn').on("click", makeRedBlock)

//Link to blue button and create action/response
$('#blue-btn').on("click", makeBlueBlock)

//Link to green button and create action/response
$('#green-btn').on("click", makeGreenBlock)

//Link to red button and create action/response
$('#yellow-btn').on("click", makeYellowBlock)

}

// Create function that makes a red color block
function makeRedBlock () {
    console.log('In makeBlue')
    $('#blocks').append(`
    <span class= "block red-fill"</span>
    `)
}

// Create function that makes a blue color block
function makeBlueBlock () {
    console.log('In makeBlue')
    $('#blocks').append(`
    <span class= "block blue-fill"</span>
    `)
}

// Create function that makes a green color block
function makeGreenBlock () {
    console.log('In makeGreen')
    $('#blocks').append(`
    <span class= "block green-fill"</span>
    `)
}

// Create function that makes a yellow color block
function makeYellowBlock () {
    console.log('In makeYellow')
    $('#blocks').append(`
    <span class= "block yellow-fill"</span>
    `)
}