sound1="";
sound2="";

Lx=0;
Ly=0;

Rx=0;
Ry=0;

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

//scoreRightWrist=0;
//scoreLeftWrist=0;

function gotPoses(){
    function gotPoses(results){
        if (results.length > 0){
            console.log(results);
            //scoreRightWrist = results[0].pose.keypoints[10].score;
            //scoreLeftWrist = results[0].pose.keypoints[9].score;
            //console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist );
    
            Lx=results[0].pose.leftWrist.x;
            Ly=results[0].pose.leftWrist.y;
    
            Rx=results[0].pose.rightWrist.x;
            Ry=results[0].pose.rightWrist.y;
    
        }
    }
}
