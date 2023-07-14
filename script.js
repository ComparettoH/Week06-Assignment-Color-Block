console.log('🟥 🟦 🟩 🟨');

//First establish that once browser is loaded to begin anything listed in onReady function
$(document).ready(onReady);

//second create ready function
function onReady() {
//Link to red button and create action/response
$('#red-btn').on("click", makeRedBlock);
//Link to red block and what to do when clicked
$('#blocks').on("click", '.block', clearRedBlock);

//Link to blue button and create action/response
$('#blue-btn').on("click", makeBlueBlock);
//Link to blue block and what to do when clicked
$('#blocks').on("click", '.block', clearBlueBlock);

//Link to green button and create action/response
$('#green-btn').on("click", makeGreenBlock);
//Link to green block and what to do when clicked
$('#blocks').on("click", '.block', clearGreenBlock);

//Link to red button and create action/response
$('#yellow-btn').on("click", makeYellowBlock);
//Link to yellow block and what to do when clicked
$('#blocks').on("click", '.block', clearYellowBlock);
}

// Create function that makes a red color block
function makeRedBlock () {
    console.log('In makeBlue')
    $('#blocks').append(`
    <span class= "block red-fill"</span>
    `)
}

// Create function that clears red block
function clearRedBlock (){
    console.log('In clearRed', $(this))
    $(this).remove()
}

// Create function that makes a blue color block
function makeBlueBlock () {
    console.log('In makeBlue')
    $('#blocks').append(`
    <span class= "block blue-fill"</span>
    `)
}

// Create function that clears blue block
function clearBlueBlock (){
    console.log('In clearBlue', $(this))
    $(this).remove()
}

// Create function that makes a green color block
function makeGreenBlock () {
    console.log('In makeGreen')
    $('#blocks').append(`
    <span class= "block green-fill"</span>
    `)
}

// Create function that clears green block
function clearGreenBlock (){
    console.log('In clearGreen', $(this))
    $(this).remove()
}

// Create function that makes a yellow color block
function makeYellowBlock () {
    console.log('In makeYellow')
    $('#blocks').append(`
    <span class= "block yellow-fill"</span>
    `)
}

// Create function that clears yellow block
function clearYellowBlock (){
    console.log('In clearYellow', $(this))
    $(this).remove()
}