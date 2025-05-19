// --- START OF FILE ask_sp_triggers.js --- (Exemplo com 5, expandir para 25)
const ask_sp_triggers = {
  1: {
    type: "mult",
    ask: "Qual é a principal vantagem de usar uma Stored Procedure para uma tarefa SQL complexa e repetitiva?",
    options: { 1: "Garante que o código nunca precisará ser alterado.", 2: "Reduz o tráfego de rede e permite reutilização de código.", 3: "Torna o debugging mais fácil que na aplicação.", 4: "Aumenta a portabilidade entre diferentes SGBDs." },
    correct: 2,
  },
  2: {
    type: "mult",
    ask: "Em uma Stored Procedure, um parâmetro declarado como `IN nome_param TIPO` serve para:",
    options: { 1: "Retornar um valor da procedure para o chamador.", 2: "Passar um valor do chamador para dentro da procedure.", 3: "Permitir que a procedure modifique o valor e o retorne.", 4: "Declarar uma variável local na procedure." },
    correct: 2,
  },
  3: {
    type: "mult",
    ask: "Um Trigger é um bloco de código SQL que é executado:",
    options: { 1: "Manualmente pelo DBA usando o comando CALL.", 2: "Automaticamente em resposta a um evento DML (INSERT, UPDATE, DELETE) em uma tabela.", 3: "Apenas quando uma função específica é chamada.", 4: "Em intervalos de tempo pré-definidos (como um job)." },
    correct: 2,
  },
   4: {
    type: "mult",
    ask: "Dentro de um trigger `FOR EACH ROW` disparado por um `UPDATE`, como você acessaria o valor ANTIGO da coluna `email`?",
    options: { 1: "CURRENT.email", 2: "NEW.email", 3: "OLD.email", 4: "PREVIOUS.email" },
    correct: 3,
  },
   5: {
    type: "complete",
    ask: "Para executar uma Stored Procedure chamada `ObterDetalhesPedido`, você usaria o comando _ `ObterDetalhesPedido();`",
    correct: ["CALL", "call"],
  }
};
// --- END OF FILE ask_sp_triggers.js ---