import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="nav">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <Image src="/logo.png" width={28} height={28} alt="GQOKA" />
        <strong>GQOKA</strong>
        <span className="badge">MVP</span>
      </div>
      <div>
        <Link href="/">Accueil</Link>
        <Link href="/wardrobe" style={{marginLeft:12}}>Garde‑robe</Link>
      </div>
    </nav>
  );
}
