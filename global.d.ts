import {Collection} from "discord.js";
import Command from "./src/commands/Command";

declare module NodeJS {
    interface Global {
        commands : Collection<string, Command>
    }
}

declare global {
    var commands : Collection<string, Command>
}