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
      console.log('O produto ${this.nome} custa ${this.preco} e possui ${this.quantidade}')
    }	
 }
 
 let caneta = new Produto("Caneta", 2, 5)