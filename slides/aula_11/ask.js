// --- START OF FILE ask.js ---
const ask = {
  1: {
    type: "mult",
    ask: "Qual subconjunto do SQL é usado para DEFINIR e MODIFICAR a ESTRUTURA de tabelas, views e índices?",
    options: { 1: "DQL (Data Query Language)", 2: "DML (Data Manipulation Language)", 3: "DDL (Data Definition Language)", 4: "TCL (Transaction Control Language)" },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "Qual comando DDL é usado para criar uma nova tabela vazia no banco de dados?",
    options: { 1: "INSERT TABLE", 2: "ALTER TABLE", 3: "CREATE TABLE", 4: "NEW TABLE" },
    correct: 3,
  },
  3: {
    type: "mult",
    ask: "Qual comando DDL é usado para modificar a estrutura de uma tabela existente (ex: adicionar uma coluna)?",
    options: { 1: "UPDATE TABLE", 2: "ALTER TABLE", 3: "MODIFY TABLE", 4: "CHANGE TABLE" },
    correct: 2,
  },
  4: {
    type: "mult",
    ask: "Qual comando DDL remove permanentemente uma tabela e TODOS os seus dados?",
    options: { 1: "DELETE TABLE", 2: "REMOVE TABLE", 3: "TRUNCATE TABLE", 4: "DROP TABLE" },
    correct: 4,
  },
  5: {
    type: "complete",
    ask: "Para garantir que uma coluna NUNCA aceite valores vazios, usamos a constraint _ _.",
    correct: ["NOT NULL", "not null"],
  },
  6: {
    type: "mult",
    ask: "Qual tipo de dado é MAIS recomendado para armazenar valores monetários (preços, salários) para evitar problemas de arredondamento?",
    options: { 1: "FLOAT", 2: "INT", 3: "VARCHAR", 4: "DECIMAL" }, // Ou NUMERIC
    correct: 4,
  },
  7: {
    type: "mult",
    ask: "Para armazenar nomes de clientes, que podem ter tamanhos variados, qual tipo de dado é geralmente mais eficiente em termos de espaço?",
    options: { 1: "CHAR(100)", 2: "VARCHAR(100)", 3: "TEXT", 4: "NCHAR(100)" },
    correct: 2,
  },
   8: {
    type: "mult",
    ask: "Qual tipo de dado é ideal para armazenar apenas a data de nascimento de uma pessoa?",
    options: { 1: "TIMESTAMP", 2: "DATETIME", 3: "DATE", 4: "TIME" },
    correct: 3,
  },
   9: {
    type: "mult",
    ask: "Uma boa prática de nomenclatura para uma coluna de chave primária na tabela `Pedidos` seria:",
    options: { 1: "ID", 2: "Chave", 3: "PedidosID", 4: "PK_Pedidos" }, // A mais comum e semântica
    correct: 3,
  },
  10: {
    type: "mult",
    ask: "Qual constraint garante que cada linha em uma tabela possa ser identificada unicamente e não permite valores nulos?",
    options: { 1: "UNIQUE", 2: "FOREIGN KEY", 3: "CHECK", 4: "PRIMARY KEY" },
    correct: 4,
  },
  11: {
    type: "mult",
    ask: "Qual constraint garante que todos os valores em uma coluna (exceto possivelmente NULL) sejam distintos uns dos outros?",
    options: { 1: "PRIMARY KEY", 2: "UNIQUE", 3: "FOREIGN KEY", 4: "NOT NULL" },
    correct: 2,
  },
   12: {
    type: "mult",
    ask: "Qual constraint é usada para estabelecer e reforçar um relacionamento entre duas tabelas, garantindo a integridade referencial?",
    options: { 1: "PRIMARY KEY", 2: "UNIQUE", 3: "FOREIGN KEY", 4: "CHECK" },
    correct: 3,
  },
   13: {
    type: "mult",
    ask: "Qual constraint permite definir uma regra de validação personalizada para os valores de uma coluna (ex: `preco > 0`)?",
    options: { 1: "UNIQUE", 2: "FOREIGN KEY", 3: "CHECK", 4: "RULE" },
    correct: 3,
  },
   14: {
    type: "complete",
    ask: "Para adicionar uma nova coluna `Telefone` do tipo `VARCHAR(20)` à tabela `Clientes`, usamos o comando `ALTER TABLE Clientes ADD COLUMN Telefone _(20);`",
    correct: ["VARCHAR", "varchar"],
  },
   15: {
    type: "mult",
    ask: "Qual das seguintes operações com `ALTER TABLE` é geralmente considerada a mais arriscada em termos de potencial perda de dados ou erros?",
    options: {
        1: "Adicionar uma nova coluna que permite NULL.",
        2: "Renomear um índice.",
        3: "Alterar o tipo de dado de uma coluna existente (ex: de TEXT para INT).",
        4: "Adicionar uma constraint UNIQUE a uma coluna vazia."
    },
    correct: 3,
  },
  16: {
    type: "complete",
    ask: "Uma _ é uma consulta SELECT armazenada que funciona como uma tabela virtual, útil para simplificar ou proteger o acesso aos dados.",
    correct: ["VIEW", "view", "Visão", "visão"],
  },
   17: {
    type: "mult",
    ask: "Qual NÃO é um benefício comum do uso de Views?",
    options: {
        1: "Simplificar consultas complexas com JOINs.",
        2: "Melhorar significativamente a performance de INSERTs e UPDATEs.",
        3: "Restringir o acesso a certas colunas ou linhas para segurança.",
        4: "Fornecer uma camada de abstração sobre as tabelas base."
    },
    correct: 2,
  },
  18: {
    type: "complete",
    ask: "Para acelerar buscas em uma coluna `email` frequentemente usada na cláusula `WHERE`, podemos criar um _ nessa coluna.",
    correct: ["ÍNDICE", "índice", "INDEX", "index"],
  },
  19: {
    type: "mult",
    ask: "Qual o principal 'custo' ou desvantagem de ter muitos índices em uma tabela?",
    options: {
        1: "Ocupam muito espaço na memória RAM durante a execução.",
        2: "Tornam os comandos SELECT mais lentos.",
        3: "Podem tornar as operações DML (INSERT, UPDATE, DELETE) mais lentas.",
        4: "Impedem o uso de constraints FOREIGN KEY."
    },
    correct: 3,
  },
   20: {
    type: "complete",
    ask: "A boa prática essencial antes de executar um comando `DROP TABLE` em produção é garantir que você tenha um _ recente e testado.",
    correct: ["BACKUP", "backup"],
  },
  21: {
    type: "mult",
    ask: "Ao criar uma tabela, qual constraint é implicitamente criada quando você define uma `PRIMARY KEY`?",
    options: { 1: "FOREIGN KEY", 2: "CHECK", 3: "DEFAULT", 4: "NOT NULL e UNIQUE" },
    correct: 4,
  },
  22: {
    type: "complete",
    ask: "A sintaxe para criar um índice chamado `idx_cidade` na coluna `Cidade` da tabela `Clientes` é `CREATE INDEX idx_cidade ON Clientes (_);`",
    correct: ["Cidade", "cidade", "(Cidade)", "(cidade)"],
  },
  23: {
    type: "mult",
    ask: "Qual a finalidade da opção `ON DELETE SET NULL` em uma constraint `FOREIGN KEY`?",
    options: {
        1: "Impedir que a linha pai seja deletada se houver filhos.",
        2: "Deletar automaticamente as linhas filhas quando a linha pai for deletada.",
        3: "Definir o valor da chave estrangeira na linha filha como NULL quando a linha pai for deletada.",
        4: "Definir o valor da chave estrangeira na linha filha com um valor padrão quando a linha pai for deletada."
    },
    correct: 3,
  },
  24: {
    type: "complete",
    ask: "Usar nomes claros e _ para tabelas e colunas é uma boa prática fundamental em DDL.",
    correct: ["consistentes", "Consistentes"],
  },
   25: {
    type: "mult",
    ask: "Por que é importante testar comandos DDL (especialmente `ALTER` e `DROP`) em um ambiente de teste antes da produção?",
    options: {
        1: "Para garantir que o comando DML correspondente funcione.",
        2: "Para verificar o impacto na performance, possíveis erros e perda de dados inesperada.",
        3: "Para popular a tabela com dados de teste automaticamente.",
        4: "Porque o comando `COMMIT` só funciona em ambiente de teste."
    },
    correct: 2,
  },
};
// --- END OF FILE ask.js ---