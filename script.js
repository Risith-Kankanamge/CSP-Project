calorieGoal = 2000;

let totalCaloriesConsumed = 0;
let totalCaloriesBurned = 0;
updateDisplay();

function logCalories() {
    calorieInput = document.getElementById('calorieInput').value;
    if (calorieInput) {
        totalCaloriesConsumed += parseInt(calorieInput);
        updateDisplay();
    }
}

function logBurn() {
    burnInput = document.getElementById('burnInput').value;
    if (burnInput) {
        totalCaloriesBurned += parseInt(burnInput);
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('caloriesConsumed').textContent = totalCaloriesConsumed;
    document.getElementById('caloriesBurned').textContent = totalCaloriesBurned;

    netCalories = totalCaloriesConsumed - totalCaloriesBurned;
    progressPercent = Math.min((netCalories / calorieGoal) * 100, 100);
    document.getElementById('progress').style.width = `${progressPercent}%`;

    if (netCalories >= calorieGoal) {
        alert("Congratulations! You've reached your daily calorie goal!");
    }
}

function resetTracker() {
    totalCaloriesConsumed = 0;
    totalCaloriesBurned = 0;
    updateDisplay();
}