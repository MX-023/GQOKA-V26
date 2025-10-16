'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

export default function AnnaBubble() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID;
    const scriptUrl = process.env.NEXT_PUBLIC_BOTPRESS_URL || 'https://cdn.botpress.cloud/webchat/v1/inject.js';

    if (!clientId) return;

    const s = document.createElement('script');
    s.src = scriptUrl;
    s.async = true;
    s.onload = () => {
      window.botpressWebChat?.init({
        clientId,
        botName: 'Anna',
        lazySocket: true,
        composerPlaceholder: 'Parlez à Anna…',
        avatarUrl: '/anna-icon.png',
        theme: 'dark',
        useSessionStorage: true
      });
      window.botpressWebChat?.onEvent((event: any) => {
        // Hook point if needed
      }, ['LIFECYCLE.LOADED']);
    };
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return null;
}
