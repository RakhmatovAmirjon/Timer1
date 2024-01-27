let timerInterval

let totalSeconds = 20

  function startTimer() {
    timerInterval = ustanovka_interval(obnova_interval, 1000)
  }

  function pauseTimer() {
    ochistka_interval(timerInterval)
  }

  function resetTimer() {
    ochistka_interval(timerInterval)
    totalSeconds = 20
    obnova_interval()
  }

  function obnova_interval() {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const formatirovaniyTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    document.getElementById('timer').innerText = formatirovaniyTime

    if (totalSeconds === 0) {
      ochistka_interval(timerInterval)
      alert("Ваше время вышло")
    } else {
      totalSeconds--
    }
  }

  function pad(number) {
    return (number < 10) ? `0${number}` : number
  }