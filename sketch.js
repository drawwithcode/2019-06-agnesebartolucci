var myCanvas;

var h1;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;

var txt;

var bgColor;

var myInput;
var sliderR;
var sliderG;
var sliderB;
var sliderStr;
var buttonBg;
var sliderDim;
var buttonPrint;

var colorList = ['red', 'black', 'white', 'blue', 'green', 'yellow', 'orange', 'cyan', 'pink', 'magenta', 'purple', 'violet', 'aquamarine', 'slategray', 'blueviolet', 'limegreen', 'seagreen', 'royalblue'];

function preload(){
}

function setup() {
  myCanvas = createCanvas(windowWidth, 450);
  myCanvas.position(0, 90);

  p1 = createP("Type your company's name:");
  p1.position(40, 560);

  myInput = createInput("");
  myInput.position(40, 606);

  p2 = createP("Choose your color:");
  p2.position(300, 560);

  sliderR = createSlider(0, 255, 127.5);
  sliderR.position(300, 596);
  sliderR.size(110);

  sliderG = createSlider(0, 255, 127.5);
  sliderG.position(300, 626);
  sliderG.size(110);

  sliderB = createSlider(0, 255, 127.5);
  sliderB.position(300, 656);
  sliderB.size(110);

  p3 = createP("Choose stroke weight:");
  p3.position(510, 560);

  sliderStr = createSlider(0, 20, 1);
  sliderStr.position(520, 596);
  sliderStr.size(110);

  p4 = createP("Try on some backgrounds:");
  p4.position(740, 560);

  buttonBg = createButton('CHANGE!');
  buttonBg.position(765, 606);
  bgColor = color ('white');
  buttonBg.mousePressed(changeBg);

  p5 = createP("And finally MAKE IT BIGGER");
  p5.position(990, 560);

  sliderDim = createSlider(20, 350, 20);
  sliderDim.position(990, 596);
  sliderDim.size(170);

  p6 = createP("Save your HUGE logo");
  p6.position(1250, 560);

  buttonPrint = createButton('SAVE');
  buttonPrint.position(1270, 606);
  buttonPrint.mousePressed(printCanvas);


}

function changeBg () {
  bgColor = color(random(colorList));
}

function draw() {
  background (bgColor);

  fill (sliderR.value(), sliderG.value(), sliderB.value());
  strokeWeight (sliderStr.value());
  stroke ('black');
  textSize (sliderDim.value());
  textAlign (CENTER);
  text (myInput.value(), width/2, height/2);
}

function printCanvas() {
  print('Print');
  saveCanvas(myCanvas, 'BIG LOGO', 'jpg');
}
