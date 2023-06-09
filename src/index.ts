import Command from "./commands/Command";

require("dotenv").config();

import CommandHandler from "./libs/handlers/CommandHandler";
import EventHandler from "./libs/handlers/EventHandler";
import {Client, Collection} from "discord.js";

import AppLogin from "./libs/app/login"



global.commands = new Collection<string, Command>();

async function main() {
    try {
        const token = process.env.TOKEN;

        if (!token) {
            throw new Error("Token value not found. Check the .env file");
        }

        const login = new AppLogin(token);
        const client = await login.attempt();

        const eventHandler = new EventHandler("events");
        await eventHandler.run(client);

        const commandHandler = new CommandHandler("commands");
        await commandHandler.run(client);

        return client;
    } catch (error) {
        console.error("Error: ", error);
        throw error
    }
}

main().then((client) => {
    console.log("MRCord successfully launched.")
}).catch((error) => {
    console.log("An error occurred while starting the MRCord.")
});



