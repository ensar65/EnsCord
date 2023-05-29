import Handler from "./Handler";

import CommandConfig from "../../libs/interfaces/configs/Command"
import Helpers from "../helpers";


export default class CommandHandler extends Handler {
    readonly _folder: string;

    constructor(folder: string) {
        super(folder);
        this._folder = folder;
    }

    public run(): Promise<boolean> {
        let event_folders = this.read;

        return new Promise(function (resolve) {

            event_folders.forEach(folder_data => {
                let src_folder = Helpers.url(folder_data.src_folder);

                let config = <CommandConfig>require(Helpers.url(folder_data.config_file)).default();

                let main_file_url = Helpers.join([src_folder, config.main]);
                let CommandClass = require(main_file_url).default;

                //TODO: will be finished.
                resolve(true);
            });
        });
    }
}