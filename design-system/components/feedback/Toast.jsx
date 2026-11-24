import React from 'react';
import {Icon} from '../display/Icon.jsx';
export function Toast({title,message,icon='zap',tone='signal',action,onAction,onClose,style}){
  const c=tone==='pulse'?'var(--accent-2)':tone==='neutral'?'var(--ink-600)':'var(--accent)';
  return (
    <div role="status" style={{display:'flex',alignItems:'center',gap:12,minWidth:300,maxWidth:420,padding:'12px 12px 12px 14px',borderRadius:'var(--radius-lg)',background:'var(--surface-raised)',
      border:'1px solid var(--border-default)',boxShadow:'var(--shadow-md)',animation:'bump-rise var(--duration-slow) var(--ease-out-expo)',...style}}>
      <span style={{width:32,height:32,borderRadius:999,background:c,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon name={icon} size={16}/></span>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)'}}>{title}</div>
        {message?<div style={{fontSize:12,color:'var(--text-secondary)'}}>{message}</div>:null}
      </div>
      {action?<button type="button" onClick={onAction} style={{background:'none',border:0,color:'var(--accent)',fontWeight:700,fontSize:13,cursor:'pointer',fontFamily:'inherit'}}>{action}</button>:null}
      {onClose?<button type="button" aria-label="Dismiss" onClick={onClose} style={{background:'none',border:0,color:'var(--text-tertiary)',cursor:'pointer',padding:4}}><Icon name="x" size={16}/></button>:null}
    </div>
  );
}
