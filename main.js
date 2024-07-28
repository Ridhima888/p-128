song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

noseX="";
noseY="";

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        console.log(leftwristX);
        leftwristY=results[0].pose.leftWrist.y;
        console.log(leftwristY);
        rightwristX=results[0].pose.rightWrist.x;
        console.log(rightwristX);
        rightwristY=results[0].pose.rightWrist.y;
        console.log(rightwristY);
    }
}