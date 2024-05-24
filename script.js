const items = [
    {
        id: 0,
        nome: 'Produto 1',
        img: 'Roupa.jpg',
        quantidade: 0
    },
        
    {
        id: 1,
        nome: 'Produto 2',
        img: 'Roupa.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Produto 3',
        img: 'Roupa.jpg',
        quantidade: 0
    },
]
document.addEventListener("DOMContentLoaded", function() {
var links = document.querySelectorAll('.produto-single a');

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();

        // Feedback visual
        this.textContent = 'Adicionado!';
        this.style.backgroundColor = 'gray';
        this.style.pointerEvents = 'none';

        setTimeout(() => {
            this.textContent = 'Adicionar ao carrinho';
            this.style.backgroundColor = '#385898';
            this.style.pointerEvents = 'auto';
        }, 2000);
    });
});
});

atualizarCarrinho = () => {
    var conteinerCarrinho = document.getElementById('carrinho-content');
    conteinerCarrinho.innerHTML = '';
    items.map((val) => {
        if (val.quantidade > 0) {
            conteinerCarrinho.innerHTML += `
            <div class="container">
                <div class="info-single-checkout">
                    <p style="float:left;">` + val.nome + `</p>
                    <p style="float:right;">` + val.quantidade + `</p>
                    <div style="clear:both;"></div>
                    <hr>
                </div>
            </div>
            `;
        }
    });
};

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        let key = this.getAttribute('key');
        if (key !== null) {
            items[key].quantidade++;
            atualizarCarrinho();
        }
        return false;
    });
};

document.getElementById('carrinho').addEventListener('click', function () {
    var carrinhoContent = document.getElementById('carrinho-content');
    if (carrinhoContent.style.display === 'block') {
        carrinhoContent.style.display = 'none';
    } else {
        carrinhoContent.style.display = 'block';
    }
});