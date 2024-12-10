### Problem Space

Many players enjoy casual games but dislike installing multiple apps or managing device storage. JiffyGames solves this problem by offering instant, browser-based access to games with no installation required. By integrating gaming with social features like leaderboards and profiles, the app combines fun with engagement in a convenient, lightweight platform.

### Website
[Checkout the website](https://jiffygames.netlify.app)

### Frontend
[Frontend project](https://github.com/shanta3220/nusrat-jahan-shanta-capstone)

### Endpoints

**Game Management**

- `GET /games`  
  Retrieve all games.
- `GET /games/:id`  
  Retrieve details for a specific game.
- `GET /games/:id/like`  
  Like a specific game.

**Leaderboard-Scores**

- `GET /leaderboards`  
  Retrieve all leaderboards.
- `GET /leaderboards/user_id=:userId&game_id=:gameId`  
  Retrieve specific user score from a game.
- `GET /leaderboards/:id`  
  Retrieve leaderboard details for a specific game.
- `POST /leaderboards/:id`  
  Add a user's score to a leaderboard (`UserScoreObject`).

**User Management**

- `GET /users`  
  Retrieve all the users data.
- `POST /users/`  
  User signup (`UserObject`)
- `GET /users/:id`  
  Retrieve a specific user profile data.
- `PUT /users/:id`
  Update user profile data (`UserObject`).
- `GET /users/:id/games`  
  Retrieve games played by the user.

**Comments Feature**

- `GET /comments`  
  Retrieve all comments.
- `GET /comments/:id`  
  Retrieve a specific comment.
- `POST /comments`  
  Create a new comment (`CommentObject`).
- `DELETE /comments/:id`  
  Delete a specific comment.
- `GET /comments/:id/like`  
  Like a specific comment.
