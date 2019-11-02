let playing = false;
let fingers;
let button;
let url;
let data = 0;
let now;

function preload(){
  url = "http://localHost:8080";
  httpGet(url, false, function(response) {
      // when the HTTP request completes, populate the variable that holds the
      // earthquake data used in the visualization.
      data = response;
    });
}

function setup() {
  createCanvas(710, 400);
  now = millis();
  url = "http://localHost:8080";
  // specify multiple formats for different browsers
  fingers = createVideo('assets/fingers.mov');
  fingers.loop();
  //button = createButton('play');
  //button.mousePressed(toggleVid); // attach button listener
  fingers.hide();
}
function draw(){
  if ( millis() > now+1000) {
    getReq();
    console.log(data);
    now = millis();
  }
  if (data == 0){
    fill(0);
    rect(0,0,width,height);
  } else {
    fingers.loop();
    image(fingers,0,0,width,height);
  }

}// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.loop();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}

function getReq(){
  httpGet(url, false, function(response) {
      // when the HTTP request completes, populate the variable that holds the
      // earthquake data used in the visualization.
      data = response;
    });
}
