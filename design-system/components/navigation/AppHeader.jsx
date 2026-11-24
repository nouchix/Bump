import React from 'react';
import {Logo} from '../brand/Logo.jsx';
import {Badge} from '../display/Badge.jsx';
import {Button} from '../actions/Button.jsx';
import {Avatar} from '../display/Avatar.jsx';
export function AppHeader({onNavigate,user,sticky=true,style}){
  const go=(p)=>(e)=>{if(e&&e.preventDefault)e.preventDefault();onNavigate&&onNavigate(p);};
  return (
    <header style={{...(sticky?{position:'sticky',top:0,zIndex:40}:{}),height:'var(--header-height)',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',
      background:'rgba(10,10,15,.8)',backdropFilter:'blur(var(--blur-bar))',WebkitBackdropFilter:'blur(var(--blur-bar))',borderBottom:'1px solid var(--border-subtle)',...style}}>
      <a href="#" onClick={go('home')} style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <Logo height={28}/>
        <Badge>100% to artist</Badge>
      </a>
      <nav style={{display:'flex',alignItems:'center',gap:8}}>
        <Button size="sm" icon="upload-cloud" onClick={go('upload')}>Upload track</Button>
        {user?<Avatar name={user.name} src={user.avatar} size={32} verified={user.verified}/>:<Button size="sm" variant="ghost" onClick={go('login')}>Sign in</Button>}
      </nav>
    </header>
  );
}
