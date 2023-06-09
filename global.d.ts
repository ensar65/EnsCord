import {Collection} from "discord.js";
import CommandInterface from "./src/libs/interfaces/CommandInterface";

declare module NodeJS {
    interface Global {
        commands : Collection<string, CommandInterface>
    }
}

declare global {
    var commands : Collection<string, CommandInterface>
}