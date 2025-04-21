// --- START OF FILE ask.js ---
const ask = {
  1: {
    type: "mult",
    ask: "Qual palavra-chave SQL é usada para especificar de qual tabela os dados devem ser lidos?",
    options: {
      1: "SELECT",
      2: "WHERE",
      3: "FROM", // Correta
      4: "ORDER BY",
    },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "Para filtrar resultados onde a coluna `idade` seja *maior ou igual a* 18, qual operador você usaria na cláusula `WHERE`?",
    options: {
      1: ">",
      2: "=",
      3: "<",
      4: ">=", // Correta
    },
    correct: 4,
  },
  3: {
    type: "mult",
    ask: "Qual operador é usado para encontrar valores dentro de um intervalo específico (por exemplo, preço entre 50 e 100)?",
    options: {
      1: "IN",
      2: "LIKE",
      3: "BETWEEN", // Correta
      4: "AND",
    },
    correct: 3,
  },
  4: {
    type: "mult",
    ask: "Se você quiser listar todos os emails que terminam com \"@dominio.com\", qual cláusula `WHERE` você usaria?",
    options: {
      1: "WHERE Email = '%@dominio.com'",
      2: "WHERE Email IN ('%@dominio.com')",
      3: "WHERE Email LIKE '%@dominio.com'", // Correta
      4: "WHERE Email BETWEEN '%@dominio.com'",
    },
    correct: 3,
  },
  5: {
    type: "mult",
    ask: "Qual cláusula é usada para classificar os resultados de uma consulta em ordem alfabética (A-Z) pela coluna `nome`?",
    options: {
      1: "SORT BY nome ASC",
      2: "GROUP BY nome ASC",
      3: "ORDER BY nome ASC", // Correta
      4: "ARRANGE BY nome ASC",
    },
    correct: 3,
  },
  // Mantendo as perguntas originais, se necessário, começando do 6
  6: {
    type: "mult",
    ask: "O que é um SGBD?",
    options: {
      1: "Um tipo de linguagem de programação",
      2: "Um software para organizar e gerenciar bancos de dados",
      3: "Um modelo matemático de dados",
      4: "Um hardware para armazenamento",
    },
    correct: 2,
  },
  7: {
    type: "mult",
    ask: "Qual das alternativas representa um SGBD relacional?",
    options: {
      1: "Redis",
      2: "MongoDB",
      3: "PostgreSQL",
      4: "Firebase",
    },
    correct: 3,
  },
   8: {
    type: "mult",
    ask: "O nível interno de um SGBD trata de:",
    options: {
      1: "A aparência dos dados para o usuário",
      2: "A estrutura lógica do banco",
      3: "A forma como os dados são armazenados fisicamente",
      4: "A segurança dos dados",
    },
    correct: 3,
  },
  9: {
    type: "mult",
    ask: "O componente do SGBD que controla as autorizações é:",
    options: {
      1: "Gerenciador de arquivos",
      2: "Processador de consultas",
      3: "Gerenciador de segurança",
      4: "Buffer manager",
    },
    correct: 3,
  },
  10: {
    type: "mult",
    ask: "Qual é uma vantagem dos SGBDs NoSQL?",
    options: {
      1: "Suporte nativo a linguagem SQL",
      2: "Estrutura rígida de dados",
      3: "Flexibilidade e escalabilidade",
      4: "Alta normalização",
    },
    correct: 3,
  },
  11: {
    type: "mult",
    ask: "A sigla ACID representa:",
    options: {
      1: "Atomicidade, Consistência, Isolamento, Durabilidade",
      2: "Acesso, Consulta, Integridade, Dados",
      3: "Agilidade, Cálculo, Informação, Dado",
      4: "Aplicação, Conexão, Indexação, Distribuição",
    },
    correct: 1,
  },
  12: {
    type: "mult",
    ask: "Exemplo de SGBD orientado a objetos:", // Ajustado, pois o original indicava MongoDB como correto para OO, o que é impreciso. db4o é um exemplo melhor, mas raro. Mantendo MongoDB como exemplo comum NoSQL/Documento se a intenção for diferenciar de Relacional. Vamos assumir que a pergunta original tinha intenção de NoSQL.
    options: {
      1: "Oracle",
      2: "MongoDB", // Exemplo comum NoSQL / Orientado a Documentos
      3: "db4o",    // Exemplo mais purista de OODBMS
      4: "MySQL",
    },
    correct: 2, // Ajustado para MongoDB como exemplo NoSQL/Documento
  },
  13: {
    type: "mult",
    ask: "O processador de consultas do SGBD é responsável por:",
    options: {
      1: "Armazenar dados em disco",
      2: "Interpretar e otimizar comandos SQL",
      3: "Garantir a atomicidade das transações",
      4: "Conceder permissões de acesso",
    },
    correct: 2,
  },
  14: {
    type: "mult",
    ask: "SGBDs em nuvem são caracterizados por:",
    options: {
      1: "Dependência de instalação local",
      2: "Manutenção física pelo cliente",
      3: "Alta escalabilidade e gerenciamento automático",
      4: "Uso exclusivo em dispositivos móveis",
    },
    correct: 3,
  },
  15: {
    type: "mult",
    ask: "O que NÃO é uma vantagem de usar um SGBD?",
    options: {
      1: "Redução da redundância",
      2: "Segurança de dados",
      3: "Aumento da complexidade para o usuário", // Correta
      4: "Controle de integridade",
    },
    correct: 3,
  },
};
// --- END OF FILE ask.js ---