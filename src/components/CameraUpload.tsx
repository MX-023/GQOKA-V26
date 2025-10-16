'use client';
import { useRef, useState } from 'react';

type Props = { onFiles: (files: FileList) => void; };
export default function CameraUpload({ onFiles }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => ref.current?.click()} disabled={busy}>
        <img src="/camera-icon.svg" alt="camera" width={18} height={18} style={{verticalAlign:'middle',marginRight:8}}/>
        Caméra
      </button>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        hidden
        onChange={(e) => { if (e.target.files) onFiles(e.target.files); }}
      />
    </>
  );
}
