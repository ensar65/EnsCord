import {Collection, SlashCommandBuilder} from "discord.js";
import CommandInterface from "./src/libs/interfaces/CommandInterface";

declare module NodeJS {
    interface Global {
        commands: Collection<string, CommandInterface>
        slash_commands: Collection<any, SlashCommandBuilder>
    }
}

declare global {
    var commands: Collection<string, CommandInterface>
    var slash_commands: Collection<any, SlashCommandBuilder>
}