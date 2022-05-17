console.log('Iniciando o arquivo JS');

function validaCPF(cpf){
  return false;
}

function validacao(){
  console.log('Iniciando validação CPF');

  var cpf = document.getElementById('cpf_digitado').value;
  console.log(cpf)

  var resultadoValidacao = validaCPF(cpf);

  if(resultadoValidacao) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display ='block'
  }

}
