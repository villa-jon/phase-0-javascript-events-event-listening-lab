function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('I was clicked!');
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
// So event listeners as the way I see are ways for 