// --- START OF FILE ask.js ---
const ask = {
  1: {
    type: "mult",
    ask: "Qual é a principal característica que diferencia uma tabela temporária de uma tabela permanente?",
    options: {
      1: "Tabelas temporárias não podem ter índices.",
      2: "Tabelas temporárias são sempre armazenadas apenas em memória.",
      3: "Tabelas temporárias existem apenas durante a sessão do usuário que as criou.",
      4: "Tabelas temporárias não podem ser consultadas com a cláusula SELECT.",
    },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "No SQL Server, qual prefixo é comumente usado para criar uma tabela temporária local?",
    options: {
      1: "tmp_",
      2: "$",
      3: "#",
      4: "##",
    },
    correct: 3,
  },
  3: {
    type: "mult",
    ask: "Qual das seguintes é uma razão comum para usar tabelas temporárias?",
    options: {
      1: "Armazenar dados de log de auditoria de longo prazo.",
      2: "Substituir completamente o uso de tabelas permanentes.",
      3: "Armazenar resultados intermediários de consultas complexas para simplificá-las.",
      4: "Garantir a replicação de dados entre diferentes servidores.",
    },
    correct: 3,
  },
  4: {
    type: "mult",
    ask: "O que acontece com uma tabela temporária local quando a sessão do usuário que a criou termina?",
    options: {
      1: "Ela é convertida em uma tabela permanente.",
      2: "Ela permanece no banco de dados, mas fica inacessível.",
      3: "Ela é automaticamente descartada (DROP).",
      4: "Ela é arquivada para referência futura.",
    },
    correct: 3,
  },
  5: {
    type: "mult",
    ask: "A sintaxe `CREATE TEMPORARY TABLE nome_tabela AS SELECT ...` é conhecida como:",
    options: {
      1: "CTES (Common Table Expressions)",
      2: "VIEW Materializada",
      3: "CTAS (Create Table As Select)",
      4: "Stored Procedure",
    },
    correct: 3,
  },
  6: {
    type: "mult",
    ask: "Global Temporary Tables (GTTs), como as encontradas no Oracle, têm qual característica principal em relação à sua definição?",
    options: {
      1: "Sua definição é temporária e visível apenas para a sessão criadora.",
      2: "Sua definição é persistente no banco de dados e visível para todas as sessões.",
      3: "Sua definição é criada dinamicamente a cada consulta.",
      4: "Elas não possuem uma definição formal, apenas armazenam dados.",
    },
    correct: 2,
  },
  7: {
    type: "mult",
    ask: "Em uma Global Temporary Table (GTT) com `ON COMMIT PRESERVE ROWS` (Oracle), o que acontece com os dados ao final de uma transação (COMMIT)?",
    options: {
      1: "Os dados são sempre deletados.",
      2: "Os dados são preservados na tabela para a sessão atual.",
      3: "Os dados são transferidos para uma tabela permanente.",
      4: "A tabela GTT é descartada.",
    },
    correct: 2,
  },
  8: {
    type: "mult",
    ask: "É uma boa prática nomear tabelas temporárias com o mesmo nome de tabelas permanentes?",
    options: {
      1: "Sim, pois facilita a reutilização de código.",
      2: "Não, pois pode causar confusão e erros difíceis de rastrear.",
      3: "Sim, se a tabela temporária tiver menos colunas.",
      4: "Indiferente, o SGBD sempre saberá qual usar.",
    },
    correct: 2,
  },
  9: {
    type: "complete",
    ask: "No SQL Server, a área do sistema onde as tabelas temporárias são criadas e gerenciadas é chamada de _.",
    correct: "tempdb",
  },
  10: {
    type: "mult",
    ask: "Qual comando DML NÃO pode ser usado em uma tabela temporária (assumindo que ela já foi criada e populada)?",
    options: {
      1: "INSERT",
      2: "SELECT",
      3: "UPDATE",
      4: "Todos os comandos DML listados podem ser usados.",
    },
    correct: 4,
  },
  11: {
    type: "mult",
    ask: "Por padrão, tabelas temporárias possuem índices automaticamente criados em todas as suas colunas?",
    options: {
      1: "Sim, para otimizar todas as consultas.",
      2: "Não, geralmente não possuem índices por padrão e precisam ser criados explicitamente, se necessário.",
      3: "Sim, mas apenas na chave primária, se definida.",
      4: "Apenas tabelas temporárias globais possuem índices automáticos.",
    },
    correct: 2,
  },
  12: {
    type: "mult",
    ask: "Se duas sessões diferentes criarem uma tabela temporária local com o mesmo nome (ex: `#MinhaTemp` no SQL Server), elas estão manipulando a mesma instância física da tabela?",
    options: {
      1: "Sim, os dados são compartilhados entre as sessões.",
      2: "Não, cada sessão terá sua própria instância isolada da tabela.",
      3: "Depende das permissões do usuário.",
      4: "Apenas a primeira sessão que a criou pode usá-la; a segunda receberá um erro.",
    },
    correct: 2,
  },
  13: {
    type: "mult",
    ask: "Qual é uma limitação comum de tabelas temporárias em relação a restrições de integridade referencial?",
    options: {
      1: "Não podem ter chaves primárias.",
      2: "Geralmente não suportam ou não é recomendado criar chaves estrangeiras (FKs) para tabelas permanentes.",
      3: "Não podem ter colunas com a restrição NOT NULL.",
      4: "Não podem ter restrições UNIQUE.",
    },
    correct: 2,
  },
  14: {
    type: "mult",
    ask: "Usar o comando `DROP TABLE nome_tabela_temporaria;` explicitamente antes do fim da sessão é:",
    options: {
      1: "Obrigatório, senão a tabela nunca é removida.",
      2: "Uma má prática, pois pode causar erros.",
      3: "Opcional, mas uma boa prática em scripts longos para liberar recursos mais cedo.",
      4: "Necessário apenas para tabelas temporárias globais.",
    },
    correct: 3,
  },
  15: {
    type: "mult",
    ask: "Tabelas temporárias locais são geralmente incluídas em backups completos do banco de dados?",
    options: {
      1: "Sim, sempre.",
      2: "Não, geralmente não são incluídas.",
      3: "Apenas se contiverem dados importantes.",
      4: "Apenas se o backup for feito com a opção 'INCLUDE TEMP TABLES'.",
    },
    correct: 2,
  },
  16: {
    type: "mult",
    ask: "Qual das seguintes alternativas pode, em alguns casos, ser mais eficiente ou legível do que usar múltiplas tabelas temporárias para estágios intermediários de uma consulta de LEITURA?",
    options: {
      1: "Cursores",
      2: "Triggers",
      3: "CTEs (Common Table Expressions)",
      4: "Sequences",
    },
    correct: 3,
  },
  17: {
    type: "mult",
    ask: "Em ambientes de replicação de banco de dados, as tabelas temporárias LOCAIS são tipicamente replicadas para os servidores secundários?",
    options: {
      1: "Sim, para manter a consistência.",
      2: "Não, pois são específicas da sessão e da instância onde foram criadas.",
      3: "Apenas se a replicação for síncrona.",
      4: "Apenas se forem tabelas temporárias globais (## no SQL Server).",
    },
    correct: 2,
  },
  18: {
    type: "complete",
    ask: "Usar prefixos como `tmp_` ou `#` ao nomear tabelas temporárias ajuda a evitar _ com nomes de tabelas permanentes.",
    correct: "colisões", // Aceitável: conflitos
  },
  19: {
    type: "mult",
    ask: "O uso excessivo de tabelas temporárias muito grandes pode impactar negativamente a performance de qual componente do SGBD (especialmente no SQL Server)?",
    options: {
      1: "O log de transações principal.",
      2: "O `tempdb` (ou tablespace temporário).",
      3: "O buffer pool de dados permanentes.",
      4: "A replicação de metadados.",
    },
    correct: 2,
  },
  20: {
    type: "mult",
    ask: "Um usuário precisa de quais tipos de privilégios para criar tabelas temporárias?",
    options: {
      1: "Apenas privilégio SELECT nas tabelas de origem.",
      2: "Privilégios de DBA (Administrador do Banco de Dados).",
      3: "Privilégios como `CREATE TEMPORARY TABLES` no banco de dados ou permissão no `tempdb`.",
      4: "Nenhum privilégio especial, qualquer usuário pode criá-las.",
    },
    correct: 3,
  },
  21: {
    type: "mult",
    ask: "Ao usar tabelas temporárias em aplicações com pooling de conexões que mantêm sessões abertas por muito tempo, qual cuidado é importante?",
    options: {
      1: "Aumentar o tamanho do pool de conexões.",
      2: "Garantir que as tabelas temporárias sejam explicitamente descartadas (DROP) após o uso para evitar acúmulo.",
      3: "Nunca usar tabelas temporárias nesse cenário.",
      4: "Configurar o SGBD para limpar automaticamente tabelas temporárias a cada minuto.",
    },
    correct: 2,
  },
  22: {
    type: "mult",
    ask: "Qual afirmação sobre estatísticas em tabelas temporárias é geralmente VERDADEIRA?",
    options: {
      1: "O SGBD sempre mantém estatísticas altamente precisas e atualizadas para elas.",
      2: "O otimizador pode não ter estatísticas precisas, podendo levar a planos de execução subótimos.",
      3: "Estatísticas não são relevantes para tabelas temporárias, pois são pequenas.",
      4: "É proibido coletar estatísticas manualmente em tabelas temporárias.",
    },
    correct: 2,
  },
  23: {
    type: "mult",
    ask: "In-memory temporary tables são projetadas para:",
    options: {
      1: "Reduzir o consumo de espaço em disco a longo prazo.",
      2: "Oferecer acesso extremamente rápido aos dados temporários, residindo primariamente em RAM.",
      3: "Facilitar o backup e restore de dados temporários.",
      4: "Serem automaticamente replicadas em clusters.",
    },
    correct: 2,
  },
  24: {
    type: "complete",
    ask: "Se uma transação que modificou uma tabela temporária sofre um _, as alterações na tabela temporária dentro dessa transação também serão desfeitas.",
    correct: "ROLLBACK",
  },
  25: {
    type: "mult",
    ask: "O principal objetivo de uma tabela temporária é:",
    options: {
      1: "Substituir completamente as tabelas permanentes para melhorar a performance.",
      2: "Facilitar o trabalho com conjuntos de dados transitórios e complexidades de consulta dentro de uma sessão específica.",
      3: "Acelerar significativamente os backups do banco de dados.",
      4: "Garantir a segurança dos dados em trânsito entre aplicações e o banco.",
    },
    correct: 2,
  }
};
// --- END OF FILE ask.js ---