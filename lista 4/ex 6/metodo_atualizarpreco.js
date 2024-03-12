class Produto {
    nome;
    preco;
    quantidade;
     
    construtor(valornome, valorPreco, valorQuantidade){
       
 
       this.nome = valornome
       this.preco =  valorPreco
       this.quantidade = valorQuantidade
    }
     
    vender(qtdeVendida) {
       if(qtdeVendida > this.qtde) {
         console.log('estoque insuficiente')
         return   
       }   
    
       this.qtde -= qtdeVendida
    }
   
    Repor(qtdeResposta) {
       this.qtde += qtdeResposta
  
    }
 
    mostrarEstoque(){
      console.log('O pdrotuo ${this.nome} custa ${this.preco} e possui ${this.quantidade}')
    }
    
    atualizarPreco(novoValor){
       this.preco = novoValor
    }  	
 }
 
 let caneta = new Produto("Caneta", 2, 5)
 
 caneta.atualizarPreco(2.5)