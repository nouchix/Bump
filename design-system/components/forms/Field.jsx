import React from 'react';
export function Field({label,hint,error,htmlFor,children,style}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8,...style}}>
      {label?<label htmlFor={htmlFor} style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--text-secondary)'}}>{label}</label>:null}
      {children}
      {error?<span style={{fontSize:12,color:'var(--danger-fg)'}}>{error}</span>:hint?<span style={{fontSize:12,color:'var(--text-tertiary)'}}>{hint}</span>:null}
    </div>
  );
}
