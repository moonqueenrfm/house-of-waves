
import { useState } from 'react';

import NavBar from "../components/navBar"
import BlueWordComponent from '../components/blueWordComponent'

function LyricsPage() {
  var songnames = ["SWEATER", "WATER ON FIRE", "HEY GABY", "PUPPET MASTER", "MY LEFT HAND", "WHAT I CAN'T HAVE","SILVER DROPS","TELEPHONE"];
  const [song, setSong] = useState("SWEATER"); //initial state
  var lyrics = loadLyrics(); //sets {lyrics} html using song as state
  var songbuttons = []; //each songname will have a corresponding html button
  songnames.forEach((song) =>
    songbuttons.push(
      <li><button key={song} onClick={() => handleSong(song)}>{song}</button></li>
    )
  )
  function handleSong(song){
    setSong(song)
  }
  function loadLyrics(){
    if(song == "SWEATER"){
      lyrics =  
    <div>
    <div class='songtitle'>SWEATER</div><br/>
    ⌛VERSE I⌛<br/>
    Gm7        	Am7           	Cm9 x2<br/>
    The winter was coming, yes I was warned<br/>
    I've still got your sweater keeping me warm<br/>
    The cold of my impulse leaves me alone<br/>
    We don't talk it's my fault<br/>
     <br/>
    🏖️ CHORUS 🏖️<br/>
    Gm7        	Am7         	Dsus4  Dm7<br/>
    Is this what it feels like to lose a friend?<br/>
    The ocean, full moon drives, trips without end<br/>
    Our good times still haunt me, sweet bittersweet<br/>
    "Those are my hippies in the street", you'll always be<br/>
     <br/>
    ⌛VERSE II⌛<br/>
    You called me up, i apologized, you said it's fine<br/>
    I was honest but not vulnerable, when we said goodbye<br/>
    I wanna thank you for wine and walks, all your sage advice<br/>
    The dreams we shared, your love and care<br/>
      <br/>
    🏖️ CHORUS 🏖️<br/>
     Is this what it feels like to lose a friend?<br/>
     The ocean, full moon drives, tripping at the beach<br/>
     Our good times rip through me, sweet bittersweet<br/>
     "Those are my hippies in the street", we'll always be<br/>
    <br/>
     💫 BRIDGE 💫 <br/>
     Edim Dbdim CMaj7 CMaj7<br/>
     Edim Dbdim CMaj7 A7+      A7+<br/>
    <br/>
    🏖️ CHORUS 🏖️<br/>
    Is this what it feels like to lose a friend?<br/>
    The ocean, moonlight drives, tripping in the dark<br/>
    Our good times ring through me, sweet bittersweet<br/>
    "Those are my hippies in the street", you'll always be - here in my heart<br/>
    Here in my heart x8<br/>
    </div>
    }
    if(song == "WATER ON FIRE"){
      lyrics =
      <div>
      <div class='songtitle'>WATER ON FIRE</div><br/>
    (THE MOON)<br/>
    F(m7 shape on 5th) Eb() D() E()<br/>
    F() Eb() D() E()<br/>
    Let me introduce myself<br/>
    I am The Moon Queen<br/>
    Patrón Saint of fuck boys<br/>
    Mother of bastards and hopeless romantics<br/>
    Use my laughter and dumbass antics to<br/>
    Fuel your dreary nights<br/>
    And journey through the void<br/>
    <br/>
    (THE VOID)<br/>
    Cm7 Bm7b5 Am7b5<br/>
    Cm7 Bm7b5 Am7b5<br/>
    I am the hell and the high water,<br/>
    and i am fucking coming<br/>
    <br/>
    (THE TIDE)<br/>
    Am7 Bm7 Cm7<br/>
    Am7 Bm7 Cm7<br/>
    I am crazy and I am free<br/>
    And I will pull you under<br/>
    I will raise the tides and drown you under my flames<br/>
    <br/>
    (THE MOON)<br/>
    (THE VOID)<br/>
    I am having so much fun!<br/>
    <br/>
    (THE TIDE)<br/>
    When you spit "bitch" at me<br/>
     Don't forget to put "Intransigent" in front of it<br/>
    And kneel beneath Your Queen<br/>
    <br/>
    I can be anything you want me to be<br/>
    Scarier than Machiavelli<br/>
    </div>
    }
    if(song == "HEY GABY"){
      lyrics = 
      <div>
        <div class='songtitle'>HEY GABY</div><br/>
    Em           Am<br/>
    Hey Gaby, don't get down on yourself<br/>
    I know it’s been going like hell<br/>
    On this path you've set for yourself<br/>
    But I believe in you You'll make it through<br/>
     <br/>
    🌤️PRE CHORUS🌤️<br/>
    B<br/>
    If you can't hold on then<br/>
    Take my hand, cause<br/>
     <br/>
    ☀️ CHORUS ☀️<br/>
    C              G<br/>
     Hope's coming, coming around<br/>
     To lift you right off the ground<br/>
     Hope's coming, coming for you<br/>
     And this i know is true<br/>
    D             D<br/>
     It's gonna happen for you<br/>
     <br/>
    🌦️🎐VERSE II - SPOKEN WORD 🎐🌦️<br/>
    E                   Am<br/>
    Hey Gaby<br/>
    Stay hydrated bitch,<br/>
    Take a walk, roll a blunt, go outside<br/>
    Touch some grass, climb a tree<br/>
    Do some drugs n shit, it’s alright<br/>
    Life’s not that serious<br/>
    No one knows what’s going on anyways,<br/>
    So make it up!<br/>
     <br/>
    🌦️VERSE II🌦️<br/>
    Don't worry about blackest night<br/>
    You know I'll never leave your side<br/>
    Cast your tears and wishes into the moon<br/>
    Cause you know she’ll always shine for you<br/>
     <br/>
    🌤️PRE CHORUS 🌤️<br/>
    If you can't hold on<br/>
    Take my hand, cause<br/>
     <br/>
    ☀️ CHORUS ☀️<br/>
     Hope's coming, coming around<br/>
     To lift you right off the ground<br/>
     Love's coming, coming for you<br/>
     And this i know is true<br/>
     All your dreams will come true<br/>
    <br/>
    ☀️🎸guitar solo🎸☀️<br/>
     <br/>
    🌦️VERSE III🌦️<br/>
    G                   C<br/>
    Hey Gaby, you can do this<br/>
    And if you feel alone play music<br/>
    You know you can always call<br/>
    And if I'm dead and gone, then play this song<br/>
     <br/>
    🌤️PRE CHORUS 🌤️<br/>
    If you can't hold on<br/>
    Take my hand, cause<br/>
     <br/>
    ☀️ CHORUS ☀️<br/>
     Hope's coming, coming around<br/>
     To lift you right off the ground<br/>
     Hope's coming, coming for you<br/>
     And this i know is true<br/>
     It's gonna happen for you<br/>
    Gaby 💖<br/>
      </div>
    }
    if(song == "PUPPET MASTER"){
      lyrics = 
      <div>
        <div class='songtitle'>PUPPET MASTER</div><br/>
     🌼INTRO🌼<br/>
    Ab6<br/>
    I know what you're doing, it's obvious<br/>
    Gb9                            Ab6<br/>
    So stay away or go slow.. because...i'm an idiot<br/>
     <br/>
    💐VERSE I💐<br/>
    Bbm7                     FmMaj7<br/>
    I saw In Your Eyes was to lay the trap<br/>
    Bbm7                      F7<br/>
    Held tight, ur close goodbye twists the knife<br/>
    Bbm7                     Cm7<br/>
    I know you feinted and feigned innocence<br/>
    Bbm7                     FMaj7<br/>
    From my starving arms to boost your confidence<br/>
     <br/>
    🌷PRECHORUS🌷<br/>
    Ab6                           	Bb7<br/>
    Promises of pictures, sunsets in songs<br/>
    Db                      Ebm9-slide to9<br/>
     we talk as friends but i Ache for your touch<br/>
     <br/>
    🥀CHORUS🥀<br/>
    Fm7                DbM7<br/>
    Can't lift my eyes up From your flowered sleeve<br/>
    Bbm7 			    Cm7<br/>
    Hate to see you walk away But love to watch you leave<br/>
    Fm7                   DbM7 <br/>
    Puppet Master, you can have your fun<br/>
    Bbm7                      	Cm7<br/>
    But please spare the softer feelings of the dumb<br/>
     <br/>
    💐VERSE II💐<br/>
    Paranoia says it's all a ploy to rile your ex<br/>
    My blood in the water’s for competition<br/>
    Why else would you bring rocks to the mountains?<br/>
     Cause i’m dumb and still thank God for fun ideas and loud music<br/>
     <br/>
    🌷PRECHORUS🌷<br/>
    Soft brushes your cheeks on mine<br/>
    near misses of us tantalize,<br/>
    Near kisses by passed-Christmas lights<br/>
    Wish for a repeat of that night but I<br/>
     <br/>
    🥀CHORUS🥀<br/>
    Can't lift my eyes up<br/>
    From your flowered sleeve<br/>
    Hate to see you walk away<br/>
    But love to watch you leave<br/>
    Puppet Master, you can have your fun<br/>
    Please spare the softer feelings of the dumb<br/>
    <br/>
    💐VERSE III💐<br/>
    Gotta tear away before Time Moves Slow<br/>
    Gloss my reactions, shift changes in tone<br/>
    It’s not that I’m unwitting in that i don't know,<br/>
    But rather unwitting in that i can't control<br/>
     <br/>
    🌷PRECHORUS🌷<br/>
    So i burn you, lick my fingers, play dumb<br/>
     we talk as friends but now you Ache for my touch<br/>
    <br/>
    🥀solos over CHORUS🥀<br/>
     <br/>
    💐VERSE IV💐<br/>
    The box flowers purple white and green<br/>
    Why does every bouquet repeat the theme?<br/>
    Funny that your message came at Falling In Love<br/>
    Fiction only dreams of what Truth conjures up<br/>
     <br/>
    🌷PRECHORUS🌷<br/>
    You're smart, you read the frenzy written on my face<br/>
    But i brave the wavy lines by sheer leap of faith<br/>
     <br/>
    🥀CHORUS🥀<br/>
    Can't lift my eyes up<br/>
    From your flowered sleeve<br/>
    Hate to see you walk away<br/>
    But love to watch you leave<br/>
    Puppet Master, you've had your fun<br/>
    Please spare the softer feelings of the dumb<br/>
    <br/>
    Drums lose their shit<br/>
      </div>
    }
    if(song == "MY LEFT HAND"){
      lyrics = 
      <div>
        <div class='songtitle'>MY LEFT HAND</div><br/>
      F#∆7 D∆7 Bm7 C#m7 ♾️<br/>
    Laidback 32 LOFI<br/>
    Last night thinking so much is killin me<br/>
    Know not when to stop and breathe<br/>
    No matter the wheels fall off, gotta keep steering the car<br/>
    Funny we're excited to drive 12 hours<br/>
    Talk and see the stars<br/>
    <br/>
    Within myself i know my time in the sun will come <br/>
    Even if i don't get there<br/>
    Someone else'll play guitar<br/>
    So I can focus on my message<br/>
    I've got to share it might go far<br/>
    faaaaaaaar faaaar<br/>
    Forget this awful feeling<br/>
    It might just happen<br/>
     <br/>
    32-DNB POWERPUFFGIRL GROOVE<br/>
    I know I've got to keep moving, keep moving through the changes<br/>
    I know I think too much<br/>
    I know I'll still make it<br/>
     <br/>
    Cause when I trust myself<br/>
    Even if it doesn't sound right<br/>
    At least I feel it for myself<br/>
    And it'll come out fine<br/>
     <br/>
    I've tried settling so very very hard,<br/>
    I find being a good person, hasn't got me very far<br/>
    <br/>
    Only when I'm fucked up and stand up for myself<br/>
    Do i strike some kind of balance,<br/>
    Between nice and giving hell<br/>
     <br/>
    GRUNGE FUSION<br/>
    I don't care if i go very far<br/>
    I'd rather be myself than have sold my soul for art<br/>
    Like Kafka sit and sing for years<br/>
    Right here and on the ground<br/>
     <br/>
    And if i stop thinking so much about myself and my hands i think<br/>
    Something might just come for me<br/>
    Something might just comfort me<br/>
    <br/>
    And i don't know if these tears are fear pain or pleasure<br/>
    🔜<br/>
    JAZZ FEEL<br/>
    Might eat another shroom popsicle<br/>
    Take more psychedelics i call it<br/>
    Mental health, spiritual wealth, a brief reprieve from this emotional well<br/>
    Can't get away from myself<br/>
     <br/>
    I don't have the hang of life yet<br/>
    I got my fishnets on and the art's on the walls, finally<br/>
    And I'm not taking your calls<br/>
    Stop calling me<br/>
      <br/>
    JDILLA<br/>
    My friend told me to self isolate and I know he might have well intentions<br/>
    But part of me thinks that he's full of shit<br/>
    And I wanna go out, get drunk n<br/>
    Be with the people and see what life's about<br/>
     <br/>
    There might be so much taint inside but I'm ready to feel the change<br/>
    Outside of my room, touch on the other parts of my life<br/>
     <br/>
    And i haven't had sex in 3 months<br/>
    I'm sick of that shit and i know it's not good for me too<br/>
    I don't wanna just fuck somebody and use them like<br/>
    A little mastur-bear-tory tool<br/>
    <br/>
    SAMBA<br/>
    Won't you be my lovely sex toy<br/>
    Won't you be my new distraction<br/>
    There's so much spiritual work I've yet to do<br/>
    And I've still gotta do but I'd like to get some action<br/>
     <br/>
    Oooh they just closed the bar i used to work at, they said it's full of criminals<br/>
    I guess that's just you and me my friend<br/>
    We're all Here full of ourselves<br/>
     <br/>
    Not sure if what we're doing is right or wrong at least I'm trying to see<br/>
    Stop breaking at least<br/>
    I've stopped saying my mom is the worst thing that<br/>
    Title belongs to my ex, fuck you you deserved it<br/>
     <br/>
    And there's nothing more that i can do but let loose<br/>
    Just hope for the best as i try to follow the rules<br/>
     <br/>
    BLASTBEAT/METAL<br/>
    Other people have it out for me,<br/>
    The ones i see in ruts<br/>
    But the wisest thing I've read is that the truth is lived not taught so<br/>
     <br/>
    I might get on your nerves and sound like shit in your ears and in my head but i guess<br/>
    At least I'll still have an empty conscience<br/>
    <br/>
    32bars STACCATO/purdie SHUFFLE<br/>
    <br/>
    HOUSE DISCO<br/>
    Oooh fuck you, so many words that I've said<br/>
    They're all the truth<br/>
    I've gotta find<br/>
     what truth I've selected<br/>
     <br/>
    My stupid deft fingers can't do wrong with clarity but I'd like to<br/>
    Pass them the secret between you and me<br/>
    But it never happens<br/>
    You're never single at the same time as i am, and now that we both are it seems God has other plans<br/>
    You're never single at the same time as i am, feels like my entire life is a collection of other people's Missed Quonnections<br/>
     <br/>
    TRAP BEAT/REGGAE<br/>
    I never took part in all the truths I could have shared<br/>
    It took, 20 years, 28 years<br/>
     <br/>
    🔜<br/>
    So much thinking in my head it doesn't let my hell speak<br/>
    Read the truth that lies within me<br/>
     <br/>
    When i close my eyes and follow through my heart<br/>
    Something might just come out or fall apart<br/>
     <br/>
    I've always been afraid of the destructive power of the truth<br/>
    The matter itself and the method i had chosen<br/>
    You can always count on a poet to tell the truth<br/>
    I'm somewhat of a poet, i smoke sages too<br/>
    See, the power of memory:<br/>
    It doesn't matter cause you're not gonna remember listen to me it's not me it's you<br/>
     <br/>
    Stop Letting the intellect rule your heart<br/>
    Maybe step into the wisdom of your body you'll go far<br/>
     <br/>
    TOM GROOVE<br/>
    Give her slack<br/>
    It never comes as easy for me as it does for you<br/>
    I might feel so much jealousy in my heart<br/>
    It's only because all the times I've told the truth<br/>
    I've been turned away and torn apart<br/>
    I'll just gonna wait for my time in the sun<br/>
    Got to keep believing, oooh here it comes!<br/>
     <br/>
    I was cine-mad<br/>
    I'd like to sing pretty things but i<br/>
    Have a cache to clear<br/>
    So much pain before I d(ie)o<br/>
     <br/>
    Learn to practice more<br/>
    And let the roses come my way<br/>
    Cause I've got to learn to trust myself<br/>
     learn to look away<br/>
     <br/>
    ACTUAL FUSION<br/>
    Soft folding in to the glory of my mind<br/>
    She’s always going be back trying to keep me from flying hiiiiigh<br/>
    As i look at all my books<br/>
    I think of all the thieves the liars and the crooks<br/>
    The ones who take from me and say i am not enough<br/>
    But i know that iiiii<br/>
    Just can't give up<br/>
    <br/>
    Of my flight i<br/>
    Get this sort of peace RIT<br/>
    Slow myself down<br/>
    And love to feel release<br/>
     <br/>
    PROGRESSIVE 5/4<br/>
    FAUX END-HALF TIME<br/>
    You are prosperous<br/>
    I live to see the light<br/>
    That's reflected in your eyes<br/>
     <br/>
    When you catch me staring at a mic<br/>
    Finally see myself as more than just a mind<br/>
     <br/>
    Oh I'm always almost halfway there<br/>
    Cause one half of the work is knowing<br/>
    And the other half is really<br/>
    caring to do the motherfuckin woooork<br/>
      </div>
    }
    if(song == "WHAT I CAN'T HAVE"){
      lyrics = 
      <div>
        <div class='songtitle'>WHAT I CAN’T HAVE</div><br/>
     <br/>
    🌬️CHORUS🌬️<br/>
    B∆7		  E∆7<br/>
    I'm so into you, I just don't understand<br/>
    This certain curse I'm subject to, Always want what I can't have<br/>
     <br/>
    🏜️VERSE I 🏜️<br/>
    E 				     C#7<br/>
    I'm not a sinner I'm just a beginner, Only fall in love for the moment<br/>
    B7					       G#m7<br/>
    But I take ur bait baby, hook line and sinker, Never know quite where I'm going (but I don't mind)<br/>
     <br/>
    🌬️CHORUS🌬️<br/>
    🏜️VERSE II 🏜️<br/>
    Take all your shit with u next time you leave<br/>
    I could spend all day in my reveries<br/>
    Thinkin bout next time you'll come to me<br/>
    Oh nooo it's all tainted by reality<br/>
     🌬️CHORUS🌬️X2<br/>
    🏞️BRIDGE🏞️<br/>
    Ab6                           Em7<br/>
     A las(t) a lone a loved a long the riverrun<br/>
    Dm7 	A∆7(6th)A∆7(jazz)A#∆7<br/>
    Electric shocks when we talk<br/>
    Bb(weirdaugsus+1down)<br/>
    Did you feel it too?<br/>
    Or was I the only one?<br/>
     <br/>
    🌬️CHORUS🌬️<br/>
    🏜️VERSE III 🏜️<br/>
    You make me laugh my way to abs<br/>
    Keep your distance, I'm 2 starved 4romance<br/>
    You know me, only take what i can<br/>
    Admire from afar your ceramic hands<br/>
    (goddaaamn)<br/>
    🌬️CHORUS🌬️<br/>
     <br/>
    🏜️VERSE IV 🏜️<br/>
    Gotta quick sketch of you and me<br/>
    Save it for another charcoal day-dream<br/>
    Swear I wouldn't dare do anything<br/>
    It's already you, your kids, and Irene<br/>
     <br/>
    🌬️CHORUS🌬️<br/>
    "everybody now"<br/>
    🌬️CHORUS🌬<br/>
    (oooh you're so cool, I'm such a fool, hey-!)<br/>
      </div>
    }
    if(song == "SILVER DROPS"){
      lyrics = 
      <div><div class='songtitle'>SILVER DROPS</div><br/>
      🌫️VERSE I🌫️<br/>
      Em7.         	EbMaj7.    	Dm7<br/>
      Silky silver rain drops on the ground<br/>
      DbMaj7.      	Cm7.       	Cbm7<br/>
      Sing your name all day, you're not around<br/>
      Silky silver rain slides down the street                  <br/>
      Always ask about my keys as I'm about to leave<br/>
      🌧️CHORUS🌧️<br/>
      EbMaj Ab/Bb<br/>
      C#11 Ab11 Bb11<br/>
      Do you hope i left them at your place<br/>
      What would you do if that became the case?<br/>
      Midnight mania coaxes us to play<br/>
      in shimmering truth's illusion lies the chase<br/>
       <br/>
      VERSE II🌫️<br/>
      Softly drifting winks of fragrant snow<br/>
      Want to leave this aaaaaahhh can't let go<br/>
      Slyly drifting winks betwixt the scent<br/>
      Our smooth bare skin warm in your bed<br/>
      <br/>
      🌧️CHORUS🌧️<br/>
      Oooohh but we could wait, it's not too long<br/>
      Ambrosia-moments néctars-never late<br/>
      Mmmm honey-'slow sensuous taste<br/>
      In shimmering truth's illusion lies the chase<br/>
       <br/>
      VERSE III🌫️<br/>
      Silky silver rain suspended tease<br/>
      Ask me once once more before i leave<br/>
      I can't promise you I'll stay<br/>
      But forever drips in silver drops of rain<br/>
      PSYCHOUTRO🌨️<br/>
      I can't let go (🔁)<br/>
      Silky silver rain<br/>
      Sing all day<br/>
      Mmmm honey-'slow<br/>
      illusion winks<br/>
      Shimmers truth<br/>
      Come play<br/>
      </div>
    }
    if(song == "TELEPHONE"){
      lyrics = 
      <div>
        <div class='songtitle'>TELEPHONE</div> <br/>
    💧INTRO💧<br/>
    E∆7               	D∆7 (X2)<br/>
    Loose visions lure a blind mind,<br/>
     Missed you on the Télépho-call drop tone-<br/>
     <br/>
    💦VERSE I💦<br/>
    A∆7                D∆7<br/>
    Flashes of feelings form in my mouth<br/>
    Though I am reelin', words won't come out<br/>
    Your hands on my body flood the tip of my tongue<br/>
    Won't you come over, wanna succumb<br/>
     <br/>
    I've never been sober any time we've kissed<br/>
    Cherish the moments together I've missed<br/>
    Need to create space from dreams in the sand<br/>
    Or you'll see on my face, your whim is my command<br/>
     <br/>
    📞CHORUS📞<br/>
    E∆7                        D∆7<br/>
    Hey there, missed you on the Téléphone last night<br/>
    Know you want it, you want it, oooooooh<br/>
    Hey there, missed you on the Téléphone last night<br/>
     Know you want it, you want it, yeaaeeaaay<br/>
     <br/>
    💔BREAK💔<br/>
    Fm6  Asus D∆7/F# (X3)<br/>
    D∆7 for 8beats<br/>
     <br/>
    💦VERSE II💦<br/>
    Baby I'm afraid of lookin like a fool or<br/>
    Giving you a heart attack<br/>
    When you come by i play it cool cause I know<br/>
    Once I've said it i can't take it back<br/>
     <br/>
    I've never been sober any time we've kissed<br/>
    Cherish the moments together I've missed<br/>
    I need to create space from dreams in the sand<br/>
    Or you'll see on my face, your whim is my command<br/>
    <br/>
     📞CHORUS📞<br/>
    Hey there, missed you on the Téléphone last night<br/>
     Know you want it, you want it, oooooooh<br/>
     Hey there, missed you on the Téléphone last night<br/>
     Know you want it, you want it, yeaaeeaaay<br/>
     <br/>
    💔BREAK💔<br/>
     <br/>
    ⛲BRIDGE⛲<br/>
    Bm                D∆7<br/>
    Loose visions lure a blind mind,<br/>
    Maybe we could fall sometime<br/>
    Loose visions lure a blind mind,<br/>
    Not next week and not tonight<br/>
     <br/>
    📞CHORUS📞(X2)<br/>
    Hey there, missed you on the Téléphone last night<br/>
     Know you want it, you want it, oooooooh<br/>
     Hey there, missed you on the Téléphone last night<br/>
     Know you want it, you want it, yeaaeeaaay<br/>
     <br/>
    💧OUTRO💧<br/>
     Loose visions lure a blind mind,<br/>
     Missed you on the Télépho-call drop tone-<br/>
      </div>
    }
    return lyrics;
  }
  return (
    <div>
    <NavBar/><br/><br/>
    <BlueWordComponent word='hello'/>
    <div class="lyrics-container">
      <div class="item-img"></div>
      <div class="item-buttons"><ul>{songbuttons}</ul></div>
      <div class="item-lyrics">{lyrics}</div>
    </div>
    </div>
  )
}

export default LyricsPage