# EnsCord

EnsCord is a discord bot base coded with typescript.

# Guide

***Setup:***
Firstly, you need use ```npm install``` for install needed modules.
and just ```npm run b-run```

***Command Create:***
Create a command folder with the desired name inside the commands' folder. Inside the created folder, create a
configuration file named ```commands/yourcommand/config.ts```

```
{
        "command" : new SlashCommandBuilder().setName("ping").setDescription("Shows the bots ping."),
        "commandType" : "client",
        "main" : "index",
        
    }
```

After configuring, create the main file you specified in the configuration inside the src directory. For example, create
commands/yourcommand/src/index.ts.

You can see example main file in ping command.

***Create Event:***
Go inside the events folder and create an event folder with the desired name. Inside the created event folder, create a
configuration file named events/youreventname/config.ts.

``` 
   {
        "eventType": "ready",
        "main": "index"
    }
 ```

After configuring, create the main file you specified in the configuration inside the src directory For example, create
events/yourevent/src/index.ts.

You can see example main file in ready event.

# Data

You need add your bot token in .env file.

# TODO

- [x] Auto Event handler.
- [x] Auto Command Handler
- [x] Auto put and refresh slash commands.
- [ ] Commands reload without exiting process.
- [ ] Automatic remove deleted commands.
- [ ] Commands filtered by name and type (now just name)
- [ ] Message command support.

