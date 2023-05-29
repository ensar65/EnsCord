require("dotenv").config();

import EventHandler from "./libs/handlers/EventHandler";
import {Client} from "discord.js";

import AppLogin from "./libs/app/login"

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



