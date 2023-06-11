import Command from "../../libs/interfaces/configs/Command"
import {SlashCommandBuilder} from "discord.js";

export default function () {
    return <Command>{
        "command": new SlashCommandBuilder().setName("eval").setDescription("Evaluate specific code.").addStringOption((option) => {
            return option.setName("code").setDescription("Specific code for evaluate.").setRequired(true)
        }),
        "commandType": "client",
        "main": "index",
    }
}