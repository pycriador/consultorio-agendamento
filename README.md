# Dra. Marta Gelsi Dias — Plataforma Odontológica & Gestão de Agendamentos

[![Status](https://img.shields.io/badge/Status-Mockup%20Funcional%20Completo-success?style=for-the-badge&logo=checkmarx&color=db2777)](https://github.com/pycriador/consultorio-agendamento)
[![Tecnologias](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge&logo=javascript&color=4c0519)](https://github.com/pycriador/consultorio-agendamento)
[![CRO](https://img.shields.io/badge/Registro-CRO%2071482-pink?style=for-the-badge&color=be185d)](https://github.com/pycriador/consultorio-agendamento)
[![Responsivo](https://img.shields.io/badge/Mobile-First-100%25%20Responsivo-brightgreen?style=for-the-badge)](https://github.com/pycriador/consultorio-agendamento)

Protótipo navegável de **alta fidelidade** e **aplicação interativa completa** desenvolvido para a **Dra. Marta Gelsi Dias** (Cirurgiã-Dentista • CRO 71482). 

O projeto une uma **Landing Page pública** moderna e humanizada a um **Sistema de Gestão Clínica (Painel Administrativo)** robusto, operando integralmente no cliente via **HTML5, CSS3 moderno, JavaScript Vanilla (ES6+) e LocalStorage**, simulando com fidelidade extrema a experiência de um produto odontológico SaaS em produção sem necessidade imediata de backend ou banco de dados.

---

## 🌟 Identidade Visual & Posicionamento Oficial

A plataforma foi construída e personalizada com base na identidade visual oficial da clínica:

- **Nome Profissional:** Dra. Marta Gelsi Dias — Odontologia
- **Titulação & Registro:** Cirurgiã-Dentista • CRO 71482
- **Slogan Oficial:** *"Seu sorriso em boas mãos! ♡"*
- **Selo de Atendimento:** *"Atendemos convênios"*
- **Canal de Contato Direto:** WhatsApp oficial `(11) 99577-0004`
- **Paleta de Cores Institucional:**
  - **Rosé Odontológico Primário:** `#db2777` / `#be185d` (delicadeza, acolhimento e saúde)
  - **Bordô / Vinho Nobre:** `#4c0519` / `#370311` (sofisticação, solidez médica e contraste premium)
  - **Fundo Nuance Blush:** `#fff8f9` / `#fff0f3` (luminosidade e conforto visual)
  - **Tons de Apoio:** Verde sucesso (`#10b981`), âmbar alerta (`#f59e0b`) e azul status (`#2563eb`)
- **Tipografia:**
  - *Playfair Display:* Títulos elegantes e sofisticados
  - *Dancing Script:* Caligrafia humanizada nos destaques da marca (*Dentista* e *boas mãos!*)
  - *Inter:* Tipografia de leitura limpa e técnica para prontuários, formulários e dados clínicos
- **Elementos Gráficos Oficiais:**
  - **Logo Oficial:** Convertido em PNG transparente de alta definição ([`assets/images/logo.png`](assets/images/logo.png)), aplicado no header, footer, tela de login e sidebar.
  - **Ícones Originais:** Extraídos diretamente da arte gráfica em PNG de alta resolução com acabamento circular antialiasing suave para os 4 pilares: *Clínica Geral*, *Limpeza Dental*, *Aparelho Ortodôntico* e *Implantes Dentários*.

---

## 🗺️ Estrutura & Navegação da Plataforma

A aplicação é dividida em duas grandes áreas totalmente integradas:

### 1. Área Pública (Landing Page & Portais de Pacientes)
- **Home / Landing Page (`index.html`):**
  - **Hero Section:** Chamada de impacto com o slogan oficial, badge de convênios, foto acolhedora do consultório e agendamento rápido.
  - **Sobre a Dra. Marta:** Biografia humanizada, registro CRO ativo e diferencial de atendimento sem medo e sem dor.
  - **Os 4 Pilares Odontológicos:** Cards interativos com os ícones autênticos extraídos da arte institucional.
  - **Diferenciais da Clínica:** Biossegurança de padrão hospitalar, pontualidade britânica, tecnologia e aceitação de múltiplos convênios.
  - **Planos & Avaliações:** Catálogo com valores e procedimentos transparentes.
  - **Perguntas Frequentes (FAQ):** Accordion com dúvidas comuns de novos pacientes.
  - **Footer Completo:** Links rápidos, mapa de localização e canais de contato.
- **Páginas Específicas de Especialidades:**
  - [`pages/clinica-geral.html`](pages/clinica-geral.html): Restaurações, diagnóstico e acompanhamento integral.
  - [`pages/limpeza.html`](pages/limpeza.html): Profilaxia profunda, raspagem e prevenção periodontal.
  - [`pages/aparelho-ortodontico.html`](pages/aparelho-ortodontico.html): Aparelhos fixos estéticos, metálicos e alinhadores transparentes.
  - [`pages/implantes.html`](pages/implantes.html): Reabilitação protética sobre implantes de titânio.
- **Agendamento Público Online (`pages/agendar.html`):** Fluxo em etapas onde o paciente seleciona especialidade, data, horário disponível e preenche seus dados com validação imediata.
- **Canal de Atendimento (`pages/contato.html`):** Informações de endereço, WhatsApp direto e formulário de contato.

### 2. Área Administrativa (Sistema de Gestão Clínica)
- **Autenticação Simulada (`login.html`):** Tela de login com visualização de senha, validação de formato e sessão persistida no LocalStorage.
- **Dashboard Executivo (`pages/dashboard.html`):**
  - Indicadores-chave (Consultas hoje, Pacientes cadastrados, Taxa de confirmação, Faturamento mensal estimado).
  - Alertas clínicos de pacientes do dia com chips de status em tempo real.
  - Ações rápidas de cadastro e atalhos operacionais.
- **Agenda Interativa (`pages/agenda.html`):**
  - Calendário com alternância entre visão semanal e mensal.
  - Slots de consulta codificados por cores conforme o procedimento.
  - Modal interativo para visualizar detalhes, confirmar presença ou reagendar.
- **Gestão de Agendamentos (`pages/agendamentos.html`):**
  - Tabela completa com filtros por status (*Confirmado*, *Pendente*, *Realizado*, *Cancelado*), busca textual por nome de paciente e data.
  - Modais para novo agendamento, edição de dados e cancelamento seguro.
- **Prontuário & Gestão de Pacientes (`pages/pacientes.html` e `pages/paciente-detalhes.html`):**
  - Listagem com foto/avatar, CPF, telefone, convênio, data da última consulta e status.
  - Ficha clínica detalhada: histórico de consultas, tratamentos realizados, prescrições, anotações de evolução e odontograma mock.
  - Cadastro e edição completa de pacientes via modal.
- **Catálogo de Serviços (`pages/servicos-admin.html`):** Gerenciamento de procedimentos, durações estimadas e faixas de preço.
- **Gestão de Planos & Convênios (`pages/planos.html`):** Tabela de convênios credenciados e planos particulares.
- **Grade de Horários & Bloqueios (`pages/horarios.html`):** Configuração de turnos de atendimento, intervalos de almoço e bloqueio de feriados ou folgas.
- **Central de Mensagens (`pages/mensagens.html`):** Comunicação interna e templates pré-configurados de pós-operatório e lembretes.
- **Disparo de WhatsApp (`pages/whatsapp.html`):** Simulação de envio de lembretes automáticos de consulta e mensagens personalizadas via API do WhatsApp Web.
- **Integração Google Calendar (`pages/google-calendar.html`):** Painel de sincronização bidirecional simulada entre o sistema da clínica e o Google Calendar.
- **Configurações da Clínica (`pages/configuracoes.html`):** Dados cadastrais, preferências de notificações por e-mail/SMS e backups de dados.
- **Perfil do Usuário (`pages/perfil.html`):** Atualização de dados da Dra. Marta, alteração de senha e encerramento de sessão (*logout*).

---

## 💻 Tecnologias Empregadas

O projeto foi construído propositalmente com **zero dependências externas pesadas**, garantindo performance imediata, leveza máxima e compatibilidade universal:

```
┌────────────────────────────────────────────────────────┐
│                      FRONT-END                         │
│  HTML5 Semântico • CSS3 Moderno (Custom Properties)    │
│  JavaScript Vanilla (ES6+ Modules & Classes)           │
├────────────────────────────────────────────────────────┤
│                 ESTADOS & PERSISTÊNCIA                 │
│  LocalStorage API (Engine de persistência mock)        │
│  Seed de dados pré-carregado em JSON / JS Objects      │
├────────────────────────────────────────────────────────┤
│                  DESIGN & ASSETS                       │
│  Google Fonts (Playfair Display, Dancing Script, Inter)│
│  Ícones e Logo Oficiais em PNG transparente recortado  │
└────────────────────────────────────────────────────────┘
```

- **CSS Moderno:** CSS Grid, Flexbox, variáveis nativas (`--color-primary`, `--space-4`, etc.), transições fluidas e total responsividade (mobile-first com breakpoints otimizados).
- **Sem `alert()` ou `confirm()` Nativos:** Todos os feedbacks utilizam **Toasts animados** e **Modais acessíveis customizados** com foco trap e tecla `Escape`.
- **Validações Client-side:** Máscaras de telefone, validação de campos obrigatórios, datas no passado e checagem de conflitos de horário.

---

## 📁 Estrutura de Arquivos do Projeto

```text
consultorio-agendamento/
│
├── index.html                   # Landing page institucional principal
├── login.html                   # Tela de login do sistema administrativo
├── README.md                    # Documentação técnica e operacional
│
├── assets/
│   ├── icons/                   # Ícones da plataforma
│   │   ├── icone-clinica-geral.png         # Ícone extraído oficial (168x168)
│   │   ├── icone-limpeza.png               # Ícone extraído oficial (168x168)
│   │   ├── icone-aparelho-ortodontico.png  # Ícone extraído oficial (168x168)
│   │   ├── icone-implantes.png             # Ícone extraído oficial (168x168)
│   │   ├── logo-marta.png                  # Logo transparente oficial
│   │   └── logo-marta.svg                  # Cópia vetorial
│   └── images/                  # Imagens e fotografias
│       ├── dra-marta-consultorio.jpg       # Foto oficial do consultório no Hero
│       ├── sorriso-saudavel.jpg            # Foto da seção Sobre a Profissional
│       ├── identidade-visual-dra-marta.jpg # Arte gráfica institucional original
│       ├── logo.jpg                        # Imagem de origem do logotipo
│       └── logo.png                        # Logotipo com fundo transparente
│
├── css/
│   ├── variables.css            # Design tokens (cores rosé/bordô, fontes, sombras)
│   ├── reset.css                # Normalização de estilos cross-browser
│   ├── global.css               # Estilos base, botões, cards e tipografia
│   ├── components.css           # Toasts, modais, badges e tabelas
│   ├── landing.css              # Estilos específicos da landing page e seções
│   ├── admin.css                # Layout do painel (sidebar, topbar, cards de métricas)
│   ├── forms.css                # Estilização de inputs, selects e estados de erro
│   ├── calendar.css             # Componente de grade da agenda e visualizações
│   └── responsive.css           # Breakpoints para smartphones, tablets e desktops
│
├── js/
│   ├── app.js                   # Inicializador da aplicação e roteamento simples
│   ├── storage.js               # Gerenciador de persistência no LocalStorage
│   ├── mock-data.js             # Base inicial de pacientes, consultas e métricas
│   ├── components.js            # Componentes reutilizáveis (Sidebar, Header, etc.)
│   ├── modal.js                 # Gerenciador global de janelas modais
│   ├── toast.js                 # Sistema de notificações flutuantes (Toasts)
│   ├── calendar.js              # Lógica do calendário e renderização de slots
│   ├── appointments.js          # CRUD de agendamentos e controle de status
│   ├── patients.js              # CRUD de pacientes e visualização de prontuário
│   ├── messages.js              # Central de mensagens e modelos de texto
│   ├── whatsapp.js              # Disparo de lembretes e integração WhatsApp
│   └── navigation.js            # Controle do menu hambúrguer mobile e rolagem suave
│
└── pages/                       # Subpáginas do sistema
    ├── agendar.html             # Fluxo público de agendamento online
    ├── contato.html             # Página pública de contato e localização
    ├── servicos.html            # Catálogo público de tratamentos
    ├── clinica-geral.html       # Página individual: Clínica Geral
    ├── limpeza.html             # Página individual: Limpeza Dental
    ├── aparelho-ortodontico.html# Página individual: Aparelho Ortodôntico
    ├── implantes.html           # Página individual: Implantes Dentários
    ├── dashboard.html           # Painel administrativo principal
    ├── agenda.html              # Calendário e agenda médica
    ├── agendamentos.html        # Listagem e filtros de agendamentos
    ├── pacientes.html           # Lista e busca de pacientes cadastrados
    ├── paciente-detalhes.html   # Prontuário detalhado de um paciente
    ├── servicos-admin.html      # Gestão de procedimentos e valores
    ├── planos.html              # Gestão de convênios atendidos
    ├── horarios.html            # Gestão da grade de horários e folgas
    ├── mensagens.html           # Caixa de entrada e templates de mensagens
    ├── whatsapp.html            # Central de campanhas e envios por WhatsApp
    ├── google-calendar.html     # Painel de sincronização Google Calendar
    ├── configuracoes.html       # Configurações do consultório
    └── perfil.html              # Perfil da Dra. Marta e encerramento de sessão
```

---

## 🚀 Como Executar o Projeto Localmente

Por ser um projeto baseado em tecnologias web puras, não é necessária a instalação de compiladores ou gerenciadores de pacotes como Node.js ou Composer para rodá-lo:

### Método 1: Abertura Direta
Basta dar um duplo clique no arquivo [`index.html`](index.html) no seu gerenciador de arquivos (Windows Explorer, Finder, etc.) para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Método 2: Servidor Local (Recomendado)
Para uma experiência idêntica à de produção (com suporte ideal a módulos e caminhos relativos):

- **Via Python:**
  ```bash
  # No diretório do projeto:
  python -m http.server 3000
  ```
  Acesse no navegador: `http://localhost:3000`

- **Via Node.js (`npx`):**
  ```bash
  npx serve .
  ```

- **Via VS Code / IDE:**
  Instale a extensão **Live Server** e clique em *"Go Live"* com o arquivo `index.html` aberto.

---

## 🗄️ Integração com Supabase (Banco de Dados & Autenticação Real)

A plataforma conta com integração completa com o **Supabase** (PostgreSQL na nuvem e Supabase Auth), provendo autenticação real com senhas criptografadas e operações de CRUD completas e persistentes.

### 🔐 Autenticação com Senhas Criptografadas
- **Engine:** Supabase Auth (`auth.users`) com criptografia robusta (bcrypt).
- **Controle de Acesso:** Camada `AuthGuard` client-side em todas as páginas administrativas de `/pages/`. Se o token JWT não estiver ativo ou for inválido, o usuário é imediatamente redirecionado para `login.html`.
- **Credenciais Oficiais de Acesso:**
  - **E-mail:** `admin@dramartagelsi.com.br`
  - **Senha:** `Marta@2026Admin` *(usuário provisionado com senha criptografada)*

### 📊 Estrutura Relacional do Banco de Dados
O script completo de criação das tabelas, índices e políticas de Row Level Security (RLS) está disponível em [`supabase/schema.sql`](supabase/schema.sql):
- `patients`: Dados cadastrais de pacientes (nome, CPF, telefone, e-mail, convênio, status, notas de anamnese).
- `appointments`: Agenda e consultas (data, horário, serviço, status: confirmado/pendente/cancelado/realizado, valor).
- `services`: Catálogo de procedimentos odontológicos, duração e valores.
- `plans`: Convênios odontológicos aceitos e coberturas.
- `clinic_settings`: Configurações operacionais e horários de atendimento da clínica.
- `messages`: Mensagens e templates de comunicação.
- `audit_logs`: Registro de ações e auditoria do sistema.

### ⚡ Como executar o Schema e o Seed no Supabase
1. Acesse o painel do seu projeto no [Supabase Dashboard](https://supabase.com/dashboard).
2. Abra o menu **SQL Editor**.
3. Copie e cole todo o conteúdo do arquivo [`supabase/schema.sql`](supabase/schema.sql) e clique em **Run**.
4. Para popular os dados iniciais pelo backend Node.js (opcional):
   ```bash
   node scripts/seed-supabase.js
   ```

> **Resiliência:** O `DatabaseService` possui fallback automático e sincronização com o storage local, garantindo alta disponibilidade da interface com resposta instantânea.

---

## 🔄 Sincronização Dinâmica & Recompilação da Landing Page

Qualquer edição, adição, inativação ou alteração realizada no painel administrativo reflete diretamente na Landing Page (`index.html`) e nas páginas públicas (`servicos.html` e `contato.html`):

1. **Sincronização em Tempo Real no Cliente (`js/landing-sync.js`):**
   - **Serviços (`/pages/servicos-admin.html`):** Os procedimentos ativos são carregados diretamente do Supabase e renderizados na seção `#tratamentos`, vinculando ícones específicos das especialidades e botões direcionados para agendamento.
   - **Planos & Combos (`/pages/planos.html`):** Novos planos ou alterações de valores, periodicidade e destaques ("Mais Procurado") sincronizam automaticamente na grade `#planos`.
   - **Horários de Atendimento (`/pages/horarios.html`):** A grade de dias e expedientes configurada atualiza o rodapé oficial e a seção de contato.

2. **Recompilação Estática para SEO / Deploy (`scripts/sync-landing.js`):**
   - Caso deseje gerar/recompilar o HTML estático pré-renderizado diretamente nos arquivos `.html`:
   ```bash
   node scripts/sync-landing.js
   ```
   Este script busca os dados mais recentes do Supabase (ou base local), formata as estruturas semânticas e injeta-as diretamente no código de `index.html`, `pages/servicos.html` e `pages/contato.html`.

---

## 🔑 Credenciais de Acesso (Área Interna)

Para acessar o Painel Administrativo de Gestão Clínica:

1. Clique no botão **"Área interna"** no menu superior da Landing Page ou acesse [`login.html`](login.html).
2. Utilize as credenciais do Supabase Auth:
   - **E-mail:** `admin@dramartagelsi.com.br`
   - **Senha:** `Marta@2026Admin`
3. Clique em **"Entrar no Sistema"**. O sistema autenticará o usuário diretamente pelo Supabase Auth, armazenará o token de sessão e redirecionará para o Dashboard.

---

## 📱 Responsividade & Suporte Multiplataforma

O projeto foi rigorosamente testado em diferentes resoluções e formatos de tela:
- **Mobile (Smartphones até 480px e 768px):** Menu colapsável em gaveta lateral (drawer), dropdown unificado de ações de paciente, tabelas com scroll touch horizontal, botões com área de toque mínima de 44px e formulários em coluna única.
- **Tablets (769px a 1024px):** Grids adaptativos de 2 colunas e agenda redimensionável.
- **Desktops & Telas Ultrawide (1025px+):** Sidebar fixa com navegação rápida, cards informativos em 4 colunas e aproveitamento inteligente do espaço visual.

---

## 📄 Licença & Autoria

- **Profissional Titular:** Dra. Marta Gelsi Dias (CRO 71482)
- **Desenvolvimento & Prototipagem:** Plataforma criada sob medida para demonstração de produto.
- **Repositório Oficial:** [github.com/pycriador/consultorio-agendamento](https://github.com/pycriador/consultorio-agendamento)
