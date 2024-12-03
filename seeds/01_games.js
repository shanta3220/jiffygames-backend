/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("games").del();
  await knex("games").insert([
    {
      game_name: "Riko: The Adventurer",
      project_name: "RikoTheAdventurer",
      description:
        "Riko: The Adventurer is a 2D top-down RPG shooting game developed in Unity3D, where the player guides the main character in their quest to become a 7th-grade adventurer by gaining experience. I presented this game as my final year project for my Bachelor of Science degree. All aspects of the game, except for the art and music, were developed by me.",
      instruction:
        "Move with 'WASD' keys and right mouseclick to shoot, if there is more than 1 weapon use mousescroll to switch weapons.",
      category: "Action, Adventure, Fantasy",
      build_path: "build/RikoTheAdventurer",
      image_path: "images/games/RikoTheAdventurer.png",
      video_path: "videos/games/RikoTheAdventurer.mp4",
      like_count: 7,
    },
    {
      game_name: "LSD: Last Survival Days",
      project_name: "LSDLastSurvivalDays",
      description:
        "LSD: Last Survival Days was a collaborative top-down survival shooting game project created with the music band Liquid State Drive. In each level, the player must survive until the end of a song from the band's debut album, Tomar Itihash, which serves as the background music. This is the first game in Bangladesh to be based on a music band. As the Game Developer, I collaborated with a Game Artist to bring this project to life.",
      instruction:
        "Move with 'WASD' keys and right mouse click to shoot, use mouse scroll to switch characters",
      category: "Action",
      build_path: "build/LSDLastSurvivalDays",
      image_path: "images/games/LSDLastSurvivalDays.png",
      video_path: "videos/games/LSDLastSurvivalDays.mp4",
      like_count: 7,
    },
    {
      game_name: "Lana's Adventure",
      project_name: "LanasAdventure",
      description:
        "Lana's Adventure is a platformer shooting game, where the player shoots enemies, and fight the boss to rescue his friend.",
      instruction:
        "Move left-right with 'A & D' keys, jump with 'W' key and use 'space' for shooting, collect fruits to collect points. Make sure you collect keys to unlock hidden platform / shooting skills",
      category: "Action, Adventure, Fantasy",
      build_path: "build/LanasAdventure",
      image_path: "images/games/LanasAdventure.png",
      video_path: "videos/games/LanasAdventure.mp4",
      like_count: 12,
    },
    {
      game_name: "Endless Runner 2.5D",
      project_name: "EndlessRunner2.5D",
      description:
        "A simple endless runner games, survive by avoiding obstacle and attack from the dragon and collect cookies",
      instruction:
        "Use space to jump, watch over the fuel, if its runs out you can't jump.",
      category: "Fantasy",
      build_path: "build/EndlessRunner2.5D",
      image_path: "images/games/EndlessRunner2.5D.png",
      video_path: "videos/games/EndlessRunner2.5D.mp4",
      like_count: 2,
    },
    {
      game_name: "Riko: The Adventurer",
      project_name: "RikoTheAdventurer",
      description:
        "Riko: The Adventurer is a 2D top-down RPG shooting game developed in Unity3D, where the player guides the main character in their quest to become a 7th-grade adventurer by gaining experience. I presented this game as my final year project for my Bachelor of Science degree. All aspects of the game, except for the art and music, were developed by me.",
      instruction:
        "Move with 'WASD' keys and right mouseclick to shoot, if there is more than 1 weapon use mousescroll to switch weapons.",
      category: "Action, Adventure, Fantasy",
      build_path: "build/RikoTheAdventurer",
      image_path: "images/games/RikoTheAdventurer.png",
      video_path: "videos/games/RikoTheAdventurer.mp4",
      like_count: 3,
    },
    {
      game_name: "LSD: Last Survival Days",
      project_name: "LSDLastSurvivalDays",
      description:
        "LSD: Last Survival Days was a collaborative top-down survival shooting game project created with the music band Liquid State Drive. In each level, the player must survive until the end of a song from the band's debut album, Tomar Itihash, which serves as the background music. This is the first game in Bangladesh to be based on a music band. As the Game Developer, I collaborated with a Game Artist to bring this project to life.",
      instruction:
        "Move with 'WASD' keys and right mouse click to shoot, use mouse scroll to switch characters",
      category: "Action",
      build_path: "build/LSDLastSurvivalDays",
      image_path: "images/games/LSDLastSurvivalDays.png",
      video_path: "videos/games/LSDLastSurvivalDays.mp4",
      like_count: 2,
    },
  ]);
}
