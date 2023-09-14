let eyewidth = 12;
let facewidth = 300;
let s = "LOLLIPOP"

function setup() {
   createCanvas(600, 600);
   background(110,200,255);

}

function draw() {

    fill(36,74,207)
    strokeWeight(0)
    triangle(275, 50, 20, 550, 560, 550)
    stroke("white")
    strokeWeight(5)
    fill(234,89,189)
    ellipse(280,200,210,210);
    fill("white")
    rect(268, 305, 15, 220)
    rect(280,200,80,10)
    rect(250,220,80,10)
    rect(200,210,80,10)
    


    
    textSize(25)
    textFont('Helvetica');
    text(s, 25, 500,10,25)

    fill(255);
    ellipse(mouseX, mouseY, 100, 100)
}
