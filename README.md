# Projeto de Registro de Horas

Este projeto consiste em um script Google Apps Script que automatiza o processo de coleta e registro de horas de serviço e viagem de funcionários ou estudantes, utilizando um formulário do Google Forms e armazenando os dados em uma planilha do Google Sheets.

## Funcionalidades

- **Coleta de Respostas**: O script coleta automaticamente as respostas submetidas através de um formulário do Google Forms.
- **Processamento de Dados**: Extrai informações específicas das respostas, como e-mail do usuário, horário de serviço prestado e horas de viagem.
- **Registro em Planilha**: Os dados processados são registrados em uma planilha do Google Sheets, atualizando as horas acumuladas por usuário ou adicionando novos registros conforme necessário.

## Como Funciona

1. **Submissão do Formulário**: O usuário preenche o formulário do Google Forms, fornecendo seu e-mail, o horário em que prestou o serviço e a quantidade de horas de viagem realizadas.
2. **Execução do Script**: Quando o formulário é submetido, o script `onSubmit` é acionado automaticamente.
3. **Processamento dos Dados**: O script processa as respostas mais recentes, identifica as informações relevantes e prepara os dados para registro.
4. **Atualização da Planilha**: Com base nas informações coletadas, o script verifica se o usuário já possui um registro na planilha. Se sim, atualiza as horas acumuladas; se não, cria um novo registro.

## Configuração

Para configurar este projeto, você precisará:

1. **Criar um Formulário do Google Forms**: O formulário deve incluir campos para o e-mail do usuário, o horário de serviço e as horas de viagem.
2. **Criar uma Planilha do Google Sheets**: Esta planilha será usada para registrar os dados coletados.
3. **Configurar o Script**: Abra o editor de scripts do Google Apps Script vinculado ao seu formulário e cole o código fornecido. Substitua os IDs do formulário e da planilha nos lugares apropriados no script.

## Execução

O script é executado automaticamente cada vez que uma resposta ao formulário é submetida. Não é necessária nenhuma ação manual para processar as respostas.

## Personalização

Você pode personalizar o script para atender a necessidades específicas, como alterar os campos do formulário, ajustar a lógica de processamento de dados ou modificar a estrutura da planilha de destino.
