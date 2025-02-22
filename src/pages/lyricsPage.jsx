
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
      <li><button style={{padding:0}} key={song} onClick={() => handleSong(song)}>{song}</button></li>
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
    <div id="lyrics-container">
      <lyricButtons><ul>{songbuttons}</ul></lyricButtons>
      <lyricText>{lyrics}</lyricText>
      <lyricImg>test</lyricImg>
    </div>
    <NavBar/>

    </div>
  )
}

export default LyricsPage