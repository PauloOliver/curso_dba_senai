// --- START OF FILE ask.js ---
const ask = {
  // --- Perguntas sobre DML no RPG_Mundo ---
  1: {
    type: "mult",
    ask: "Qual comando DML é usado para registrar um novo herói, como 'Elara, a Ágil', na tabela `Personagens` de RPG_Mundo?",
    options: { 1: "UPDATE Personagens", 2: "SELECT * FROM Personagens", 3: "INSERT INTO Personagens", 4: "DELETE FROM Personagens" },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "Se 'Gimli, o Anão Guerreiro' encontra um machado melhor e seus Pontos de Vida Máximos aumentam, qual comando DML você usaria para refletir essas mudanças na tabela `Personagens`?",
    options: { 1: "INSERT INTO Personagens", 2: "UPDATE Personagens", 3: "DELETE FROM Personagens", 4: "ALTER TABLE Personagens" },
    correct: 2,
  },
  3: {
    type: "mult",
    ask: "Um 'Goblin Batedor' foi derrotado em combate. Qual comando DML remove seu registro da tabela `Monstros`?",
    options: { 1: "REMOVE Monstro", 2: "DROP Monstro", 3: "UPDATE Monstros SET Status = 'Derrotado'", 4: "DELETE FROM Monstros" },
    correct: 4,
  },
  4: {
    type: "mult",
    ask: "Na instrução `UPDATE Itens SET Valor = Valor * 1.10 WHERE Raridade = 'Raro';`, qual parte especifica QUAIS itens terão seu preço aumentado?",
    options: { 1: "UPDATE Itens", 2: "WHERE Raridade = 'Raro'", 3: "SET Valor = Valor * 1.10", 4: "Valor * 1.10" },
    correct: 2, 
  },
  5: {
    type: "mult",
    ask: "O que aconteceria se um Mestre de Jogo descuidado executasse `DELETE FROM Personagens;` sem uma cláusula `WHERE`?",
    options: {
      1: "Nada, pois faltou especificar um personagem.",
      2: "O SGBD pediria uma confirmação antes de apagar.",
      3: "Apenas os personagens de nível 1 seriam removidos.",
      4: "TODOS os heróis de RPG_Mundo seriam apagados da tabela `Personagens`!",
    },
    correct: 4,
  },
  6: {
    type: "mult",
    ask: "Ao realizar uma troca complexa de itens entre dois personagens, 'Aragorn' e 'Legolas', que envolve múltiplas atualizações no inventário, qual é a principal finalidade de usar `BEGIN TRANSACTION`?",
    options: {
      1: "Acelerar a consulta dos inventários.",
      2: "Garantir que a troca ocorra completamente (ambos recebem e perdem itens) ou seja desfeita se algo der errado.",
      3: "Criar um backup automático dos inventários antes da troca.",
      4: "Verificar a sintaxe dos comandos `UPDATE` seguintes.",
    },
    correct: 2,
  },
  7: {
    type: "mult",
    ask: "Após 'Gandalf' comprar um novo cajado (deduzindo moedas e adicionando o item ao inventário), qual comando finaliza a transação, tornando as mudanças permanentes em RPG_Mundo?",
    options: { 1: "ROLLBACK", 2: "END TRANSACTION", 3: "COMMIT", 4: "SAVEPOINT CompraCajado" },
    correct: 3,
  },
  8: {
    type: "mult",
    ask: "Se, durante uma transação para registrar a derrota de um dragão e a distribuição de seu tesouro, um erro crítico ocorre, qual comando desfaz TODAS as alterações desde o `BEGIN TRANSACTION`?",
    options: { 1: "COMMIT", 2: "UNDO ALL", 3: "REVERT CHANGES", 4: "ROLLBACK" },
    correct: 4,
  },
  9: {
    type: "mult",
    ask: "Antes de executar um `UPDATE` para aumentar o nível de TODOS os monstros da 'Caverna Sombria' ou um `DELETE` para remover todas as 'Poções Expiradas', qual é uma boa prática recomendada?",
    options: {
      1: "Executar `COMMIT` para salvar o estado atual.",
      2: "Executar um `SELECT` com a mesma cláusula `WHERE` para verificar exatamente quais monstros ou poções seriam afetados.",
      3: "Aumentar o `timeout` da conexão com o servidor de RPG_Mundo.",
      4: "Executar `ROLLBACK` preventivamente para limpar o log de transações.",
    },
    correct: 2,
  },
  10: {
    type: "mult",
    ask: "Ao registrar uma nova 'Poção de Cura' com `INSERT INTO Itens VALUES (...)` omitindo a lista de colunas, qual o principal risco se a estrutura da tabela `Itens` for alterada no futuro (ex: adicionando uma coluna `Peso`)?",
    options: {
      1: "Nenhum, o SGBD se ajusta automaticamente.",
      2: "É obrigatório omitir colunas para itens mágicos.",
      3: "O comando pode falhar ou, pior, inserir dados nas colunas erradas, corrompendo o item.",
      4: "Isso torna a inserção da poção mais rápida.",
    },
    correct: 3,
  },
  11: {
    type: "mult",
    ask: "Ao inserir um novo `Personagem` em RPG_Mundo, que possui uma coluna `PersonagemID` do tipo `AUTO_INCREMENT`, qual valor você geralmente fornece para `PersonagemID` no comando `INSERT`?",
    options: {
      1: "O próximo `PersonagemID` disponível, consultado manualmente.",
      2: "Zero (0), para indicar que é um novo herói.",
      3: "O valor `NULL`, `DEFAULT` ou simplesmente omite a coluna `PersonagemID` da lista de colunas do `INSERT`.",
      4: "Um valor negativo para diferenciar de IDs antigos.",
    },
    correct: 3,
  },
  12: {
    type: "complete",
    ask: "Para atualizar o `Nivel` do monstro 'Dragão Vermelho Ancião' (<code>MonstroID = 50</code>) para 25, a cláusula essencial para garantir que SÓ ele seja afetado é _ `MonstroID = 50`.",
    correct: ["WHERE"], 
  },
  13: {
    type: "mult",
    ask: "Qual comando é geralmente mais rápido para esvaziar COMPLETAMENTE a tabela `LogEventosJogo`, não permite `ROLLBACK` fácil e ignora triggers de deleção (como `ON DELETE` que poderiam arquivar logs)?",
    options: { 1: "DELETE FROM LogEventosJogo", 2: "DROP TABLE LogEventosJogo", 3: "TRUNCATE TABLE LogEventosJogo", 4: "UPDATE LogEventosJogo SET Conteudo = NULL" },
    correct: 3,
  },
  14: {
    type: "complete",
    ask: "Transações em RPG_Mundo garantem a _ das operações DML, como na compra de um item (deduzir ouro E adicionar item), significando 'tudo ou nada'. (Propriedade ACID)",
    correct: ["Atomicidade", "atomicidade"],
  },
  15: {
    type: "mult",
    ask: "Qual é a rede de segurança MAIS fundamental e indispensável contra um `DELETE FROM Monstros;` acidental que apagaria todas as criaturas de RPG_Mundo?",
    options: {
      1: "Uma cláusula `WHERE NivelMonstro > 100` muito bem escrita.",
      2: "Uso constante de Transações para cada `DELETE` pequeno.",
      3: "Backups regulares e testados do banco de dados RPG_Mundo.",
      4: "Validação na interface do Mestre de Jogo para impedir `DELETE` sem `WHERE`.",
    },
    correct: 3,
  },
  16: {
    type: "complete",
    ask: "Para inserir três novas `Racas` (Elfo Silvestre, Meio-Orc, Tiefling) em RPG_Mundo com um único comando `INSERT INTO Racas (NomeRaca, ...) VALUES (...), (...), (...);`, separamos os conjuntos de valores de cada raça usando _.",
    correct: ["vírgulas", "virgulas", ","],
  },
  17: {
    type: "mult",
    ask: "Como você atualizaria o `Nivel` para 10 E os `PontosVidaAtuais` para 150 do herói 'Kael, o Paladino' (<code>PersonagemID = 7</code>) na mesma instrução `UPDATE`?",
    options: {
      1: "É necessário usar duas instruções `UPDATE` separadas, uma para `Nivel` e outra para `PontosVidaAtuais`.",
      2: "`UPDATE Personagens SET Nivel = 10, PontosVidaAtuais = 150 WHERE PersonagemID = 7;`",
      3: "`UPDATE Personagens SET Nivel = 10 AND PontosVidaAtuais = 150 WHERE PersonagemID = 7;`",
      4: "`UPDATE Personagens (Nivel, PontosVidaAtuais) VALUES (10, 150) WHERE PersonagemID = 7;`",
    },
    correct: 2,
  },
  18: {
    type: "complete",
    ask: "Tentar deletar a `Classe` 'Guerreiro' da tabela `Classes` enquanto existem `Personagens` atribuídos a essa classe geralmente resultará em erro, pois `Personagens.ClasseID` é uma chave _ referenciando `Classes.ClasseID`, a menos que exista `ON DELETE SET NULL` ou `ON DELETE CASCADE`.",
    correct: ["estrangeira", "FOREIGN KEY", "foreign key"],
  },
  19: {
    type: "mult",
    ask: "Qual destes comandos SQL, frequentemente usados para gerenciar RPG_Mundo, pertence a uma categoria DIFERENTE do DML (INSERT, UPDATE, DELETE)?",
    options: { 1: "INSERT INTO Magias", 2: "UPDATE Monstros", 3: "DELETE FROM Inventarios", 4: "CREATE TABLE Guildas" },
    correct: 4, // CREATE TABLE é DDL
  },
  20: {
    type: "complete",
    ask: "Ao usar `UPDATE` ou `DELETE` para afetar UMA ÚNICA linha específica de forma segura, como ao atualizar os dados de 'Gandalf' (<code>PersonagemID = 3</code>), a melhor prática é filtrar pela coluna de chave _ na cláusula `WHERE`.",
    correct: ["primária", "primaria", "PRIMARY KEY", "primary key"],
  },
  21: {
    type: "mult",
    ask: "Em muitos SGBDs, se você executar um `UPDATE Personagens SET Nivel = Nivel + 1 WHERE Experiencia >= 1000;` sem um `BEGIN TRANSACTION` explícito, esta operação é tratada como:",
    options: {
      1: "Um erro, pois `BEGIN TRANSACTION` é sempre obrigatório para `UPDATE`.",
      2: "Uma transação implícita que é automaticamente confirmada (auto-commit) se bem-sucedida, ou desfeita se falhar.",
      3: "Parte da última transação que foi explicitamente aberta, mesmo que tenha sido em outra sessão de jogo.",
      4: "Uma operação que não pode ser desfeita com `ROLLBACK`, mesmo que o auto-commit esteja desabilitado.",
    },
    correct: 2,
  },
  22: {
    type: "complete",
    ask: "Para incrementar a `Quantidade` de 'Flechas de Prata' (<code>ItemID = X</code>) no `Inventario` de 'Legolas' (<code>InventarioID = Y</code>) em 10 unidades, você usaria `UPDATE InventarioItens SET Quantidade = Quantidade + _ WHERE InventarioID = Y AND ItemID = X;`",
    correct: ["10"],
  },
  23: {
    type: "mult",
    ask: "Qual boa prática DML é crucial para rastrear 'qual Mestre de Jogo alterou o nível do Dragão Vermelho e quando' no banco de dados RPG_Mundo, especialmente para auditoria e resolução de disputas?",
    options: {
      1: "Usar sempre `WHERE PersonagemID IS NOT NULL`.",
      2: "Realizar Backups do mundo a cada hora.",
      3: "Implementar Logging ou Triggers de Auditoria que registrem alterações em tabelas críticas como `Monstros` ou `Personagens`.",
      4: "Utilizar Transações para todas as consultas `SELECT`.",
    },
    correct: 3,
  },
  24: {
    type: "complete",
    ask: "Dentro de uma longa transação de 'Criação de Masmorra' em RPG_Mundo (que envolve inserir monstros, tesouros e armadilhas), você pode definir um _ `PontoSeguro_Sala1_Concluida` para permitir um `ROLLBACK TO PontoSeguro_Sala1_Concluida;` parcial, caso a configuração da Sala 2 dê errado.",
    correct: ["SAVEPOINT", "savepoint"],
  },
  25: {
    type: "mult",
    ask: "Definir `ON DELETE CASCADE` na chave estrangeira `CenarioMonstros.CenarioID` (que referencia `Cenarios.CenarioID`) pode ser útil, mas também perigoso porque ao deletar um `Cenario`:",
    options: {
      1: "Torna os comandos `DELETE FROM Cenarios` muito lentos, pois precisa verificar cada monstro.",
      2: "Impede o uso de `ROLLBACK` para esses `DELETE`s em `Cenarios`.",
      3: "Pode causar a exclusão automática e possivelmente inesperada de todos os registros de monstros associados àquele cenário na tabela `CenarioMonstros`.",
      4: "É incompatível com a maioria dos SGBDs modernos que suportam o universo de RPG_Mundo.",
    },
    correct: 3,
  },
};
// --- END OF FILE ask.js ---