// let faq = document.getElementsByClassName("vragen");
// let i;
//
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let body = this.nextElementSibling;
//         if (body.style.display === "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//     });
// }

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