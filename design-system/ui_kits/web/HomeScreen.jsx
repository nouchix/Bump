function HomeScreen({tracks,currentId,playing,onPlay,onBuy,onNavigate}){
  const {TrackCard,Card,Icon,Button}=window.BumpDesignSystem_4e5c17;
  const list=tracks;
  return (
    <div style={{display:'flex',flexDirection:'column',gap:32}}>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <div>
          <h1 style={{margin:0,fontSize:36,fontWeight:700,letterSpacing:'-0.04em',lineHeight:1.05}}>Trending &amp; new releases</h1>
          <p style={{margin:'6px 0 0',fontSize:14,color:'var(--text-secondary)'}}>Stream independent music. Direct-to-artist payouts with zero platform cut on music sales.</p>
        </div>
      </div>
      {list.length===0?(
        <Card padding={48} style={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
          <span style={{color:'var(--ink-600)'}}><Icon name="disc-3" size={48}/></span>
          <h3 style={{margin:0,fontSize:18}}>No tracks published yet</h3>
          <p style={{margin:'0 0 12px',color:'var(--text-secondary)'}}>Be the first artist to publish a track on Bump.</p>
          <Button icon="upload-cloud" onClick={()=>onNavigate('upload')}>Upload track</Button>
        </Card>
      ):(
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:24}}>
          {list.map(t=>(
            <TrackCard key={t.id} title={t.title} artist={t.artist} verified={t.verified} priceCents={t.priceCents} coverUrl={t.coverUrl}
              active={currentId===t.id} playing={playing} onPlay={()=>onPlay(t)} onBuy={()=>onBuy(t)}/>
          ))}
        </div>
      )}
    </div>
  );
}
window.HomeScreen=HomeScreen;