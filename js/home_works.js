const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^\w+@gmail\.com$|^\w+@mail\.ru$|^\w+@yandex\.ru$|^\w+@email\.com$/;

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
    const box = document.querySelector(".parent_block");
    const block = document.querySelector(".child_block");



    const offsetWidth = box.clientWidth - block.clientWidth;
    const offsetHeight = box.clientHeight - block.clientHeight;

    let positionX = 0;
    let positionY = 0;

    function moveBlock() {
        block.style.transform = `translate(${positionX}px, ${positionY}px)`;

        if (positionX < offsetWidth && positionY === 0) { 
            positionX += 3;
        } 
        else if (positionX >= offsetWidth && positionY < offsetHeight) { 
            positionY += 3;
        } 
        else if (positionX > 0 && positionY >= offsetHeight) {
            positionX -= 3;
        } 
        else if (positionX <= 0 && positionY > 0) {
            positionY -= 3;
        }
        requestAnimationFrame(moveBlock);
        
    }
    moveBlock();
    
});
