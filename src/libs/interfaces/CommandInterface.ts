import {CommandInteraction} from "discord.js";

export default interface CommandInterface {
    onCommandSender(interaction: CommandInteraction): void
}