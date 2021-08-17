// desafio de operações matemáticas
 // receber nome, idade, altura em centimetros = converter altura pra metros, calcular imc, classificar imc, ao final, exibir os resultados
 
 //receber nome, idade, altura em cm:
 var nome = prompt('Informe o seu nome: ')
 var idade = Number(prompt('Informe sua idade: '))
 var altura = Number(prompt('Informe sua altura em cm: '))
 var peso = Number(prompt('Informe o seu peso: '))

 // converter altura em cm para m
 var newAltura = altura / 100
 // calculo de imc:
 var imc = peso / (newAltura ** 2)
 // classificação com base no IMC:
 if(imc < 16){
     document.write('<p>Seu peso está muito baixo e grave</p>')
 }
 else if(imc >= 16 && imc < 16.99){
    document.write('<p>baixo peso grave</p>')
 }
 else if(imc >= 17 && imc < 18.49){
    document.write('<p>baixo peso</p>')
 }
 else if(imc >= 18.50 && imc < 24.99){
    document.write('<p>peso normal</p>')
 }
 else if(imc >= 25 && imc < 29.99){
    document.write('<p>sobrepeso</p>')
 }
 else if(imc >= 30 && imc < 34.99){
    document.write('<p>obesidade grau 1</p>')
 }
 else if(imc >= 35 && imc < 39.99){
    document.write('<p>Obesidade grau 2</p>')
 }
 else if(imc >= 40){
    document.write('<p>Obesidade grau 3</p>')
 }
 

