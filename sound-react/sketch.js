var song; 
var amp;
var button;
var r;
var g;
var b;
var timer = 0;

var volhistory = [];

function toggleSong() {
	if (song.isPlaying()){
		song.pause();
	} else {
		song.play();
	}
}

function preload() {
	song = loadSound('music.mp3');
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	angleMode(DEGREES);
	background(0);
	button= createButton('toggle');
	button.mousePressed(toggleSong);
	song.play;
	amp = new p5.Amplitude()
	fft = new p5.FFT();
	song.play();
	r = Math.ceil(Math.random() * 255)
	g = Math.ceil(Math.random() * 255)
	b = Math.ceil(Math.random() * 255)
}

function draw() {
	console.log
	if(amp.getLevel() > 0.35 && timer > 15) {
		r = Math.ceil(Math.random() * 255)
		g = Math.ceil(Math.random() * 255)
		b = Math.ceil(Math.random() * 255)
		stroke(r,g,b);
		console.log(amp.getLevel())
		timer = 0;
	}
	timer += 1
	var vol = amp.getLevel();
	volhistory.push(vol);
	stroke(r,g,b);
	// fill(r, g, b);
	beginShape();
	for (var i = 0; i < volhistory.length ; i++){
		var y = map(volhistory[i], 0, 1, height, 0);
		y = y /3
		rect(i, height, 40, -y);
		console.log(volhistory[i])
	}
	endShape();
	console.log(volhistory)
	if(volhistory.length > width) {
		volhistory.splice(0,40);
	}
}