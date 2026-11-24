import React,{useState} from 'react';
export function Card({variant='default',padding=16,interactive=false,glow=false,children,style,...rest}){
  const [hover,setHover]=useState(false);
  const base={default:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)'},
    outline:{background:'transparent',border:'1px solid var(--border-default)'},
    sunken:{background:'var(--surface-sunken)',border:'1px solid var(--border-subtle)'},
    raised:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-lg)'}}[variant];
  const h=(interactive||glow)&&hover;
  return (
    <div onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}
      style={{borderRadius:'var(--radius-lg)',padding,position:'relative',transition:'border-color var(--duration-base) var(--ease-out-expo), box-shadow var(--duration-base) var(--ease-out-expo)',
        ...base,...(h&&!glow?{borderColor:'var(--border-default)'}:{}),...(h&&glow?{borderColor:'transparent',boxShadow:'0 0 0 1px rgba(255,61,90,.55), 0 0 0 1px rgba(124,92,255,.55) inset, 0 12px 40px rgba(124,92,255,.18)'}:{}),...style}} {...rest}>
      {children}
    </div>
  );
}
