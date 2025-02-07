let me = 85;
let friend = 70;

if(me<=100 && me>80){
    if(friend>=80 && friend <=100){
        console.log("Go for lunch");
    }
    else if(friend<=80 && friend>=60){
        console.log("Good Luck Next Time");
    }
    else if(friend<60 && friend>=40){
        console.log("Unseen message");
    }
    else {
        console.log("Block")
    }
}
else{
    console.log("Chill");
}