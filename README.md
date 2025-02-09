# 🛠️ 환경 구성
`Nuxt` + `ESlint` + `Pinia` + `SASS` + `Tailwindcss`

# 🍕 프로젝트 생성

- https://nuxt.com/docs/getting-started/installation

```bash
pnpm dlx nuxi@latest init <project-name>
```

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 🍔 ESLint

- https://eslint.nuxt.com/packages/module

```bash
npx nuxi module add eslint
```

# 🍍 Pinia

- https://nuxt.com/modules/pinia
- https://pinia.vuejs.org/ssr/nuxt.html

```bash
pnpm install pinia @pinia/nuxt
```

# 🍿 SASS

- https://nuxt.com/docs/getting-started/styling#using-preprocessors

```bash
pnpm install -D sass
```

# 🌊 tailwindcss

Tailwindcss v4 가 배포되었지만 Nuxt에서 `@apply`가 동작하지 않은 문제로 v3을 사용. 

- https://tailwindcss.nuxtjs.org/getting-started/installation

```bash
pnpm i -D @nuxtjs/tailwindcss

pnpm tailwindcss init
```