import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!url || !key) {
  // Console warning only to avoid crashing build
  // You must set env vars in Vercel
  console.warn('Supabase env vars missing');
}

export const supabase = createClient(url || '', key || '');
