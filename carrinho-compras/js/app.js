
//   let carrinho = [];

//   function adicionar() {
//     const selectProduto = document.getElementById("produto");
//     const produtoSelecionado = selectProduto.value;
//     const quantidadeInput = document.getElementById("quantidade");
//     const quantidade = parseInt(quantidadeInput.value);

//     if (!produtoSelecionado || quantidade <= 0 || isNaN(quantidade)) {
//       alert("Por favor, selecione um produto e informe uma quantidade válida.");
//       return;
//     }

//     const [nomeProduto, preco] = produtoSelecionado.split(" - R$");
//     const precoNumerico = parseFloat(preco);

//     const itemCarrinho = {
//       produto: nomeProduto,
//       preco: precoNumerico,
//       quantidade: quantidade,
//       total: precoNumerico * quantidade,
//     };

//     carrinho.push(itemCarrinho);

//     atualizarCarrinho();
//     quantidadeInput.value = "";
//   }

//   function atualizarCarrinho() {
//     const listaProdutos = document.getElementById("lista-produtos");
//     const valorTotalElement = document.getElementById("valor-total");

//     // Limpa a lista de produtos
//     listaProdutos.innerHTML = "";

//     // Variável para calcular o total geral
//     let valorTotal = 0;

//     // Adiciona cada item do carrinho na lista
//     carrinho.forEach((item, index) => {
//       const produtoHTML = `
//         <section class="carrinho__produtos__produto">
//           <span class="texto-azul">${item.quantidade}x</span> ${item.produto}
//           <span class="texto-azul">R$${item.total.toFixed(2)}</span>
//           <button class="remover" onclick="removerItem(${index})">Remover</button>
//         </section>
//       `;

//       listaProdutos.innerHTML += produtoHTML;
//       valorTotal += item.total;
//     });

//     // Atualiza o valor total no carrinho
//     valorTotalElement.textContent = `R$${valorTotal.toFixed(2)}`;
//   }

//   function removerItem(index) {
//     carrinho.splice(index, 1); // Remove o item pelo índice
//     atualizarCarrinho(); // Atualiza a exibição
//   }

//   function limpar() {
//     document.getElementById("quantidade").value = "";
//     alert("Formulário limpo.");
//   }

let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {

    // Recuperar Valores nome do Produto, Quantidade e Valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Calcuar o preço, nosso subtotal
    let preco = quantidade * valorUnitario;
    
    // Adicionar no carrinho

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> - R$${preco}</span>
        </section>`

    // Atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`

    document.getElementById('quantidade').value = 0;

}



function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}