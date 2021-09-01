var types = ["Discussion", "Key Assignment", "Weekly Assignment", "Midterm Project", "Final Project", "Make-Your-Own"];
var subjects = ["Surviving the Zombie Apocalypse", "Shark Behavior", "Coffee Types", "Migratory Birds", "The Number e", "The Physics of Diving", "Whale Communication", "Unsolved Murders", "Memory", "Plausibility of Unicorns", "Weird State Laws", "Intuition", "Intrinsic vs Extrinsic Motivation", "Individual vs Group Learning", "The Impact of Women on World History", "Artificial Intelligence", "Magic Systems"];

function generateType() {
  let selectedType = types[Math.floor(Math.random() * types.length)];
  document.getElementById("type").innerHTML = selectedType;
}

function generateSubject() {
  let selectedSubject = subjects[Math.floor(Math.random() * subjects.length)];
  document.getElementById("subject").innerHTML = selectedSubject;
}

function generateExample() {
  document.getElementById("example").innerHTML = "Under Construction";
}

var timeleft = 91;
var countdownTimer;

function startTimer() {
  	countdownTimer = setInterval(timer, 1000);
}

function timer() {
  timeleft=timeleft-1;
  if(timeleft < 0) {
  	clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = `<button type="button" class="btn btn-lg btn-secondary" onclick="resetTimer();">Reset</button>`
    return;
  }
  document.getElementById("timer").innerHTML = timeleft;
  }

  function resetTimer() {
  	timeleft = 91;
    countdownTimer = setInterval(timer, 1000);
    timer();
  }
