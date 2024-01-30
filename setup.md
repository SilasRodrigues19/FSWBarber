## Next 

```bash
pnpm dlx create-next-app@latest .
```

## Prisma

```bash
pnpm add prisma -D

## Init
pnpm prisma init --datasource-provider postgresql

## Migration
pnpm prisma migrate dev --name initial_tables
```

## Changelog

```bash
pnpm i -D standard-version

commitizen init cz-conventional-changelog --save-dev --save-exact

```