
import { useState } from 'react';

import NavBar from "../components/navBar"
import BlueWordComponent from '../components/blueWordComponent'
import LyricsSweaterComponent from '../components/lyricsSweaterComponent'
import LyricsWaterFireComponent from '../components/lyricsWaterFireComponent'
import LyricsHeyGabyComponent from '../components/lyricsHeyGabyComponent'
import LyricsPuppetMasterComponent from '../components/lyricsPuppetMasterComponent'
import LyricsMyLeftHandComponent from '../components/lyricsMyLeftHandComponent'
import LyricsWhatICantHaveComponent from '../components/lyricsWhatICantHaveComponent'
import LyricsSilverDropsComponent from '../components/lyricsSilverDropsComponent'
import LyricsTelephoneComponent from '../components/lyricsTelephoneComponent'

function LyricsPage() {
  let songnames = ["SWEATER", "WATER ON FIRE", "HEY GABY", "PUPPET MASTER", "MY LEFT HAND", "WHAT I CAN'T HAVE","SILVER DROPS","TELEPHONE"];
  const [song, setSong] = useState("SWEATER"); //initial state
  let lyrics = loadLyrics(); //sets {lyrics} html using song as state
  let songbuttons = []; //each songname will have a corresponding html button
  songnames.forEach((song) =>
    songbuttons.push(
      <li><button key={song} onClick={() => handleSong(song)}>{song}</button></li>
    )
  )
  function handleSong(song){
    setSong(song)
  }
  function loadLyrics(){
    switch(song){
      case "SWEATER": return <LyricsSweaterComponent/>
      case "WATER ON FIRE": return <LyricsWaterFireComponent/>
      case "HEY GABY": return <LyricsHeyGabyComponent/>
      case "PUPPET MASTER": return <LyricsPuppetMasterComponent/>
      case "MY LEFT HAND": return <LyricsMyLeftHandComponent/>
      case "WHAT I CAN'T HAVE": return <LyricsWhatICantHaveComponent/>
      case "SILVER DROPS": return <LyricsSilverDropsComponent/>
      case "TELEPHONE": return <LyricsTelephoneComponent/>
    }
  }
  return (
    <div>
    <BlueWordComponent word='hello'/>
    <div class="lyrics-container">
      <div class="item-img"></div>
      <div class="item-buttons"><ul>{songbuttons}</ul></div>
      <div class="item-lyrics">{lyrics}</div>
    </div>
    <NavBar/>
    </div>
  )
}

export default LyricsPage