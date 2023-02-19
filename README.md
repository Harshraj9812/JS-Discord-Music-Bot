# Discord Music Bot 

## Features & Commands

* 🎶 Play music from YouTube via url

`/play YOUTUBE_URL`

* 🎶 Play music from using song name

`/play SONG_NAME`

* 📃 Pause music

`/pause`

* 🎓 Resume music

`/resume`

* 💿 Skip song

`/skip`

* 🔇 Stop music

`/stop`

* 🔀 Shuffle Queue

`/shuffle`

* ↕ Move song position

`/move TRACK_POSITION TARGET_POSITION`

* ↔️ Swap song positions

`/swap POSITION_1 POSITION_2`

* ⏏️ Remove song

`/remove POSITION`

* Now Playing (/nowplaying)
* Get information about a user (/userinfo USER)
* Ban a player (/ban USER)
* Delete the latest chat messages (/purge NUM_OF_MESSAGES)

***

## Deploy on Docker

### Docker Hub - [harshraj9812/discord-bot](https://hub.docker.com/r/harshraj9812/discord-bot)

## Recommended Docker Compose file
Add You Bot Token as Environment Variable - `HR_BOT=`

`docker-compose.yml`
```yml
version: '3'
services:
  Discord-BOT:
    restart: unless-stopped
    container_name: Hr-Music-BOT
    image: 'harshraj9812/discord-bot:latest'
    environment:
      - HR_BOT=
```

***
## 👨🏻‍💻 Creator - 
**Github - [Harsh Raj 🏆](https://github.com/Harshraj9812)**

***
### 🌐 Credits - 
**Github - [Tanner Gabriel](https://github.com/TannerGabriel/)**

***
