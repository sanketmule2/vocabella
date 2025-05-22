document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("quiz-result");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            let score = 0;

            if (form.q1.value === "b") score++;
            if (form.q2.value === "a") score++;
            if (form.q3.value.trim().toLowerCase() === "bonjour") score++;
            const dropped = document.querySelector(".droppable").getAttribute("data-filled");
            if (dropped === "apple") score++;

            result.textContent = `You scored ${score}/4`;
        });
    }

    document.querySelectorAll(".draggable").forEach(item => {
        item.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text", item.dataset.answer);
        });
    });

    document.querySelectorAll(".droppable").forEach(box => {
        box.addEventListener("dragover", e => e.preventDefault());
        box.addEventListener("drop", e => {
            const answer = e.dataTransfer.getData("text");
            box.textContent = answer;
            box.setAttribute("data-filled", answer);
        });
    });
});
