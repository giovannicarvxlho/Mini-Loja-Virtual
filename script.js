const items = [
    {
        id: 0,
        nome: 'Amaciante',
        img: 'produtosDeLimpeza.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Omox',
        img: 'produtosDeLimpeza.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Japyzão',
        img: 'produtosDeLimpeza.jpg',
        quantidade: 0
    }
]

function inicializarLoja() {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
        
        </div>

        `;
    })          
}

inicializarLoja();

function atualizarCarrinho() {
    var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = "";
        items.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML+= `
            
            <div class="info-single-checkout">
            <p style="float:left;">Produto: `+val.nome+`</p>
            <p style="float:right;">Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>

            </div>

            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

}
