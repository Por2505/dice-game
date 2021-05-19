var randomNumber1 = Math.foor(Math.random()*6)+1;

var randomImage = "dice" + randomNumber1 +".png";

var source = "images/" + randonImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",source);



var randomNumber2 = Math.foor(Math.random()*6)+1;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",source);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML =" Draw!";
}