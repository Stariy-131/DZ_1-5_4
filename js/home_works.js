const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^\w+@gmail\.com$/;

gmailBtn.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "Gmail found";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerHTML = "Gmail not found";
        gmailResult.style.color = "red";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const block = document.querySelector(".child_block");

    let positionX = 0;

    function moveBlock() {
        positionX += 0.5;
        block.style.transform = `translateX(${positionX}px)`;

        if (positionX < 449) {
            requestAnimationFrame(moveBlock);
        }
    }

    moveBlock();
    
});