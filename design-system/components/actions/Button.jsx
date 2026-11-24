import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
const SIZES={sm:{h:32,px:12,fs:12,ic:14,gap:6},md:{h:40,px:16,fs:14,ic:16,gap:8},lg:{h:48,px:20,fs:16,ic:20,gap:8}};
function variantStyle(v,hover){
  switch(v){
    case 'secondary':return{background:hover?'var(--ink-700)':'var(--surface-raised)',color:'var(--text-primary)',borderColor:'transparent'};
    case 'soft':return{background:hover?'rgba(255,61,90,.24)':'var(--accent-soft)',color:'var(--signal-300)',borderColor:'var(--accent-soft-border)'};
    case 'outline':return{background:hover?'var(--ink-850)':'transparent',color:'var(--text-primary)',borderColor:'var(--border-default)'};
    case 'ghost':return{background:hover?'var(--ink-850)':'transparent',color:hover?'var(--text-primary)':'var(--text-secondary)',borderColor:'transparent'};
    case 'pulse':return{background:hover?'var(--pulse-400)':'var(--accent-2)',color:'#fff',borderColor:'transparent'};
    default:return{background:hover?'var(--accent-hover)':'var(--accent)',color:'var(--text-on-accent)',borderColor:'transparent'};
  }
}
export function Button({variant='primary',size='md',icon,iconRight,loading=false,disabled=false,fullWidth=false,pill=false,type='button',onClick,children,style,...rest}){
  const [hover,setHover]=useState(false);
  const [press,setPress]=useState(false);
  const s=SIZES[size]||SIZES.md;
  const off=disabled||loading;
  return (
    <button type={type} disabled={off} onClick={onClick}
      onPointerEnter={()=>setHover(true)} onPointerLeave={()=>{setHover(false);setPress(false);}}
      onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)}
      style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:s.gap,height:s.h,padding:'0 '+s.px+'px',
        borderRadius:pill?'var(--radius-pill)':(size==='sm'?'var(--radius-sm)':'var(--radius-md)'),border:'1px solid',fontFamily:'var(--font-body)',fontSize:s.fs,fontWeight:700,letterSpacing:'-0.01em',whiteSpace:'nowrap',
        cursor:off?'not-allowed':'pointer',opacity:off?0.5:1,transform:press&&!off?'scale(var(--bump-scale))':'scale(1)',
        transition:'transform var(--duration-bump) var(--ease-bump), background var(--duration-fast) var(--ease-out-expo), color var(--duration-fast) var(--ease-out-expo)',
        ...variantStyle(variant,hover&&!off),...style}} {...rest}>
      {loading?<Icon name="loader-2" size={s.ic} style={{animation:'bump-spin .9s linear infinite'}}/>:icon?<Icon name={icon} size={s.ic}/>:null}
      {children}
      {iconRight&&!loading?<Icon name={iconRight} size={s.ic}/>:null}
    </button>
  );
}
