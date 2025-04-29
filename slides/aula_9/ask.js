// --- START OF FILE ask.js ---
const ask = {
  1: {
    type: "mult",
    ask: "Qual cláusula é usada para filtrar resultados DEPOIS que as funções agregadas e o `GROUP BY` foram aplicados?",
    options: {
      1: "WHERE",
      2: "HAVING", // Correta
      3: "ON",
      4: "FILTER",
    },
    correct: 2,
  },
  2: {
    type: "mult",
    ask: "Qual tipo de `JOIN` garante que TODAS as linhas da tabela à ESQUERDA da cláusula `JOIN` sejam incluídas no resultado, mesmo que não haja correspondência na tabela à direita?",
    options: {
      1: "INNER JOIN",
      2: "RIGHT JOIN",
      3: "LEFT JOIN", // Correta
      4: "FULL OUTER JOIN",
    },
    correct: 3,
  },
  3: {
    type: "mult",
    ask: "Para encontrar clientes que fizeram *pelo menos um* pedido, qual operador é geralmente mais eficiente usar com uma subquery correlacionada?",
    options: {
      1: "IN",
      2: "ANY",
      3: "EXISTS", // Correta
      4: "=",
    },
    correct: 3,
  },
  4: {
    type: "mult",
    ask: "Ao executar um comando `UPDATE` ou `DELETE`, qual cláusula é **CRUCIAL** para evitar a modificação ou exclusão de **TODAS** as linhas da tabela?",
    options: {
      1: "SET",
      2: "FROM",
      3: "WHERE", // Correta
      4: "ON",
    },
    correct: 3,
  },
  5: {
    type: "mult",
    ask: "Qual comando SQL é usado para confirmar permanentemente as alterações feitas dentro de uma transação?",
    options: {
      1: "BEGIN",
      2: "COMMIT", // Correta
      3: "ROLLBACK",
      4: "SAVEPOINT",
    },
    correct: 2,
  },
};
// --- END OF FILE ask.js ---