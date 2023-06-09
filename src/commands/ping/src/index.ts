import Command from "../../Command";
import CommandInterface from "../../../libs/interfaces/CommandInterface";
import {Interaction} from "discord.js";

export default class PingCommand extends Command implements CommandInterface {
    onCommandSender(interaction: Interaction): void {

    }

}