# Contributing to Crown Wellness

Welcome to the Crown Wellness Club project. This guide covers everything you need to get up and running, understand the codebase, and contribute effectively.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Working with Sanity](#working-with-sanity)
- [Routing and Internationalization](#routing-and-internationalization)
- [Styling](#styling)
- [Code Quality](#code-quality)
- [Git Workflow](#git-workflow)
- [Useful Commands Reference](#useful-commands-reference)

---

## Prerequisites

Make sure the following are installed on your machine before starting:

| Tool | Version | Purpose |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | 20+ | JavaScript runtime |
| [Bun](https://bun.sh/) | Latest | Package manager and script runner |
| [Git](https://git-scm.com/) | 2.x+ | Version control |

Optional but recommended:

| Tool | Purpose |
| --- | --- |
| [Sanity CLI](https://www.sanity.io/docs/cli) | Managing Sanity schemas and type generation (`bun add -g sanity`) |
| [VS Code](https://code.visualstudio.com/) | Recommended editor (project includes `.vscode/` settings) |
| [Biome extension](https://biomejs.dev/) | In-editor linting and formatting |

---

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd crown-wellness-club

# Install dependencies
bun install
```

Husky git hooks are set up automatically via the `prepare` script. After install, a `pre-commit` hook runs `bunx lint-staged` on every commit, which auto-formats staged files with Biome.

---

## Environment Variables

Create a `.env.local` file in the project root. All `.env*` files are git-ignored.

```bash
# Sanity (required)
NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity-project-id>
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-15      # optional, defaults to this value

# Sanity tokens
SANITY_WRITE_TOKEN=<sanity-write-token>
SANITY_API_READ_TOKEN=<sanity-api-read-token>

# Upstash Redis (required for contact form rate limiting)
UPSTASH_REDIS_REST_URL=<upstash-redis-url>
UPSTASH_REDIS_REST_TOKEN=<upstash-redis-token>

# Google Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=<ga-id>
```

### Dataset Selection

The Sanity dataset is determined automatically based on the `VERCEL_ENV` environment variable:

- **Production** (`VERCEL_ENV=production`): uses the `production` dataset
- **Everything else** (local dev, preview deploys): uses the `development` dataset

This logic lives in `src/sanity/env.ts`. Keep in mind that the Sanity Studio admin panel is a client-side app, so it only has access to `NEXT_PUBLIC_*` variables. Make sure both datasets have the content you expect for the environment you are targeting.

---

## Running the Project

```bash
# Start development server (runs typegen automatically via predev hook)
bun dev

# Production build (runs type-check, typegen, lint, and format via prebuild hook)
bun run build

# Start production server (after build)
bun start
```

The dev server starts at [http://localhost:3000](http://localhost:3000). The Sanity Studio is available at [http://localhost:3000/admin](http://localhost:3000/admin).

---

## Project Structure

```
crown-wellness/
├── .github/                  # GitHub workflows and contributing guide
│   └── workflows/ci.yml      # CI pipeline (builds on PRs to main/staging)
├── .husky/                   # Git hooks (pre-commit → lint-staged)
├── messages/                 # i18n translation JSON files
├── public/                   # Static assets
├── src/
│   ├── actions/              # Next.js server actions
│   ├── app/                  # App Router
│   │   ├── layout.tsx        # Root layout (pass-through)
│   │   ├── [locale]/         # Locale dynamic segment
│   │   │   ├── layout.tsx    # Locale layout (html, body, providers, fonts)
│   │   │   └── (site)/       # Route group for the public site
│   │   │       ├── layout.tsx    # Site layout (navbar, footer, metadata)
│   │   │       ├── page.tsx      # Home page
│   │   │       ├── about/        # About page
│   │   │       ├── gallery/      # Gallery page
│   │   │       └── trainers/     # Trainers page
│   │   ├── admin/            # Sanity Studio (catch-all route)
│   │   ├── sitemap.ts        # Dynamic sitemap
│   │   ├── robots.ts         # Robots.txt
│   │   └── manifest.json     # PWA manifest
│   ├── components/
│   │   ├── ui/               # Shared UI primitives (shadcn/ui)
│   │   ├── home/             # Home page section components
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── scale/
│   │   │   ├── innovation/
│   │   │   ├── community/
│   │   │   ├── events/
│   │   │   ├── memberships/
│   │   │   └── contact/
│   │   ├── about/            # About page components
│   │   ├── gallery/          # Gallery page components
│   │   ├── trainers/         # Trainers page components
│   │   ├── navbar/           # Navigation
│   │   ├── brand/            # Logo and branding
│   │   └── ...               # Shared components (footer, providers, etc.)
│   ├── hooks/                # Custom React hooks
│   ├── i18n/                 # Internationalization config
│   │   ├── data.ts           # Locale definitions
│   │   ├── routing.ts        # next-intl routing
│   │   ├── request.ts        # next-intl server request config
│   │   └── navigation.ts     # Typed navigation helpers
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # cn(), resolveLocalizedValue()
│   │   ├── get-settings.ts   # Cached Sanity settings fetchers
│   │   ├── get-img-url.ts    # Sanity image URL builder
│   │   ├── rate-limit.ts     # Upstash rate limiter
│   │   ├── structured-data.ts # JSON-LD schema generators
│   │   └── data.ts           # Form validation constants
│   ├── sanity/               # Sanity CMS integration
│   │   ├── env.ts            # Sanity env vars (projectId, dataset, apiVersion)
│   │   ├── lib/              # Sanity client, image helpers, write client
│   │   ├── queries/          # GROQ queries
│   │   ├── schemaTypes/      # Content schemas
│   │   │   ├── objects/      # Reusable object types
│   │   │   ├── documents/    # Document types
│   │   │   └── singletons/   # Singleton page types
│   │   ├── structure.ts      # Studio desk structure
│   │   └── types.ts          # Auto-generated types (do not edit)
│   └── proxy.ts              # Next.js 16 proxy (locale routing middleware)
├── sanity.config.ts          # Sanity Studio configuration
├── sanity.cli.ts             # Sanity CLI configuration
├── next.config.ts            # Next.js configuration
├── biome.json                # Biome linter/formatter configuration
├── tsconfig.json             # TypeScript configuration
└── components.json           # shadcn/ui configuration
```

---

## Tech Stack

| Category | Technology | Version |
| --- | --- | --- |
| Framework | [Next.js](https://nextjs.org/) | 16.x |
| UI Library | [React](https://react.dev/) | 19.x |
| CMS | [Sanity](https://www.sanity.io/) | 4.x |
| Sanity Integration | [next-sanity](https://github.com/sanity-io/next-sanity) | 12.x |
| Internationalization | [next-intl](https://next-intl.dev/) | 4.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| Animations | [Framer Motion](https://www.framer.com/motion/) | 12.x |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | 7.x / 4.x |
| Linter/Formatter | [Biome](https://biomejs.dev/) | 2.x |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| Package Manager | [Bun](https://bun.sh/) | Latest |
| Rate Limiting | [Upstash Redis](https://upstash.com/) | - |

---

## Working with Sanity

### Overview

Sanity is the headless CMS that powers all content. The Studio is embedded at `/admin` via Next.js App Router. Content is fetched server-side using GROQ queries and `next-sanity`.

### Schema Organization

Schemas live in `src/sanity/schemaTypes/` and are split into three categories:

**Singletons** (one document per type — page content):

| Schema | Description |
| --- | --- |
| `settings` | Global site settings (SEO defaults, social links, contact info) |
| `homePage` | Home page content (hero, services, scale, innovation, etc.) |
| `aboutPage` | About page content |
| `galleryPage` | Gallery page content |
| `trainersPage` | Trainers page content |

**Documents** (multiple instances):

| Schema | Description |
| --- | --- |
| `service` | Gym/wellness services |
| `event` | Upcoming events |
| `trainer` | Trainer profiles |
| `trainerSpeciality` | Trainer speciality categories |
| `pricingPlan` | Membership pricing plans |
| `galleryImage` | Gallery images |
| `galleryImageCategory` | Gallery image categories |
| `contactFormSubmission` | Submitted contact forms |

**Objects** (reusable field types):

`icon`, `link`, `banner`, `button`, `card`, `statCard`, `seo`, `localizedString`, `localizedText`, `localizedRichText`

### Localization

Content fields that need translation use the `localizedString`, `localizedText`, or `localizedRichText` object types. In GROQ queries, the locale is resolved using:

```groq
coalesce(fieldName["$locale"], fieldName.en)
```

The `$locale` placeholder is replaced at runtime by `replaceDynamicLocaleParam()` in `src/sanity/lib/utils.ts`.

### Type Generation

Sanity types are auto-generated from the schema. **Never edit `src/sanity/types.ts` manually.**

```bash
# Extract schema and generate types
bun run typegen
```

This runs automatically before `dev` (via `predev`) and before `build` (via `prebuild` → `check`).

### Queries

GROQ queries live in `src/sanity/queries/`. Each file exports a query defined with `defineQuery()` from the `groq` package. The typed result types come from the auto-generated `src/sanity/types.ts`.

### Data Fetching

Use the `sanityFetch()` helper from `src/sanity/lib/client.ts`:

```ts
const data = await sanityFetch<MyQueryResult>({
  query: MY_QUERY,
  params: { locale },
  revalidate: 60, // ISR revalidation in seconds (default: 60)
  tags: [],        // cache tags for on-demand revalidation
});
```

### Studio Structure

The desk structure is defined in `src/sanity/structure.ts`. Singletons appear at the top, followed by a custom "Contact Form Submissions" section with status filters (New, Read, Replied, Archived), then the remaining document lists.

### Adding a New Schema

1. Create the schema file in the appropriate directory (`objects/`, `documents/`, or `singletons/`)
2. Export it from the directory's `index.ts`
3. Run `bun run typegen` to regenerate types
4. Create a GROQ query in `src/sanity/queries/`
5. Use `sanityFetch()` in your page or component

---

## Routing and Internationalization

The app uses Next.js App Router with `next-intl` for locale-based routing.

- **Proxy** (`src/proxy.ts`): Handles locale detection, redirects (e.g., `/` → `/en`), and path rewriting. Excludes `/api`, `/admin`, `/_next`, `/_vercel`, and static files.
- **Locales**: Currently `["en"]` with `"en"` as default. Defined in `src/i18n/data.ts`.
- **Route structure**: All public pages live under `src/app/[locale]/(site)/`. The `(site)` route group provides the shared layout with navbar and footer.
- **Translation files**: JSON files in the `messages/` directory, loaded by `src/i18n/request.ts`.

To add a new page:

1. Create a directory under `src/app/[locale]/(site)/`
2. Add a `page.tsx` that accepts `params: Promise<{ locale: string }>`
3. Call `setRequestLocale(locale)` at the top
4. Fetch data from Sanity and handle the `null` case with `notFound()`

---

## Styling

- **Tailwind CSS v4** via PostCSS (configured in `postcss.config.mjs`)
- **Design tokens**: Defined as CSS variables in `src/app/globals.css` under `@theme inline`
- **Dark mode**: The app ships in dark mode by default (`className="dark"` on `<html>`)
- **UI components**: Based on [shadcn/ui](https://ui.shadcn.com/) (new-york style). Located in `src/components/ui/`
- **Utility function**: Use `cn()` from `src/lib/utils.ts` to merge class names (clsx + tailwind-merge)

---

## Code Quality

### Biome

Biome handles both linting and formatting. Configuration lives in `biome.json`.

- **Indentation**: Tabs
- **Quotes**: Double quotes
- **Import organization**: Automatic (via Biome assist)

### Pre-commit Hook

Every commit is automatically checked by the Husky pre-commit hook:

```
pre-commit → bunx lint-staged → biome check --write (on staged files)
```

### CI Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs on pull requests to `main` and `staging`:

1. Checkout code
2. Set up Bun
3. Install dependencies (`bun install --frozen-lockfile`)
4. Full build (`bun run build`, which triggers `prebuild` → type-check, typegen, lint, format)

PRs must pass CI before merging.

### Manual Checks

```bash
bun run lint          # Run Biome linter
bun run format        # Auto-format with Biome
bun run type-check    # TypeScript type checking (no emit)
bun run check         # All of the above + typegen
```

---

## Git Workflow

### Branches

| Branch | Purpose |
| --- | --- |
| `main` | Production. Deployed to the live site. **Protected — requires PR review.** |
| `staging` | Integration branch. All features merge here first. |
| `feature/*` | Feature branches. Created from `staging`. |
| `fix/*` | Bug fix branches. Created from `staging`. |

### Workflow

```
1. Create a branch from staging:
   git checkout staging
   git pull origin staging
   git checkout -b feature/my-feature

2. Work on your changes, commit often.

3. Push and open a PR into staging:
   git push -u origin feature/my-feature
   → Open PR: feature/my-feature → staging

4. CI runs. Get code review if needed. Merge into staging.

5. When ready for release, open a PR from staging → main.
   → This requires review approval.
   → After merge, the production deployment triggers.
```

### Commit Guidelines

- Write clear, concise commit messages
- The pre-commit hook auto-formats your code — let it do its job
- Keep commits focused: one logical change per commit

### PR Reviews

- PRs to `main` require at least one approval
- [CodeRabbit](https://coderabbit.ai/) automatically reviews PRs to `main` and `staging`
- CI must pass before merging

---

## Useful Commands Reference

| Command | Description |
| --- | --- |
| `bun dev` | Start dev server (auto-runs typegen) |
| `bun run build` | Production build (auto-runs all checks) |
| `bun start` | Start production server |
| `bun run lint` | Run Biome linter |
| `bun run format` | Auto-format with Biome |
| `bun run type-check` | TypeScript type check |
| `bun run typegen` | Regenerate Sanity types |
| `bun run check` | Full check (types + typegen + lint + format) |
| `bun run next:build` | Direct Next.js build (skips prebuild checks) |
