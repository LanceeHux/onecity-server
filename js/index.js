let i = true;
function showBtns() {
    let status = i === true ? document.querySelector(".header-buttons").classList.add("show") : document.querySelector(".header-buttons").classList.remove("show");
    i = !i;
}

class Functions {
    takeExam() {
        document.getElementById("questions-container").style.display = "block";
    }
}
const func = new Functions();