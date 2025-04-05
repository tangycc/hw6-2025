var video;
video = document.querySelector("#player1");


// reference: https://www.w3schools.com/tags/ref_av_dom.asp
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false;
	console.log("Loop is set to false");
	video.autoplay = false;
	console.log("Autoplay is set to false");
});

// slower button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video!!!!");
	video.playbackRate *= 0.9;
	console.log("Current playbackrate:", video.playbackRate);
});

// faster button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video!!!!");
	video.playbackRate /= 0.9
	console.log("Current playbackrate:", video.playbackRate);
});

// play video button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video!!!!");
	video.play();

	let volumeText = document.querySelector("#volume")
	volumeText.textContent = (video.volume * 100) + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video!!!!");
	video.pause();
});

// skip button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip!!!!");
	if (video.duration < video.currentTime + 10) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}

	console.log("Video currentTime:", video.currentTime);
});



// mute button
document.querySelector("#mute").addEventListener("click", function() {
	let button =document.querySelector("#mute");
	if (video.muted === true) {
		video.muted = false;
		console.log("Unmute!!!!");
		button.textContent = "Unmute";
	} else {
		video.muted = true;
		console.log("Mute!!!!");
		button.textContent = "Mute";
	}
});


// vintage button
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School!!!!");
	video.classList.add("oldSchool");
});


// origin button
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original!!!!");
	video.classList.remove("oldSchool");
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Slider!!!!");
	let curVolume = document.querySelector("#slider").value;
	video.volume = curVolume / 100;
	
	let volumeText = document.querySelector("#volume")
	volumeText.textContent = curVolume + "%";
});
