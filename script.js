
document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultDisplay = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let score = 0;
            const q1 = quizForm.q1.value;
            const q2 = quizForm.q2.value;
            const q3 = quizForm.q3.value.trim().toLowerCase();
            const dropAnswer = document.querySelector(".droppable").getAttribute("data-filled");

            if (q1 === "b") score++;
            if (q2 === "a") score++;
            if (q3 === "bonjour") score++;
            if (dropAnswer === "apple") score++;

            localStorage.setItem("lastQuizScore", score);
            resultDisplay.textContent = `You scored ${score}/4`;
        });
    }

    // Drag and Drop logic
    const draggables = document.querySelectorAll(".draggable");
    const droppables = document.querySelectorAll(".droppable");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", draggable.dataset.answer);
        });
    });

    droppables.forEach(droppable => {
        droppable.addEventListener("dragover", e => e.preventDefault());

        droppable.addEventListener("drop", e => {
            const answer = e.dataTransfer.getData("text/plain");
            droppable.textContent = answer;
            droppable.setAttribute("data-filled", answer);
        });
    });
});
