# p5-ServerTest
 p5-python server to toggle a video

Ver 1.0:
\\\\\\\\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\\

<b><h2>SETUP</h2></b>

\\\\\\\\\\\\\\\\\
<b><h4>REQUIRED</b></h4>
	
	-Python 2, 
	
	-P5.js. 
	


<b>Python download link</b> - https://www.python.org/downloads/release/python-2717/

<b>P5.js download link</b> - https://github.com/processing/p5.js/releases/download/0.10.2/p5.zip


Once you download that zip file,
<b><h3>MAC</h3></b>: 

	- open _MACOSX folder (if its not there just follow the rest of the steps)
	
	- then drag the 2 items inside into wherever you want to keep your future p5 projects on your computer. 
	
	- drag the p5-ServerTest folder from this repository into the p5 folder you just extracted. 
	
	- drag the whole folder into atom
	
	- hit packages > atom-live-server >  run live server
 <b><h3>WINDOWS</h3></b>:
	
	- extract the p5 folder form the zip folder
	
	- follow the rest of the steps exactly the same way as MAC OSX. 

<h3>For the python server:</h3>
once you install python 2 you should just be able to run the simpleServer.py file using python launcher. 

if not, open terminal or command line and type 

python [PATH TO THE FILE] 


then hit enter. 

If you don't know the file path
	type python, then a space, and then drag the file in and hit enter (this will work on MAC or PC)


////////////////

<b><h2>USE/EXPLANATION</h2></b>

///////////////

<b><h3>whats happening???</h3></b>

the python code is running a local server on your computer that basically only contains 1 number. 


To change this number edit line 15 in the simpleServer.py file. 

'self.wfile.write("0")'


if you want to test that the code is working/giving you different results

- change line 15 to 0 or 1
- save the simpleServer.py file
- and then run it again the same way you did before.
You should pretty quickly see the p5 preview change. 
you can test to see youre getting the right number by opening cyour browser's developer tools, and then opening the console tab in the dev tools panel.


The P5 Code (sketch.js) is looking at that server and reading that number. Depending on what the number is the 
in line 9 the section "url = "http://localHost:8080";" sets the URL for the server. 
This can be a web page but because our Python code runs a server on port 8080 we're looking there. 

	- if the sketch.js looks at this server and recieves a 0 it will show a blank screen, 
	- if the sketch.js recieves any other numbers it will loop an example video file that can be found in the assets folder.
if you want to change this video make sure to change line 22 of the sketch.js file to reflect the new file name
	 fingers = createVideo('assets/fingers.mov');


//////////////////////////

<b><h2>GETTING ARDUINO TO WORK</h2></b>

/////////////////////////

<h4>ADVICE!</h4>
I'd reccomend getting a cheap router to jam into your setup so you can easily mess with port forewarding settings and not have to deal with
internet connection or web hosting. That'll honestly be your best bet if you don't actually
need the internet for anything. 

 <b><h3>RUN ARDUINO FILE</h3></b>:
	- Make sure to set up port forewarding in your router for IP address 192.168.0.177 on port 8080, 
		(or whatever IP and Port are set on lines 28 and 33 the of the arduino server code.)
	- I've added a screenshot of my port forewarding settings into this repository. 
	- Attach your ethernet shield to your arduino and then upload the server code in this repository onto the board. 
	- Start your P5 File (DO NOT RUN THE PYTHON FILE)


You should now see the video toggle on and off approximately every second
theres a bit of a delay between the console in dev tools and the p5 sketch updating, I'm not entirely sure why but I will try and fix this.



