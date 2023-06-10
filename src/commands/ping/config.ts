import Command from  "../../libs/interfaces/configs/Command"
import {SlashCommandBuilder} from "discord.js";
export default function () {
    return <Command> {
        "command" : new SlashCommandBuilder().setName("ping").setDescription("Shows the bots ping."),
        "commandType" : "guild",
        "main" : "index",
        "guildId" : "1114577497728757810"
    }
}