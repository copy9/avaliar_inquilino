Avalie Seu Inquilino
Bem-vindo ao Avalie Seu Inquilino, uma plataforma web em desenvolvimento destinada a ajudar proprietários e imobiliárias a tomar decisões de locação mais seguras e informadas. Este projeto é uma iniciativa pessoal para criar uma ferramenta colaborativa que avalia inquilinos com base em experiências reais, promovendo transparência no mercado imobiliário.

Sobre o Projeto
O "Avalie Seu Inquilino" é uma solução que permite analisar inquilinos por nome ou CPF, visualizar avaliações detalhadas de outros proprietários e adicionar novas avaliações. A plataforma inclui um sistema de planos de pagamento e um dashboard seguro para gerenciamento de perfil e histórico.

Objetivo
Reduzir riscos de locação (inadimplência, danos ao imóvel, problemas de convivência) através de uma base de dados colaborativa e ferramentas intuitivas.

Funcionalidades Principais
Análise de Inquilinos: Pesquisa por nome ou CPF com exibição de notas e comentários.
Avaliação Colaborativa: Registro de avaliações com notas (1–5 estrelas), comentários e fotos (melhorias ou danos).
Planos e Pagamentos: Opções de pesquisa individual, planos mensais/anuais e pacotes para grandes volumes.
Dashboard Seguro: Verificação de conta com upload de documentos (RG/CNH, selfie, comprovante de imóvel).
Calculadora de Economia: Estimativa de prejuízos evitados com bons inquilinos.
Perfil Editável: Atualização de nome, e-mail e foto do usuário.
Visualização de Fotos: Lightbox para ampliar imagens de avaliações.


Tecnologias Utilizadas
HTML5: Estrutura das páginas.
CSS3: Estilização com gradientes, sombras e design responsivo.
JavaScript: Interatividade, validações e modais (ex.: lightbox).
Google Fonts (Roboto): Tipografia consistente e profissional.


Estrutura do Projeto

├── index.html         # Página inicial
├── login.html         # Página de login
├── cadastro.html      # Página de cadastro
├── planos.html        # Página de planos
├── pagamento.html     # Página de pagamento
├── dashboard.html     # Dashboard do usuário
├── quem-somos.html    # Sobre a plataforma
├── contato.html       # Formulário de contato
├── styles.css         # Estilos globais
├── script.js          # Lógica JavaScript
└── images/            # Imagens (ícones, avatares, etc.)



Como Executar Localmente
Pré-requisitos
Navegador web (Chrome, Firefox, etc.).
Editor de código (ex.: VSCode).

Passos
Baixe os Arquivos
Copie os arquivos para uma pasta local no seu computador.

Execute
Abra o arquivo index.html no navegador ou use um servidor local:
npx live-server

Certifique-se de que a pasta images/ contém os arquivos necessários (ex.: user-avatar.png).

Navegação
Comece pelo index.html para ver a página inicial.
Use login.html ou cadastro.html para acessar o sistema.

Dashboard
Verifique sua conta com documentos pessoais e de propriedade.
Analise inquilinos ou adicione avaliações com fotos clicáveis.
Edite seu perfil no dashboard.

Planos e Pagamento
Veja opções em planos.html (ex.: R$ 20/pesquisa, R$ 16.000/2.000 pesquisas).
Simule pagamento em pagamento.html.

Estado Atual
Este é um projeto em desenvolvimento, funcionando como um protótipo front-end. As funcionalidades são simuladas localmente (ex.: banco de dados em JS, sem persistência real). Para torná-lo operacional, seria necessário:

Backend para autenticação e armazenamento (ex.: Node.js, Firebase).
Integração com API de pagamento (ex.: Stripe, PagSeguro).
Notas do Desenvolvedor
Autor: Marco antonio Dutra
Data de Início: Março de 2025 (baseado na data atual fornecida).
Objetivo Pessoal: Criar uma ferramenta útil para o mercado imobiliário e praticar habilidades de desenvolvimento web.