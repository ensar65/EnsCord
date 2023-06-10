import {Client, GatewayIntentBits} from 'discord.js';
const {Guilds, MessageContent, GuildMessages, GuildMembers} = GatewayIntentBits;
const client = new Client({intents: [Guilds, GuildMessages, GuildMembers, MessageContent]});

export default class AppLogin {
     private readonly _token: string;

    constructor(token: string) {
        this._token = token;
    }

    public attempt(): Promise<Client> {
        let token = this._token
        return new Promise(function (resolve, reject) {

            console.log("[Login] Login attempt started.")

            client.login(token).then(() => {
                console.log("[Login] Successfully logged on "+ client.user?.username + "\n");
                 resolve(<Client>client);
            }).catch(err => {
                console.error(err)
                 reject(err);
            });
        });
    }

}