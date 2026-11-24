import React from 'react';
import {Icon} from '../display/Icon.jsx';
import {IconButton} from '../actions/IconButton.jsx';
import {Button} from '../actions/Button.jsx';
import {CoverArt} from './CoverArt.jsx';
import {Equalizer} from './Equalizer.jsx';
const t=(s)=>{s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
export function PlayerBar({track,playing=false,currentTime=0,duration=0,onToggle,onSeek,onBuy,fixed=false,style}){
  if(!track)return null;
  const pct=duration?Math.min(100,(currentTime/duration)*100):0;
  const seek=(e)=>{if(!onSeek||!duration)return;const r=e.currentTarget.getBoundingClientRect();onSeek(Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*duration);};
  return (
    <div style={{...(fixed?{position:'fixed',left:0,right:0,bottom:0,zIndex:50}:{}),height:'var(--player-height)',background:'rgba(10,10,15,.92)',backdropFilter:'blur(var(--blur-bar))',WebkitBackdropFilter:'blur(var(--blur-bar))',
      borderTop:'1px solid var(--border-subtle)',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,...style}}>
      <div style={{display:'flex',alignItems:'center',gap:12,flex:'1 1 25%',minWidth:180}}>
        <CoverArt src={track.coverUrl} alt={track.title} size={48}/>
        <div style={{minWidth:0}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <span style={{fontSize:14,fontWeight:600,color:'var(--text-primary)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{track.title}</span>
            <Equalizer playing={playing} height={12} barWidth={2}/>
          </div>
          <div style={{fontSize:12,color:'var(--text-secondary)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{track.artist||'Independent artist'}</div>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,flex:'2 1 50%',maxWidth:576}}>
        <IconButton icon={playing?'pause':'play'} label={playing?'Pause':'Play'} variant="static" size="sm" filled onClick={onToggle}/>
        <div style={{width:'100%',display:'flex',alignItems:'center',gap:12,fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-secondary)'}}>
          <span>{t(currentTime)}</span>
          <div onClick={seek} style={{flex:1,height:12,display:'flex',alignItems:'center',cursor:'pointer'}}>
            <div style={{width:'100%',height:4,borderRadius:4,background:'var(--ink-700)',position:'relative'}}>
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:pct+'%',borderRadius:4,background:'var(--accent)'}}></div>
              <div style={{position:'absolute',top:'50%',left:pct+'%',width:12,height:12,borderRadius:12,background:'#fff',transform:'translate(-50%,-50%)',boxShadow:'var(--shadow-sm)'}}></div>
            </div>
          </div>
          <span>{t(duration)}</span>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:16,flex:'1 1 25%',minWidth:150}}>
        {track.priceCents>0?<Button variant="soft" size="sm" pill onClick={onBuy}>{'Buy $'+(track.priceCents/100).toFixed(2)+' · 100% to artist'}</Button>:<span style={{fontSize:12,color:'var(--text-tertiary)'}}>Free stream</span>}
        <span style={{color:'var(--text-secondary)'}}><Icon name="volume-2" size={18}/></span>
      </div>
    </div>
  );
}
