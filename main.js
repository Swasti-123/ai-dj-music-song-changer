sound1="";
sound2="";
function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized!")
}

function preload(){
    sound1=loadSound("music.mp3");
    sound2=loadSound("music2.mp3");
}

function draw(){
    image(video, 0,0, 600,500);
}