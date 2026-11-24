import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
export function CoverArt({src,alt='',size=80,radius,playing=false,showPlay=false,onPlay,style}){
  const [hover,setHover]=useState(false);
  const r=radius!==undefined?radius:(size>=64?'var(--radius-md)':'var(--radius-sm)');
  return (
    <div onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}
      style={{position:'relative',width:size,height:size,borderRadius:r,overflow:'hidden',flexShrink:0,background:'var(--ink-800)',...style}}>
      {src?<img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:
        <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-tertiary)'}}><Icon name="disc-3" size={Math.round(size*0.4)}/></div>}
      {showPlay?(
        <button type="button" aria-label={playing?'Pause':'Play'} onClick={onPlay}
          style={{position:'absolute',inset:0,border:0,cursor:'pointer',background:'rgba(10,10,15,.55)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent)',
            opacity:hover||playing?1:0,transition:'opacity var(--duration-fast) var(--ease-out-expo)'}}>
          <Icon name={playing?'pause':'play'} size={Math.round(size*0.36)} fill="currentColor"/>
        </button>
      ):null}
    </div>
  );
}
