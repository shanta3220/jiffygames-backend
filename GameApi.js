export async function getGameList() {
  await null;
  const games = [
    {
      id: 1,
      game_name: "Riko: The Adventurer",
      project_name: "RikoTheAdventurer",
      description:
        "Riko: The Adventurer is a 2D top-down RPG shooting game developed in Unity3D, where the player guides the main character in their quest to become a 7th-grade adventurer by gaining experience. I presented this game as my final year project for my Bachelor of Science degree. All aspects of the game, except for the art and music, were developed by me.",
      instruction:
        "Move with 'WASD' keys and right mouseclick to shoot, if there is more than 1 weapon use mousescroll to switch weapons.",
      category: "Action, Adventure, Fantasy",
      like: 12,
      leaderboard_id: 1,
    },
    {
      id: 2,
      game_name: "LSD: Last Survival Days",
      project_name: "LSDLastSurvivalDays",
      description:
        "LSD: Last Survival Days was a collaborative top-down survival shooting game project created with the music band Liquid State Drive. In each level, the player must survive until the end of a song from the band's debut album, Tomar Itihash, which serves as the background music. This is the first game in Bangladesh to be based on a music band. As the Game Developer, I collaborated with a Game Artist to bring this project to life.",
      instruction:
        "Move with 'WASD' keys and right mouse click to shoot, use mouse scroll to switch characters",
      category: "Action",
      like: 7,
      leaderboard_id: 2,
    },
    {
      id: 3,
      game_name: "Lana's Adventure",
      project_name: "LanasAdventure",
      description:
        "Lana's Adventure is a platformer shooting game, where the player shoots enemies, and fight the boss to rescue his friend.",
      instruction:
        "Move left-right with 'A & D' keys,  jump with 'W' key and use 'space' for shooting, collect fruits to collect points. Make sure you collect keys to unlock hidden platform / shooting skills",
      category: "Action, Adventure, Fantasy",
      like: 12,
      leaderboard_id: 3,
    },
    {
      id: 4,
      game_name: "Endless Runner 2.5D",
      project_name: "EndlessRunner2.5D",
      description:
        "A simple endless runner games, survive by avoiding obstacle and attack from the dragon and collect cookies",
      instruction:
        "Use space to jump, watch over the fuel, if its runs out you can't jump.",
      category: "Fantasy",
      like: 2,
      leaderboard_id: 4,
    },
    {
      id: 5,
      game_name: "LSD: Last Survival Days2",
      project_name: "LSDLastSurvivalDays",
      leaderboard_id: 5,
    },
    {
      id: 6,
      game_name: "Endless Runner 2.5D2",
      project_name: "EndlessRunner2.5D",
      leaderboard_id: 6,
    },
  ];
  return games;
}

export async function getComments(game_id) {
  let comments = [
    {
      id: 1,
      game_id: 1,
      user_id: 1,
      comment:
        "This game is absolutely amazing! I love the graphics and gameplay.",
      timestamp: 1691558262000,
    },
    {
      id: 2,
      game_id: 1,
      user_id: 2,
      comment: "Challenging levels but super rewarding when you finish them.",
      timestamp: 1691559365000,
    },
    {
      id: 3,
      game_id: 2,
      user_id: 3,
      comment: "A bit buggy at times, but overall a fun experience.",
      timestamp: 1691560468000,
    },
    {
      id: 4,
      game_id: 2,
      user_id: 4,
      comment: "The storyline really pulls you in. Can't wait for the sequel!",
      timestamp: 1691561571000,
    },
    {
      id: 5,
      game_id: 3,
      user_id: 5,
      comment: "This game reminds me of my childhood! Nostalgic vibes.",
      timestamp: 1691562674000,
    },
    {
      id: 6,
      game_id: 3,
      user_id: 6,
      comment: "Too many ads interrupting the flow of the game.",
      timestamp: 1691563777000,
    },
    {
      id: 7,
      game_id: 4,
      user_id: 7,
      comment:
        "Multiplayer mode is so much fun! Highly recommend playing with friends.",
      timestamp: 1691564880000,
    },
    {
      id: 8,
      game_id: 4,
      user_id: 8,
      comment: "Not a fan of the new update. It feels less intuitive now.",
      timestamp: 1691565983000,
    },
    {
      id: 9,
      game_id: 5,
      user_id: 9,
      comment: "The boss battles are epic! Loving every minute of it.",
      timestamp: 1691567086000,
    },
    {
      id: 10,
      game_id: 5,
      user_id: 10,
      comment: "Pretty average game, but it's a good way to kill time.",
      timestamp: 1691568189000,
    },
  ];

  const users = await getUsers();

  if (game_id) {
    comments = comments.filter((comment) => {
      if (comment.game_id == game_id) {
        const user = users.filter((user) => user.id == comment.user_id)[0];
        comment.user_name = user.user_name;
        comment.avatar = user.avatar;
        return comment;
      }
    });
  }
  return comments;
}

export async function getUsers() {
  const users = [
    {
      id: 1,
      user_name: "TerryWong",
      email: "terry.wong@example.com",
      about_me: "Tech enthusiast exploring the latest trends in AI.",
      avatar: "/images/avatars/terry.jpg",
      password: "12345678",
    },
    {
      id: 2,
      user_name: "NoahDuncan",
      email: "noah.duncan@example.com",
      about_me: "Lover of nature documentaries and travel videos.",
      avatar: "/images/avatars/noah.jpg",
      password: "12345678",
    },
    {
      id: 3,
      user_name: "JaniceRodriguez",
      email: "janice.rodriguez@example.com",
      about_me: "Passionate about mindful living and technology.",
      avatar: "/images/avatars/janice.jpg",
      password: "12345678",
    },
    {
      id: 4,
      user_name: "Shanta",
      email: "shanta@example.com",
      about_me: "Excited to watch and comment on amazing content!",
      avatar: "/images/avatars/shanta.jpg",
      password: "12345678",
    },
    {
      id: 5,
      user_name: "MariaAziz",
      email: "maria.aziz@example.com",
      about_me: "Creative writer and lover of storytelling.",
      avatar: "/images/avatars/maria.jpg",
      password: "12345678",
    },
    {
      id: 6,
      user_name: "TaylorNkoshi",
      email: "taylor.nkoshi@example.com",
      about_me: "Foodie exploring new cuisines and recipes.",
      avatar: "/images/avatars/taylor.jpg",
      password: "12345678",
    },
    {
      id: 7,
      user_name: "AdnanAlFarsi",
      email: "adnan.alfarsi@example.com",
      about_me: "Tech blogger sharing insights on gadgets and innovations.",
      avatar: "/images/avatars/adnan.jpg",
      password: "12345678",
    },
    {
      id: 8,
      user_name: "GiovanaSilva",
      email: "giovana.silva@example.com",
      about_me: "Fitness enthusiast sharing tips and routines.",
      avatar: "/images/avatars/giovana.jpg",
      password: "12345678",
    },
    {
      id: 9,
      user_name: "DanielLesage",
      email: "daniel.lesage@example.com",
      about_me: "History buff diving into untold stories.",
      avatar: "/images/avatars/daniel.jpg",
      password: "12345678",
    },
    {
      id: 10,
      user_name: "SharonSantos",
      email: "sharon.santos@example.com",
      about_me: "Art lover curating beautiful works from around the world.",
      avatar: "/images/avatars/sharon.jpg",
      password: "12345678",
    },
    {
      id: 11,
      user_name: "CleoPolster",
      email: "cleo.polster@example.com",
      about_me: "Nature photographer capturing the essence of the wild.",
      avatar: "/images/avatars/cleo.jpg",
      password: "12345678",
    },
    {
      id: 12,
      user_name: "KatyaHorvat",
      email: "katya.horvat@example.com",
      about_me: "Cooking vlogger sharing traditional recipes.",
      avatar: "/images/avatars/katya.jpg",
      password: "12345678",
    },
    {
      id: 13,
      user_name: "HanneKarlsen",
      email: "hanne.karlsen@example.com",
      about_me: "Design enthusiast exploring minimalist lifestyles.",
      avatar: "/images/avatars/hanne.jpg",
      password: "12345678",
    },
    {
      id: 14,
      user_name: "AsayoOohira",
      email: "asayo.oohira@example.com",
      about_me: "Music lover discovering global beats.",
      avatar: "/images/avatars/asayo.jpg",
      password: "12345678",
    },
    {
      id: 15,
      user_name: "NguyenBon",
      email: "nguyen.bon@example.com",
      about_me: "Documentary filmmaker capturing untold stories.",
      avatar: "/images/avatars/nguyen.jpg",
      password: "12345678",
    },
    {
      id: 16,
      user_name: "AraaGhelamerda",
      email: "araa.ghelamerda@example.com",
      about_me: "Tech geek exploring the AI revolution.",
      avatar: "/images/avatars/araa.jpg",
      password: "12345678",
    },
    {
      id: 17,
      user_name: "AmbrusGerzson",
      email: "ambrus.gerzson@example.com",
      about_me: "Engineer passionate about robotics and innovation.",
      avatar: "/images/avatars/ambrus.jpg",
      password: "12345678",
    },
    {
      id: 18,
      user_name: "HannahLaursen",
      email: "hannah.laursen@example.com",
      about_me: "Gardener sharing tips for sustainable living.",
      avatar: "/images/avatars/hannah.jpg",
      password: "12345678",
    },
  ];
  return users;
}

export async function leaderboardsData() {
  const leaderboard1 = [
    { id: 1, user_id: 1, game_id: 1, score: 120 },
    { id: 1, user_id: 2, game_id: 1, score: 140 },
    { id: 1, user_id: 3, game_id: 1, score: 160 },
    { id: 1, user_id: 4, game_id: 1, score: 170 },
    { id: 1, user_id: 5, game_id: 1, score: 110 },
    { id: 1, user_id: 6, game_id: 1, score: 90 },
    { id: 1, user_id: 7, game_id: 1, score: 200 },
    { id: 1, user_id: 8, game_id: 1, score: 210 },
    { id: 1, user_id: 9, game_id: 1, score: 150 },
    { id: 1, user_id: 10, game_id: 1, score: 230 },
    { id: 1, user_id: 11, game_id: 1, score: 270 },
    { id: 1, user_id: 12, game_id: 1, score: 130 },
    { id: 1, user_id: 13, game_id: 1, score: 145 },
    { id: 1, user_id: 14, game_id: 1, score: 155 },
    { id: 1, user_id: 15, game_id: 1, score: 180 },
    { id: 1, user_id: 16, game_id: 1, score: 100 },
    { id: 1, user_id: 17, game_id: 1, score: 85 },
    { id: 1, user_id: 18, game_id: 1, score: 195 },
  ];

  const leaderboard2 = [
    { id: 2, user_id: 1, game_id: 2, score: 120 },
    { id: 2, user_id: 2, game_id: 2, score: 140 },
    { id: 2, user_id: 3, game_id: 2, score: 160 },
    { id: 2, user_id: 4, game_id: 2, score: 170 },
    { id: 2, user_id: 5, game_id: 2, score: 110 },
    { id: 2, user_id: 6, game_id: 2, score: 90 },
    { id: 2, user_id: 7, game_id: 2, score: 200 },
    { id: 2, user_id: 8, game_id: 2, score: 210 },
    { id: 2, user_id: 9, game_id: 2, score: 150 },
    { id: 2, user_id: 10, game_id: 2, score: 230 },
    { id: 2, user_id: 11, game_id: 2, score: 270 },
    { id: 2, user_id: 12, game_id: 2, score: 130 },
    { id: 2, user_id: 13, game_id: 2, score: 145 },
    { id: 2, user_id: 14, game_id: 2, score: 155 },
    { id: 2, user_id: 15, game_id: 2, score: 180 },
    { id: 2, user_id: 16, game_id: 2, score: 100 },
    { id: 2, user_id: 17, game_id: 2, score: 85 },
    { id: 2, user_id: 18, game_id: 2, score: 195 },
  ];

  const leaderboard3 = [
    { id: 3, user_id: 1, game_id: 3, score: 140 },
    { id: 3, user_id: 2, game_id: 3, score: 125 },
    { id: 3, user_id: 3, game_id: 3, score: 110 },
    { id: 3, user_id: 4, game_id: 3, score: 170 },
    { id: 3, user_id: 5, game_id: 3, score: 135 },
    { id: 3, user_id: 6, game_id: 3, score: 180 },
    { id: 3, user_id: 7, game_id: 3, score: 190 },
    { id: 3, user_id: 8, game_id: 3, score: 145 },
    { id: 3, user_id: 9, game_id: 3, score: 165 },
    { id: 3, user_id: 10, game_id: 3, score: 220 },
    { id: 3, user_id: 11, game_id: 3, score: 275 },
    { id: 3, user_id: 12, game_id: 3, score: 130 },
    { id: 3, user_id: 13, game_id: 3, score: 150 },
    { id: 3, user_id: 14, game_id: 3, score: 160 },
    { id: 3, user_id: 15, game_id: 3, score: 180 },
    { id: 3, user_id: 16, game_id: 3, score: 110 },
    { id: 3, user_id: 17, game_id: 3, score: 125 },
    { id: 3, user_id: 18, game_id: 3, score: 140 },
  ];

  const leaderboard4 = [
    { id: 4, user_id: 1, game_id: 4, score: 180 },
    { id: 4, user_id: 2, game_id: 4, score: 170 },
    { id: 4, user_id: 3, game_id: 4, score: 160 },
    { id: 4, user_id: 4, game_id: 4, score: 150 },
    { id: 4, user_id: 5, game_id: 4, score: 140 },
    { id: 4, user_id: 6, game_id: 4, score: 130 },
    { id: 4, user_id: 7, game_id: 4, score: 120 },
    { id: 4, user_id: 8, game_id: 4, score: 200 },
    { id: 4, user_id: 9, game_id: 4, score: 210 },
    { id: 4, user_id: 10, game_id: 4, score: 190 },
    { id: 4, user_id: 11, game_id: 4, score: 250 },
    { id: 4, user_id: 12, game_id: 4, score: 130 },
    { id: 4, user_id: 13, game_id: 4, score: 140 },
    { id: 4, user_id: 14, game_id: 4, score: 150 },
    { id: 4, user_id: 15, game_id: 4, score: 160 },
    { id: 4, user_id: 16, game_id: 4, score: 170 },
    { id: 4, user_id: 17, game_id: 4, score: 180 },
    { id: 4, user_id: 18, game_id: 4, score: 190 },
  ];

  const leaderboard5 = [
    { id: 5, user_id: 1, game_id: 5, score: 100 },
    { id: 5, user_id: 2, game_id: 5, score: 110 },
    { id: 5, user_id: 3, game_id: 5, score: 120 },
    { id: 5, user_id: 4, game_id: 5, score: 130 },
    { id: 5, user_id: 5, game_id: 5, score: 140 },
    { id: 5, user_id: 6, game_id: 5, score: 150 },
    { id: 5, user_id: 7, game_id: 5, score: 160 },
    { id: 5, user_id: 8, game_id: 5, score: 170 },
    { id: 5, user_id: 9, game_id: 5, score: 180 },
    { id: 5, user_id: 10, game_id: 5, score: 190 },
    { id: 5, user_id: 11, game_id: 5, score: 200 },
    { id: 5, user_id: 12, game_id: 5, score: 210 },
    { id: 5, user_id: 13, game_id: 5, score: 220 },
    { id: 5, user_id: 14, game_id: 5, score: 230 },
    { id: 5, user_id: 15, game_id: 5, score: 240 },
    { id: 5, user_id: 16, game_id: 5, score: 250 },
    { id: 5, user_id: 17, game_id: 5, score: 260 },
    { id: 5, user_id: 18, game_id: 5, score: 270 },
  ];

  const leaderboard6 = [
    { id: 6, user_id: 1, game_id: 6, score: 130 },
    { id: 6, user_id: 2, game_id: 6, score: 140 },
    { id: 6, user_id: 3, game_id: 6, score: 120 },
    { id: 6, user_id: 4, game_id: 6, score: 110 },
    { id: 6, user_id: 5, game_id: 6, score: 150 },
    { id: 6, user_id: 6, game_id: 6, score: 160 },
    { id: 6, user_id: 7, game_id: 6, score: 170 },
    { id: 6, user_id: 8, game_id: 6, score: 180 },
    { id: 6, user_id: 9, game_id: 6, score: 190 },
    { id: 6, user_id: 10, game_id: 6, score: 200 },
    { id: 6, user_id: 11, game_id: 6, score: 210 },
    { id: 6, user_id: 12, game_id: 6, score: 220 },
    { id: 6, user_id: 13, game_id: 6, score: 230 },
    { id: 6, user_id: 14, game_id: 6, score: 240 },
    { id: 6, user_id: 15, game_id: 6, score: 250 },
    { id: 6, user_id: 16, game_id: 6, score: 260 },
    { id: 6, user_id: 17, game_id: 6, score: 270 },
    { id: 6, user_id: 18, game_id: 6, score: 280 },
  ];

  const leaderboardData = [
    ...leaderboard1,
    ...leaderboard2,
    ...leaderboard3,
    ...leaderboard4,
    ...leaderboard5,
    ...leaderboard6,
  ];

  return leaderboardData;
}

export async function getLeaderboards() {
  const leaderboard = await getLeaderboard(1);
  console.log(leaderboard);
  let leaderboardData = await leaderboardsData();

  const leaderboards = Object.values(
    leaderboardData.reduce((leaderboards, { id, game_id }) => {
      leaderboards[`${id}-${game_id}`] = { id, game_id };
      return leaderboards;
    }, [])
  );
  return leaderboards;
}

export async function getLeaderboard(leaderboardId) {
  let leaderboardData = await leaderboardsData();
  const users = await getUsers();

  let leaderboard = Object.values(
    leaderboardData.filter((leaderboard) => leaderboard.id == leaderboardId)
  );

  const gameInfo = await getGameInfo(leaderboard[0].game_id);

  leaderboard = leaderboard.reduce(
    (leaderboards, { id, game_id, user_id, score }) => {
      leaderboards[`${id}-${game_id}-${user_id}`] = {
        userInfo: users.filter((user) => user.id == user_id)[0],
        score,
      };
      return leaderboards;
    },
    {}
  );

  return { leaderboardId, gameInfo, userEntries: Object.values(leaderboard) };
}

export async function getUser(userId) {
  const users = await getUsers();
  return users.filter((user) => user.id == userId)[0];
}

export async function getGameInfo(gameId) {
  const games = await getGameList();
  const game = games.filter((game) => game.id == gameId)[0];
  game.comments = await getComments(gameId);
  return game;
}

export async function updateUser(userObject) {}
