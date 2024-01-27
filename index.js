let timerInterval;

let totalSeconds = 10

let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")

start.onclick = () => {
  timerInterval = setInterval(updateTimer,500)
  start.disabled = true
  pause.disabled = false
}

pause.onclick = () => {
  clearInterval(timerInterval)
  pause.disabled = true
  start.disabled = false
}

reset.onclick = () => {
  clearInterval(timerInterval)
  totalSeconds = 10
  start.disabled = false
  updateTimer()
  }

  function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    document.getElementById('timer').innerText = formattedTime

    if (totalSeconds === 0) {
      clearInterval(timerInterval)
      video.style.display = "block"
      shell.style.display = "none"
    } else {
      totalSeconds--
    }
  }

  function pad(number) {
    return (number < 10) ? `0${number}` : number
  }
