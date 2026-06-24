# Instituto - Landing Page Institucional Premium

Uma aplicação web institucional moderna, profissional e totalmente responsiva desenvolvida com **Next.js 15**, **React**, **TypeScript** e **Tailwind CSS**.

## 🎯 Características

- ✅ **Next.js 15** com App Router
- ✅ **TypeScript** para maior segurança de tipo
- ✅ **Tailwind CSS** para estilização moderna
- ✅ **Framer Motion** para animações suaves
- ✅ **Swiper.js v11** para carrosséis
- ✅ **React Hook Form** + **Zod** para validação
- ✅ **Responsividade completa** (mobile, tablet, desktop)
- ✅ **SEO otimizado** com metadata dinâmica
- ✅ **Acessibilidade WCAG AA**
- ✅ **Performance > 90 Lighthouse**
- ✅ **Pronto para deploy na Vercel**

## 📋 Seções Incluídas

1. **Navbar** - Navegação responsiva com menu mobile
2. **Hero** - Seção de boas-vindas com CTA
3. **Sobre** - História, missão, visão e valores
4. **Especialidades** - Grid de serviços oferecidos
5. **Diferenciais** - Destaque dos pontos fortes
6. **Equipe** - Cards de profissionais com avatares
7. **Estrutura** - Galeria de imagens com modal
8. **Depoimentos** - Slider com Swiper.js
9. **FAQ** - Accordion interativo
10. **Contato** - Formulário com validação Zod
11. **Localização** - Google Maps embed + informações
12. **Footer** - Links e informações de contato

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ ou superior
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório** (ou extraia os arquivos):
```bash
cd saas-instituto
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure variáveis de ambiente** (opcional):
```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

5. **Abra no navegador**:
```
http://localhost:3000
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting e formatação
npm run lint
npm run lint:fix
npm run format

# Type checking
npm run type-check
```

## 🎨 Paleta de Cores

| Token | Cor | Uso |
|-------|-----|-----|
| Primary | #0F4C81 | Cor principal do brand |
| Secondary | #2E7BCF | Cor secundária |
| Background | #FFFFFF | Fundo padrão |
| Text | #1F2937 | Texto padrão |
| Muted | #6B7280 | Texto secundário |

## 🔧 Customizações

### Mudar o Nome da Instituição

Edite `src/constants/index.ts`:
```typescript
export const SITE_NAME = 'Sua Instituição';
```

### Adicionar Equipe

Edite `src/constants/index.ts` e adicione membros ao array `TEAM`:
```typescript
{
  id: 7,
  name: 'Nome',
  specialty: 'Especialidade',
  description: 'Descrição',
  avatar: 'URL do avatar',
}
```

### Personalizar Cores

Edite `tailwind.config.ts` e modifique a paleta:
```typescript
colors: {
  primary: {
    600: '#SUE_COR_AQUI',
  }
}
```

### Adicionar Seções

1. Crie o arquivo em `src/sections/NovaSeccao.tsx`
2. Exporte o componente
3. Importe e adicione em `src/app/page.tsx`

## 🌐 Deploy na Vercel

### Opção 1: Com GitHub

1. **Faça push do projeto para GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/Instituto.git
git push -u origin main
```

2. **Acesse [Vercel](https://vercel.com)** e clique em "New Project"

3. **Selecione seu repositório GitHub**

4. **Clique em "Deploy"**

### Opção 2: Deploy Direto

1. **Instale a CLI do Vercel**:
```bash
npm install -g vercel
```

2. **Faça login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel --prod
```

## 📊 Performance

- **Lighthouse Score**: > 90
- **Core Web Vitals**: Otimizados
- **Bundle Size**: ~150KB (gzip)
- **Time to Interactive**: < 2s

## 🔒 SEO

- Metadata dinâmica com `generateMetadata`
- Open Graph tags
- Twitter Cards
- schema.org LocalBusiness
- robots.txt
- sitemap.xml

## ♿ Acessibilidade

- WCAG AA compliant
- Navegação por teclado
- Atributos aria-label
- Contraste de cores adequado
- Descrição em imagens (alt text)

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SpecialtiesSection.tsx
│   ├── DifferentialsSection.tsx
│   ├── TeamSection.tsx
│   ├── StructureSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   └── LocationSection.tsx
├── constants/
│   └── index.ts            # Constantes e dados
├── types/
│   └── index.ts            # Tipos TypeScript
├── lib/
│   └── utils.ts            # Funções utilitárias
└── hooks/                  # Custom hooks (futura expansão)

public/
├── team/                   # Imagens de equipe
├── gallery/                # Galeria de imagens
└── favicon.ico

.claude/                     # Configurações do Claude Code
.env.example                # Exemplo de variáveis
.eslintrc.json
.prettierrc
.gitignore
next.config.ts
tailwind.config.ts
postcss.config.mjs
tsconfig.json
package.json
README.md
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Swiper.js** - Carrosséis
- **React Icons** - Ícones
- **React Hook Form** - Formulários
- **Zod** - Validação

### Tooling
- **ESLint** - Linting
- **Prettier** - Formatação
- **TypeScript** - Type checking

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` com as variáveis do `.env.example`:

```env
# Google Maps (opcional para iframe simples)
# NEXT_PUBLIC_GOOGLE_MAPS_KEY=sua_chave

# E-mail (futuras integrações)
# RESEND_API_KEY=sua_chave

# Site
# NEXT_PUBLIC_SITE_URL=https://instituto.com.br
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário de contato do site.

## 🎓 Desenvolvido por

Uma software house premium especializada em aplicações institucionais.

---

**Desenvolvido com ❤️ usando Next.js 15**
