const listaministerio = document.querySelector("#listaministerio");

function ministerios() {
    if (listaministerio.classList.contains("tirar")) {
        listaministerio.classList.remove("tirar");
        listaministerio.classList.add("ajustar")
    } else {
        listaministerio.classList.add("tirar");
        listaministerio.classList.remove("ajustar");
    }
}