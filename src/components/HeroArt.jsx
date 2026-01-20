import { SITE } from '../config'

export default function HeroArt(){
  return (
    <div className="art" role="img" aria-label="Raviteja profile">
      <span className="ring dotted r3"></span>
      <span className="ring dotted r2"></span>
      <span className="ring dotted r1"></span>
      <div className="photo-circle">
        <img src={SITE.PROFILE_IMG} className="photo-img" alt="Raviteja Buchaiahgari" />
      </div>
      <div className="orbit orbit-eat" aria-hidden="true">
        <div className="orbit-offset">
          <span className="chip orbit-chip">EAT</span>
        </div>
      </div>
      <div className="orbit orbit-prompt" aria-hidden="true">
        <div className="orbit-offset">
          <span className="chip orbit-chip">PROMPT</span>
        </div>
      </div>
      <div className="orbit orbit-coffee" aria-hidden="true">
        <div className="orbit-offset">
          <span className="chip orbit-chip">COFFEE</span>
        </div>
      </div>
      <div className="orbit orbit-vibe" aria-hidden="true">
        <div className="orbit-offset">
          <span className="chip orbit-chip">VIBE CODE</span>
        </div>
      </div>
      <div className="orbit orbit-sleep" aria-hidden="true">
        <div className="orbit-offset">
          <span className="chip orbit-chip">SLEEP</span>
        </div>
      </div>
    </div>
  )
}
