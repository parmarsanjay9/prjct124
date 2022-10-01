function preload(){
}

function setup() {
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}
function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results);
      console.log("lip x = " + results[0].pose.lip.x-25);
      console.log("lip y = " + results[0].pose.lip.y+15);
   }
}

function draw() {
    image(video, 0, 0, 300, 250);
}


function take_snapshot() {
    save('myFilterImage.png');
}