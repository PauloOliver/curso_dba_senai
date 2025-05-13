// --- START OF FILE ask.js ---
const ask = {
  1: {
    type: "mult",
    ask: "Qual é o principal objetivo da Modelagem Conceitual (MER/DER)?",
    options: {
        1: "Definir os tipos de dados exatos para o SGBD.",
        2: "Escrever os scripts SQL de criação das tabelas.",
        3: "Entender e representar as entidades, seus atributos e os relacionamentos entre elas de forma abstrata.",
        4: "Criar índices para otimizar as consultas."
    },
    correct: 3,
  },
  2: {
    type: "mult",
    ask: "Em um Diagrama Entidade-Relacionamento (Notação Chen), um relacionamento Muitos-para-Muitos (N:M) entre duas entidades é tipicamente resolvido na Modelagem Lógica criando:",
    options: {
        1: "Duas chaves estrangeiras em cada uma das tabelas originais.",
        2: "Uma nova tabela associativa (de junção) com chaves estrangeiras para ambas as entidades.",
        3: "Um atributo multivalorado em uma das entidades.",
        4: "Uma hierarquia de generalização/especialização."
    },
    correct: 2,
  },
  3: {
    type: "mult",
    ask: "A Primeira Forma Normal (1FN) estabelece que:",
    options: {
        1: "Não deve haver dependências transitivas.",
        2: "Todos os atributos não-chave devem depender totalmente da chave primária completa.",
        3: "Cada célula da tabela deve conter um valor atômico e não deve haver grupos repetitivos.",
        4: "A tabela deve ter uma chave estrangeira para cada relacionamento."
    },
    correct: 3,
  },
   4: {
    type: "mult",
    ask: "Se uma tabela `ItensPedido` tem uma chave primária composta (PedidoID, ProdutoID) e um atributo `DescricaoProduto` que depende APENAS de `ProdutoID`, qual Forma Normal ela viola?",
    options: { 1: "1FN", 2: "2FN", 3: "3FN", 4: "Nenhuma, está correto." },
    correct: 2, // DescricaoProduto tem dependência parcial da PK composta
  },
   5: {
    type: "complete",
    ask: "O processo de transformar o Modelo Entidade-Relacionamento em um conjunto de tabelas com chaves primárias e estrangeiras definidas é chamado de Modelagem _.",
    correct: ["Lógica", "lógica", "Logica", "logica"],
  }
};
// --- END OF FILE ask.js ---