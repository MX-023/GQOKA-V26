'use client';
type Props = { onFiles: (files: FileList) => void; };
export default function LibraryUpload({ onFiles }: Props) {
  return (
    <label className="btn">
      <img src="/library-icon.svg" alt="library" width={18} height={18} style={{verticalAlign:'middle',marginRight:8}}/>
      Bibliothèque
      <input type="file" accept="image/*" multiple hidden onChange={(e)=>{ if(e.target.files) onFiles(e.target.files);}}/>
    </label>
  );
}
