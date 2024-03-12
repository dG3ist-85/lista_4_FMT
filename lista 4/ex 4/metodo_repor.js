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
 }
 
 let caneta = new Produto("Caneta", 2, 5)
 console.log(caneta)
 Vender(10)
 Repor(10)