import React from 'react';
export function Tabs({items=[],value,onChange,variant='pill',style}){
  if(variant==='underline'){
    return (
      <div role="tablist" style={{display:'flex',gap:24,borderBottom:'1px solid var(--border-subtle)',...style}}>
        {items.map((it)=>{const id=typeof it==='string'?it:it.id;const lb=typeof it==='string'?it:it.label;const on=id===value;return (
          <button key={id} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(id)} style={{background:'none',border:0,padding:'0 0 12px',marginBottom:-1,cursor:'pointer',fontFamily:'inherit',fontSize:14,fontWeight:600,
            color:on?'var(--text-primary)':'var(--text-secondary)',borderBottom:'2px solid '+(on?'var(--accent)':'transparent'),transition:'color var(--duration-fast) var(--ease-out-expo)'}}>{lb}</button>);})}
      </div>
    );
  }
  return (
    <div role="tablist" style={{display:'inline-flex',gap:4,padding:4,background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-pill)',...style}}>
      {items.map((it)=>{const id=typeof it==='string'?it:it.id;const lb=typeof it==='string'?it:it.label;const on=id===value;return (
        <button key={id} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(id)} style={{height:32,padding:'0 14px',border:0,borderRadius:'var(--radius-pill)',cursor:'pointer',fontFamily:'inherit',fontSize:13,fontWeight:600,
          background:on?'var(--bump-static)':'transparent',color:on?'var(--bump-void)':'var(--text-secondary)',transition:'background var(--duration-base) var(--ease-out-expo), color var(--duration-base) var(--ease-out-expo)'}}>{lb}</button>);})}
    </div>
  );
}
