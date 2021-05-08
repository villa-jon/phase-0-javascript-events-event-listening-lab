function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('Wandavision');
  }
  
  input.addEventListener('click', clickAlert); 
}

// function addingEventListener() {
//     const input = document.getElementById('input');

//     function clickAlert() {
//       alert('I was clicked!');
//     }
    
//     input.addEventListener('click', clickAlert); 
// }

// I'm back let's get into this. 
// So event listeners as the way I see them are a way for us to communicate to the coding gods 
// and ask them to create a function for our browser to click and interact. In this example, what the code is doing 
// is that I am asking it to declare input a constant variable and set "input" in div. 
// to make the click event work, what we need is a function that can callback the function. 
// Now the click event is primed. 

//  const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('Wandavision');
// }); 

// The function above is a call back function to put into the console for the webpage. Here what it is trying to do is 
// It activates the click event and allows it to function properly. 