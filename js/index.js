// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded

let isRecording = false
let mouseMoves = []
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')

window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		console.log(event.clientX, event.clientY, event.timeStamp)
		// Record the data to the Array:

	}
})

$startAndStop.addEventListener('click', (event) => {
	// Start/stop the recording
})

$replayRecording.addEventListener('click', (event) => {
	// Replay recording
})
