🔐 Sistema de Segurança com Bloqueio
📚 Aula 10.2 - Atividade Prática
📌 Descrição

Este projeto simula um sistema de autenticação de alta segurança desenvolvido para a empresa Cyber-SENAI. O objetivo é validar o login de usuários com limite de tentativas, garantindo controle de acesso rigoroso.

🎯 Objetivo

Criar um sistema que:

Permita login com usuário e senha
Limite o número de tentativas a 3
Bloqueie o acesso após erros consecutivos
Utilize o laço do...while para controle do fluxo
⚙️ Funcionalidades
✅ Cadastro de usuários em um array de objetos
🔁 Sistema de tentativas limitadas
🔐 Validação de login e senha
❌ Mensagem de erro com tentativas restantes
🚫 Bloqueio do sistema após 3 falhas
🛑 Cancelamento da operação pelo usuário
🧠 Lógica Utilizada

O sistema utiliza um laço do...while, que garante que o usuário tente fazer login pelo menos uma vez.

O loop continua executando enquanto:

O login não for válido
Ainda houver tentativas disponíveis
O usuário não cancelar a operação
🗂️ Estrutura do Código
usuarios: array com logins e senhas
tentativas: contador iniciado em 3
autenticado: controla sucesso do login
cancelado: verifica se o usuário desistiu
💻 Tecnologias Utilizadas
JavaScript
Funções nativas (prompt, alert)
Estruturas de repetição (do...while)
Métodos de array (find)
▶️ Como Executar
Copie o código para um arquivo .js
Execute no navegador (console) ou em ambiente compatível
Insira login e senha quando solicitado
📢 Mensagens do Sistema
✔️ Acesso Liberado → login correto
⚠️ Tentativas restantes → erro de login
🚫 SISTEMA BLOQUEADO - Procure o Suporte → 3 erros consecutivos
📝 Observação

O uso do do...while é essencial neste projeto, pois garante que o usuário realize ao menos uma tentativa de login antes de qualquer verificação.
