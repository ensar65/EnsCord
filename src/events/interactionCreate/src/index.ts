import Event from "../../Event";
import EventInterface from "../../../libs/interfaces/EventInterface";
import {Interaction} from "discord.js";

export default class Ready extends Event implements EventInterface {
    onRun(interaction: Interaction): void {

    }
}