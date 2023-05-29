import {Interaction} from "discord.js";

export default interface CommandInterface {
    onCommandSender(interaction: Interaction): void
}