# 🏗️ Arquitetura e Fluxo de Dados

## 📐 Arquitetura Geral

```
┌─────────────────────────────────────────────────────────┐
│                   NAVEGADOR DO USUÁRIO                  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │         PÁGINA INICIAL (page.tsx)                │   │
│  │  ┌────────────────────────────────────────────┐  │   │
│  │  │  Navbar (Navegação + Theme Toggle)         │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  HeroSection (Destaque)                    │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  AboutSection (Sobre o Instituto)          │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  SpecialtiesSection (Serviços)             │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  ... (outras seções)                       │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  FloatingWhatsApp (Botão flutuante)        │  │   │
│  │  ├────────────────────────────────────────────┤  │   │
│  │  │  Footer (Rodapé)                           │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🌳 Árvore de Componentes

```
App (src/app/layout.tsx)
├── Navbar
│   ├── Logo
│   ├── Nav Links
│   ├── UnitSelector ◄──── LocationContext
│   ├── ThemeToggle ◄────── ThemeContext
│   └── Mobile Menu
│
├── Page (src/app/page.tsx)
│   ├── HeroSection
│   ├── AboutSection
│   ├── SpecialtiesSection
│   ├── DifferentialsSection
│   ├── TeamSection
│   ├── StructureSection
│   │   └── Modal (Galeria)
│   ├── TestimonialsSection
│   │   └── Swiper Slider
│   ├── WhyTrustSection
│   ├── FAQSection
│   │   └── Accordion
│   ├── ContactSection
│   │   └── React Hook Form
│   └── LocationSection ◄── LocationContext
│
├── FloatingWhatsApp ◄──── LocationContext
│
└── Footer
    └── Links sociais
```

---

## 🎯 Context API (Estado Global)

### LocationContext
**Arquivo:** `src/contexts/LocationContext.tsx`

**Propósito:** Gerenciar a unidade selecionada

**Estado:**
```typescript
interface Unit {
  id: number
  city: string
  state: string
  address: string
  cep: string
  phone: string
  whatsapp: string
  whatsappLink: string
  mapEmbedUrl: string
  instagram: string
}

interface LocationContextType {
  selectedUnit: Unit
  setSelectedUnit: (unit: Unit) => void
}
```

**Fluxo:**
```
1. Usuário abre site
   ↓
2. App carrega unidade padrão (Goiânia)
   ↓
3. UnitSelector atualiza selectedUnit
   ↓
4. LocationSection, FloatingWhatsApp, etc atualizam com dados novos
```

**Componentes que usam:**
- UnitSelector (lê e escreve)
- LocationSection (lê)
- FloatingWhatsApp (lê)
- Navbar (exibe cidade)

---

### ThemeContext
**Arquivo:** `src/contexts/ThemeContext.tsx`

**Propósito:** Gerenciar tema claro/escuro

**Estado:**
```typescript
type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
```

**Fluxo:**
```
1. App carrega tema salvo em localStorage
   ↓
2. Usuário clica em ThemeToggle
   ↓
3. toggleTheme() é chamado
   ↓
4. tema muda (light ↔ dark)
   ↓
5. localStorage é atualizado
   ↓
6. globals.css aplica estilos dark mode (html.dark)
```

**Componentes que usam:**
- ThemeToggle (controla)
- Navbar (lê para ícone)
- Todos os componentes (herdam estilos dark)

---

## 📊 Fluxo de Dados

### Seleção de Unidade

```
┌──────────────────────────────────────────────────────┐
│ Usuário clica em UnitSelector                        │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ UnitSelector lê options de constants/index.ts        │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ Usuário seleciona novo item                          │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ setSelectedUnit(novaUnidade) é chamado              │
│ LocationContext atualiza estado                      │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ Componentes inscritos em LocationContext atualizam:  │
│ • Navbar (mostra cidade)                            │
│ • FloatingWhatsApp (link WhatsApp novo)             │
│ • LocationSection (mapa e endereço)                 │
└──────────────────────────────────────────────────────┘
```

---

### Toggle de Tema

```
┌──────────────────────────────────────────────────────┐
│ Usuário clica em ThemeToggle                         │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ toggleTheme() chamado                                │
│ theme muda: 'light' → 'dark' ou vice-versa          │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ localStorage.setItem('theme', novoTema)             │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ ThemeContext notifica todos os subscribers           │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ globals.css aplica:                                 │
│ • html.dark { /* estilos escuros */ }               │
│ • Cores mudam automaticamente                       │
│ • Imagens adaptam ao tema                           │
└──────────────────────────────────────────────────────┘
```

---

### Envio de Formulário

```
┌──────────────────────────────────────────────────────┐
│ Usuário preenche ContactForm                         │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ React Hook Form captura onChange                    │
│ Atualiza estado local do formulário                 │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ Usuário clica em Enviar                              │
└──────────┬───────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────┐
│ onSubmit() chamado                                   │
│ Zod valida dados:                                   │
│ • Nome: min 3 chars                                 │
│ • Email: formato válido                             │
│ • Mensagem: min 10 chars                            │
└──────────┬───────────────────────────────────────────┘
           │
           ├─── ❌ Erros? ──▶ Mostra em campo
           │
           └─── ✅ Válido? ──▶ Enviar para backend
                              (futuro)
```

---

## 🔄 Ciclo de Vida do Next.js

```
1. INITIAL LOAD
   ├── Server: Renderiza página.tsx
   ├── Server: Gera meta tags
   ├── Server: Envia HTML ao navegador
   └── Browser: Hidrata com React

2. DEVELOPMENT (npm run dev)
   ├── Qualquer mudança em arquivo
   ├── Hot Module Replacement (HMR)
   ├── Página recarrega no navegador
   └── Estado é preservado quando possível

3. BUILD (npm run build)
   ├── Compila TypeScript
   ├── Otimiza código
   ├── Cria arquivos .next/
   ├── Remove indicador dev "N"
   └── Pronto para produção

4. PRODUCTION (npm start)
   ├── Servidor estático
   ├── Sem hot reload
   ├── Performance otimizada
   └── Indicador "N" não aparece
```

---

## 🎨 Sistema de Temas (Tailwind + CSS)

### Arquivos Relevantes

```
tailwind.config.ts
├── Define cores (primary, secondary)
├── Define breakpoints (mobile, tablet, desktop)
└── Configura plugins

globals.css
├── @tailwind directives
├── Estilos base
├── Dark mode overrides
│   ├── html.dark body { }
│   ├── html.dark .text-gray-900 { }
│   └── ... (centenas de overrides)
└── Animações customizadas
```

### Fluxo de Tema

```
┌──────────────────┐
│  html.dark       │
│  class=""        │ ◄──── Adicionado por ThemeContext
│  ou              │
│  class="dark"    │
└──────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│ CSS Selectors:                       │
│ html.dark body { color: #FFF }       │
│ html.dark .bg-white { color: #999 }  │
└──────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│ Componentes mudam cores              │
│ via tailwind classes:                │
│ text-gray-900 → color: #FFF (dark)   │
│ bg-white → bg-gray-900 (dark)        │
└──────────────────────────────────────┘
```

---

## 🔐 Segurança: Fluxo de Validação

### URL Validation (WhatsApp, Instagram)

```
URL do usuário
    ↓
security.isValidHttpUrl()
    ├─── Começa com https:// ou http://?
    ├─── Domínio válido?
    └─── Sem caracteres perigosos?
         │
         ├─── ✅ SIM ──▶ Renderiza link
         └─── ❌ NÃO ──▶ Retorna null (não renderiza)
```

### Iframe Sanitization (Google Maps)

```
URL do embed
    ↓
security.sanitizeIframeSrc()
    ├─── Origem segura?
    ├─── Não tem scripts?
    └─── URLs conforme CSP?
         │
         ├─── ✅ SIM ──▶ <iframe src="..." />
         └─── ❌ NÃO ──▶ <div>Mapa indisponível</div>
```

---

## 📦 Build Process

### Desenvolvimento
```bash
npm run dev
    ↓
next dev (server local)
    ↓
Port 3000 aberto
    ↓
HMR ativado (mudanças instant)
    ↓
Dev Indicator "N" visível
```

### Produção
```bash
npm run build
    ↓
TypeScript compilado
    ↓
Código otimizado
    ↓
Imagens otimizadas
    ↓
next start (servidor otimizado)
    ↓
Dev Indicator removido ✓
    ↓
Pronto para deploy
```

---

## 📡 Requests/Responses

### Dados Estáticos (Não mudam)
```
Arquivo: src/constants/index.ts
├── SITE_NAME
├── UNITS[]
├── TEAM[]
├── FAQ[]
├── TESTIMONIALS[]
└── SPECIALTIES[]

Fluxo:
1. Carregado no build (Next.js)
2. Enviado ao navegador
3. Reutilizado em componentes via imports
4. Sem requisições de rede
```

### Dados Dinâmicos (Mudam com interação)
```
Theme: localStorage → ThemeContext → CSS classes
Location: LocationContext → Componentes

Fluxo:
1. Usuário interage (clica)
2. Estado muda (Context)
3. Componentes re-renderizam
4. UI atualiza
5. Sem requisições ao servidor
```

### Formulário (Futuro)
```
Usuário envia formulário
    ↓
React Hook Form valida (Zod)
    ↓
POST /api/contact (será implementado)
    ↓
Backend processa
    ↓
Email enviado (Resend/SendGrid)
    ↓
Resposta ao usuário
```

---

## 🧪 Testing (Estrutura para futuro)

```typescript
// Estrutura recomendada (ainda não implementada)

// Unit Tests
src/__tests__/
├── components/
│   ├── Navbar.test.tsx
│   └── ThemeToggle.test.tsx
├── contexts/
│   ├── LocationContext.test.tsx
│   └── ThemeContext.test.tsx
└── lib/
    └── security.test.ts

// E2E Tests
e2e/
├── navigation.spec.ts
├── theme-toggle.spec.ts
└── contact-form.spec.ts
```

---

## 🎯 Performance Otimizações

| Otimização | Implementado | Arquivo |
|-----------|--------------|---------|
| Image Optimization | ✅ | next.config.ts |
| Code Splitting | ✅ | Automático Next.js |
| Lazy Loading | ✅ | React.lazy (potencial) |
| CSS-in-JS | ✅ | Tailwind |
| Caching | ✅ | vercel.json |
| CDN | ✅ | Vercel global |
| Minification | ✅ | next build |
| Compression | ✅ | gzip automático |

---

## 📋 Diagrama de Dependências

```
globals.css (base styles)
    ├── tailwind/base
    ├── tailwind/components
    ├── tailwind/utilities
    └── custom animations

tailwind.config.ts (config)
    └── colors, spacing, breakpoints

Componentes
    ├── React
    ├── Framer Motion
    ├── React Hook Form
    ├── React Icons
    └── Swiper

Contexts
    ├── LocationContext
    └── ThemeContext

Constants/Types
    └── Dados estáticos

Next.js
    ├── App Router
    ├── Server Components
    ├── Metadata API
    └── Image Optimization
```

---

## 🚀 Deployment Pipeline

```
1. DESENVOLVIMENTO
   npm run dev

2. PRÉ-COMMIT
   npm run lint:fix
   npm run type-check
   npm run format

3. BUILD LOCAL
   npm run build

4. TESTE PRODUÇÃO
   npm start
   (verificar em http://localhost:3000)

5. DEPLOY VERCEL
   vercel --prod

6. VERIFICAÇÃO
   ✅ Site online
   ✅ Indicador "N" desapareceu
   ✅ Performance OK
   ✅ Sem console errors
```

---

## 🔍 Monitoramento em Produção

**Ferramentas Recomendadas:**
- Vercel Analytics (gratuito)
- Google Analytics (NEXT_PUBLIC_GA_ID)
- Sentry (erros e exceções)
- Lighthouse CI (performance)

---

**Esta arquitetura permite:**
- ✅ Código limpo e organizado
- ✅ Fácil manutenção e expansão
- ✅ Performance otimizada
- ✅ Segurança built-in
- ✅ Deploy simples

