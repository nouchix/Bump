import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
export function Checkbox({checked,defaultChecked=false,onChange,label,disabled=false,style}){
  const [inner,setInner]=useState(defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=()=>{if(disabled)return;const n=!on;if(checked===undefined)setInner(n);onChange&&onChange(n);};
  return (
    <label onClick={(e)=>{e.preventDefault();toggle();}} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,color:'var(--text-primary)',fontSize:14,...style}}>
      <span role="checkbox" aria-checked={on} style={{width:20,height:20,borderRadius:6,display:'inline-flex',alignItems:'center',justifyContent:'center',
        background:on?'var(--accent)':'var(--bg-app)',border:'1px solid '+(on?'var(--accent)':'var(--border-strong)'),color:'#fff',
        transform:on?'scale(1)':'scale(.96)',transition:'all var(--duration-bump) var(--ease-bump)'}}>
        {on?<Icon name="check" size={14} strokeWidth={3}/>:null}
      </span>
      {label}
    </label>
  );
}
