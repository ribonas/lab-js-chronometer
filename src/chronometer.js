class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback)printTimeCallback();
    }, 1000)

  }

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let newVal = '';
    if(value < 10) {
      newVal = `${value}`;
    } else {
      newVal = `${value}`;
    }
    return newVal;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
