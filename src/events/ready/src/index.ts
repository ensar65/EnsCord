import Event from "../../Event";
import EventInterface from "../../../libs/interfaces/EventInterface";
import {Client} from "discord.js";

export default class Ready extends Event implements EventInterface {
    onRun(client: Client): void {

    }
}