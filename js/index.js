footer()
header()

function header() {
    let cabecalho = document.querySelector("header");
    cabecalho.innerHTML = `        <nav>
            <a href="/index.html"><img src="/img/logo.jpg" alt="Logo da igreja" class="lozad"></a>

            <ul>
                <li><a href="/index.html">Inicio</a></li>
                <li>|</li>
                <li><a href="/fotos.html">Fotos</a></li>
                <li>|</li>
                <button onclick="ministerios()">Ministério</button>
            </ul>
        </nav>
        <ul id="listaministerio" class="tirar">
            <li><a href="#">Aviva</a></li>
            <li>|</li>
            <li><a href="#">Emanuel</a></li>
        </ul>`;
}

function footer() {
    let rodape = document.querySelector("footer");
    rodape.innerHTML = `<p>Copyright © Seara do Senhor 2024 – Todos os direitos reservados</p>`;
}

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

const observer = lozad();
observer.observe();