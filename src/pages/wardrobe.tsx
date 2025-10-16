import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import WardrobeItem from '@/components/WardrobeItem';
import CameraUpload from '@/components/CameraUpload';
import LibraryUpload from '@/components/LibraryUpload';
import { supabase } from '@/lib/supabase';
import { STORAGE_BUCKET } from '@/utils/constants';
import { useEffect, useState } from 'react';

type Item = { id: string; title: string | null; category: string | null; color: string | null; image_url: string };

export default function WardrobePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchItems() {
    setLoading(true);
    const { data, error } = await supabase.from('wardrobe_items').select('*').order('created_at', { ascending: false }).limit(100);
    if (!error && data) {
      setItems(data.map((d:any)=>({ id:d.id, title:d.title, category:d.category, color:d.color, image_url:d.image_url })));
    }
    setLoading(false);
  }

  useEffect(() => { fetchItems(); }, []);

  async function uploadFiles(files: FileList) {
    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext || 'jpg'}`;
      const { data: up, error: upErr } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, { upsert: false });
      if (upErr) { console.error(upErr); continue; }
      const { data: pub } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
      const imageUrl = pub?.publicUrl || '';
      await supabase.from('wardrobe_items').insert({ title: null, category: null, color: null, image_url: imageUrl });
    }
    await fetchItems();
  }

  return (
    <>
      <Head><title>Garde‑robe — GQOKA</title></Head>
      <Navbar />
      <main className="container" style={{paddingTop:24}}>
        <div className="toolbar">
          <CameraUpload onFiles={uploadFiles} />
          <LibraryUpload onFiles={uploadFiles} />
          <button className="btn" onClick={fetchItems}>Rafraîchir</button>
        </div>

        <div style={{marginTop:16}}>
          {loading ? <div style={{color:'#aaa'}}>Chargement…</div> : null}
          <div className="items">
            {items.map((it)=> <WardrobeItem key={it.id} {...it} />)}
          </div>
          {!loading && items.length===0 ? <div style={{color:'#777', marginTop:24}}>Aucun vêtement. Ajoutez-en via caméra ou bibliothèque.</div> : null}
        </div>
      </main>
    </>
  );
}
