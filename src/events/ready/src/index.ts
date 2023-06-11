import Event from "../../Event";
import EventInterface from "../../../libs/interfaces/EventInterface";
import {ActivityType, Client} from "discord.js";

export default class Ready extends Event implements EventInterface {
    onRun(client: Client): void {
        client.user?.setActivity({
            "name": "github.com/ensar65/EnsCord",
            "type": ActivityType.Watching
        })
    }
}