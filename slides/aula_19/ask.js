const ask = {
  1: {
    type: "mult",
    ask: "Qual é o principal objetivo da auditoria em um banco de dados?",
    options: {
      1: "Melhorar a velocidade das consultas.",
      2: "Registrar e revisar eventos e atividades para segurança, conformidade e rastreabilidade.",
      3: "Reduzir o tamanho do banco de dados através da compressão de dados.",
      4: "Criar automaticamente backups incrementais do banco de dados."
    },
    correct: 2
  },
  2: {
    type: "mult",
    ask: "Qual a diferença fundamental entre auditoria de sistema e auditoria de dados?",
    options: {
      1: "Auditoria de sistema foca apenas em hardware, enquanto auditoria de dados foca apenas em software.",
      2: "Auditoria de sistema foca em eventos do SGBD (logins, erros do servidor), enquanto auditoria de dados foca nas interações com os dados armazenados (INSERT, SELECT, UPDATE, DELETE).",
      3: "Auditoria de sistema é realizada por auditores externos, enquanto auditoria de dados é feita exclusivamente por DBAs internos.",
      4: "Não existe diferença significativa, os termos são intercambiáveis."
    },
    correct: 2
  },
  3: {
    type: "mult",
    ask: "Para atender aos requisitos da LGPD (Lei Geral de Proteção de Dados), qual das seguintes ações de auditoria é mais relevante?",
    options: {
      1: "Otimizar o uso de índices em tabelas de produtos.",
      2: "Rastrear quem acessou e quem modificou dados pessoais de clientes.",
      3: "Monitorar o tempo de atividade (uptime) do servidor de banco de dados.",
      4: "Reduzir o tempo necessário para realizar um backup completo."
    },
    correct: 2
  },
  4: {
    type: "mult",
    ask: "Monitorar as atividades de usuários privilegiados (como DBAs) é um objetivo da auditoria para:",
    options: {
      1: "Aumentar a complexidade do trabalho dos DBAs.",
      2: "Garantir que o poder de acesso elevado não seja mal utilizado e detectar abusos.",
      3: "Impedir que DBAs realizem backups do banco de dados.",
      4: "Reduzir o número de usuários com acesso privilegiado."
    },
    correct: 2
  },
  5: {
    type: "mult",
    ask: "O que é uma 'trilha de auditoria' (audit trail)?",
    options: {
      1: "Um tipo especial de índice otimizado para consultas de log.",
      2: "Um script SQL utilizado para automatizar a otimização de queries.",
      3: "O registro cronológico e detalhado dos eventos e atividades auditados.",
      4: "Um plano de recuperação de desastres focado na restauração de logs."
    },
    correct: 3
  },
  6: {
    type: "mult",
    ask: "Qual estratégia de auditoria utiliza código SQL que é executado automaticamente em resposta a eventos DML (INSERT, UPDATE, DELETE) em tabelas específicas?",
    options: {
      1: "Auditoria baseada em logs nativos do SGBD.",
      2: "Auditoria via Triggers (Gatilhos de Monitoramento).",
      3: "Auditoria via ferramentas SIEM (Security Information and Event Management).",
      4: "Auditoria baseada em snapshots de disco."
    },
    correct: 2
  },
  7: {
    type: "mult",
    ask: "O Binary Log (Binlog) do MySQL, quando configurado com `binlog_format=ROW`, pode ser útil para auditoria de qual tipo de operação?",
    options: {
      1: "Apenas auditoria de tentativas de login e logoff.",
      2: "Principalmente auditoria de comandos `SELECT` em tabelas sensíveis.",
      3: "Auditoria de alterações de dados (DML), pois registra os valores de linha antes e depois.",
      4: "Auditoria de alterações nas configurações do servidor MySQL."
    },
    correct: 3
  },
  8: {
    type: "mult",
    ask: "Qual dos seguintes comandos SQL é um exemplo de DDL (Data Definition Language) que seria importante auditar?",
    options: {
      1: "INSERT INTO clientes (nome) VALUES ('João');",
      2: "UPDATE produtos SET preco = preco * 1.10;",
      3: "CREATE TABLE funcionarios_novos (...);",
      4: "DELETE FROM pedidos WHERE status = 'cancelado';"
    },
    correct: 3
  },
  9: {
    type: "mult",
    ask: "Por que auditar indiscriminadamente todos os comandos `SELECT` executados em um banco de dados é geralmente desaconselhado por padrão?",
    options: {
      1: "Porque melhora significativamente a performance do banco de dados.",
      2: "Porque pode gerar um volume excessivo de logs e causar um impacto negativo considerável na performance.",
      3: "Porque reduz o tamanho total dos arquivos de backup do sistema.",
      4: "Porque impede a utilização de índices otimizados para as consultas `SELECT`."
    },
    correct: 2
  },
  10: {
    type: "mult",
    ask: "No MySQL, além do binlog, qual é uma abordagem comum e robusta para implementar auditoria, especialmente em edições Community ou com Percona Server?",
    options: {
      1: "Utilizar exclusivamente o General Query Log para todas as necessidades de auditoria.",
      2: "Ativar e configurar um Audit Plugin específico (ex: Percona Audit Log Plugin, MariaDB Audit Plugin).",
      3: "Confiar unicamente nos logs gerados pelo sistema operacional do servidor.",
      4: "Desabilitar todos os mecanismos de logging para maximizar a performance."
    },
    correct: 2
  },
  11: {
    type: "mult",
    ask: "No PostgreSQL, qual é a extensão dedicada e amplamente utilizada para fornecer funcionalidades detalhadas de auditoria?",
    options: {
      1: "pgAdminAuditTool",
      2: "pgLogAnalyzerPlus",
      3: "pgAudit",
      4: "pgTriggerLoggerFramework"
    },
    correct: 3
  },
  12: {
    type: "mult",
    ask: "Ao criar um trigger de auditoria para uma operação de `UPDATE`, qual pseudovariável (no MySQL e PostgreSQL) permite acessar os valores da linha ANTES da alteração?",
    options: {
      1: "CURRENT",
      2: "BEFORE_VALUES",
      3: "NEW",
      4: "OLD"
    },
    correct: 4
  },
  13: {
    type: "mult",
    ask: "Em um trigger de auditoria no MySQL, qual função SQL retorna o nome do usuário do banco de dados que está executando a operação que disparou o trigger?",
    options: {
      1: "SYSTEM_USER()",
      2: "DATABASE_USER()",
      3: "CURRENT_USER()",
      4: "TRIGGER_USER()"
    },
    correct: 3
  },
  14: {
    type: "mult",
    ask: "Qual é a principal finalidade de se criar uma tabela de log de auditoria dedicada quando se utiliza triggers para auditoria?",
    options: {
      1: "Para armazenar os backups completos do banco de dados de forma organizada.",
      2: "Para registrar os eventos de auditoria (quem, o quê, quando, onde, etc.) capturados pelos triggers.",
      3: "Para armazenar as definições e o código SQL dos próprios triggers.",
      4: "Para acelerar a execução das consultas SELECT na tabela original que está sendo auditada."
    },
    correct: 2
  },
  15: {
    type: "mult",
    ask: "Qual das seguintes é uma boa prática crucial para o armazenamento de logs de auditoria?",
    options: {
      1: "Armazená-los na mesma tabela de dados que está sendo auditada para fácil acesso.",
      2: "Armazená-los em um local seguro, preferencialmente em um sistema ou servidor separado, com acesso altamente restrito.",
      3: "Deletar os logs de auditoria diariamente para economizar espaço em disco e melhorar a performance.",
      4: "Tornar os logs de auditoria publicamente acessíveis para promover a transparência total."
    },
    correct: 2
  },
  16: {
    type: "mult",
    ask: "Por que é importante definir e implementar uma política de retenção para os logs de auditoria?",
    options: {
      1: "Para garantir que os logs de auditoria nunca sejam apagados, mantendo um histórico infinito.",
      2: "Para evitar que os logs cresçam indefinidamente, consumindo todo o espaço disponível, e para atender a requisitos de conformidade sobre o tempo de guarda dos registros.",
      3: "Para acelerar a velocidade com que novos registros de auditoria são criados e escritos.",
      4: "Para permitir que qualquer usuário com acesso ao banco possa modificar ou apagar os logs de auditoria antigos."
    },
    correct: 2
  },
  17: {
    type: "mult",
    ask: "Qual é o principal impacto de performance que uma auditoria muito granular (ex: via triggers detalhados em tabelas com alto volume de transações) pode causar no SGBD?",
    options: {
      1: "Uma redução significativa no uso de CPU pelo servidor.",
      2: "Um aumento considerável na velocidade de todas as operações de DML.",
      3: "A adição de overhead (latência) às operações DML (INSERT, UPDATE, DELETE) que estão sendo auditadas.",
      4: "Uma diminuição no tamanho total dos arquivos de log do SGBD."
    },
    correct: 3
  },
  18: {
    type: "mult",
    ask: "A LGPD (Lei Geral de Proteção de Dados) do Brasil enfatiza quais princípios que são diretamente suportados e evidenciados pela auditoria de banco de dados?",
    options: {
      1: "Maximização da coleta de dados pessoais e livre compartilhamento irrestrito.",
      2: "Minimização das medidas de segurança e acesso totalmente aberto aos dados.",
      3: "Prestação de contas (accountability) e implementação de medidas de segurança para proteger dados pessoais.",
      4: "Anonimização obrigatória e irreversível de todos os dados armazenados no banco."
    },
    correct: 3
  },
  19: {
    type: "mult",
    ask: "O controle A.12.4 da norma ISO 27001 (Logging and Monitoring) refere-se primariamente à necessidade de:",
    options: {
      1: "Criptografar todas as conexões de rede com o banco de dados.",
      2: "Produzir, manter e revisar regularmente logs de eventos de usuários, exceções, falhas e eventos de segurança da informação.",
      3: "Realizar backups físicos completos do banco de dados a cada hora, sem exceção.",
      4: "Utilizar exclusivamente senhas com no mínimo 32 caracteres alfanuméricos e especiais para todos os usuários."
    },
    correct: 2
  },
  20: {
    type: "mult",
    ask: "O que é um sistema SIEM (Security Information and Event Management)?",
    options: {
      1: "Um tipo específico de banco de dados NoSQL otimizado para logs.",
      2: "Uma ferramenta de linha de comando para otimizar a performance de consultas SQL complexas.",
      3: "Um sistema que coleta, agrega, correlaciona e analisa logs de eventos de segurança de múltiplas fontes (incluindo SGBDs) para detecção de ameaças e geração de alertas.",
      4: "Um plugin de auditoria de código aberto exclusivo para o SGBD MySQL."
    },
    correct: 3
  },
  21: {
    type: "mult",
    ask: "No contexto de triggers de auditoria em MySQL ou PostgreSQL, a pseudovariável `NEW` (ou `NEW.*`) refere-se aos:",
    options: {
      1: "Dados de um novo usuário que acabou de ser criado no sistema.",
      2: "Valores da linha da tabela APÓS a execução de uma operação de INSERT ou UPDATE.",
      3: "Valores da linha da tabela ANTES da execução de uma operação de UPDATE ou DELETE.",
      4: "Registros de uma nova tabela de log de auditoria que foi recentemente criada."
    },
    correct: 2
  },
  22: {
    type: "mult",
    ask: "Qual tipo de evento DDL (Data Definition Language) é particularmente CRÍTICO auditar para a segurança da estrutura e dos dados do banco de dados?",
    options: {
      1: "Comandos `SELECT` em tabelas de sistema.",
      2: "Criação de novos índices (<code>CREATE INDEX</code>).",
      3: "Comandos `DROP TABLE` ou `DROP DATABASE`.",
      4: "Operações de `COMMIT` de transações."
    },
    correct: 3
  },
  23: {
    type: "mult",
    ask: "Uma das boas práticas de auditoria é 'evitar autoauditoria comprometida'. O que isso significa na prática?",
    options: {
      1: "Que os DBAs não devem auditar suas próprias ações para não enviesar os resultados.",
      2: "Que o sistema de auditoria e seus logs devem ser protegidos contra desabilitação ou adulteração pelas mesmas pessoas ou processos cujas ações estão sendo monitoradas, garantindo a integridade da trilha.",
      3: "Que a auditoria deve focar apenas nas tabelas criadas pelos usuários da aplicação, e não nas tabelas de sistema do SGBD.",
      4: "Que se deve utilizar apenas ferramentas de auditoria desenvolvidas pelo mesmo fornecedor do SGBD."
    },
    correct: 2
  },
  24: {
    type: "mult",
    ask: "Ao criar um trigger para auditar operações de `UPDATE` em uma tabela, por que é frequentemente útil incluir uma condição como `IF OLD.coluna_sensivel <> NEW.coluna_sensivel THEN ...`?",
    options: {
      1: "Para garantir que a operação de `UPDATE` sempre seja executada com sucesso, mesmo que não haja alteração.",
      2: "Para registrar uma entrada no log de auditoria apenas se o valor da coluna específica que está sendo monitorada realmente mudou, evitando logs desnecessários para `UPDATE`s que não alteram campos de interesse.",
      3: "Para forçar a coluna `coluna_sensivel` a aceitar apenas valores novos e diferentes dos anteriores.",
      4: "Esta não é uma prática comum ou útil em triggers de `UPDATE` para auditoria."
    },
    correct: 2
  },
  25: {
    type: "mult",
    ask: "Qual dos seguintes representa o MAIOR desafio ou consideração ao implementar uma estratégia de auditoria muito abrangente que loga quase todas as atividades no banco de dados?",
    options: {
      1: "A falta de ferramentas de SGBD capazes de realizar tal nível de logging.",
      2: "O enorme volume de dados de log que será gerado, o impacto no desempenho do sistema para registrar esses logs, e a complexidade para armazenar, gerenciar e analisar esses logs.",
      3: "A dificuldade extrema em criar usuários e permissões para o SGBD que permitam a auditoria.",
      4: "A incompatibilidade fundamental da auditoria detalhada com a maioria dos SGBDs relacionais modernos."
    },
    correct: 2
  },
  26: {
    type: "mult",
    ask: "Ao usar triggers para auditoria, qual informação NÃO está diretamente disponível através das pseudovariáveis OLD ou NEW dentro de um trigger AFTER DELETE?",
    options: {
      1: "O valor da chave primária da linha deletada.",
      2: "O valor de uma coluna não-chave da linha deletada.",
      3: "O nome do usuário que executou o DELETE (obtido por CURRENT_USER()).",
      4: "Os novos valores das colunas da linha deletada (pois a linha não existe mais com novos valores)."
    },
    correct: 4
  },
  27: {
    type: "mult",
    ask: "Qual é o principal benefício de usar um Audit Plugin (como Percona Audit Log ou pgAudit) em vez de depender apenas de logs gerais como o General Query Log do MySQL?",
    options: {
      1: "Audit Plugins são sempre mais rápidos e não causam nenhum overhead.",
      2: "Audit Plugins oferecem maior granularidade, formatação estruturada (JSON/XML), e filtragem avançada de eventos, tornando a auditoria mais eficaz e gerenciável.",
      3: "Audit Plugins eliminam a necessidade de backups.",
      4: "General Query Log é mais seguro pois não pode ser desabilitado."
    },
    correct: 2
  },
  28: {
    type: "mult",
    ask: "Para que serve a cláusula `FOR EACH ROW` na definição de um trigger?",
    options: {
      1: "Para indicar que o trigger só deve ser executado uma vez, independentemente do número de linhas afetadas.",
      2: "Para especificar que o corpo do trigger deve ser executado para cada linha individualmente afetada pela instrução DML que disparou o trigger.",
      3: "Para definir que o trigger só se aplica a consultas que retornam múltiplas linhas.",
      4: "Para limitar o número de execuções do trigger a um máximo de uma linha por vez."
    },
    correct: 2
  },
  29: {
    type: "mult",
    ask: "Qual dos seguintes NÃO é um componente tipicamente auditável relacionado à segurança de acesso e permissões?",
    options: {
      1: "Comandos `GRANT` e `REVOKE`.",
      2: "Tentativas de login bem-sucedidas e falhas.",
      3: "Alterações na senha de um usuário do banco de dados.",
      4: "O número de índices em uma tabela."
    },
    correct: 4
  },
  30: {
    type: "mult",
    ask: "Armazenar os valores `OLD` e `NEW` em uma auditoria de `UPDATE` é mais útil para:",
    options: {
      1: "Medir o tempo que o `UPDATE` levou para ser executado.",
      2: "Entender exatamente qual dado foi alterado, de qual valor para qual valor.",
      3: "Verificar se o usuário tinha permissão para fazer o `UPDATE`.",
      4: "Acelerar futuras operações de `SELECT` na tabela auditada."
    },
    correct: 2
  }
};