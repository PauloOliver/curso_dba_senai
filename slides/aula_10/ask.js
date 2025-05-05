// --- START OF FILE ask.js ---
const ask = {
  // --- Perguntas Originais (1-10) ---
  1: {
    type: "mult",
    ask: "Qual comando DML é usado para adicionar novas linhas a uma tabela?",
    options: { 1: "UPDATE", 2: "SELECT", 3: "INSERT", 4: "DELETE" },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "Qual comando DML é usado para modificar dados em linhas existentes?",
    options: { 1: "INSERT", 2: "UPDATE", 3: "DELETE", 4: "ALTER" },
    correct: 2,
  },
  3: {
    type: "mult",
    ask: "Qual comando DML é usado para remover linhas de uma tabela?",
    options: { 1: "REMOVE", 2: "DROP", 3: "UPDATE", 4: "DELETE" },
    correct: 4,
  },
  4: {
    type: "mult",
    ask: "Na instrução `UPDATE usuarios SET email = 'a@b.c' WHERE id = 5;`, qual parte define a alteração a ser feita?",
    options: { 1: "UPDATE usuarios", 2: "WHERE id = 5", 3: "SET email = 'a@b.c'", 4: "email = 'a@b.c'" },
    correct: 3, // A cláusula SET inteira define a alteração
  },
  5: {
    type: "mult",
    ask: "O que acontece se você executar `DELETE FROM produtos;` (sem cláusula WHERE)?",
    options: {
      1: "Nada, pois falta o WHERE.",
      2: "Um erro de sintaxe.",
      3: "Remove todos os produtos com preço zero.",
      4: "Remove TODAS as linhas da tabela 'produtos'.",
    },
    correct: 4,
  },
  6: {
    type: "mult",
    ask: "Qual é a principal finalidade de usar `BEGIN TRANSACTION` (ou `START TRANSACTION`)?",
    options: {
      1: "Acelerar a consulta SELECT.",
      2: "Iniciar um bloco de operações DML que podem ser confirmadas ou desfeitas juntas.",
      3: "Criar um backup automático da tabela.",
      4: "Verificar a sintaxe dos comandos DML seguintes.",
    },
    correct: 2,
  },
  7: {
    type: "mult",
    ask: "Qual comando finaliza uma transação e torna as alterações permanentes?",
    options: { 1: "ROLLBACK", 2: "END", 3: "COMMIT", 4: "SAVEPOINT" },
    correct: 3,
  },
  8: {
    type: "mult",
    ask: "Qual comando finaliza uma transação e desfaz todas as alterações feitas desde o `BEGIN`?",
    options: { 1: "COMMIT", 2: "UNDO", 3: "REVERT", 4: "ROLLBACK" },
    correct: 4,
  },
  9: {
    type: "mult",
    ask: "Qual é uma boa prática recomendada ANTES de executar um `UPDATE` ou `DELETE` complexo?",
    options: {
      1: "Executar `COMMIT`.",
      2: "Executar um `SELECT` com a mesma cláusula `WHERE` para verificar as linhas afetadas.",
      3: "Aumentar o `timeout` da conexão.",
      4: "Executar `ROLLBACK` preventivamente.",
    },
    correct: 2,
  },
  10: {
    type: "mult",
    ask: "Omitir a lista de colunas em um comando `INSERT INTO tabela VALUES (...)` é geralmente considerado:",
    options: {
      1: "A melhor prática para economizar digitação.",
      2: "Obrigatório para tabelas com chaves primárias.",
      3: "Mais propenso a erros se a ordem das colunas da tabela mudar no futuro.",
      4: "Impossível na maioria dos SGBDs.",
    },
    correct: 3,
  },

  // --- Novas Perguntas (11-25) ---
  11: {
    type: "mult",
    ask: "Ao inserir dados em uma tabela com uma chave primária `AUTO_INCREMENT` ou `SERIAL`, qual valor você geralmente fornece para essa coluna?",
    options: {
      1: "O próximo número sequencial manualmente.",
      2: "Zero (0).",
      3: "O valor `NULL`, `DEFAULT` ou simplesmente omite a coluna da lista.",
      4: "Um valor negativo.",
    },
    correct: 3,
  },
  12: {
    type: "fill",
    ask: "Para atualizar SOMENTE o cliente com `id = 100`, a cláusula essencial é ____ `id = 100`.",
    correct: ["WHERE"], // Aceita apenas "WHERE" (case-insensitive será tratado pelo JS)
  },
  13: {
    type: "mult",
    ask: "Qual comando é geralmente mais rápido para esvaziar COMPLETAMENTE uma tabela, mas não permite `ROLLBACK` fácil e ignora triggers `ON DELETE`?",
    options: { 1: "DELETE FROM tabela", 2: "DROP TABLE tabela", 3: "TRUNCATE TABLE tabela", 4: "UPDATE tabela SET todas_colunas = NULL" },
    correct: 3,
  },
  14: {
    type: "fill",
    ask: "Transações garantem a ________ das operações DML, o que significa 'tudo ou nada'. (Propriedade ACID)",
    correct: ["Atomicidade", "atomicidade"],
  },
  15: {
    type: "mult",
    ask: "Qual é a rede de segurança MAIS fundamental e indispensável contra erros DML acidentais graves?",
    options: {
      1: "Cláusula WHERE bem escrita.",
      2: "Uso constante de Transações.",
      3: "Backups regulares e testados.",
      4: "Validação de dados na aplicação.",
    },
    correct: 3,
  },
  16: {
    type: "fill",
    ask: "Para inserir múltiplas linhas com um único `INSERT`, separamos os conjuntos de valores na cláusula `VALUES` usando ____.",
    correct: ["vírgulas", "virgulas", ","],
  },
  17: {
    type: "mult",
    ask: "Como você atualiza o `email` para 'a@b.c' E a `cidade` para 'Recife' de um usuário com `id = 20` na mesma instrução `UPDATE`?",
    options: {
      1: "Precisa de duas instruções UPDATE separadas.",
      2: "`UPDATE Usuarios SET email = 'a@b.c', cidade = 'Recife' WHERE id = 20;`",
      3: "`UPDATE Usuarios SET email = 'a@b.c' AND cidade = 'Recife' WHERE id = 20;`",
      4: "`UPDATE Usuarios (email, cidade) VALUES ('a@b.c', 'Recife') WHERE id = 20;`",
    },
    correct: 2,
  },
  18: {
    type: "fill",
    ask: "Tentar deletar um registro que é referenciado por uma chave ________ em outra tabela geralmente resulta em erro, a menos que exista uma regra como `ON DELETE CASCADE`.",
    correct: ["estrangeira", "FOREIGN KEY", "foreign key"],
  },
  19: {
    type: "mult",
    ask: "Qual destes comandos SQL pertence a uma categoria DIFERENTE do DML?",
    options: { 1: "INSERT", 2: "UPDATE", 3: "DELETE", 4: "CREATE TABLE" },
    correct: 4, // CREATE TABLE é DDL
  },
  20: {
    type: "fill",
    ask: "Ao usar `UPDATE` ou `DELETE` para afetar uma ÚNICA linha específica de forma segura, a melhor prática é filtrar pela coluna de chave ________ na cláusula `WHERE`.",
    correct: ["primária", "primaria", "PRIMARY KEY", "primary key"],
  },
  21: {
    type: "mult",
    ask: "Em muitos SGBDs, se você executar um comando DML sem um `BEGIN` explícito, ele é tratado como:",
    options: {
      1: "Um erro, pois `BEGIN` é sempre obrigatório.",
      2: "Uma transação implícita que é automaticamente confirmada (auto-commit) se bem-sucedida.",
      3: "Parte da última transação que foi explicitamente aberta.",
      4: "Uma operação que não pode ser desfeita com `ROLLBACK`.",
    },
    correct: 2,
  },
  22: {
    type: "fill",
    ask: "Para incrementar o valor da coluna `Contador` em 1 para uma linha específica, você usaria `UPDATE tabela SET Contador = Contador + ____ WHERE condicao;`",
    correct: ["1"],
  },
  23: {
    type: "mult",
    ask: "Qual boa prática DML é crucial para rastrear 'quem fez o quê e quando' no banco de dados, especialmente para auditoria?",
    options: {
      1: "Usar sempre `WHERE`.",
      2: "Realizar Backups diários.",
      3: "Implementar Logging ou Auditoria das alterações.",
      4: "Utilizar Transações para todas as operações.",
    },
    correct: 3,
  },
  24: {
    type: "fill",
    ask: "Dentro de uma transação longa, você pode definir um ________ `nome_ponto` para permitir um `ROLLBACK TO nome_ponto;` parcial.",
    correct: ["SAVEPOINT", "savepoint"],
  },
  25: {
    type: "mult",
    ask: "Definir `ON DELETE CASCADE` em uma chave estrangeira pode ser útil, mas também perigoso porque:",
    options: {
      1: "Torna os comandos `DELETE` muito lentos.",
      2: "Impede o uso de `ROLLBACK` para esses `DELETE`s.",
      3: "Pode causar a exclusão automática e inesperada de linhas em tabelas relacionadas.",
      4: "É incompatível com a maioria dos SGBDs modernos.",
    },
    correct: 3,
  },
};
// --- END OF FILE ask.js ---