# Bot Data
This is the program that handles my discord bot's data.

The bot tracks a few metrics for each user: 
- Message Count
- Bot Interactions
- Gender
- Pronouns
- Number of twitch emotes

The program includes two parts: 
- Frontend written in React.js
- Backend written in Python Django

# Frontend
link: https://my-bot-frontend.herokuapp.com/ 

(note: site may take a few seconds to load due to web service shutting down from inactivity)

The frontend has an interactive UI to allow easy access to user data collected by my discord bot in a user friendly format.

Upon loading in, the first thing you will see is the server selection page. To view a specific server's data, simply click on the corresponding server.
After you are done, clicking the back button will bring you back to the server selection page.

The site makes API requests to my backend service to get the user data.


# Backend
The backend includes a remote PostgreSQL database and a few API access points to retrieve and update data in the database.

# API documentations:

(note: APIs may take a few seconds to load due to web service shutting down from inactivity)

**Get All Server:**

Returns a list of server the discord bot is in.

- URL: `https://my-discord-bot-data.herokuapp.com/login/servers/`

- Method: `GET`, `POST` (require authentication)

- Sample Call:

  `axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/')`
  
- Sample Response
  ```
  Content: {
    "status": "success",
    "data": [
        {
            "server_id": "000000000000000000",
            "Name": "SERVER_NAME_HERE"
        },
    ]}
    
**Get All Users In a Server:**

Returns a list of users in the server with the given id

- URL: `https://my-discord-bot-data.herokuapp.com/login/servers/<server_id>/`

- Method: `GET`, `POST` (require authentication)

- Sample Call:

  `axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/406212826890502153/')`
  
- Sample Response
  ```
  Content: {
    "status": "success",
    "data": [
        {
            "user_id": "176414170646839296",
            "user_name": "SparkyFnay",
            "message_count": "62",
            "interactions": "50",
            "twitch_addiction": "0",
            "gender": "unidentified",
            "pronouns": "he/him"
        },
    ]}
  
**Get A User:**

Returns a user's data with the provided user_id and server_id

- URL: `https://my-discord-bot-data.herokuapp.com/login/servers/<server_id>/users/<user_id>`

- Method: `GET`, `POST` (require authentication)

- Sample Call:

  `axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/799319433868738600/users/176414170646839296')`
  
- Sample Response
  ```
  Content: {
    "status": "success",
    "data": {
        "user_id": "176414170646839296",
        "user_name": "SparkyFnay",
        "message_count": "62",
        "interactions": "50",
        "twitch_addiction": "0",
        "gender": "unidentified",
        "pronouns": "he/him"
    }}
