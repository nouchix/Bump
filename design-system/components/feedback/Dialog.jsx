import React from 'react';
import {Icon} from '../display/Icon.jsx';
export function Dialog({open=true,icon,title,description,children,actions,onClose,inline=false,width=420}){
  if(!open)return null;
  const panel=(
    <div role="dialog" aria-modal={!inline} onClick={(e)=>e.stopPropagation()} style={{width:'100%',maxWidth:width,background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-xl)',
      padding:32,textAlign:'center',boxShadow:'var(--shadow-lg)',animation:'bump-rise var(--duration-slow) var(--ease-out-expo)'}}>
      {icon?<div style={{width:48,height:48,borderRadius:999,background:'var(--accent-soft)',border:'1px solid var(--accent-soft-border)',color:'var(--signal-300)',margin:'0 auto 16px',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name={icon} size={24}/></div>:null}
      {title?<h2 style={{margin:'0 0 8px',fontSize:20,fontWeight:700,letterSpacing:'-0.02em',color:'var(--text-primary)'}}>{title}</h2>:null}
      {description?<p style={{margin:'0 0 24px',fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{description}</p>:null}
      {children}
      {actions?<div style={{display:'flex',gap:12,marginTop:children?24:0}}>{actions}</div>:null}
    </div>
  );
  if(inline)return panel;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,background:'var(--surface-overlay)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>{panel}</div>;
}
