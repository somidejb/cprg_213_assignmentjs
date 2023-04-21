/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let noDaysSelected = 0;
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let daysButtons = document.querySelectorAll(".day-selector li");
let clearButton = document.getElementById("clear-button");
let cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
for(let i = 0; i < daysButtons.length; i++){
    daysButtons[i].addEventListener("click", clickDayButtons);
}

function clickDayButtons(){
    this.classList.toggle("clicked");
    noDaysSelected = countSelectedDays();
    calculatedCost();
}

function countSelectedDays(){
    let count = 0;
    for(let i = 0; i < daysButtons.length; i++){
        if(daysButtons[i].classList.contains("clicked")){
            count++;
        }
    }
    return count;
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", clickClearButton);
function clickClearButton(){
    for(let i = 0; i < daysButtons.length; i++){
        daysButtons[i].classList.remove("clicked");
    }
    noDaysSelected = 0;
    costPerDay = 0;
    cost.innerText = "0";
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", clickHalfButton);
function clickHalfButton(){
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculatedCost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", clickFullButton);
function clickFullButton(){
    costPerDay = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculatedCost();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculatedCost(){
    let total = noDaysSelected * costPerDay;
    cost.innerHTML = total;
}
