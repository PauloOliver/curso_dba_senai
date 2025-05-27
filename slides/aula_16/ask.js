// No seu arquivo ask.js, adicione ou substitua pelas seguintes perguntas
// (mantendo as 10 primeiras se desejar, ou começando do 1 para um quiz totalmente novo)
// Estas são as 20 novas perguntas focadas em Monitoramento e Otimização no MySQL:

  // ... (suas 10 perguntas existentes sobre SGBD geral, se mantidas) ...
  // Novas perguntas começam aqui (ex: do índice 11)

  11: {
    type: "mult",
    ask: "Qual é o principal benefício do monitoramento proativo de desempenho em um banco de dados MySQL?",
    options: {
      1: "Corrigir problemas apenas depois que eles causam uma interrupção.",
      2: "Identificar e resolver potenciais gargalos antes que afetem os usuários.",
      3: "Reduzir o custo de licenciamento do MySQL.",
      4: "Automatizar a criação de tabelas e índices."
    },
    correct: 2
  },
  12: {
    type: "mult",
    ask: "Qual das seguintes métricas do Sistema Operacional NÃO é diretamente crucial para monitorar o desempenho de um servidor MySQL?",
    options: {
      1: "Utilização da CPU.",
      2: "Uso de memória RAM e Swap.",
      3: "Latência de I/O do disco.",
      4: "Número de monitores conectados ao servidor."
    },
    correct: 4
  },
  13: {
    type: "mult",
    ask: "No MySQL, o comando `SHOW GLOBAL STATUS LIKE 'Threads_connected';` informa o quê?",
    options: {
      1: "O número total de threads que o MySQL pode criar.",
      2: "O número de conexões de clientes atualmente abertas.",
      3: "O número de queries lentas executadas.",
      4: "O status do cache de threads."
    },
    correct: 2
  },
  14: {
    type: "mult",
    ask: "Qual tabela do `INFORMATION_SCHEMA` no MySQL é mais útil para visualizar as sessões ativas e as queries em execução?",
    options: {
      1: "TABLES",
      2: "COLUMNS",
      3: "PROCESSLIST",
      4: "STATISTICS"
    },
    correct: 3
  },
  15: {
    type: "mult",
    ask: "O que o comando `EXPLAIN` no MySQL ajuda a analisar?",
    options: {
      1: "A quantidade de dados armazenados em uma tabela.",
      2: "O plano de execução que o otimizador MySQL escolhe para uma consulta.",
      3: "Os privilégios de usuário para acessar tabelas.",
      4: "A sintaxe correta de uma instrução SQL."
    },
    correct: 2
  },
  16: {
    type: "mult",
    ask: "No resultado do `EXPLAIN`, qual valor na coluna `type` geralmente indica a pior performance, representando um Full Table Scan?",
    options: {
      1: "ref",
      2: "range",
      3: "index",
      4: "ALL"
    },
    correct: 4
  },
  17: {
    type: "mult",
    ask: "Por que é uma boa prática evitar `SELECT *` em consultas de produção?",
    options: {
      1: "Porque `SELECT *` sempre resulta em erro de sintaxe.",
      2: "Porque pode buscar mais dados do que o necessário, aumentando o I/O, uso de rede e memória.",
      3: "Porque `SELECT *` não permite o uso de cláusulas `WHERE`.",
      4: "Porque o MySQL não suporta `SELECT *` em tabelas grandes."
    },
    correct: 2
  },
  18: {
    type: "mult",
    ask: "Qual é o impacto de aplicar uma função a uma coluna indexada na cláusula `WHERE` (ex: `WHERE YEAR(data_col) = 2023`)?",
    options: {
      1: "Melhora significativamente o desempenho do índice.",
      2: "Não tem impacto no uso do índice.",
      3: "Geralmente impede que o otimizador utilize o índice nessa coluna.",
      4: "Faz com que a consulta retorne mais linhas do que o esperado."
    },
    correct: 3
  },
  19: {
    type: "mult",
    ask: "Para qual das seguintes operações um índice NÃO traria benefício direto de desempenho?",
    options: {
      1: "Cláusula `WHERE` com condição de igualdade.",
      2: "Cláusula `JOIN ON` entre tabelas.",
      3: "Cláusula `ORDER BY`.",
      4: "Inserção de um grande volume de dados (`INSERT` massivo) em uma tabela sem leituras concorrentes."
    },
    correct: 4 // Índices adicionam sobrecarga em INSERTs
  },
  20: {
    type: "mult",
    ask: "O que é um índice composto no MySQL?",
    options: {
      1: "Um índice criado automaticamente pelo MySQL.",
      2: "Um índice que inclui múltiplas colunas, onde a ordem das colunas é importante.",
      3: "Um índice que armazena os dados da tabela de forma compactada.",
      4: "Um índice usado exclusivamente para buscas `FULLTEXT`."
    },
    correct: 2
  },
  21: {
    type: "mult",
    ask: "Qual a principal função do MySQL Workbench em relação ao monitoramento de desempenho?",
    options: {
      1: "Substituir completamente todas as ferramentas de linha de comando.",
      2: "Oferecer uma interface gráfica para visualizar o status do servidor e analisar queries.",
      3: "Garantir backups automáticos do banco de dados.",
      4: "Escrever código de aplicação para interagir com o MySQL."
    },
    correct: 2
  },
  22: {
    type: "mult",
    ask: "O que a métrica 'Slow Queries' (consultas lentas) indica no monitoramento do MySQL?",
    options: {
      1: "O número de conexões que foram rejeitadas pelo servidor.",
      2: "Consultas que excederam um tempo limite definido (long_query_time).",
      3: "A velocidade da rede entre o cliente e o servidor MySQL.",
      4: "O número de tabelas que não possuem chave primária."
    },
    correct: 2
  },
  23: {
    type: "mult",
    ask: "Se o `EXPLAIN` mostra 'Using filesort' na coluna 'Extra', o que isso geralmente significa?",
    options: {
      1: "Que a consulta utilizou um índice para ordenação de forma eficiente.",
      2: "Que o MySQL teve que realizar uma operação de ordenação separada, possivelmente em disco, pois não pôde usar um índice.",
      3: "Que os dados foram lidos de um arquivo CSV externo.",
      4: "Que a consulta resultou em um erro de permissão de arquivo."
    },
    correct: 2
  },
  24: {
    type: "mult",
    ask: "Qual técnica é mais apropriada para otimizar uma consulta que frequentemente busca por um intervalo de datas?",
    options: {
      1: "Evitar a cláusula `WHERE`.",
      2: "Criar um índice na coluna de data.",
      3: "Usar `SELECT *` para obter todas as colunas.",
      4: "Remover todas as junções da consulta."
    },
    correct: 2
  },
  25: {
    type: "mult",
    ask: "O 'Buffer Pool' do InnoDB é um exemplo de qual mecanismo de otimização?",
    options: {
      1: "Otimização de consultas baseada em regras.",
      2: "Cache de dados e índices em memória para acelerar leituras.",
      3: "Compactação automática de tabelas.",
      4: "Balanceamento de carga de conexões."
    },
    correct: 2
  },
  26: {
    type: "mult",
    ask: "Qual o objetivo principal de se definir limites de alerta (thresholds) no monitoramento?",
    options: {
      1: "Gerar relatórios diários de uso do banco.",
      2: "Ser notificado proativamente quando métricas importantes atingem níveis críticos.",
      3: "Bloquear automaticamente usuários que executam queries lentas.",
      4: "Aumentar a capacidade de armazenamento do disco automaticamente."
    },
    correct: 2
  },
  27: {
    type: "mult",
    ask: "Ao otimizar JOINs, por que é importante que as colunas usadas na cláusula ON estejam indexadas?",
    options: {
      1: "Para garantir que apenas INNER JOINs sejam usados.",
      2: "Para permitir que o MySQL encontre rapidamente as linhas correspondentes nas tabelas envolvidas.",
      3: "Para reduzir o número de colunas retornadas pela consulta.",
      4: "Para forçar o uso de subqueries em vez de JOINs."
    },
    correct: 2
  },
  28: {
    type: "mult",
    ask: "O que a ferramenta `pt-query-digest` do Percona Toolkit é comumente usada para fazer?",
    options: {
      1: "Criar backups incrementais do MySQL.",
      2: "Analisar logs de consultas lentas (slow query log) para identificar e agregar queries problemáticas.",
      3: "Monitorar o uso de CPU e memória do servidor em tempo real.",
      4: "Gerenciar usuários e permissões no MySQL."
    },
    correct: 2
  },
  29: {
    type: "mult",
    ask: "Quando pode ser desvantajoso ter muitos índices em uma tabela?",
    options: {
      1: "Quando a tabela é apenas lida e nunca atualizada.",
      2: "Quando a tabela é muito pequena.",
      3: "Quando a tabela sofre um grande volume de operações de escrita (INSERT, UPDATE, DELETE), pois os índices precisam ser atualizados.",
      4: "Nunca é desvantajoso, quanto mais índices, melhor."
    },
    correct: 3
  },
  30: {
    type: "mult",
    ask: "No MySQL Workbench, a funcionalidade 'Visual Explain' (Plano de Execução Visual) serve para:",
    options: {
      1: "Corrigir automaticamente erros de sintaxe SQL.",
      2: "Mostrar uma representação gráfica do plano de execução da consulta, facilitando a interpretação.",
      3: "Gerar dados de teste para as tabelas.",
      4: "Desenhar Diagramas Entidade-Relacionamento (DER)."
    },
    correct: 2
  }
};