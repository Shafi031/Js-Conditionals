let ticketPrice = 800;
let age=5;

if(age < 10){
    console.log("Ticket is free");
}
else if(age >= 11 && age <=30){
    let discount=ticketPrice*(50/100);
    console.log(discount);
}
else if(age >= 60){
    discount = ticketPrice*(25/100);
    console.log(discount);
}

else{
    console.log("Give the full ticket price");
}