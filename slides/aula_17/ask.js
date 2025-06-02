const ask = {
  1: {
    type: "mult",
    ask: "Qual é o principal objetivo do Otimizador de Consultas (Query Optimizer) em um SGBD como o MySQL?",
    options: {
      1: "Verificar a sintaxe da instrução SQL.",
      2: "Escolher a forma mais eficiente de executar uma consulta SQL, visando menor custo.",
      3: "Armazenar os dados fisicamente no disco.",
      4: "Gerenciar as permissões de acesso dos usuários às tabelas."
    },
    correct: 2
  },
  2: {
    type: "mult",
    ask: "As estatísticas do banco de dados são usadas pelo otimizador para:",
    options: {
      1: "Definir os tipos de dados das colunas.",
      2: "Realizar backups automáticos das tabelas.",
      3: "Estimar o custo de diferentes planos de execução e a seletividade dos filtros.",
      4: "Controlar o número máximo de conexões ao servidor."
    },
    correct: 3
  },
  3: {
    type: "mult",
    ask: "Qual comando MySQL é usado para solicitar a coleta ou atualização das estatísticas de uma tabela?",
    options: {
      1: "UPDATE STATISTICS FOR nome_tabela;",
      2: "COLLECT STATS ON nome_tabela;",
      3: "SHOW STATS FROM nome_tabela;",
      4: "ANALYZE TABLE nome_tabela;"
    },
    correct: 4
  },
  4: {
    type: "mult",
    ask: "O que a 'cardinalidade de um índice' geralmente indica?",
    options: {
      1: "O número de colunas que o índice possui.",
      2: "O tamanho do índice em megabytes.",
      3: "O número estimado de valores únicos que o índice contém.",
      4: "A data em que o índice foi criado pela última vez."
    },
    correct: 3
  },
  5: {
    type: "mult",
    ask: "O que é um Plano de Execução (Execution Plan)?",
    options: {
      1: "Um script SQL que cria todas as tabelas do banco.",
      2: "Um log de todas as queries executadas no servidor.",
      3: "A 'receita' ou estratégia detalhada que o otimizador decide usar para executar uma query.",
      4: "Um diagrama visual das relações entre as tabelas (DER)."
    },
    correct: 3
  },
  6: {
    type: "mult",
    ask: "Qual a principal diferença entre `EXPLAIN` e `EXPLAIN ANALYZE` no MySQL?",
    options: {
      1: "`EXPLAIN ANALYZE` é mais rápido que `EXPLAIN`.",
      2: "`EXPLAIN` mostra o plano em formato JSON, enquanto `EXPLAIN ANALYZE` mostra em XML.",
      3: "`EXPLAIN` apenas mostra o plano estimado, enquanto `EXPLAIN ANALYZE` executa a query e mostra o plano com informações reais de tempo e contagem.",
      4: "`EXPLAIN ANALYZE` só pode ser usado para queries `SELECT *`."
    },
    correct: 3
  },
  7: {
    type: "mult",
    ask: "No resultado do `EXPLAIN`, um valor `type: ALL` para uma tabela grande geralmente indica:",
    options: {
      1: "Um acesso ótimo usando todos os recursos disponíveis.",
      2: "Que a tabela está perfeitamente otimizada.",
      3: "Um Full Table Scan, que pode ser muito ineficiente.",
      4: "Que um índice do tipo HASH foi utilizado."
    },
    correct: 3
  },
  8: {
    type: "mult",
    ask: "Se a coluna `Extra` do `EXPLAIN` mostra 'Using index', o que isso significa?",
    options: {
      1: "Que um índice qualquer foi considerado, mas não necessariamente usado.",
      2: "Que o MySQL precisou criar um novo índice temporário para a query.",
      3: "Que a query foi totalmente satisfeita lendo apenas os dados do índice (Covering Index), sem acessar a tabela.",
      4: "Que o índice está sendo usado para uma operação de `filesort`."
    },
    correct: 3
  },
  9: {
    type: "mult",
    ask: "Qual é a principal estrutura de dados usada para índices B-Tree no MySQL (InnoDB)?",
    options: {
      1: "Lista Encadeada (Linked List)",
      2: "Tabela Hash (Hash Table)",
      3: "Árvore Balanceada (Balanced Tree), especificamente B+Tree",
      4: "Grafo Acíclico Direcionado (DAG)"
    },
    correct: 3
  },
  10: {
    type: "mult",
    ask: "Em um índice composto `CREATE INDEX idx_abc ON tabela(A, B, C);`, qual das seguintes condições `WHERE` NÃO pode utilizar eficientemente a parte inicial deste índice?",
    options: {
      1: "WHERE A = 10",
      2: "WHERE A = 10 AND B = 20",
      3: "WHERE B = 20 AND C = 30", // Não usa o prefixo A
      4: "WHERE A = 10 AND B = 20 AND C = 30"
    },
    correct: 3
  },
  11: {
    type: "mult",
    ask: "Qual é uma desvantagem de ter muitos índices em uma tabela que sofre um grande volume de operações de escrita (INSERT, UPDATE, DELETE)?",
    options: {
      1: "As operações de SELECT se tornam mais lentas.",
      2: "O tamanho do backup da tabela aumenta drasticamente.",
      3: "As operações de escrita se tornam mais lentas porque os índices também precisam ser atualizados.",
      4: "Limita o número de colunas que podem ser adicionadas à tabela."
    },
    correct: 3
  },
  12: {
    type: "mult",
    ask: "O que é um 'Covering Index'?",
    options: {
      1: "Um índice que cobre todas as tabelas do banco de dados.",
      2: "Um índice que é automaticamente criado pela Chave Primária.",
      3: "Um índice que contém todas as colunas necessárias para satisfazer uma consulta, permitindo que o SGBD responda lendo apenas o índice.",
      4: "Um índice que é usado exclusivamente para operações de backup."
    },
    correct: 3
  },
  13: {
    type: "mult",
    ask: "O que significa 'Using filesort' na coluna `Extra` do `EXPLAIN`?",
    options: {
      1: "Que a ordenação foi feita de forma eficiente usando um índice.",
      2: "Que os dados foram lidos diretamente de um arquivo no sistema operacional.",
      3: "Que o MySQL precisou realizar uma etapa de ordenação separada, possivelmente em disco, pois não pôde usar um índice para a ordem solicitada.",
      4: "Que a consulta está tentando acessar arquivos protegidos."
    },
    correct: 3
  },
  14: {
    type: "mult",
    ask: "Por que é importante que estatísticas do banco de dados estejam atualizadas?",
    options: {
      1: "Para garantir que os backups sejam feitos corretamente.",
      2: "Para permitir que o otimizador de consultas tome decisões mais precisas sobre o melhor plano de execução.",
      3: "Para aumentar o limite de `max_connections` automaticamente.",
      4: "Para reduzir o espaço em disco ocupado pelas tabelas."
    },
    correct: 2
  },
  15: {
    type: "mult",
    ask: "No MySQL Workbench, a funcionalidade 'Visual Explain' serve principalmente para:",
    options: {
      1: "Criar automaticamente índices para todas as tabelas.",
      2: "Gerar dados de teste para popular o banco de dados.",
      3: "Mostrar uma representação gráfica do plano de execução de uma consulta, facilitando sua interpretação.",
      4: "Desenhar o Diagrama Entidade-Relacionamento (DER) do schema."
    },
    correct: 3
  }
};