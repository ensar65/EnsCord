import CommandInterface from "./libs/interfaces/CommandInterface";

require("dotenv").config();

import CommandHandler from "./libs/handlers/CommandHandler";
import EventHandler from "./libs/handlers/EventHandler";
import {Client, Collection, SlashCommandBuilder} from "discord.js";

import AppLogin from "./libs/app/login"
import SlashCommandPusher from "./libs/app/slashCommandPusher";



global.commands = new Collection<string, CommandInterface>();
global.slash_commands = new Collection<any, Array<SlashCommandBuilder>>()

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

        const slashCommandHandler = new SlashCommandPusher();
        await slashCommandHandler.run(<string>client.user?.id);

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



