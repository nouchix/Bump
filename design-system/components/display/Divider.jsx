import React from 'react';
export function Divider({label,style}){
  if(!label)return <hr style={{border:0,borderTop:'1px solid var(--border-subtle)',margin:0,...style}}/>;
  return (
    <div style={{display:'flex',alignItems:'center',gap:12,...style}}>
      <span style={{flex:1,height:1,background:'var(--border-subtle)'}}></span>
      <span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--text-tertiary)'}}>{label}</span>
      <span style={{flex:1,height:1,background:'var(--border-subtle)'}}></span>
    </div>
  );
}
