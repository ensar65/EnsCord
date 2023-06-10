import Handler from "./Handler";

import CommandConfig from "../../libs/interfaces/configs/Command"
import Helpers from "../helpers";
import {Client} from "discord.js";


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
                    slash_commands.set("client", config.command);
                } else if (config.commandType == "guild") {
                    let guild_id = config.guildId;
                    slash_commands.set(guild_id, config.command);
                }
                console.log("[CommandHandler] " + command_name + " successfully loaded.")
            });
            console.log("[CommandHandler] All commands loaded.\n")
            return resolve(true);

        });
    }
}