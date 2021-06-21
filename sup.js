var items = [];
document.querySelector('input[type=submit]').addEventListener('click',()=>
{
   var nomeProduto = document.querySelector('input[name=nome_produto]');
   var precoProduto = document.querySelector('input[name=price]');

    items.push(
       {
           nome: nomeProduto.value,
           valor: precoProduto.value
    });
    /*
    <div class="lista-produto-sigle">
         <h3>A</h3>
         <h3 class="price-product"><span>R$0</span></h3>           
    </div>
    */
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val)
    {
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
        <div class="lista-produto-sigle">        
         <h3>`+val.nome+`</h3>
         <h3 class="price-product"><span>R$`+val.valor+`</span></h3>           
        </div>
        
        `;
    })
    soma = soma.toFixed(2);   
    nomeProduto.value = "";
    precoProduto.value = "";
    let elemSoma = document.querySelector('.soma-produtos h1');
    elemSoma.innerHTML = 'Total: R$'+soma;
      
});

document.querySelector('button[name=Limpar]').addEventListener('click',function()
{
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produtos h1').innerHTML = "R$0";
})
