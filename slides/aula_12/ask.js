// --- START OF FILE ask.js ---
const ask = {
  // --- Original 5 Questions ---
  1: {
    type: "mult",
    ask: "Qual propriedade ACID garante que uma transação seja tratada como uma única unidade indivisível de trabalho ('tudo ou nada')?",
    options: { 1: "Consistência", 2: "Isolamento", 3: "Durabilidade", 4: "Atomicidade" },
    correct: 4,
  },
  2: {
    type: "mult",
    ask: "Qual comando SQL é usado para DESFAZER todas as alterações feitas dentro de uma transação ativa?",
    options: { 1: "COMMIT", 2: "SAVEPOINT", 3: "ROLLBACK", 4: "BEGIN" },
    correct: 3,
  },
  3: {
    type: "mult",
    ask: "O problema de concorrência onde uma transação lê dados modificados por outra transação que AINDA NÃO FOI commitada é chamado de:",
    options: { 1: "Leitura Fantasma (Phantom Read)", 2: "Leitura Não Repetível (Non-Repeatable Read)", 3: "Leitura Suja (Dirty Read)", 4: "Deadlock" },
    correct: 3,
  },
   4: {
    type: "mult",
    ask: "Qual Nível de Isolamento SQL padrão previne Leituras Sujas, mas AINDA PERMITE Leituras Não Repetíveis e Fantasmas?",
    options: { 1: "READ UNCOMMITTED", 2: "READ COMMITTED", 3: "REPEATABLE READ", 4: "SERIALIZABLE" },
    correct: 2,
  },
   5: {
    type: "mult",
    ask: "Um 'Deadlock' ocorre quando:",
    options: {
        1: "Uma transação tenta acessar uma tabela que não existe.",
        2: "O banco de dados fica sem espaço em disco durante uma transação.",
        3: "Duas ou mais transações estão esperando uma pela outra para liberar locks, criando um ciclo de espera.",
        4: "Uma transação é muito longa e o SGBD a cancela automaticamente."
    },
    correct: 3,
  },

  // --- New Questions (6-25) ---
  6: {
    type: "complete",
    ask: "A propriedade ACID que garante que, uma vez commitada, uma transação persiste mesmo em caso de falha do sistema é chamada de _.",
    correct: ["Durabilidade", "durabilidade"],
  },
  7: {
    type: "mult",
    ask: "O comando `SAVEPOINT meu_ponto;` é usado para:",
    options: {
        1: "Confirmar todas as alterações até aquele ponto.",
        2: "Desfazer todas as alterações da transação.",
        3: "Criar um marco dentro de uma transação para um possível rollback parcial.",
        4: "Iniciar uma sub-transação."
    },
    correct: 3,
  },
  8: {
    type: "complete",
    ask: "Para desfazer operações até um savepoint chamado `sp1` e continuar a transação, o comando é `ROLLBACK TO _ sp1;`",
    correct: ["SAVEPOINT", "savepoint"],
  },
  9: {
    type: "mult",
    ask: "A propriedade ACID que assegura que uma transação leve o banco de dados de um estado válido para outro estado válido, respeitando todas as regras de integridade, é a:",
    options: { 1: "Atomicidade", 2: "Consistência", 3: "Isolamento", 4: "Durabilidade" },
    correct: 2,
  },
  10: {
    type: "mult",
    ask: "Se a Transação A lê um dado, a Transação B altera esse mesmo dado e faz COMMIT, e então a Transação A relê o dado e obtém um valor diferente, qual anomalia ocorreu?",
    options: { 1: "Leitura Suja", 2: "Leitura Não Repetível", 3: "Leitura Fantasma", 4: "Deadlock" },
    correct: 2,
  },
  11: {
    type: "complete",
    ask: "O nível de isolamento mais baixo, que permite todas as três anomalias de leitura (suja, não repetível, fantasma), é o `READ _`.",
    correct: ["UNCOMMITTED", "uncommitted"],
  },
  12: {
    type: "mult",
    ask: "Qual Nível de Isolamento oferece a maior proteção contra anomalias de concorrência, garantindo que as transações se comportem como se fossem executadas serialmente?",
    options: { 1: "READ COMMITTED", 2: "REPEATABLE READ", 3: "SERIALIZABLE", 4: "READ UNCOMMITTED" },
    correct: 3,
  },
  13: {
    type: "mult",
    ask: "Um lock do tipo 'Shared (S)' permite que:",
    options: {
        1: "Apenas uma transação leia o recurso.",
        2: "Múltiplas transações leiam o recurso simultaneamente, mas nenhuma escreva.",
        3: "Apenas uma transação escreva no recurso.",
        4: "Múltiplas transações escrevam no recurso simultaneamente."
    },
    correct: 2,
  },
  14: {
    type: "complete",
    ask: "Um lock do tipo _ (X) é necessário para que uma transação possa modificar (UPDATE, DELETE, INSERT) um recurso.",
    correct: ["Exclusivo", "exclusivo", "EXCLUSIVE"],
  },
  15: {
    type: "mult",
    ask: "A 'granularidade' de um lock refere-se a:",
    options: {
        1: "Quanto tempo o lock é mantido.",
        2: "O nível de isolamento da transação que solicitou o lock.",
        3: "O tamanho do recurso que está sendo bloqueado (ex: linha, página, tabela).",
        4: "A prioridade do lock em caso de conflito."
    },
    correct: 3,
  },
  16: {
    type: "mult",
    ask: "Qual é uma estratégia comum dos SGBDs para resolver um deadlock?",
    options: {
        1: "Pausar todas as transações envolvidas e esperar intervenção manual.",
        2: "Escolher uma transação como 'vítima' e fazer seu ROLLBACK.",
        3: "Aumentar o nível de isolamento de todas as transações envolvidas.",
        4: "Ignorar o deadlock, esperando que ele se resolva sozinho."
    },
    correct: 2,
  },
  17: {
    type: "complete",
    ask: "Manter transações o mais _ possível é uma boa prática para reduzir a retenção de locks e melhorar a concorrência.",
    correct: ["curtas", "Curtas", "short", "Short"],
  },
  18: {
    type: "mult",
    ask: "Se a Transação A lê um conjunto de linhas que satisfazem `WHERE condicao`, a Transação B insere uma nova linha que também satisfaz `WHERE condicao` e faz COMMIT, e então a Transação A relê com a mesma condição e vê a nova linha, qual anomalia ocorreu?",
    options: { 1: "Leitura Suja", 2: "Leitura Não Repetível", 3: "Leitura Fantasma", 4: "Lost Update" },
    correct: 3,
  },
  19: {
    type: "mult",
    ask: "Qual propriedade ACID é mais diretamente relacionada ao uso de logs de transação (como o WAL) para recuperação após falhas?",
    options: { 1: "Atomicidade", 2: "Consistência", 3: "Isolamento", 4: "Durabilidade" },
    correct: 4,
  },
  20: {
    type: "complete",
    ask: "A estratégia de controle de concorrência que assume que conflitos são raros e verifica por eles apenas no COMMIT é chamada de controle _.",
    correct: ["Otimista", "otimista"],
  },
  21: {
    type: "mult",
    ask: "Em um nível de isolamento `REPEATABLE READ`, qual das seguintes anomalias é PREVENIDA?",
    options: { 1: "Leitura Fantasma", 2: "Deadlocks", 3: "Leitura Não Repetível", 4: "Todas as anomalias de leitura" },
    correct: 3,
  },
  22: {
    type: "mult",
    ask: "Se um SGBD usa `AUTOCOMMIT` por padrão, cada instrução SQL DML individual é tratada como:",
    options: {
        1: "Parte de uma transação global maior.",
        2: "Uma operação que não pode ser revertida.",
        3: "Sua própria transação implícita, commitada automaticamente se bem-sucedida.",
        4: "Um erro, pois `BEGIN` é sempre necessário."
    },
    correct: 3,
  },
  23: {
    type: "complete",
    ask: "A propriedade ACID que garante que transações concorrentes não interfiram umas nas outras de forma a levar a estados inconsistentes é o _.",
    correct: ["Isolamento", "isolamento"],
  },
  24: {
    type: "mult",
    ask: "Uma boa prática para evitar deadlocks é fazer com que as transações acessem os recursos compartilhados:",
    options: {
        1: "Na ordem mais conveniente para cada transação.",
        2: "Em uma ordem aleatória para aumentar a imprevisibilidade.",
        3: "Sempre na mesma ordem consistente em todas as transações.",
        4: "Apenas usando locks compartilhados (S)."
    },
    correct: 3,
  },
  25: {
    type: "mult",
    ask: "O que o comando `COMMIT` faz em uma transação?",
    options: {
        1: "Inicia uma nova transação.",
        2: "Desfaz todas as alterações desde o último `SAVEPOINT`.",
        3: "Salva o estado atual para um possível `ROLLBACK TO SAVEPOINT`.",
        4: "Finaliza a transação e torna todas as suas alterações permanentes e visíveis para outras transações."
    },
    correct: 4,
  },
};
// --- END OF FILE ask.js ---