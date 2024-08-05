function onSubmit() {
  console.log("Função onSubmit chamada"); // Log para depuração
  var form = FormApp.openById('1C8E2eEc2tyb-J-uyj1x-IVt__3jYRpAu9ciDiXWRrzo');
  var responses = form.getResponses();
  var latestResponse = responses[responses.length - 1];
  var itemResponses = latestResponse.getItemResponses();
  
  var email = '';
  var horarioServico = ''; // Variável para armazenar a resposta da hora do serviço
  var horasviagem = ''; // Variável para armazenar a resposta da quantidade de horas de viagem
  for (var i = 0; i < itemResponses.length; i++) {
    var title = itemResponses[i].getItem().getTitle().toLowerCase();
    var response = itemResponses[i].getResponse();
    if (title == 'digite seu e-mail do inatel') {
      email = response.trim().toLowerCase();
    } else if (title == 'marque a hora que prestou o serviço') {
      horarioServico = response.trim();
    } else if (title == 'assinale a quantidade de horas que você realizou neste dia') {
      horasviagem = response.trim();
    }
  }

  var planilha = SpreadsheetApp.openById('1wrGmGrrLAeHIsWSqqp8lYAXF-3Nih4Eo6oVEmnmZ5h0');
  var sheet = planilha.getSheetByName('Página1'); 
  var dados = sheet.getDataRange().getValues();
  var horaInicial = 1.5; // Hora inicial padrão
  
  if (horarioServico === '8h' || horarioServico === '10h') {
    horaInicial = 2;
  }

  if (horasviagem === '2') {
        horaInicial = 2;
    } else if (horasviagem === '4'){
        horaInicial = 4;
    } else if (horasviagem === '6'){
        horaInicial = 6;
    } else if (horasviagem === '8'){
        horaInicial = 8;
    } else if (horasviagem === '10'){
        horaInicial = 10;
    }
    
  console.log("Dados da planilha carregados, número de linhas: " + dados.length); // Log para depuração
  
  if (dados.length <= 1) {
    sheet.appendRow([email, horaInicial.toFixed(2).replace('.', ',')]);
    console.log("Adicionando primeira linha para: " + email); // Log para depuração
    return; // Encerra a função após adicionar a primeira linha
  }
  
  var emailExiste = false;
  var rowIndex = -1;

  for (var i = 1; i < dados.length; i++) {
    if (dados[i][0].toLowerCase().trim() == email) {
      emailExiste = true;
      rowIndex = i;
      break;
    }
  }

  if (emailExiste) {
    var horasAtuais = parseFloat(dados[rowIndex][1].replace(',', '.'));
    console.log("Atualizando horas para: " + email + ", Horas atuais: " + horasAtuais + ", Novas horas: " + (horasAtuais + horaInicial)); // Log para depuração
    sheet.getRange(rowIndex + 1, 2).setValue((horasAtuais + horaInicial).toFixed(2).replace('.', ','));
  } else {
    console.log("Adicionando nova linha para: " + email); // Log para depuração
    sheet.appendRow([email, horaInicial.toFixed(2).replace('.', ',')]);
  }
}function onSubmit() {
  console.log("Função onSubmit chamada"); // Log para depuração
  var form = FormApp.openById('1C8E2eEc2tyb-J-uyj1x-IVt__3jYRpAu9ciDiXWRrzo');
  var responses = form.getResponses();
  var latestResponse = responses[responses.length - 1];
  var itemResponses = latestResponse.getItemResponses();
  
  var email = '';
  var horarioServico = ''; // Variável para armazenar a resposta da hora do serviço
  var horasviagem = ''; // Variável para armazenar a resposta da quantidade de horas de viagem
  for (var i = 0; i < itemResponses.length; i++) {
    var title = itemResponses[i].getItem().getTitle().toLowerCase();
    var response = itemResponses[i].getResponse();
    if (title == 'digite seu e-mail do inatel') {
      email = response.trim().toLowerCase();
    } else if (title == 'marque a hora que prestou o serviço') {
      horarioServico = response.trim();
    } else if (title == 'assinale a quantidade de horas que você realizou neste dia') {
      horasviagem = response.trim();
    }
  }

  var planilha = SpreadsheetApp.openById('1wrGmGrrLAeHIsWSqqp8lYAXF-3Nih4Eo6oVEmnmZ5h0');
  var sheet = planilha.getSheetByName('Página1'); 
  var dados = sheet.getDataRange().getValues();
  var horaInicial = 1.5; // Hora inicial padrão
  
  if (horarioServico === '8h' || horarioServico === '10h') {
    horaInicial = 2;
  }

  if (horasviagem === '2') {
        horaInicial = 2;
    } else if (horasviagem === '4'){
        horaInicial = 4;
    } else if (horasviagem === '6'){
        horaInicial = 6;
    } else if (horasviagem === '8'){
        horaInicial = 8;
    } else if (horasviagem === '10'){
        horaInicial = 10;
    }
    
  console.log("Dados da planilha carregados, número de linhas: " + dados.length); // Log para depuração
  
  if (dados.length <= 1) {
    sheet.appendRow([email, horaInicial.toFixed(2).replace('.', ',')]);
    console.log("Adicionando primeira linha para: " + email); // Log para depuração
    return; // Encerra a função após adicionar a primeira linha
  }
  
  var emailExiste = false;
  var rowIndex = -1;

  for (var i = 1; i < dados.length; i++) {
    if (dados[i][0].toLowerCase().trim() == email) {
      emailExiste = true;
      rowIndex = i;
      break;
    }
  }

  if (emailExiste) {
    var horasAtuais = parseFloat(dados[rowIndex][1].replace(',', '.'));
    console.log("Atualizando horas para: " + email + ", Horas atuais: " + horasAtuais + ", Novas horas: " + (horasAtuais + horaInicial)); // Log para depuração
    sheet.getRange(rowIndex + 1, 2).setValue((horasAtuais + horaInicial).toFixed(2).replace('.', ','));
  } else {
    console.log("Adicionando nova linha para: " + email); // Log para depuração
    sheet.appendRow([email, horaInicial.toFixed(2).replace('.', ',')]);
  }
}
