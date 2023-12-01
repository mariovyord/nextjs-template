# NextJs Template

## Default libs

- NextJs 14
- TailwindCSS
- Prisma ORM
- SQLite
- NextAuth
- zod

## Database

- Prisma ORM
- SQLite

You can update the schema in schema.prisma and run `npx prisma migrate dev` to update the tables. You can add models or update the config in `prisma.prisma` file.

## Authentication

- NextAuth with defaults for Github auth.

Steps:

1. Register OAuth app at: <http://github.com/settings/applications/new>
2. Fill authorization callback URL with <http://localhost:3000/api/auth/callback/github>
3. For prod you will need separate registration
4. Add to .env: `AUTH_SECRET` (random string by your choosing), `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`

## Folder structure

- app router
  - route
    - \_components (used only on that route)
    - \_actions (used only on that route)
- components
  - ui (design system components)
  - other common components
- actions (common actions)
- data-access (db util functions - act as a facade)
- db (db configs)
- lib (third party exports)
- utils

## .env

See `.env.example`

## Protected routes

Route protection is implemented with Higher Order Component - `withAuth`.

Prisma does not work in NextJS middleware because the middleware runs on the edge (not NodeJS).
