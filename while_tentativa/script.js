// 1. Base de dados (10 usuários)
const usuarios = [
  { login: "user1", senha: "1234" },
  { login: "user2", senha: "abcd" },
  { login: "user3", senha: "senha3" },
  { login: "user4", senha: "senha4" },
  { login: "user5", senha: "senha5" },
  { login: "user6", senha: "senha6" },
  { login: "user7", senha: "senha7" },
  { login: "user8", senha: "senha8" },
  { login: "user9", senha: "senha9" },
  { login: "admin", senha: "admin123" }
];

// 2. Controle de tentativas
let tentativas = 3;
let acessoLiberado = false;
let cancelado = false;

// 3. Estrutura do...while
do {
  let login = prompt("Digite seu login:");
  
  // Se usuário cancelar
  if (login === null) {
    cancelado = true;
    break;
  }

  let senha = prompt("Digite sua senha:");
  
  if (senha === null) {
    cancelado = true;
    break;
  }

  // Verifica se existe usuário válido
  let usuarioValido = usuarios.find(user => 
    user.login === login && user.senha === senha
  );

  if (usuarioValido) {
    acessoLiberado = true;
    alert("Acesso Liberado");
  } else {
    tentativas--;
    
    if (tentativas > 0) {
      alert(`Login inválido! Tentativas restantes: ${tentativas}`);
    }
  }

} while (!acessoLiberado && tentativas > 0 && !cancelado);

// 4. Bloqueio do sistema
if (!acessoLiberado && tentativas === 0) {
  alert("SISTEMA BLOQUEADO - Procure o Suporte");
}