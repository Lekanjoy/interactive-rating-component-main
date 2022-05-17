let submitBtn = document.getElementById('sub');
let container = document.getElementById('container')

submitBtn.addEventListener('submit',(e)=>{
    e.preventDefault();

    //if (e.target.id === currentTarget && e.target.id === "rating") {
      container.classList.add("active");
   // } else {
   //   return
   // }
    

})

let rateSelected = document.getElementById('rateSelected');
let ratingSection = document.querySelector('#rating');


ratingSection.addEventListener('click', rateUs, false);

function rateUs(e){
  if(e.target !== e.currentTarget ){ // if the click event is not on the Parent element itself
    let clickedNumber = e.target.innerText;  // Getting the value of the number selected i.e 1,2,3,4,5
    let clickedBox = e.target;  //Getting the actual element as a whole i.e <p></p>
    rateSelected.textContent = clickedNumber;  // Appending the actual number selected to the Thank You PopUp
    clickedBox.style.color = 'white';
    clickedBox.style.backgroundColor = "hsl(216, 12%, 54%)";
    
  }
}

