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
 
 let caneta = new Produto("Caneta", 2, 5) // intanciar(criando um objeto)
 
 caneta.atualizarPreco(2.5)
 
 class pessoa {
    nome;
    idade;
    profissao;
 
    construtor(nome, idade, profissao) {
      this.nome =  nome
      this.idade =idade
      this.profissao = profissao
    }
 
 }