
function scuberGreetingForFeet(ride){
  // Write your code here!
    switch(true){
    case ride <= 400 : return "This one is on me!"
            break;
    case ride > 400 && ride < 2000 : return "That will be twenty bucks."
            break;
    case ride >= 2000 && ride < 2500 : return "I will gladly take your thirty bucks."
            break;
    case ride >= 2500 : return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return "Thank you so much."
  }
  else if (tip == "not as generous"){
    return "Thank you."
  }
  else {
    return "Bye."
  }
}
