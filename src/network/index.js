import fs from 'fs';
import path from 'path';
import { login } from './session.js';
import { joinRoom } from './client.js';
// import crypto from 'crypto';

const configDir = path.join('.', 'data');
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir);
}
if (!fs.existsSync(path.join(configDir, 'config.json'))) {
    const defaultConfig = {
        uuid: "your-uuid",
        name: "your-name",
        extra: "",
        password: "your-password",
        server: "wss://mo.ccw.site",
        roomType: "broadcast",
        projectId: "your-project-id",
        roomId: "your-room-id"
    };
    fs.writeFileSync(path.join(configDir, 'config.json'), JSON.stringify(defaultConfig, null, 4));
    console.log("Default config created at data/config.json. Please fill it out and run the program again.");
    process.exit(0);
}
const config = JSON.parse(fs.readFileSync(path.join(configDir, 'config.json'), 'utf-8'));
const auth = {
    uuid: config.uuid,
    name: config.name,
    extra: config.extra,
    cookie: await login(config.uuid, config.password)
}
const { server, roomType, projectId, roomId } = config;
const room = await joinRoom(server, roomType, projectId, roomId, auth);
// const patch = (obj,key,f) => obj[key] = f(obj[key]);
// room.onMessage('C2SHandshake', (message) => {
//     const src = message.who.extra.uuid;
// });
console.log(`Joined room ${roomId} successfully!`);
export default room;