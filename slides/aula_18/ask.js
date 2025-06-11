// ... (questões 1 a 15 já fornecidas anteriormente) ...
  16: {
    type: "mult",
    ask: "Qual a finalidade de uma política de retenção de backups?",
    options: {
      1: "Definir quais tabelas devem ser incluídas no backup.",
      2: "Determinar a velocidade com que os backups são realizados.",
      3: "Especificar por quanto tempo diferentes tipos de backups (diários, semanais, etc.) devem ser mantidos.",
      4: "Escolher o software de compressão para os arquivos de backup."
    },
    correct: 3
  },
  17: {
    type: "mult",
    ask: "Se um backup Incremental falhar ou for corrompido, o que acontece com a capacidade de restaurar os dados?",
    options: {
      1: "Não há impacto, pode-se pular o incremental corrompido.",
      2: "Apenas os dados daquele incremental específico são perdidos, o resto pode ser restaurado.",
      3: "Pode comprometer a restauração de todos os dados desde o último backup completo anterior à falha na cadeia incremental.",
      4: "Apenas backups diferenciais são afetados, não os incrementais."
    },
    correct: 3
  },
  18: {
    type: "mult",
    ask: "Qual das seguintes NÃO é uma razão válida para testar regularmente seus backups?",
    options: {
      1: "Verificar se os arquivos de backup estão sendo criados sem corrupção.",
      2: "Validar se o processo de restauração funciona e se o RTO pode ser cumprido.",
      3: "Aumentar o tamanho dos arquivos de backup para maior segurança.",
      4: "Garantir que os dados restaurados estão consistentes e utilizáveis."
    },
    correct: 3
  },
  19: {
    type: "mult",
    ask: "Ao configurar um usuário MySQL dedicado para backups, quais privilégios mínimos são geralmente necessários?",
    options: {
      1: "Apenas privilégio SUPER global.",
      2: "Apenas privilégio INSERT em todas as tabelas.",
      3: "Privilégios como SELECT, LOCK TABLES, SHOW VIEW, TRIGGER, EVENT (e RELOAD para algumas operações).",
      4: "Apenas privilégio CREATE USER."
    },
    correct: 3
  },
  20: {
    type: "mult",
    ask: "Qual o impacto de se usar a opção `--lock-all-tables` com `mysqldump` em um servidor de produção movimentado?",
    options: {
      1: "Acelera o processo de backup significativamente.",
      2: "Garante um backup consistente para InnoDB sem bloquear outras sessões.",
      3: "Pode causar um bloqueio global de todas as tabelas, interrompendo as operações de escrita e possivelmente de leitura durante o dump.",
      4: "Permite apenas o backup de tabelas do tipo MyISAM."
    },
    correct: 3
  },
  21: {
    type: "mult",
    ask: "Para restaurar um backup feito com `mysqldump --all-databases`, qual comando seria mais apropriado se você quiser recriar todos os bancos de dados contidos no dump?",
    options: {
      1: "mysql -u user -p < alldatabases.sql (sem especificar um banco de dados de destino)",
      2: "mysql -u user -p specific_db < alldatabases.sql (restauraria tudo dentro de specific_db)",
      3: "mysqldump --import alldatabases.sql",
      4: "Apenas backups de bancos individuais podem ser restaurados."
    },
    correct: 1 // O dump com --all-databases geralmente contém "CREATE DATABASE IF NOT EXISTS" e "USE"
  },
  22: {
    type: "mult",
    ask: "O que o log binário (binlog) do MySQL registra fundamentalmente?",
    options: {
      1: "Apenas erros ocorridos no servidor.",
      2: "Consultas SELECT lentas.",
      3: "Eventos que descrevem modificações nos dados do banco de dados (instruções DML, DDL).",
      4: "Estatísticas de uso de CPU e memória pelo servidor."
    },
    correct: 3
  },
  23: {
    type: "mult",
    ask: "Se o seu RPO é muito baixo (ex: 5 minutos), qual estratégia de backup é mais provável que você precise implementar?",
    options: {
      1: "Apenas backups completos semanais.",
      2: "Backups completos diários e logs de transação contínuos (ou backups incrementais muito frequentes).",
      3: "Apenas backups lógicos mensais.",
      4: "Desabilitar todos os backups para melhorar a performance."
    },
    correct: 2
  },
  24: {
    type: "mult",
    ask: "Qual a principal diferença entre `DROP DATABASE` e `DELETE FROM nome_tabela` em termos de recuperação?",
    options: {
      1: "Nenhuma, ambas são facilmente reversíveis com um backup.",
      2: "`DROP DATABASE` remove apenas a estrutura, `DELETE` remove os dados.",
      3: "`DROP DATABASE` remove toda a estrutura e dados e é mais difícil de recuperar sem um backup completo, enquanto `DELETE` pode ser recuperado com PITR se os binlogs estiverem ativos.",
      4: "`DELETE` é sempre mais rápido de recuperar que `DROP DATABASE`."
    },
    correct: 3
  },
  25: {
    type: "mult",
    ask: "Qual das seguintes opções NÃO é uma boa prática ao armazenar backups?",
    options: {
      1: "Manter múltiplas cópias dos backups.",
      2: "Armazenar todos os backups exclusivamente no mesmo servidor físico do banco de dados de produção.",
      3: "Manter pelo menos uma cópia off-site (em local geograficamente distinto).",
      4: "Usar diferentes tipos de mídia de armazenamento, se possível."
    },
    correct: 2
  },
  26: {
    type: "mult",
    ask: "Ao usar `cron` para agendar um script de backup, por que é importante redirecionar a saída (stdout e stderr) do script?",
    options: {
      1: "Para que o cron execute o script com prioridade mais alta.",
      2: "Para evitar que o script de backup seja executado.",
      3: "Para capturar logs de execução, sucessos e erros, facilitando o monitoramento e a depuração.",
      4: "Para que o script envie automaticamente os backups para a nuvem."
    },
    correct: 3
  },
  27: {
    type: "mult",
    ask: "Se você precisa restaurar apenas uma tabela específica de um backup lógico completo feito com `mysqldump` (arquivo .sql), qual seria uma abordagem?",
    options: {
      1: "Não é possível, backups lógicos só restauram o banco inteiro.",
      2: "Editar o arquivo .sql manualmente para extrair apenas as DDL e DML da tabela desejada (com cuidado) e executar essa porção.",
      3: "Usar uma ferramenta de backup físico para extrair a tabela.",
      4: "Executar o comando `mysqlrestore --table=nome_tabela arquivo.sql`."
    },
    correct: 2 // Embora ferramentas como mysqlpump ou pg_restore (para pg) sejam melhores para isso. mysqldump não tem um restore seletivo fácil.
  },
  28: {
    type: "mult",
    ask: "Qual o propósito de se usar `gzip` ou outra ferramenta de compressão em conjunto com `mysqldump`?",
    options: {
      1: "Para criptografar o arquivo de backup.",
      2: "Para tornar o backup mais rápido de ser realizado.",
      3: "Para reduzir significativamente o tamanho do arquivo de backup, economizando espaço de armazenamento.",
      4: "Para validar a integridade dos dados no backup."
    },
    correct: 3
  },
  29: {
    type: "mult",
    ask: "Para um banco de dados MUITO grande (Terabytes), qual tipo de backup geralmente oferece o RTO mais rápido (menor tempo de restauração)?",
    options: {
      1: "Backup lógico com `mysqldump`.",
      2: "Backup físico (ex: Percona XtraBackup ou snapshot de storage).",
      3: "Backup incremental diário apenas.",
      4: "Exportação para CSV."
    },
    correct: 2
  },
  30: {
    type: "mult",
    ask: "Qual das seguintes afirmações sobre a replicação MySQL e backups é VERDADEIRA?",
    options: {
      1: "A replicação MySQL substitui completamente a necessidade de backups.",
      2: "A replicação é útil para alta disponibilidade e disaster recovery, mas erros (como DELETEs acidentais) são replicados, então backups ainda são essenciais.",
      3: "Backups só precisam ser feitos no servidor mestre (master), nunca na réplica (slave/replica).",
      4: "A replicação garante automaticamente o Point-in-Time Recovery sem necessidade de binlogs adicionais."
    },
    correct: 2
  }
};