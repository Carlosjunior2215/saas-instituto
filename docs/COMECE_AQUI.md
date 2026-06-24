# ⚡ COMECE AQUI - Guia Rápido

## 🏃 Rodar o Projeto em 3 Passos

### 1️⃣ Instalar Dependências
```bash
npm install
```
⏱️ Tempo: 2-5 minutos

### 2️⃣ Iniciar Desenvolvimento
```bash
npm run dev
```

### 3️⃣ Abrir no Navegador
```
http://localhost:3000
```

**Pronto! 🎉 O site está rodando!**

---

## 📋 Comandos Essenciais

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start

# Verificar erros
npm run lint

# Corrigir automaticamente
npm run lint:fix

# Formatar código
npm run format

# Checar tipos TypeScript
npm run type-check
```

---

## 🎨 Estrutura Rápida

| Pasta | Conteúdo |
|-------|----------|
| `src/app` | Página principal + layout |
| `src/components` | Componentes reutilizáveis |
| `src/sections` | Seções da página |
| `src/constants` | Dados (unidades, FAQs, etc) |
| `src/contexts` | Context API (tema, localização) |
| `public` | Imagens, logos, favicon |

---

## 🔧 Personalização Rápida

### Mudar Nome da Instituição
📁 `src/constants/index.ts`
```typescript
export const SITE_NAME = 'Seu Instituto'
```

### Adicionar Unidade
📁 `src/constants/index.ts`
```typescript
export const UNITS = [
  {
    id: 1,
    city: 'Goiânia',
    phone: '+55 (62) 99999-9999',
    whatsappLink: 'https://wa.me/5562999999999',
    // ... outros campos
  }
]
```

### Mudar Cores
📁 `tailwind.config.ts`
```typescript
colors: {
  primary: {
    600: '#SUE_COR_AQUI',
  }
}
```

### Adicionar Imagem
1. Salvar em `public/`
2. Usar em componentes:
```tsx
<img src="/logos/meu-logo.png" alt="Logo" />
```

---

## 🚀 Deploy na Vercel

```bash
# Instalar CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

**Pronto! Seu site está online! 🎉**

---

## ⚠️ Problemas Comuns

| Problema | Solução |
|----------|---------|
| Porta 3000 ocupada | `npm run dev -- -p 3001` |
| Módulos não encontrados | `rm -rf node_modules && npm install` |
| "npm: command not found" | Instalar [Node.js](https://nodejs.org) |
| Ícone "N" em produção | Normal - desaparece no build |
| Build falha | `npm run type-check` para ver erros |

---

## 📚 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Scripts e dependências |
| `tsconfig.json` | Configuração TypeScript |
| `next.config.ts` | Configuração Next.js |
| `tailwind.config.ts` | Cores e temas Tailwind |
| `src/constants/index.ts` | **Dados do Instituto** ⭐ |
| `.env.local` | Variáveis de ambiente |

---

## 🎯 Próximos Passos

1. ✅ Rodar `npm run dev`
2. ✅ Visitar `http://localhost:3000`
3. ✅ Personalizar dados em `src/constants/index.ts`
4. ✅ Adicionar imagens em `public/`
5. ✅ Testar em diferentes tamanhos (mobile, tablet)
6. ✅ Deploy com `vercel --prod`

---

## 🆘 Precisa de Ajuda?

📖 Consulte: `README_DETALHADO.md` para documentação completa

---

**Desenvolvido com ❤️ Next.js 15**
