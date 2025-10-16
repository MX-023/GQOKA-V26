import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AnnaBubble from '@/components/AnnaBubble';

export default function Home() {
  return (
    <>
      <Head>
        <title>GQOKA — Styliste IA. Garde‑robe intelligente.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="GQOKA, votre styliste IA. Gérez votre garde‑robe, scannez vos vêtements, et recevez des looks adaptés." />
      </Head>
      <Navbar />
      <main>
        <section style={{padding:'48px 16px'}}>
          <div className="container" style={{display:'grid', gap:24}}>
            <div style={{textAlign:'center'}}>
              <h1 style={{fontSize: 'clamp(32px,5vw,60px)', margin:'0 0 8px 0', letterSpacing:'-0.02em'}}>Votre styliste. Votre garde‑robe.</h1>
              <p style={{color:'var(--muted)'}}>Scannez. Organisez. Revendez. Obtenez des looks. Le tout en quelques secondes.</p>
              <div style={{marginTop:16}}>
                <Link className="btn" href="/wardrobe">Ouvrir la garde‑robe</Link>
              </div>
            </div>
            <div className="grid grid-3">
              <div className="card"><strong>Scan instantané</strong><p style={{color:'#bbb'}}>Ajoutez un vêtement via caméra ou bibliothèque.</p></div>
              <div className="card"><strong>Conseils d’Anna</strong><p style={{color:'#bbb'}}>Un chat styliste pour vous guider.</p></div>
              <div className="card"><strong>Prêt pour revente</strong><p style={{color:'#bbb'}}>Photos propres et fiche produit en 1 clic.</p></div>
            </div>
          </div>
        </section>
      </main>
      <AnnaBubble />
    </>
  );
}
