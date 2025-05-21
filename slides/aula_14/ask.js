// --- START OF FILE ask.js ---
const  = {
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
    type: "mult",
    ask: "Para executar uma Stored Procedure chamada `ObterDetalhesPedido` em MySQL ou PostgreSQL, qual comando é tipicamente usado?",
    options: { 1: "RUN ObterDetalhesPedido();", 2: "EXECUTE ObterDetalhesPedido();", 3: "CALL ObterDetalhesPedido();", 4: "PERFORM ObterDetalhesPedido();" },
    correct: 3,
  },
  6: {
    type: "mult",
    ask: "Qual é a principal finalidade de um parâmetro `OUT` em uma Stored Procedure?",
    options: { 1: "Receber dados da aplicação para uso interno na procedure.", 2: "Retornar um ou mais valores da procedure para a aplicação chamadora.", 3: "Definir uma constante global dentro da procedure.", 4: "Filtrar os resultados de um comando SELECT dentro da procedure." },
    correct: 2,
  },
  7: {
    type: "mult",
    ask: "Um parâmetro `INOUT` em uma Stored Procedure é usado quando você precisa:",
    options: { 1: "Apenas passar um valor para a procedure, sem esperar retorno.", 2: "Apenas retornar um valor da procedure, sem receber nada inicialmente.", 3: "Passar um valor para a procedure, permitir que a procedure o modifique, e retornar o valor modificado.", 4: "Declarar uma variável que só pode ser lida (read-only) dentro da procedure." },
    correct: 3,
  },
  8: {
    type: "mult",
    ask: "Em MySQL, o comando `DELIMITER $$` é usado antes de definir uma Stored Procedure ou Trigger para:",
    options: { 1: "Iniciar uma transação de banco de dados.", 2: "Mudar temporariamente o caractere terminador de instrução SQL, permitindo o uso de ';' dentro do corpo do objeto.", 3: "Criptografar o código da procedure ou trigger.", 4: "Especificar o schema padrão para a procedure ou trigger." },
    correct: 2,
  },
  9: {
    type: "mult",
    ask: "Dentro de uma Stored Procedure em MySQL, a função `LAST_INSERT_ID()` geralmente retorna:",
    options: { 1: "O ID da Stored Procedure que está sendo executada.", 2: "O número total de linhas afetadas pelo último comando DML.", 3: "O valor AUTO_INCREMENT gerado pelo comando INSERT mais recente na mesma conexão/sessão.", 4: "O ID do usuário que chamou a Stored Procedure." },
    correct: 3,
  },
  10: {
    type: "mult",
    ask: "Para modificar o corpo lógico de uma Stored Procedure existente em MySQL, a abordagem mais comum é:",
    options: { 1: "Usar `ALTER PROCEDURE nome_proc BEGIN ... END;` para reescrever o corpo diretamente.", 2: "Usar `UPDATE mysql.proc SET body = 'novo_codigo' WHERE name = 'nome_proc';`.", 3: "Usar `DROP PROCEDURE nome_proc;` seguido por um novo `CREATE PROCEDURE nome_proc ...;`.", 4: "Usar `REPLACE PROCEDURE nome_proc ...;`." },
    correct: 3,
  },
  11: {
    type: "mult",
    ask: "Se uma Stored Procedure em MySQL é criada com `SQL SECURITY DEFINER`, ela executa com as permissões de:",
    options: { 1: "O usuário que está atualmente chamando a procedure (INVOKER).", 2: "O usuário que criou (definiu) a procedure (DEFINER).", 3: "Um usuário anônimo com privilégios mínimos.", 4: "O superusuário (root) do SGBD, independentemente de quem a criou ou chamou." },
    correct: 2,
  },
  12: {
    type: "mult",
    ask: "Em um trigger `BEFORE INSERT` em MySQL, a pseudo-tabela `NEW` permite que você:",
    options: { 1: "Acesse os valores da linha como estavam antes da tentativa de inserção (não aplicável).", 2: "Acesse e potencialmente modifique os valores da linha que está prestes a ser inserida.", 3: "Acesse os valores da linha após a inserção ter sido confirmada.", 4: "Acesse apenas as colunas que são chaves primárias." },
    correct: 2,
  },
  13: {
    type: "mult",
    ask: "O que é um risco potencial se um trigger na TabelaA atualiza a TabelaB, e outro trigger na TabelaB atualiza a TabelaA?",
    options: { 1: "Perda de dados devido a transações não confirmadas.", 2: "Corrupção de índices nas tabelas envolvidas.", 3: "Um loop infinito de triggers ou recursão excessiva.", 4: "Uma melhoria automática no desempenho das consultas." },
    correct: 3,
  },
  14: {
    type: "mult",
    ask: "A cláusula `FOR EACH ROW` em uma definição de trigger indica que:",
    options: { 1: "O trigger será executado apenas uma vez para cada instrução DML, independentemente do número de linhas afetadas.", 2: "O corpo do trigger será executado para cada linha individualmente afetada pela instrução DML.", 3: "O trigger só se aplica a tabelas que possuem uma chave primária definida em cada linha.", 4: "O trigger só pode conter um único comando SQL em seu corpo." },
    correct: 2,
  },
  15: {
    type: "mult",
    ask: "Qual timing de trigger (`BEFORE` ou `AFTER`) é mais apropriado para validar dados de entrada e potencialmente cancelar uma operação DML se a validação falhar?",
    options: { 1: "`AFTER`, pois a operação já ocorreu e pode ser revertida.", 2: "`BEFORE`, pois permite inspecionar e modificar dados (NEW) ou sinalizar um erro antes da operação ser aplicada.", 3: "Ambos são igualmente apropriados para validação.", 4: "Nenhum, validação deve ser feita exclusivamente na aplicação." },
    correct: 2,
  },
  16: {
    type: "mult",
    ask: "Quais dos seguintes eventos DML podem disparar um trigger em uma tabela?",
    options: { 1: "Apenas `INSERT` e `UPDATE`.", 2: "`INSERT`, `UPDATE`, `DELETE` e `SELECT`.", 3: "`INSERT`, `UPDATE` e `DELETE`.", 4: "Apenas `SELECT` com a cláusula `FOR UPDATE`." },
    correct: 3,
  },
  17: {
    type: "mult",
    ask: "Se um trigger `BEFORE INSERT` em MySQL usar `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Erro de validação';` o que acontecerá com a instrução INSERT?",
    options: { 1: "O INSERT será executado, mas a mensagem de erro será registrada no log do servidor.", 2: "O INSERT será cancelado e a mensagem de erro será retornada para a aplicação cliente.", 3: "O trigger será ignorado e o INSERT prosseguirá normalmente.", 4: "O INSERT será executado, mas o trigger `AFTER INSERT` não será disparado." },
    correct: 2,
  },
  18: {
    type: "mult",
    ask: "Sobre a modificação de triggers, qual afirmação é geralmente verdadeira para a maioria dos SGBDs, incluindo MySQL?",
    options: { 1: "O comando `ALTER TRIGGER` permite modificar qualquer parte do trigger, incluindo seu corpo lógico.", 2: "Triggers não podem ser modificados; uma vez criados, são permanentes.", 3: "Para modificar um trigger, geralmente é necessário usar `DROP TRIGGER` seguido por `CREATE TRIGGER`.", 4: "Triggers são modificados automaticamente pelo SGBD quando a estrutura da tabela associada muda." },
    correct: 3,
  },
  19: {
    type: "mult",
    ask: "Qual é uma boa prática para nomear triggers, visando clareza e manutenibilidade?",
    options: { 1: "Usar nomes curtos e genéricos como `TRG1`, `TRG2`.", 2: "Incluir o nome do desenvolvedor que criou o trigger.", 3: "Incluir o timing (BEFORE/AFTER), o evento DML (INSERT/UPDATE/DELETE) e o nome da tabela (ex: `trg_before_update_produtos`).", 4: "Criptografar o nome do trigger para segurança." },
    correct: 3,
  },
  20: {
    type: "mult",
    ask: "Um dos principais benefícios de centralizar regras de negócio no banco de dados usando Stored Procedures é:",
    options: { 1: "Facilitar a portabilidade do código da aplicação para diferentes linguagens de programação.", 2: "Garantir que as regras sejam consistentemente aplicadas, independentemente de qual aplicação acessa os dados.", 3: "Reduzir a carga de processamento no servidor de banco de dados.", 4: "Simplificar o processo de debugging da lógica de negócio." },
    correct: 2,
  },
  21: {
    type: "mult",
    ask: "Qual é um risco comum associado a triggers que contêm lógica muito complexa ou executam operações demoradas?",
    options: { 1: "Aumento da segurança, pois a lógica está encapsulada.", 2: "Melhora na velocidade das operações DML (INSERT, UPDATE, DELETE) na tabela associada.", 3: "Degradação significativa da performance das operações DML na tabela associada.", 4: "Simplificação da manutenção do esquema do banco de dados." },
    correct: 3,
  },
  22: {
    type: "mult",
    ask: "Qual tipo de objeto de programação SQL é projetado para sempre retornar um único valor (ou um conjunto de valores como uma tabela) e pode ser usado diretamente em expressões SQL (ex: em uma cláusula `SELECT` ou `WHERE`)?",
    options: { 1: "Stored Procedure", 2: "Trigger", 3: "User-Defined Function (UDF)", 4: "View" },
    correct: 3,
  },
  23: {
    type: "mult",
    ask: "Ao conceder permissões para uma aplicação, o 'princípio do menor privilégio' sugere que, em vez de dar acesso direto de `UPDATE` a uma tabela, é mais seguro:",
    options: { 1: "Permitir que a aplicação crie seus próprios triggers na tabela.", 2: "Conceder à aplicação permissão para executar uma Stored Procedure específica que realiza o update de forma controlada.", 3: "Dar à aplicação privilégios de DBA para flexibilidade máxima.", 4: "Armazenar as credenciais de acesso direto no código da aplicação." },
    correct: 2,
  },
  24: {
    type: "mult",
    ask: "Uma diferença fundamental entre Stored Procedures e User-Defined Functions (UDFs) em muitos SGBDs é que:",
    options: { 1: "SPs podem ter parâmetros, enquanto UDFs não podem.", 2: "UDFs são executadas automaticamente, enquanto SPs precisam ser chamadas explicitamente.", 3: "UDFs são primariamente destinadas a retornar um valor e geralmente não podem executar DML que modifica dados, enquanto SPs podem.", 4: "SPs são escritas em SQL, enquanto UDFs devem ser escritas em linguagens externas como C++ ou Java." },
    correct: 3,
  },
  25: {
    type: "mult",
    ask: "O bloco `BEGIN ... END` em Stored Procedures e Triggers serve para:",
    options: { 1: "Definir os parâmetros de entrada e saída do objeto.", 2: "Delimitar o escopo de uma transação.", 3: "Agrupar um conjunto de instruções SQL que formam o corpo lógico do objeto.", 4: "Especificar as permissões de execução do objeto." },
    correct: 3,
  }
};
// --- END OF FILE ask.js ---
