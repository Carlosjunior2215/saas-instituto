# 📚 Instituto - Landing Page Institucional Premium

## 📖 Visão Geral

Projeto de **site institucional moderno e profissional** para Instituto de Oftalmologia em Goiânia, desenvolvido com as tecnologias mais recentes da web.

**Tecnologia:** Next.js 15 + React 19 + TypeScript + Tailwind CSS + Framer Motion

**Status:** ✅ Pronto para Produção

---

## 🎯 Funcionalidades Principais

### ✨ Features Implementadas
- ✅ **Multi-unidades** - Suporte para múltiplas unidades do Instituto
- ✅ **Dark Mode** - Tema claro e escuro com toggle
- ✅ **Seletor de Unidade** - Menu para escolher entre Goiânia e outras cidades
- ✅ **WhatsApp Flutuante** - Botão flutuante com link direto ao WhatsApp
- ✅ **Animações Suaves** - Framer Motion em toda a interface
- ✅ **Responsividade Total** - Mobile, Tablet, Desktop
- ✅ **SEO Otimizado** - Metadata dinâmica, Open Graph, Schema.org
- ✅ **Formulário de Contato** - Validação com Zod + React Hook Form
- ✅ **Carrossel de Depoimentos** - Swiper.js v12
- ✅ **Galeria com Modal** - Seção de estrutura com imagens
- ✅ **FAQ Interativo** - Accordion com animações
- ✅ **Google Maps Embed** - Localização da unidade
- ✅ **Indicador Dev Next.js** - Apenas em desenvolvimento (desaparece em produção)

---

## 🛠️ Requisitos do Sistema

### Mínimo Necessário
- **Node.js** v18.0.0 ou superior
- **npm** v9.0.0 ou superior (ou yarn/pnpm)
- **Git** (opcional, para controle de versão)

### Recomendado
- **Node.js** v20.0.0 ou superior (LTS)
- **Visual Studio Code** + Extensões:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin
  - Prettier - Code formatter

### Verificar Versões
```bash
node --version
npm --version
```

---

## 🚀 Como Começar (Passo a Passo)

### 1️⃣ Abrir Terminal

**Windows:**
- Pressione `Windows + R`
- Digite `cmd` ou `powershell`
- Navegue até a pasta do projeto

**macOS/Linux:**
```bash
cd ~/Desktop/saas-instituto
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

**Tempo estimado:** 2-5 minutos (depende da conexão)

**O que ele faz:**
- Baixa todas as bibliotecas do `package.json`
- Cria a pasta `node_modules`
- Instala as dependências de desenvolvimento

### 3️⃣ Configurar Variáveis de Ambiente (Opcional)

```bash
# Copiar arquivo de exemplo (Windows)
copy .env.example .env.local

# Copiar arquivo de exemplo (macOS/Linux)
cp .env.example .env.local
```

**Arquivo `.env.local` (se quiser adicionar no futuro):**
```env
# URL pública do site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Chaves de API (futuras integrações)
# RESEND_API_KEY=re_xxxxxxxxxx
```

### 4️⃣ Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

**Saída esperada:**
```
  ▲ Next.js 16.2.9
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 3.2s
```

### 5️⃣ Abrir no Navegador

Acesse em seu navegador:
```
http://localhost:3000
```

**Você verá:**
- ✅ Site carregado e funcional
- ✅ Botão flutuante do WhatsApp
- ✅ Ícone "N" do Next.js no canto inferior direito (apenas em desenvolvimento)
- ✅ Seletor de unidade funcionando

---

## 📦 Scripts Disponíveis

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Resultado: Abre em http://localhost:3000
# Recarrega automaticamente ao salvar arquivos
# Mostra o indicador dev "N" do Next.js
```

### Build & Produção
```bash
# Compilar para produção
npm run build

# Executar versão de produção (sem hot reload)
npm start

# Nota: O indicador "N" desaparece completamente em produção
```

### Qualidade de Código
```bash
# Verificar erros de linting
npm run lint

# Corrigir automaticamente problemas de linting
npm run lint:fix

# Formatar código (prettier)
npm run format

# Verificar tipos TypeScript
npm run type-check
```

### Ciclo Completo (Recomendado Antes de Commit)
```bash
npm run type-check && npm run lint:fix && npm run format
```

---

## 📁 Estrutura do Projeto

```
saas-instituto/
│
├── 📂 src/                          # Código-fonte principal
│   ├── 📂 app/
│   │   ├── layout.tsx               # Layout raiz (HTML, Meta tags)
│   │   ├── page.tsx                 # Página principal (agrupa todas as seções)
│   │   ├── globals.css              # Estilos globais (Dark mode, animações)
│   │   └── favicon.ico
│   │
│   ├── 📂 components/               # Componentes reutilizáveis
│   │   ├── Navbar.tsx               # Navegação com menu mobile
│   │   ├── Footer.tsx               # Rodapé com links
│   │   ├── FloatingWhatsApp.tsx     # Botão flutuante WhatsApp
│   │   ├── UnitSelector.tsx        # Seletor de unidades
│   │   └── ThemeToggle.tsx         # Toggle dark mode
│   │
│   ├── 📂 sections/                 # Seções da página
│   │   ├── HeroSection.tsx          # Seção inicial (destaque)
│   │   ├── AboutSection.tsx         # Sobre o Instituto
│   │   ├── SpecialtiesSection.tsx   # Especialidades (serviços)
│   │   ├── DifferentialsSection.tsx # Diferenciais (pontos fortes)
│   │   ├── TeamSection.tsx          # Equipe de profissionais
│   │   ├── StructureSection.tsx     # Galeria com modal
│   │   ├── TestimonialsSection.tsx  # Depoimentos (slider)
│   │   ├── FAQSection.tsx           # Perguntas frequentes
│   │   ├── ContactSection.tsx       # Formulário de contato
│   │   ├── LocationSection.tsx      # Localização + Google Maps
│   │   └── WhyTrustSection.tsx      # Por que confiar
│   │
│   ├── 📂 contexts/                 # Context API
│   │   ├── LocationContext.tsx      # Contexto de unidades/cidades
│   │   └── ThemeContext.tsx         # Contexto de tema (light/dark)
│   │
│   ├── 📂 constants/
│   │   └── index.ts                 # Dados constantes (unidades, FAQs, etc)
│   │
│   ├── 📂 types/
│   │   └── index.ts                 # Tipos TypeScript
│   │
│   ├── 📂 lib/
│   │   ├── security.ts              # Validação de URLs e sanitização
│   │   └── utils.ts                 # Funções utilitárias
│   │
│   └── 📂 hooks/                    # Custom Hooks (expansão futura)
│
├── 📂 public/                       # Arquivos estáticos
│   ├── 📂 logos/
│   │   └── logo-goiania.jpg        # Logo do Instituto
│   ├── 📂 imagem/
│   │   ├── sobreBlefaro.png        # Imagem sobre
│   │   ├── especialidades.png      # Imagem especialidades
│   │   ├── GOIÂNIA.jpeg            # Fotos estrutura
│   │   └── GOIÂNIA1.jpeg
│   └── favicon.ico
│
├── 📂 .claude/                      # Configuração Claude Code
│
├── 📄 package.json                  # Dependências do projeto
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 tailwind.config.ts            # Configuração Tailwind CSS
├── 📄 next.config.ts                # Configuração Next.js
├── 📄 postcss.config.mjs            # Processamento de CSS
├── 📄 .eslintrc.json                # Regras de linting
├── 📄 .prettierrc                   # Formatação de código
├── 📄 .env.example                  # Exemplo de variáveis de ambiente
├── 📄 .gitignore                    # Arquivos ignorados pelo Git
├── 📄 vercel.json                   # Configuração para deploy Vercel
│
└── 📄 README.md                     # Este arquivo

```

---

## 📊 Dependências Principais

### Dependências de Produção

| Pacote | Versão | Propósito |
|--------|--------|----------|
| **Next.js** | 16.2.9 | Framework React/SSR |
| **React** | 19.0.0 | Biblioteca UI |
| **TypeScript** | 5.6.0 | Tipagem estática |
| **Tailwind CSS** | 3.4.3 | Estilização por utilitários |
| **Framer Motion** | 11.3.24 | Animações/transições |
| **Swiper** | 12.2.0 | Carrossel/slider |
| **React Hook Form** | 7.52.1 | Gerenciamento de formulários |
| **Zod** | 3.23.8 | Validação de dados |
| **React Icons** | 5.2.1 | Biblioteca de ícones |
| **Clsx** | 2.1.1 | Concatenação de classes |

### Dependências de Desenvolvimento

| Pacote | Versão | Propósito |
|--------|--------|----------|
| **@types/node** | 20.11.0 | Tipos Node.js |
| **@types/react** | 19.0.0 | Tipos React |
| **ESLint** | 9.0.0 | Linting de código |
| **Prettier** | 3.2.5 | Formatação de código |
| **Autoprefixer** | 10.4.17 | Prefixos CSS automáticos |

---

## 🎨 Paleta de Cores

### Cores Principais

| Cor | Valor HEX | Uso |
|-----|-----------|-----|
| **Primary** | `#0F4C81` | Botões, links, destaques |
| **Secondary** | `#2E7BCF` | Acentos, hover states |
| **Success** | `#10B981` | Confirmações, CheckBox |
| **Error** | `#EF4444` | Erros, alertas |
| **Warning** | `#F59E0B` | Avisos |
| **Background Light** | `#FFFFFF` | Fundo padrão (claro) |
| **Background Dark** | `#0F0F0F` | Fundo dark mode |
| **Text Primary** | `#1F2937` | Texto principal |
| **Text Secondary** | `#6B7280` | Texto secundário |
| **Gold/Accent** | `#FFC107` | Destaque em dark mode |

### Modificadores Tailwind
```typescript
// tailwind.config.ts
primary: { 50, 100, 200, ..., 900 }
secondary: { 50, 100, 200, ..., 900 }
// Uso: bg-primary-600, text-primary-50, border-secondary-200
```

---

## 🌍 Unidades do Instituto

### Dados Configuráveis

As unidades estão configuradas em **`src/constants/index.ts`**:

```typescript
export const UNITS = [
  {
    id: 1,
    city: 'Goiânia',
    state: 'GO',
    address: 'Rua das Flores, 123',
    cep: '74000-000',
    phone: '+55 (62) 99999-9999',
    whatsapp: '+55 (62) 99999-9999',
    whatsappLink: 'https://wa.me/5562999999999',
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
    instagram: 'https://instagram.com/instituto_goiania'
  },
  // Adicionar mais unidades aqui
]
```

### Como Adicionar Nova Unidade

1. Abra `src/constants/index.ts`
2. Adicione um novo objeto ao array `UNITS`
3. Preencha todos os campos (city, address, phone, etc)
4. O `UnitSelector` será atualizado automaticamente

---

## 🔐 Segurança

### Implementado
- ✅ **Content Security Policy (CSP)** - Headers de segurança
- ✅ **Validação de URLs** - Previne XSS em links
- ✅ **Sanitização de iframes** - Google Maps seguro
- ✅ **Proteção contra clickjacking** - X-Frame-Options
- ✅ **HTTPS enforced** - Em produção (Vercel)

### Arquivo de Segurança
```typescript
// src/lib/security.ts
- isValidHttpUrl()    // Valida URLs
- sanitizeIframeSrc() // Sanitiza URLs de embed
```

---

## 🚀 Deploy em Produção

### Opção 1: Vercel (Recomendado)

#### Passo 1: Fazer Deploy Direto
```bash
# Instalar CLI do Vercel
npm install -g vercel

# Fazer login
vercel login

# Deploy automático
vercel --prod
```

#### Passo 2: Verificar em Produção
```
https://seu-projeto.vercel.app
```

**Benefícios:**
- ✅ Deployment automático
- ✅ SSL/HTTPS gratuito
- ✅ CDN global
- ✅ Performance otimizada
- ✅ Integração com Git

### Opção 2: GitHub + Vercel (Automático)

1. **Enviar para GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/instituto.git
git push -u origin main
```

2. **Conectar ao Vercel:**
- Acesse [vercel.com](https://vercel.com)
- Clique em "New Project"
- Selecione seu repositório GitHub
- Clique em "Deploy"

### Opção 3: Docker (Avançado)

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build e run
docker build -t instituto .
docker run -p 3000:3000 instituto
```

---

## ✅ Checklist Antes de Produção

- [ ] `npm run type-check` - Sem erros TypeScript
- [ ] `npm run lint` - Sem avisos ESLint
- [ ] `npm run build` - Build completa sem erros
- [ ] Testar em `npm start` (produção local)
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar dark mode
- [ ] Testar todas as unidades no UnitSelector
- [ ] Verificar links WhatsApp e redes sociais
- [ ] Testar formulário de contato
- [ ] Verificar SEO (meta tags, Open Graph)
- [ ] Lighthouse score > 90
- [ ] Não há console errors

---

## 🐛 Troubleshooting

### ❌ Problema: "npm: command not found"
**Solução:** Node.js não está instalado
```bash
# Instalar em:
# https://nodejs.org (versão LTS recomendada)

# Verificar após instalação:
node --version
npm --version
```

### ❌ Problema: Porta 3000 já está em uso
**Solução:**
```bash
# Usar porta diferente:
npm run dev -- -p 3001

# Resultado: http://localhost:3001
```

### ❌ Problema: "Module not found" ao rodar
**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### ❌ Problema: Indicador "N" aparecendo em produção
**Solução:** Não é problema! O indicador só aparece em desenvolvimento
- ✅ Em `npm run dev` → Aparece o "N"
- ✅ Em `npm run build` + `npm start` → Desaparece

### ❌ Problema: Build falha com erros de tipo
**Solução:**
```bash
npm run type-check  # Ver erros específicos
# Corrigir erros mencionados
npm run build       # Tentar novamente
```

### ❌ Problema: Imagens não carregam
**Solução:** Verificar se arquivos existem em `public/`
```bash
# Listar arquivos públicos:
ls public/
ls public/logos/
ls public/imagem/
```

---

## 📚 Documentação de Componentes

### FloatingWhatsApp.tsx
**Propósito:** Botão flutuante verde com link WhatsApp

**Props:** Nenhuma (usa LocationContext)

**Características:**
- Animação de pulse
- Valida URLs antes de renderizar
- Responsivo (bottom-6 right-6)

### UnitSelector.tsx
**Propósito:** Dropdown para escolher unidade

**Props:** Nenhuma (usa LocationContext)

**Características:**
- Atualiza contexto ao selecionar
- Estilização dinâmica baseada no tema
- Mostra cidade selecionada

### ThemeToggle.tsx
**Propósito:** Botão para trocar entre light/dark mode

**Props:** Nenhuma (usa ThemeContext)

**Características:**
- Ícone de sol/lua animado
- Salva preferência no localStorage
- Respeita preferência do sistema

### Navbar.tsx
**Propósito:** Navegação principal com menu mobile

**Features:**
- Menu responsivo (hamburger em mobile)
- Links de navegação suave (scroll)
- Logo customizável
- Sticky (fica no topo ao scroll)

### ContactSection.tsx
**Propósito:** Formulário de contato com validação

**Validação:**
- Nome: obrigatório, mín. 3 caracteres
- Email: formato válido
- Assunto: obrigatório
- Mensagem: obrigatório, mín. 10 caracteres

---

## 🎯 Próximas Funcionalidades (Roadmap)

- [ ] Backend de formulário (Resend/SendGrid)
- [ ] Sistema de agendamento
- [ ] Dashboard administrativo
- [ ] Blog integrado
- [ ] Integração Google Analytics avançada
- [ ] Chat ao vivo
- [ ] Integração com CRM
- [ ] Versionamento de conteúdo

---

## 📞 Suporte e Contato

**Dúvidas sobre o projeto?**
- Verifique o formulário de contato no site
- Ou envie mensagem via WhatsApp
- Email: devcarlosjunior6@gmail.com

**Issues ou bugs?**
- Documente o problema
- Incluir passos para reproduzir
- Screenshots/videos se possível

---

## 📄 Licença

MIT - Você é livre para usar este projeto em seus próprios projetos

---

## 🎉 Bom desenvolvimento!

**Desenvolvido com ❤️ usando Next.js 15 + React 19**

Para mais informações, consulte a documentação oficial:
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
