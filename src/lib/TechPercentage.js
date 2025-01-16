function animateProgressBar(targetPercentage, barId, percentageId, duration = 1000) {
    const percentageElement = document.getElementById(percentageId);
    const progressBar = document.getElementById(barId);

    let currentPercentage = 0;
    const increment = targetPercentage / (duration / 10);

    const interval = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(interval);
        }
        percentageElement.textContent = `${Math.floor(currentPercentage)}%`;
        progressBar.style.width = `${currentPercentage}%`;
    }, 10);
}

document.addEventListener("DOMContentLoaded", function () {
    animateProgressBar(85, "progressBar85", "percentage85");
    animateProgressBar(90, "progressBar90", "percentage90");
    animateProgressBar(98, "progressBar98", "percentage98");
    animateProgressBar(50, "progressBar50", "percentage50");
    animateProgressBar(50, "progressBar50-2", "percentage50-2");
});