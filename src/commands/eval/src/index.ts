import Command from "../../Command";
import CommandInterface from "../../../libs/interfaces/CommandInterface";
import {BaseInteraction, codeBlock, CommandInteraction, Interaction} from "discord.js";

export default class EvalCommand extends Command implements CommandInterface {
    onCommandSender(interaction: CommandInteraction): any {

        if (interaction.user.id != process.env.AUTHOR) return interaction.deferReply();

        let code = interaction.options.get("code")?.value as string;

        try {
            interaction.reply("Success : " + codeBlock("js", eval(code)))

        } catch (error) {
            interaction.reply(("Error : " + codeBlock("js", error as string)))
        }

    }

}