let vragen = document.getElementsByClassName("vragen");
for (const box of vragen) {
    box.addEventListener('click', function handleClick() {
        let vraag = box.nextElementSibling
        if (vraag.style.display === 'none') {
            vraag.style.display = 'block';
        } else {
            vraag.style.display = 'none';
        }
    });}