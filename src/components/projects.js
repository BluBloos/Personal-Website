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
    name: "Plasma Compiler",
    socials: {
      github: "https://github.com/BluBloos/plasmacompiler"
    },
    thumb: "plasmacompiler_thumb.PNG",
    desc: "Friendly C compiler written entirely in Python. It does not comply with any standards for the C language, but man can this thing compile! It works by converting the C source to x86 assembly, then using third party tools to assemble and link the program. The code is fully custom, including all the data structures and algorithms. Some basic features include operator precedence, recursion, ternary operator support, etc."
  },
  {
    name: "Falcon OS",
    socials: {
      github: "https://github.com/BluBloos/Falcon-OS"
    },
    thumb: "falcon_os_thumb.PNG",
    desc: "Falcon OS is my attempt at writing an operating system. Written in x86 assembly and C/C++, my operating system packs a whopping two whole features!!! Behind the scenes, the text is printed to the screen via VGA text mode, and there is interrupt driven keyboard support via the PS/2 controller IO ports"
  },
  {
    name: "Collage Creator",
    socials: {
      github: "https://github.com/BluBloos/collage-creator"
    },
    thumb: "collage_creator_thumb.PNG",
    desc: "Collage Creator is a simple desktop app to create collages with your favourite images! You can drag and drop, scale and crop, and apply filters to the images. The app runs as a python script loaded by a custom platform layer written in C. The platform layer runs the app via the Python/C API, and the python scripts makes use of the Python Imaging Library."
  },
   {
    name: "PongGL",
    socials: {
      github: "https://github.com/BluBloos/pong-gl"
    },
    thumb: "pong_gl_thumb.PNG",
    desc: "Attempted game engine, but ultimately an overengineered version of pong. The project was written in C/C++, with minimal to no library usage, and it uses the OpenGL graphics API."
  },


];

  for (var i = 0; i < project_list.length; i++) {
    var current_project = project_list[i];
    items.push(
      <div style={{
        padding: "80px 0px 0px 0px"
      }}>
        <div data-aos="fade-up"
             data-aos-duration="1000">
          <PersonalProjectHeader name={current_project.name} socials={current_project.socials}  />
          <PersonalProject imgOnRight={ (i % 2 == 0) } desc={current_project.desc} thumb={current_project.thumb} />
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
