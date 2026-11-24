import React from 'react';
import {Card} from '../display/Card.jsx';
import {Badge} from '../display/Badge.jsx';
import {Icon} from '../display/Icon.jsx';
import {Button} from '../actions/Button.jsx';
import {CoverArt} from './CoverArt.jsx';
import {Equalizer} from './Equalizer.jsx';
const fmt=(c)=>c>0?'$'+(c/100).toFixed(2):'Free';
export function TrackCard({title,artist,coverUrl,priceCents=0,verified=false,active=false,playing=false,onPlay,onBuy,style}){
  const on=active&&playing;
  return (
    <Card interactive padding={16} style={{display:'flex',flexDirection:'column',gap:16,...(active?{borderColor:'var(--accent-soft-border)'}:{}),...style}}>
      <div style={{display:'flex',gap:16,alignItems:'center',minWidth:0}}>
        <CoverArt src={coverUrl} alt={title} size={80} showPlay playing={on} onPlay={onPlay}/>
        <div style={{minWidth:0,display:'flex',flexDirection:'column',gap:2}}>
          <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0}}>
            {on?<Equalizer height={12} barWidth={2}/>:null}
            <span style={{fontSize:16,fontWeight:700,letterSpacing:'-0.02em',color:'var(--text-primary)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{title}</span>
          </div>
          <span style={{display:'flex',alignItems:'center',gap:4,fontSize:12,color:'var(--text-secondary)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
            {artist}{verified?<span style={{color:'var(--pulse-400)'}}><Icon name="badge-check" size={14}/></span>:null}
          </span>
          <span style={{marginTop:6,fontFamily:'var(--font-mono)',fontSize:12,fontWeight:700,color:priceCents>0?'var(--accent)':'var(--text-secondary)'}}>{fmt(priceCents)}</span>
        </div>
      </div>
      <div style={{paddingTop:12,borderTop:'1px solid var(--border-subtle)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
        <Button variant="ghost" size="sm" icon={on?'pause':'play'} onClick={onPlay} style={{paddingLeft:6}}>{on?'Pause':'Stream'}</Button>
        {priceCents>0?<Button size="sm" pill icon="shopping-cart" onClick={onBuy}>Buy track</Button>:<Badge>Free stream</Badge>}
      </div>
    </Card>
  );
}
