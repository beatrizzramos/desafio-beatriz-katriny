class CaixaDaLanchonete {

    cardapio = [
        {'cafe', {descricao: 'Café', valor: 3.0}},
        {'chantily', {descricao: 'Chantily (extra do Café)', valor: 1.5}},
        {'suco', {descricao: 'Suco Natural', valor: 6.2}},
        {'sanduiche', {descricao: 'Sanduíche', valor: 6.5}},
        {'queijo', {descricao: 'Queijo (extra do Sanduiche)', valor: 2.0}},
        {'salgado', {descricao: 'Salgado', valor: 7.25}},
        {'combo1', {descricao: '1 Suco e 1 Sanduíche', valor: 9.5}},
        {'combo2', {descricao: '1 Café e 1 Sanduíche', valor: 7.5}},
    ]
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.metodosDePagamento(metodoDePagamento))
        return "Forma de pagamento inválida";
    }

    if (itens.length == 0) {
        return 'Não há itens no carrinho de compra!';
    }

    itens.forEach(item => {
        var itemFormatado = item.split(',');
        var quantidade = parseInt(itemFormatado [1]);
        if (quantidade == 0){
            quantidadeInvalida = true;
        }

        var nomeItem = itemFormatado[0];
        carrinhoCompras.push(nomeItem);
        if (itemFormatado.length < 2){
            itemInvalido = true;   
        }

        var valorItem = cardapio[nomeItem];
        if (valorItem == null){
            cardapioInvalido = true;
        }

        total += valorItem * quantidade;
    });

    if (carrinhoCompras.includes('queijo') && !carrinhoCompras.includes('sanduiche')){
        return "Item extra não pode ser pedido sem o principal";
    }

    if (carrinhoCompras.includes('chantily') && !carrinhoCompras.includes('cafe')){
        return "Item extra não pode ser pedido sem o principal";
    }

    if (cardapioInvalido){
        return "Item inválido!";
    }

    if (itemInvalido) {
        return "Item inválido!";
    }

        switch (metodoDePagamento){
            case 'dinheiro':
                total *=0.95;
                break;
                case 'debito':
                    total;
                    break;
                    case 'credito':
                        total *=1.03
                        break;
        }

        return 'R$ ${total.toFixed(2).replace(".",",")}';
    }
}

export { CaixaDaLanchonete };
