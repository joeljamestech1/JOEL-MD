



// coded by 💗
import dotenv from 'dotenv';
dotenv.config();

import {
    makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState,
} from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './src/event/index.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import NodeCache from 'node-cache';
import path from 'path';
import chalk from 'chalk';
import moment from 'moment-timezone';
import axios from 'axios';
import config from './config.cjs';
import pkg from './lib/autoreact.cjs';
const { emojis, doReact } = pkg;

const sessionName = "session";
const app = express();
const orange = chalk.bold.hex("#FFA500");
const lime = chalk.bold.hex("#32CD32");
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
}

async function downloadSessionData() {
    if (!config.SESSION_ID) {
        console.error('Please add your session to SESSION_ID env !!');
        return false;
    }
    const sessdata = config.SESSION_ID.split("Joel-Md&")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    try {
        const response = await axios.get(url);
        const data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
        await fs.promises.writeFile(credsPath, data);
        console.log("🔒 Session Successfully Loaded !!");
        return true;
    } catch (error) {
       // console.error('Failed to download session data:', error);
        return false;
    }
}

async function start() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`joel md using WA v${version.join('.')}, isLatest: ${isLatest}`);
        
        const Matrix = makeWASocket({
            version,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: useQR,
            browser: ["ʝσєℓ χ∂", "safari", "3.3"],
            auth: state,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id);
                    return msg.message || undefined;
                }
                return { conversation: "joel md  whatsapp user bot" };
            }
        });

        Matrix.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                    start();
                }
            } else if (connection === 'open') {
                if (initialConnection) {
                    console.log(chalk.green("αм ʝσєℓ χ∂ ν тяєє вσт"));
                    Matrix.sendMessage(Matrix.user.id, { text: `*╔═════════════⊷*
*║ ┃ ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ xᴍᴅ┃*
*║    ᴘʀᴇғɪx:  ${prefix}*
*║    ᴍᴏᴅᴇ :  ${mode}*
*║    ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅᴇs : ${evt.cm.length}︎*
*╚═════════════⊷*

*╔══════════════⊷*
 *║ ʀᴇᴘᴏʀᴛ ᴀɴʏ ᴘʀᴏʙʟᴇᴍs ᴛᴏ ᴛʜᴇ       ᴅᴇᴠs*  
 ║ *ᴍᴀɪɴ ᴅᴇᴠs*
 ║ *© ᴊᴏᴇʟᴊᴀᴍᴇsᴛᴇᴄʜ*
 ║ *© ʙʀᴜᴄᴇ ʙᴇʀᴀ*
 ║ *© ᴍᴀʀɪsᴇʟ*
 ╚═══════════════⊷

>  𝚂𝙸𝙼𝙿𝙻𝙴, 𝚂𝚃𝚁𝙰𝙸𝙶𝙷𝚃𝙵𝙾𝚁𝚆𝙰𝚁𝙳 𝙰𝙽𝙳  𝙻𝙾𝙰𝙳𝙴𝙳 𝚆𝙸𝚃𝙷 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂  🎊. 𝙼𝙴𝙴𝚃 𝙳𝙴𝙼𝙾𝙽-𝚂𝙻𝙰𝚈𝙴𝚁-𝚇𝙼𝙳 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃.
` });
                    initialConnection = false;
                } else {
                    console.log(chalk.blue("♻️ Connection reestablished after restart."));
                }
            }
        });

        Matrix.ev.on('creds.update', saveCreds);

        Matrix.ev.on("messages.upsert", async chatUpdate => await Handler(chatUpdate, Matrix, logger));
        Matrix.ev.on("call", async (json) => await Callupdate(json, Matrix));
        Matrix.ev.on("group-participants.update", async (messag) => await GroupUpdate(Matrix, messag));

        if (config.MODE === "public") {
            Matrix.public = true;
        } else if (config.MODE === "private") {
            Matrix.public = false;
        }

        Matrix.ev.on('messages.upsert', async (chatUpdate) => {
            try {
                const mek = chatUpdate.messages[0];
                if (!mek.key.fromMe && config.AUTO_REACT) {
                    console.log(mek);
                    if (mek.message) {
                        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                        await doReact(randomEmoji, mek, Matrix);
                    }
                }
            } catch (err) {
                console.error('Error during auto reaction:', err);
            }
        });
    } catch (error) {
        console.error('Critical Error:', error);
        process.exit(1);
    }
}

async function init() {
    if (fs.existsSync(credsPath)) {
        console.log("🔒 Session file found, proceeding without QR code.");
        await start();
    } else {
        const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("🔒 Session downloaded, starting bot.");
            await start();
        } else {
            console.log("No session found or downloaded, QR code will be printed for authentication.");
            useQR = true;
            await start();
        }
    }
}

init();

app.get('/', (req, res) => {
    res.send('am joel bot');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//updated by lord joel 
