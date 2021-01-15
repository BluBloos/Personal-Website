import React from "react"

import Socials from "./socials.js"
import PersonalProject from "./personalproject"
import PersonalProjectHeader from "./personalprojectheader"

import {TEXT_COLOR_SECONDARY, ACCENT_COLOR} from "../styles/colors.js"

import styles from "./personalproject.module.css"

function PokemonDemoPlayer(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }}>

      {/* Hidden by default, PokemonDemo player, appears in overlay via fancybox */}
      <div style={{
        display: "none",
        maxWidth: 900
      }} id="pokemondemo">
        <iframe scrolling="no" src="pokemondemo.html" width="800" height="450">
        </iframe>
        <pre class="CodeFont">{
          `The controls are:
- WASD to move
- Z to get through menus and interact with things
- F to go full screen
- L to start recording gameplay, L again to stop recording and begin play back
- Arrow keys to go to different moves (while in battle)

Attach a gamepad to play as player 2:
- Functionality is not guarenteed as I do not have a wide array of gamepads to test
- Just try pressing everything!

Thank you for playing!`
        }
        </pre>
      </div>

      {/* Play button and thumbnail for Pokemon Demo */}
      <div class={styles.container}>
        <img src="pokemondemo_thumb.PNG" class={styles.image} style={{
          width: "100%"
        }} />
        <div class={styles.middle}>
          <div class={styles.text}>
            <a data-fancybox data-src='#pokemondemo' href="javascript:;">
              <span style={{
                fontSize: "3rem"
              }}>
                <i class="fas fa-play"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects(props) {

  var items = [];

  // NOTE: I could not be bothered w/ data layer of Gatsby
  // for a small project such as this website!
  const project_list = [{
    name: "C Compiler",
    socials: {
      github: "Hello World"
    },
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }, {
    name: "Game Engine",
    socials: {
      github: "Hello, World"
    },
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }];

  for (var i = 0; i < project_list.length; i++) {
    var current_project = project_list[i];
    items.push(
      <div style={{
        padding: "80px 0px 0px 0px"
      }}>
        <div data-aos="fade-up"
             data-aos-duration="1000">
          <PersonalProjectHeader name={current_project.name} socials={current_project.socials} />
          <PersonalProject imgOnRight={ (i % 2 == 0) } desc={current_project.desc} />
        </div>
      </div>
    )
  }

  return (
    <div style={{
      padding: "80px 0px 20px 20px"
    }}>

        <div data-aos="fade-up"
             data-aos-duration="1000">
          <PersonalProjectHeader
            name="PokemonDemo"
            socials={{github: "https://github.com/BluBloos/pokemondemo"}} />

          <div style={{
            margin: 40,
            color: TEXT_COLOR_SECONDARY
          }}>
            <p>
              PokemonDemo is a video game demo written completly in C, with little to no library usasge.
              This has many implications, for example, all file types (such as .bmp and .wav) are parsed manually.
              Each pixel is individually blit to the screen (there was no use of OpenGL), and each sample of sound is given thought.
              Everything from memory management, a custom tile map system, to custom asset support is packed into this bundle of joy.
              Key features include: hot reloading, live looping, a custom tile map editor, and some easter eggs!
            </p>
            <p>
              TLDR; I've gone ahead and ported the game for the web, have a play!
            </p>
          </div>

          <div style={{
            padding: "40px 40px 0px 40px"
          }}>
            <PokemonDemoPlayer />
          </div>
        </div>

        <div>
          {items}
        </div>


    </div>
  )
}
