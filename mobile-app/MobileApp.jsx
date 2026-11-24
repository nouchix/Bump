const BUMP_M_TRACKS=[
{id:'t1',title:'Midnight Horizon',artist:'Nova Reyes',verified:true,priceCents:199,duration:214,plays:2140,sales:31},
{id:'t3',title:'Glass Avenue',artist:'Nova Reyes',verified:true,priceCents:149,duration:243,plays:1588,sales:12},
{id:'t5',title:'Overpass Lights',artist:'Nova Reyes',verified:true,priceCents:0,duration:205,plays:1084,sales:0}];
const BUMP_M_QUEUE=[{id:'q1',title:'Basement Choir',artist:'June Ortega',priceCents:149},{id:'q2',title:'Low Tide Static',artist:'Kito Mbeki',priceCents:0}];
const BUMP_M_SALES=[{id:'s1',track:'Midnight Horizon',when:'2 hours ago',cents:199},{id:'s2',track:'Glass Avenue',when:'Yesterday',cents:149},{id:'s3',track:'Midnight Horizon',when:'Yesterday',cents:199},{id:'s4',track:'Midnight Horizon',when:'Mon',cents:199}];
function MobileApp(){
  const {Toast}=window.BumpDesignSystem_4e5c17;
  const track=BUMP_M_TRACKS[0];
  const [playing,setPlaying]=React.useState(true);
  const [time,setTime]=React.useState(74);
  const [sales,setSales]=React.useState(BUMP_M_SALES);
  const [toastA,setToastA]=React.useState(null);
  const [toastB,setToastB]=React.useState(null);
  const [tab,setTab]=React.useState('studio');
  const [open,setOpen]=React.useState(false);
  React.useEffect(()=>{if(!playing)return;const id=setInterval(()=>setTime(t=>t+1>=track.duration?0:t+1),1000);return()=>clearInterval(id);},[playing]);
  React.useEffect(()=>{if(!toastA)return;const id=setTimeout(()=>setToastA(null),3000);return()=>clearTimeout(id);},[toastA]);
  React.useEffect(()=>{if(!toastB)return;const id=setTimeout(()=>setToastB(null),3600);return()=>clearTimeout(id);},[toastB]);
  const buy=()=>{setToastA({icon:'check',title:'Bought. Nova got all $1.99.'});
    setTimeout(()=>{setSales(s=>[{id:'n'+Date.now(),track:'Midnight Horizon',when:'Just now',cents:199,fresh:true},...s]);setToastB({icon:'dollar-sign',tone:'pulse',title:'Someone just paid you directly.',message:'$1.99 · Midnight Horizon'});},700);};
  const toastWrap=(t,set)=>t?<div style={{position:'absolute',left:12,right:12,top:56,zIndex:30,display:'flex',justifyContent:'center'}}><Toast {...t} style={{minWidth:0,width:'100%'}} onClose={()=>set(null)}/></div>:null;
  const np=<NowPlayingScreen track={track} playing={playing} time={time} onToggle={()=>setPlaying(p=>!p)} onSeek={setTime} onBuy={buy} onClose={()=>setOpen(false)} queue={BUMP_M_QUEUE}/>;
  return (
    <div style={{display:'flex',gap:56,flexWrap:'wrap',justifyContent:'center',alignItems:'flex-start',padding:'40px 24px'}}>
      <div style={{display:'flex',flexDirection:'column',gap:14,alignItems:'center'}}>
        <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Listener · Now playing</span>
        <IOSDevice dark><div style={{position:'relative',minHeight:'100%',fontFamily:'var(--font-body)',color:'var(--text-primary)'}}>{np}{toastWrap(toastA,setToastA)}</div></IOSDevice>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:14,alignItems:'center'}}>
        <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Artist · Studio dashboard</span>
        <IOSDevice dark>
          <div style={{position:'absolute',inset:0,background:'var(--bump-void)',fontFamily:'var(--font-body)',color:'var(--text-primary)'}}>
            <div style={{position:'absolute',inset:0,overflow:'auto'}}>
              {open?np:<DashboardScreen tracks={BUMP_M_TRACKS} sales={sales} current={track} playing={playing} onUpload={()=>{}}/>}
            </div>
            {!open?<MiniPlayer track={track} playing={playing} onToggle={()=>setPlaying(p=>!p)} onOpen={()=>setOpen(true)}/>:null}
            {!open?<TabBar value={tab} onChange={setTab}/>:null}
            {toastWrap(toastB,setToastB)}
          </div>
        </IOSDevice>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MobileApp/>);