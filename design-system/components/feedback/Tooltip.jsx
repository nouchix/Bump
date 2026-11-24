import React,{useState} from 'react';
export function Tooltip({label,side='top',children,style}){
  const [show,setShow]=useState(false);
  const pos=side==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return (
    <span onPointerEnter={()=>setShow(true)} onPointerLeave={()=>setShow(false)} style={{position:'relative',display:'inline-flex',...style}}>
      {children}
      <span role="tooltip" style={{position:'absolute',left:'50%',...pos,transform:'translateX(-50%) '+(show?'scale(1)':'scale(.96)'),opacity:show?1:0,pointerEvents:'none',
        background:'var(--bump-static)',color:'var(--bump-void)',fontSize:12,fontWeight:600,padding:'6px 10px',borderRadius:'var(--radius-sm)',whiteSpace:'nowrap',
        transition:'opacity var(--duration-fast) var(--ease-out-expo), transform var(--duration-bump) var(--ease-bump)',zIndex:20}}>{label}</span>
    </span>
  );
}
