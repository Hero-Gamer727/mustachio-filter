nose_x = 0;
nose_y = 0;
function preload(){
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){
canvas= createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO); 
video.size(400,400);
video.hide();


poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    image(img,nose_x,nose_y,75,75);
}


function takeSnapshot(){
   save("my_filter-selfie.png");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = "+nose_x);
        console.log("nose y = "+ nose_y);
        nose_x = results[0].pose.nose.x -50;
        nose_y= results[0].pose.nose.y -25;
        
    }
    }