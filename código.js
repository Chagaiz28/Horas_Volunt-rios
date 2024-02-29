function onSubmitForm(e) {
  // Obtém os valores do formulário do evento
  var formResponse = e.response;

  // Obtém as respostas individuais do formulário
  var itemResponses = formResponse.getItemResponses();

  var email = "";

  // Percorre todas as respostas para encontrar a resposta de e-mail
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle(); // Obtém o título da pergunta

    // Verifica se a pergunta é sobre o e-mail
    if (question === 'Digite seu e-mail do Inatel') {
      // Obtém o e-mail da resposta
      email = itemResponse.getResponse().emailAddress;
      break;
    }
  }

  // Chama a função myFunction com o email extraído como argumento
  myFunction(email);
}

function myFunction(email) {
  // Verifica se o e-mail foi submetido
  if (!email || email.length === 0) {
    console.error('Erro: E-mail não fornecido.');
    return;
  }

  // Abre a planilha
  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1wrGmGrrLAeHIsWSqqp8lYAXF-3Nih4Eo6oVEmnmZ5h0/edit#gid=0');
  var sheet = ss.getSheetByName('Página1');

  // Verifica se o e-mail já existe na planilha
  var values = sheet.getRange('A:A').getValues();
  var emailExiste = false;
  var linhaEmail;

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === email) {
      emailExiste = true;
      linhaEmail = i + 1; // Ajusta o índice baseado em 0 para baseado em 1
      break;
    }
  }

  // Se o e-mail existir, atualiza as horas
  if (emailExiste) {
    var horasExistentes = parseFloat(sheet.getRange(linhaEmail, 2).getValue());
    var horas = horasExistentes + 1.5;
    sheet.getRange(linhaEmail, 2).setValue(horas);
  } else {
    // Se o e-mail não existir, adiciona uma nova linha com as horas iniciais
    var ultimaLinha = sheet.getLastRow() + 1;
    sheet.getRange(ultimaLinha, 1).setValue(email); // Armazena o email na coluna A
    sheet.getRange(ultimaLinha, 2).setValue(1.5);    // Define as horas iniciais na coluna B
  }
}
