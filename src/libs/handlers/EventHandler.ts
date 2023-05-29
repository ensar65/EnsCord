import Helpers from "../helpers";

import Handler from "./Handler";
import EventConfig from "../interfaces/configs/EventConfig";
import {Client} from "discord.js";
import EventInterface from "../interfaces/EventInterface";

export default class EventHandler extends Handler {
    readonly _folder: string;

    constructor(folder: string) {
        super(folder);
        this._folder = folder;
    }

    public run(client: Client): Promise<boolean> {

        return new Promise((resolve) => {
            console.log("[EventHandler] Initializing events. ")
            let event_folders = this.read;

            event_folders.forEach(folder_data => {
                let src_folder = Helpers.url(folder_data.src_folder);

                let config = <EventConfig>require(Helpers.url(folder_data.config_file)).default();

                let EventClass = require(Helpers.join([src_folder, config.main])).default;
                let Event = <EventInterface>new EventClass();

                client.on(config.eventType, (data) => {
                    Event.onRun(data);
                });
                console.log("[EventHandler] Successfully initialized " + folder_data.name + ".")
                return resolve(true);
            });
            console.log("[EventHandler] All events loaded.\n")
        });

    }
}