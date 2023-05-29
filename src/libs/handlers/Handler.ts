import Helpers from "../helpers";

import fs from "fs"
import FolderData from "../interfaces/handlers/FolderData";


export default class Handler {
    readonly _folder: string;

    constructor(folder: string) {
        this._folder = folder;
    }

    public get read(): Array<FolderData> {

        let folders_with_data: Array<FolderData> = [];
        let folders = fs.readdirSync(Helpers.url(this._folder), {withFileTypes: true}).filter(filter => filter.isDirectory());

        folders.forEach(folder => {
            let name = folder.name;
            let src_folder = Helpers.join([this._folder, name , "src"]);
            let config_file =  Helpers.join([this._folder, name, "config.js"]);

            const folder_data: FolderData = {name, config_file, src_folder}

            folders_with_data.push(folder_data);
        });

        return folders_with_data;
    }


}

