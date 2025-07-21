lista = [1,3,5,6,7]

function acharNumero(lista,numero){
  inicio = 0
  fim = lista.length - 1

  while(inicio <= fim){
    meio = Math.floor((inicio + fim) / 2)
    if(lista[meio] == numero){
      return numero
    }
    if(lista[meio] > numero){
      fim = meio - 1
    }
    else{
      inicio = meio  +1
    }
  }
}

console.log(acharNumero(lista,3))