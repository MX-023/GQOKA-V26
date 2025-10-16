# GQOKA V26 — MVP (Next.js + Supabase + Botpress)

## Prérequis
1. Node 18+
2. Créer un projet Supabase
   - Table: `wardrobe_items` (id uuid pk default uuid_generate_v4(), user_id uuid, title text, category text, color text, image_url text, created_at timestamptz default now())
   - Storage bucket: `wardrobe` (public)
3. Variables d'environnement (`.env.local`) :
   ```env
   NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

   NEXT_PUBLIC_BOTPRESS_URL=https://cdn.botpress.cloud/webchat/v1/inject.js
   NEXT_PUBLIC_BOTPRESS_CLIENT_ID=YOUR_BOTPRESS_CLIENT_ID

   NEXT_PUBLIC_WEATHER_API_KEY=8fb37d0d62dd406fb90185632251210
   ```

## Lancement local
```bash
npm install
npm run dev
```

## Déploiement Vercel
- Ajouter les mêmes variables dans Project Settings → Environment Variables
- Déployer
