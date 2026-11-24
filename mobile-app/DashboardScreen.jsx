function DashboardScreen({tracks,sales,current,playing,onToggle,onOpenPlayer,onUpload}){
  const {Icon,IconButton,Button,Card,Badge,Avatar,Tabs,CoverArt,Equalizer}=window.BumpDesignSystem_4e5c17;
  const [range,setRange]=React.useState('30 days');
  const total=sales.reduce((a,s)=>a+s.cents,0);
  return (
    <div style={{minHeight:'100%',background:'var(--bump-void)',paddingTop:58,paddingBottom:current?172:110,position:'relative'}}>
      <div style={{padding:'0 20px',display:'flex',flexDirection:'column',gap:20}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Avatar name="Nova Reyes" size={40} verified/>
            <div><div style={{fontSize:12,color:'var(--text-secondary)'}}>Studio</div><div style={{fontSize:17,fontWeight:700,letterSpacing:'-0.02em'}}>Nova Reyes</div></div>
          </div>
          <IconButton icon="upload-cloud" label="Upload" variant="primary" onClick={onUpload}/>
        </div>
        <Card padding={20} style={{position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'var(--gradient-hero)',opacity:.16,pointerEvents:'none'}}></div>
          <div style={{position:'relative',display:'flex',flexDirection:'column',gap:6}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-secondary)'}}>Paid to you</span>
              <Badge tone="signal">100% yours</Badge>
            </div>
            <span style={{fontSize:48,fontWeight:700,letterSpacing:'-0.04em',lineHeight:1}}>{'$'+(total/100).toFixed(2)}</span>
            <span style={{fontSize:12,color:'var(--text-secondary)'}}>Last {range} · paid out via Stripe</span>
          </div>
        </Card>
        <Tabs items={['7 days','30 days','All time']} value={range} onChange={setRange} style={{alignSelf:'flex-start'}}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <Card padding={16}><div style={{fontSize:12,color:'var(--text-secondary)'}}>Plays</div><div style={{fontSize:26,fontWeight:700,letterSpacing:'-0.03em'}}>4,812</div></Card>
          <Card padding={16}><div style={{fontSize:12,color:'var(--text-secondary)'}}>Sales</div><div style={{fontSize:26,fontWeight:700,letterSpacing:'-0.03em'}}>{sales.length}</div></Card>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Recent sales</span>
          {sales.slice(0,4).map((s,i)=>(
            <div key={s.id} style={{display:'flex',alignItems:'center',gap:12,animation:i===0&&s.fresh?'bump-rise var(--duration-slow) var(--ease-out-expo)':'none'}}>
              <span style={{width:36,height:36,borderRadius:999,background:s.fresh?'var(--accent)':'var(--ink-800)',color:s.fresh?'#fff':'var(--text-secondary)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="dollar-sign" size={16}/></span>
              <div style={{flex:1,minWidth:0}}><div style={{fontSize:14,fontWeight:600}}>{s.track}</div><div style={{fontSize:12,color:'var(--text-secondary)'}}>{s.when}</div></div>
              <span style={{fontFamily:'var(--font-mono)',fontSize:13,fontWeight:700,color:'var(--success-500)'}}>{'+$'+(s.cents/100).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Your tracks</span>
          {tracks.map(t=>(
            <div key={t.id} style={{display:'flex',alignItems:'center',gap:12}}>
              <CoverArt size={48} src={t.coverUrl}/>
              <div style={{flex:1,minWidth:0}}><div style={{fontSize:14,fontWeight:600}}>{t.title}</div><div style={{fontSize:12,color:'var(--text-secondary)'}}>{t.plays.toLocaleString()} plays · {t.sales} sales</div></div>
              <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:t.priceCents?'var(--accent)':'var(--text-tertiary)'}}>{t.priceCents?'$'+(t.priceCents/100).toFixed(2):'Free'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.DashboardScreen=DashboardScreen;