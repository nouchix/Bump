import React from 'react';
import {Icon} from './Icon.jsx';
export function Badge({tone='neutral',icon,children,style}){
  const t={neutral:{background:'var(--ink-800)',color:'var(--text-secondary)',border:'transparent'},
    signal:{background:'var(--accent-soft)',color:'var(--signal-300)',border:'var(--accent-soft-border)'},
    pulse:{background:'var(--accent-2-soft)',color:'var(--pulse-300)',border:'var(--accent-2-soft-border)'},
    success:{background:'rgba(43,217,138,.12)',color:'#7BEDB8',border:'rgba(43,217,138,.3)'},
    live:{background:'var(--accent)',color:'#fff',border:'transparent'}}[tone]||{};
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:4,height:22,padding:'0 8px',borderRadius:'var(--radius-xs)',border:'1px solid '+t.border,background:t.background,color:t.color,
      fontSize:12,fontWeight:600,lineHeight:1,whiteSpace:'nowrap',...style}}>
      {icon?<Icon name={icon} size={12} strokeWidth={2.5}/>:null}{children}
    </span>
  );
}
