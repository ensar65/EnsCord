import {SlashCommandBuilder} from "discord.js";

export default interface Command {
    "command": SlashCommandBuilder,
    "commandType": string,
    "guildId": string,
    "main": string,

}