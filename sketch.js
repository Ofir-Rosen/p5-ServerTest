let playing = false;
let fingers;
let button;
let url;
let data = 0;
let now;

function preload(){
  url = "http://192.168.0.177/";
  httpGet(url, false, function(response) {
      // when the HTTP request completes, populate the variable that holds the
      // earthquake data used in the visualization.
      data = response;
    });
    fingers = createVideo('assets/fingers.mov');
    //fingers = preloadVide
    //fingers.loop();
    //button = createButton('play');
    //button.mousePressed(toggleVid); // attach button listener
    fingers.hide();
}

function setup() {
  createCanvas(710, 400);
  now = millis();
  //IF USING PYTHON
  //url = "localhost:8080";
  //IF USING ARDUINO
  url = "http://192.168.0.177/";
  // specify multiple formats for different browsers
}
function draw(){
  toggleVid();
  if ( millis() > now+1000) {
    getReq();
    console.log(data);
    now = millis();
  }
  if (data == 0){
    if (playing) playing = false;
    fill(0);
    rect(0,0,width,height);
  } else {
    if (!playing) playing = true;
    image(fingers,0,0,width,height);
  }

}// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.play();
    //button.html('play');
  } else {
    fingers.stop();
    //button.html('pause');
  }
    lp = playing;
  //playing = !playing;
}

function getReq(){
  httpGet(url, false, function(response) {
      // when the HTTP request completes, populate the variable that holds the
      // earthquake data used in the visualization.
      data = response;
    });
}
