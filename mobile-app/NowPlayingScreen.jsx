function NowPlayingScreen({track,playing,time,onToggle,onSeek,onBuy,onClose,queue}){
  const {Icon,IconButton,Button,Equalizer,CoverArt}=window.BumpDesignSystem_4e5c17;
  const pct=track.duration?time/track.duration*100:0;
  const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
  const seek=e=>{const r=e.currentTarget.getBoundingClientRect();onSeek(Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*track.duration);};
  return (
    <div style={{minHeight:'100%',background:'var(--bump-void)',position:'relative',overflow:'hidden',paddingTop:58,paddingBottom:40}}>
      <div style={{position:'absolute',inset:0,background:'var(--gradient-hero)',opacity:.22,pointerEvents:'none'}}></div>
      <div style={{position:'absolute',left:0,right:0,top:0,height:420,background:'linear-gradient(180deg,rgba(10,10,15,0) 0%,var(--bump-void) 100%)',pointerEvents:'none'}}></div>
      <div style={{position:'relative',padding:'0 20px',display:'flex',flexDirection:'column',gap:24}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <IconButton icon="chevron-down" label="Close" variant="ghost" onClick={onClose}/>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
            <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-secondary)'}}>Now playing</span>
            <span style={{fontSize:12,color:'var(--text-primary)',fontWeight:600}}>New releases</span>
          </div>
          <IconButton icon="more-horizontal" label="More" variant="ghost"/>
        </div>
        <div style={{transform:playing?'scale(1)':'scale(.92)',transition:'transform var(--duration-slow) var(--ease-bump)',boxShadow:'var(--shadow-lg)',borderRadius:'var(--radius-lg)'}}>
          <CoverArt size={362} radius="var(--radius-lg)" src={track.coverUrl}/>
        </div>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:12}}>
          <div style={{minWidth:0}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <span style={{fontSize:26,fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.1}}>{track.title}</span>
              <Equalizer playing={playing} height={14} barWidth={2}/>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:4,marginTop:4,fontSize:15,color:'var(--text-secondary)'}}>{track.artist}{track.verified?<span style={{color:'var(--pulse-400)'}}><Icon name="badge-check" size={16}/></span>:null}</div>
          </div>
          <IconButton icon="heart" label="Like" variant="ghost"/>
        </div>
        <div>
          <div onClick={seek} style={{height:20,display:'flex',alignItems:'center',cursor:'pointer'}}>
            <div style={{width:'100%',height:4,borderRadius:4,background:'var(--ink-700)',position:'relative'}}>
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:pct+'%',borderRadius:4,background:'var(--accent)'}}></div>
              <div style={{position:'absolute',top:'50%',left:pct+'%',width:14,height:14,borderRadius:14,background:'#fff',transform:'translate(-50%,-50%)'}}></div>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-secondary)'}}><span>{fmt(time)}</span><span>-{fmt(track.duration-time)}</span></div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 4px'}}>
          <IconButton icon="shuffle" label="Shuffle" variant="ghost" size="sm"/>
          <IconButton icon="skip-back" label="Previous" variant="ghost" filled/>
          <IconButton icon={playing?'pause':'play'} label={playing?'Pause':'Play'} variant="primary" size="lg" filled onClick={onToggle} style={{width:72,height:72}}/>
          <IconButton icon="skip-forward" label="Next" variant="ghost" filled/>
          <IconButton icon="repeat" label="Repeat" variant="ghost" size="sm"/>
        </div>
        {track.priceCents>0?<Button variant="soft" pill fullWidth icon="shopping-cart" onClick={onBuy}>{'Buy $'+(track.priceCents/100).toFixed(2)+' · 100% to '+track.artist}</Button>:null}
        <div style={{display:'flex',flexDirection:'column',gap:12,paddingTop:8}}>
          <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Up next</span>
          {queue.map(q=>(
            <div key={q.id} style={{display:'flex',alignItems:'center',gap:12}}>
              <CoverArt size={44} src={q.coverUrl}/>
              <div style={{flex:1,minWidth:0}}><div style={{fontSize:14,fontWeight:600}}>{q.title}</div><div style={{fontSize:12,color:'var(--text-secondary)'}}>{q.artist}</div></div>
              <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:q.priceCents?'var(--accent)':'var(--text-tertiary)'}}>{q.priceCents?'$'+(q.priceCents/100).toFixed(2):'Free'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.NowPlayingScreen=NowPlayingScreen;