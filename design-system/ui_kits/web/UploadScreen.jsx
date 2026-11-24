function UploadScreen({onPublish}){
  const {Card,Button,Input,Dropzone,Alert}=window.BumpDesignSystem_4e5c17;
  const [title,setTitle]=React.useState('');
  const [audio,setAudio]=React.useState(null);
  const [cover,setCover]=React.useState(null);
  const [price,setPrice]=React.useState('1.99');
  const [busy,setBusy]=React.useState(false);
  const [err,setErr]=React.useState(null);
  const submit=(e)=>{e.preventDefault();if(!audio||!title){setErr('Please provide an audio file and a title.');return;}setErr(null);setBusy(true);
    setTimeout(()=>{setBusy(false);onPublish({title,priceCents:Math.round(parseFloat(price||'0')*100)});},1400);};
  return (
    <div style={{maxWidth:672,margin:'0 auto',padding:'32px 0'}}>
      <h1 style={{margin:'0 0 8px',fontSize:30,fontWeight:700,letterSpacing:'-0.04em'}}>Upload your music</h1>
      <p style={{margin:'0 0 24px',fontSize:14,color:'var(--text-secondary)'}}>Direct upload to global CDN. You set your price and keep 100% of sales.</p>
      {err?<Alert tone="error" style={{marginBottom:16}}>{err}</Alert>:null}
      <Card padding={24}>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:24}}>
          <Input label="Track title" placeholder="e.g. Midnight Horizon" value={title} onChange={e=>setTitle(e.target.value)}/>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-secondary)'}}>Audio file (MP3, 320kbps recommended)</span>
            <Dropzone accept="audio/*" title="Select or drop MP3 file" fileName={audio&&audio.name} onFile={setAudio}/>
            {!audio?<button type="button" onClick={()=>setAudio({name:'midnight-horizon-master.mp3'})} style={{alignSelf:'flex-start',background:'none',border:0,color:'var(--text-tertiary)',fontSize:12,cursor:'pointer',padding:0,fontFamily:'inherit'}}>Use a sample file</button>:null}
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <span style={{font:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-secondary)'}}>Cover artwork (optional)</span>
            <Dropzone compact icon="image" accept="image/*" title="Upload square artwork (JPG, PNG)" fileName={cover&&cover.name} onFile={setCover}/>
          </div>
          <Input label="Download price (USD) — 0 for free" prefix="$" type="number" step="0.01" min="0" value={price} onChange={e=>setPrice(e.target.value)} hint="100% of this amount goes directly to you via Stripe."/>
          <Button type="submit" size="lg" fullWidth icon="upload-cloud" loading={busy}>{busy?'Publishing…':'Publish track'}</Button>
        </form>
      </Card>
    </div>
  );
}
window.UploadScreen=UploadScreen;