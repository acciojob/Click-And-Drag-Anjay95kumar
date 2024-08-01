document.addEventListener("DOMContentLoaded", () => {
    let draggables = document.querySelectorAll(".image");
    let draggedElement = null;

    draggables.forEach(draggable => {
      
        draggable.setAttribute('draggable', true);

        draggable.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
            draggedElement.style.opacity = 0.5;
        });

        draggable.addEventListener("dragend", (e) => {
            e.target.style.opacity = 1;
        });

        ["dragover", "dragenter", "drop"].forEach(drag => {
            draggable.addEventListener(drag, (e) => {
                e.preventDefault();

                if (drag === "drop") {
                    const targetElement = e.target;

                    if (targetElement !== draggedElement) {
                        
                        const draggedBgImage = getComputedStyle(draggedElement).backgroundImage;
                        const targetBgImage = getComputedStyle(targetElement).backgroundImage;
                        
                        draggedElement.style.backgroundImage = targetBgImage;
                        targetElement.style.backgroundImage = draggedBgImage;

                      
                        const draggedText = draggedElement.innerText;
                        const targetText = targetElement.innerText;

                        draggedElement.innerText = targetText;
                        targetElement.innerText = draggedText;
                    }
                }
            });
        });
    });
});
