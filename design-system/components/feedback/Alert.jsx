import React from 'react';
import {Icon} from '../display/Icon.jsx';
export function Alert({tone='info',title,icon,children,style}){
  const t={error:{bg:'var(--danger-bg)',bd:'var(--danger-border)',fg:'var(--danger-fg)',ic:'alert-circle'},
    success:{bg:'var(--accent-soft)',bd:'var(--accent-soft-border)',fg:'var(--signal-300)',ic:'mail-check'},
    info:{bg:'var(--surface-sunken)',bd:'var(--border-subtle)',fg:'var(--text-secondary)',ic:'info'},
    pulse:{bg:'var(--accent-2-soft)',bd:'var(--accent-2-soft-border)',fg:'var(--pulse-300)',ic:'sparkles'}}[tone]||{};
  return (
    <div role={tone==='error'?'alert':'status'} style={{display:'flex',gap:10,alignItems:'flex-start',padding:'12px 14px',borderRadius:'var(--radius-md)',background:t.bg,border:'1px solid '+t.bd,color:t.fg,fontSize:13,lineHeight:1.45,textAlign:'left',...style}}>
      <span style={{marginTop:1}}><Icon name={icon||t.ic} size={16}/></span>
      <div>{title?<div style={{fontWeight:700,color:'var(--text-primary)',marginBottom:2}}>{title}</div>:null}{children}</div>
    </div>
  );
}
