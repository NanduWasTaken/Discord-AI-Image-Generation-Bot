# DiscordBot-Slash-Commands
A simple discord bot equiped with slash command & event handlers to start your journey.  
Available commands:-

/avatar:- shows users avatar.  
/option:- echo backs a message.  
/ping:- replies with pong.  
/prune:- deletes a specfic amount of messages.  
/server:- shows server info.  
/user:- shows user info.  


# Forking the github respository
Type this into the terminal
`git clone https://github.com/NanduWasTaken/DiscordBot-Slash-Commands.git`

# Setting Up Env File.
```js

  TOKEN = "bot_token"
  CLIENT_ID = "bot_id"
  OPEN_AI_API_KEY = "open_ai_api_key"
  STATUS = "dnd"
  ACTIVITY_NAME = "SCRIBLLING THINGS"

```
Replace `bot_token` with your bot token you can obtain your bot token from discord developer portal.

Replace `bot_id` with your bot's client id.  

Replace `open_ai_api_key` with your open ai api key. 
You can generate the key after making a account on 
[Open AI Website](https://openai.com).
 You can follow [this](https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/) for help.
_____________________________________________

### Optional Configuration.

Status name can be changed by changing the `SCRIBLLING THINGS` with whatever you want it to be.  
Status `dnd` can be changed into 'dnd', 'idle', 'online' and 'invinsible'.  
If you want to change your activity type of your bot go into ready.js in events folder and change it.  

# Deleting Your Commands.
To delete one of your slash commands you have delete the command file which is located in the commands directory then restart the bot.  
Note: Your Slash Command Registers/Reloads Automatically When Your Bot Starts.

# Starting Your Bot
To start your bot.
Type `node index.js` into your terminal.
