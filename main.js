const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  makeTimeForTimer() {
    const deltaTime = this.targetDate - Date.now();
    const timeForTimer = this.getTimeComponent(deltaTime);
    return timeForTimer;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Nov 17, 2020"),
});

function updateTimer() {
  refs.days.textContent = timer.makeTimeForTimer().days;
  refs.hours.textContent = timer.makeTimeForTimer().hours;
  refs.mins.textContent = timer.makeTimeForTimer().mins;
  refs.secs.textContent = timer.makeTimeForTimer().secs;
}

setInterval(updateTimer, 1000);
