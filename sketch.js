var button, greeting;
function setup() {
  createCanvas(displayWidth/2,displayHeight/2);
  button = createButton("Yes")
  button.position(550,160);
  button.mouseClicked(v1);
  button = createButton("NO");
  button.position(550,190)
  button.mouseClicked(v1);
  greeting = createElement("h3");
  greeting.html("Do You Like To Have A Food Canteen In Your School");
  greeting.position(500,100);

  button = createButton("Yes");
  button.position(550,300);
  button.mouseClicked(v2);
  button = createButton("No");
  button.position(550,330);
  button.mouseClicked(v2);
  greeting=createElement("h3");
  greeting.html("Would You Like To Make Contributions For The Same");
  greeting.position(500,250);

  button = createButton(" Rs 100");
  button.position(550,460);
  button.mouseClicked(v3);
  button = createButton(" Rs 500");
  button.position(550,490);
  button.mouseClicked(v3);
  button = createButton(" Rs 1000");
  button.position(550,520);
  button.mouseClicked(v3);
  button = createButton(" Rs 5000");
  button.position(550,550);
  button.mouseClicked(v3);
  button = createButton("More");
  button.position(550,580);
  button.mouseClicked(v4);
  greeting = createElement("h4");
  greeting.html("How Much Would You Like To Contribute");
  greeting.position(550,400);
  input = createInput("");
  input.position(750,50);
}

function draw() {
 

}
 function v1(){
  greeting = createElement("h2");
  greeting.html("Voted!");
  greeting.position(800,165);

}
function v2(){
  greeting = createElement("h2");
  greeting.html("Voted!");
  greeting.position(800,320);
}
function v3(){
  greeting = createElement("h2");
  greeting.html("Thanks For Your Donation :)");
  greeting.position(700,500);
}
function v4(){
  input = createInput("AMOUNT PLEASE!");
  input.position(700,500);
  button = createButton("SUBMIT");
  button.position(880,500);
  button.mouseClicked(vote5);
}
function v5(){
  greeting = createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION! :)");
  greeting.position(700,500);
}