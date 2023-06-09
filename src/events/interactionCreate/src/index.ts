import Event from "../../Event";
import EventInterface from "../../../libs/interfaces/EventInterface";
import {Interaction} from "discord.js";

export default class Ready extends Event implements EventInterface {
    onRun(interaction: Interaction): void {
        if(interaction.isChatInputCommand()) {
            let commandName = interaction.commandName;
            if(commands.has(commandName)) {
                let command = commands.get(commandName);
                command?.onCommandSender(interaction)
            } else  interaction.reply("Command not found.")
        }
    }
}