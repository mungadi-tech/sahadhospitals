# Convex + TypeScript + ESLint + Vite + React + Tailwind + shadcn/ui

This template provides a minimal setup to get Convex working, with TypeScript,
ESLint and React using [Vite](https://vitejs.dev/).

Start by editing `convex/myFunctions.ts` and interact with your React app.

See Convex docs at https://docs.convex.dev/home

## Setting up

```
npm create convex@latest -t react-vite-shadcn
```

sudo sed -i "s|APP_ID=._|APP_ID=$(openssl rand -hex 16)|g" /data/coolify/source/.env
sudo sed -i "s|APP_KEY=._|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/coolify/source/.env
sudo sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sudo sed -i "s|REDIS_PASSWORD=._|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sudo sed -i "s|PUSHER_APP_ID=._|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sudo sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sudo sed -i "s|PUSHER_APP_SECRET=.\*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/coolify/source/.env
