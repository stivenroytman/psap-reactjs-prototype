import './App.css';
import { useState } from 'react';

const testPlayerName = "Jotaro";
const testPlayerImgURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KWPubfNx_S5oxERTzP5uvAHaHF%26pid%3DApi&f=1";
const testPlayerPoints = 0;
const testShieldImgURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kBI0qc-B9pIwJOZyCUwEAgHaHa%26pid%3DApi&f=1";
const testPlayerClicks = 0;
const testPlayerShields = 10;
const testOpponentName = "Dio";
const testOpponentImgURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MsvjZ7AmijOf-lYZrendVAHaEK%26pid%3DApi&f=1";
const testOpponentPoints = 0;

function range(length) {
  let output = [];
  for (let i=0; i<length; i++) {
    output.push(i)
  }
  return output
}

const ShieldMeter = (props) => {
  return (
    <div style={{display: 'grid'}}>
    {
      range(props.shields).map(n => {
        return (
          <img style={{gridRow: n, width: 30, height: 30}} src={testShieldImgURL}></img>
        )
      })
    }
    </div>
  )
}

const Profile = (props) => {
  return (
    <>
        <h1 id={props.id + "name"}>{props.name}</h1>
        <img id={props.id + "img"} src={props.imgURL}></img>
        <h3 id={props.id + "points"}>Points: {props.points}</h3>
        <ShieldMeter shields={props.shields} />
    </>
  )
}

const Control = (props) => {
  return (
    <>
        <h1>Clicks</h1>
        <h1 style={{paddingBottom: '25%', paddingTop: '25%'}}>{props.clicks}</h1>
        <div style={{display: 'grid', gridGap: '5px'}}>
          <button 
            style={{gridColumn: 1}}
            onClick={props.earn}
          >earn</button>
          <button 
            style={{gridColumn: 2}}
            onClick={props.steal}
          >steal</button>
          <button 
            style={{gridColumn: 3}}
            onClick={props.defend}
          >defend</button>
        </div>
    </>
  )
}

function App() {

  const [clicks, setClicks] = useState(0);
  const [points, setPoints] = useState({
    player: 0,
    opponent: 0
  });
  const [shields, setShields] = useState(0);

  return (
    <div className="grid-container">

      <div id="left">
        <Profile
          id="player"
          name={testPlayerName}
          imgURL={testPlayerImgURL}
          points={points.player}
          shields={shields}
        />
      </div>

      <div id="center">
        <Control 
          clicks={clicks}
          earn={()=>{}}
          steal={()=>{}}
          defend={()=>{}} 
        />
      </div>

      <div id="right">
        <Profile 
          id="opponent"
          name={testOpponentName}
          imgURL={testOpponentImgURL}
          points={points.opponent}
        />
      </div>
    
    </div>
  );
}

export default App;

