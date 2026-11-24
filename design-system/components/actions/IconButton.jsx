import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
const SIZES={sm:{d:32,ic:16},md:{d:40,ic:20},lg:{d:56,ic:24}};
export function IconButton({icon,label,variant='secondary',size='md',filled=false,disabled=false,onClick,style,...rest}){
  const [hover,setHover]=useState(false);
  const [press,setPress]=useState(false);
  const s=SIZES[size]||SIZES.md;
  const h=hover&&!disabled;
  const v={
    primary:{background:h?'var(--accent-hover)':'var(--accent)',color:'#fff'},
    secondary:{background:h?'var(--ink-700)':'var(--surface-raised)',color:'var(--text-primary)'},
    ghost:{background:h?'var(--ink-850)':'transparent',color:h?'var(--text-primary)':'var(--text-secondary)'},
    soft:{background:h?'rgba(255,61,90,.24)':'var(--accent-soft)',color:'var(--signal-300)'},
    static:{background:h?'#fff':'var(--bump-static)',color:'var(--bump-void)'},
  }[variant]||{};
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onPointerEnter={()=>setHover(true)} onPointerLeave={()=>{setHover(false);setPress(false);}}
      onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)}
      style={{width:s.d,height:s.d,borderRadius:'var(--radius-pill)',border:0,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:0,
        cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,transform:press&&!disabled?'scale(var(--bump-scale))':'scale(1)',
        transition:'transform var(--duration-bump) var(--ease-bump), background var(--duration-fast) var(--ease-out-expo)',...v,...style}} {...rest}>
      <Icon name={icon} size={s.ic} fill={filled?'currentColor':'none'}/>
    </button>
  );
}
