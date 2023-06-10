import {Collection, REST, Routes, SlashCommandBuilder} from 'discord.js';

const rest = new REST({version: '10'}).setToken(<string>process.env.TOKEN);
export default class SlashCommandPusher {
    run(client_id: string) {
        return new Promise(async (resolve, reject) => {
            let client_commands: Array<Object> = [];
            let guild_commands = new Collection<string, Array<Object>>();

            slash_commands.each((value, key, collection) => {
                if (key === "client") {
                    client_commands.push(value.toJSON());
                } else {
                    if (guild_commands.has(key)) {
                        let data = guild_commands.get(key);
                        data?.push(value.toJSON());
                        guild_commands.set(key, <Array<Object>>data);
                    } else {
                        let data = [];
                        data.push(value.toJSON());
                        guild_commands.set(key, <Array<Object>>data)
                    }
                }
            });


            await this.push_client_commands(client_commands, client_id)
            await this.push_guild_commands(guild_commands, client_id)

        })
    }

    private async push_client_commands(data: Array<Object>, client_id: string) {
        if(data.length === 0) return;
        try {
            console.log('[SlashCommandPusher] Initializing client commands.');

            await rest.put(Routes.applicationCommands(client_id), {body: data});

            console.log('[SlashCommandPusher] Initialized client commands.');
        } catch (error) {
            console.error(error);
        }
    }

    private push_guild_commands(data: Collection<string, Array<Object>>, client_id: string) {
        if(data.size === 0) return;
        data.each(async (value, key, collection) => {
            try {
                console.log(`[SlashCommandPusher] Initializing guild (` + key + `) commands.`);

                const data = await rest.put(
                    Routes.applicationGuildCommands(client_id, key),
                    {body: value},
                );

                console.log(`[SlashCommandPusher] Initialized guild (` + key + `).`);
            } catch (error) {
                console.error(error);
            }
        });
    }

}

interface guildCommandData {
    guild_id: string,
    value: SlashCommandBuilder
}