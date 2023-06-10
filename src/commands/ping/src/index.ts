import Command from "../../Command";
import CommandInterface from "../../../libs/interfaces/CommandInterface";
import {BaseInteraction, CommandInteraction, Interaction} from "discord.js";

export default class PingCommand extends Command implements CommandInterface {
    onCommandSender(interaction: CommandInteraction): void {
        interaction.reply("My ping : " + interaction.client.ws.ping)
    }

}