import React,{useState} from 'react';
export function Switch({checked,defaultChecked=false,onChange,label,disabled=false,style}){
  const [inner,setInner]=useState(defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=()=>{if(disabled)return;const n=!on;if(checked===undefined)setInner(n);onChange&&onChange(n);};
  return (
    <label onClick={(e)=>{e.preventDefault();toggle();}} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,color:'var(--text-primary)',fontSize:14,...style}}>
      <span role="switch" aria-checked={on} style={{width:40,height:24,borderRadius:999,padding:3,background:on?'var(--accent)':'var(--ink-700)',transition:'background var(--duration-base) var(--ease-out-expo)',display:'inline-flex'}}>
        <span style={{width:18,height:18,borderRadius:999,background:'#fff',boxShadow:'var(--shadow-sm)',transform:on?'translateX(16px)':'translateX(0)',transition:'transform var(--duration-bump) var(--ease-bump)'}}></span>
      </span>
      {label}
    </label>
  );
}
