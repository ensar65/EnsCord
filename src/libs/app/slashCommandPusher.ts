import {REST, Routes, SlashCommandBuilder} from 'discord.js';

const rest = new REST({version: '10'}).setToken(<string>process.env.TOKEN);
export default class SlashCommandPusher {
    run(client_id: string) {
        return new Promise(async (resolve, reject) => {
            await this.push_client_commands(<SlashCommandBuilder[]>slash_commands.get("client"), client_id)
            await this.push_guild_commands(client_id)
        })
    }

    private async push_client_commands(data: SlashCommandBuilder[], client_id: string) {
        if (!data) return;
        if(data.length == 0) return;
        try {

            await rest.put(Routes.applicationCommands(client_id), {body: data});

            console.log('[SlashCommandPusher] Initialized client commands.');
        } catch (error) {
            console.error(error);
        }
    }

    private async push_guild_commands(client_id: string) {
        slash_commands.each(async (value, key) => {
            if (key == "client") return;
            try {
                console.log('[SlashCommandPusher] Initializing guild (' + key +') commands.');

                await rest.put(Routes.applicationGuildCommands(client_id, key), {
                    body: value.map(val => val.toJSON())
                });

                console.log('[SlashCommandPusher] Initialized guild (' + key +') commands.');

            } catch (error) {
                console.error(error)
            }
        });
    }

}

interface guildCommandData {
    guild_id: string,
    value: SlashCommandBuilder
}