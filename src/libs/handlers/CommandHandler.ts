import Handler from "./Handler";

import CommandConfig from "../../libs/interfaces/configs/Command"
import Helpers from "../helpers";
import {Client, SlashCommandBuilder} from "discord.js";


export default class CommandHandler extends Handler {
    readonly _folder: string;

    constructor(folder: string) {
        super(folder);
        this._folder = folder;
    }

    public run(client: Client): Promise<boolean> {
        let command_folder = this.read;

        return new Promise(function (resolve) {
            console.log("[CommandHandler] Initializing commands.")


            command_folder.forEach(folder_data => {
                let src_folder = Helpers.url(folder_data.src_folder);

                let config = <CommandConfig>require(Helpers.url(folder_data.config_file)).default();

                let main_file_url = Helpers.join([src_folder, config.main]);
                let command_class = require(main_file_url).default;
                let command_name = config.command.name;

                commands.set(command_name, new command_class());
                if (config.commandType == "client") {

                    if (slash_commands.has("client")) {
                        let client_commands = slash_commands.get("client")
                        client_commands?.push(config.command);
                        slash_commands.set("client", <SlashCommandBuilder[]> client_commands);
                    } else {
                        slash_commands.set("client", new Array<SlashCommandBuilder>(config.command))
                    }

                } else if (config.commandType == "guild") {
                    let guild_id = config.guildId;
                    if (slash_commands.has(guild_id)) {
                        let client_commands = slash_commands.get(guild_id)
                        client_commands?.push(config.command);
                        slash_commands.set(guild_id, <SlashCommandBuilder[]> client_commands);
                    } else {
                        slash_commands.set(guild_id, new Array<SlashCommandBuilder>(config.command))
                    }

                }
                console.log("[CommandHandler] " + command_name + " successfully loaded.")
            });
            console.log("[CommandHandler] All commands loaded.\n")
            return resolve(true);

        });
    }
}