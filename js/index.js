// Config
anuncio("O site ainda está em desenvolvimento")

// 
header()
footer()

function anuncio(textoanuncio) {
    let anuncio = document.getElementById("anuncio");
    anuncio.innerHTML = textoanuncio;
}

function header() {
    let cabecalho = document.querySelector("header");
    cabecalho.innerHTML = `        <nav>
            <a href="index.html"><img data-src="img/logo.jpg " alt="Logo da igreja" class="lozad"></a>

            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li>|</li>
                <li><a href="fotos.html">Fotos</a></li>

            </ul>
        </nav>`;
}

function footer() {
    let rodape = document.querySelector("footer");
    rodape.innerHTML = `<p>Copyright © Seara do Senhor 2024 – Todos os direitos reservados</p>`;
}

const observer = lozad();
observer.observe();