let content1 = document.getElementById("conteudo1")
let content2 = document.getElementById("conteudo2")
let content3 = document.getElementById("conteudo3")

content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "none";

let links = document.getElementsByClassName('meuLink');

console.log(links.id);


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
    });
}

function renderizar(id) {
    if (id === 1) {
        content1.style.display = 'block';
        content2.style.display = "none";
        content3.style.display = "none";
    } else if (id === 2) {
        content2.style.display = 'block';
        content3.style.display = "none";
        content1.style.display = 'none';
    } else {
        content3.style.display = 'block';
        content1.style.display = 'none';
        content2.style.display = 'none'
    }

}










