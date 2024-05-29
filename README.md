# NextJS Starter Pack

* Docker
* NextJS 14 - Typescript
* Tailwind
* SASS
* NextUI - Framer Motion
* NextThemes

## Getting Started

Rename the docker and project names
```bash
find . -name '*' -exec sed -i -e 's/next14-docker-starter/{NEW NAME}/g' {} \;
```

First, run the development server:

```bash
# first install
npm i

# then run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Docker Based Development
To handle the difference of node versions

```bash
# Build Image
docker build -t next14-docker-starter . --no-cache

# First Install
npm run docker:install

# Local Development
npm run docker:dev

# Build
npm run docker:build

# Start
npm run docker:start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
