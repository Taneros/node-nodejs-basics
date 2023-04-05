import fs from 'fs'
import path from 'path'

import {fileURLToPath} from 'url';

const __filename=fileURLToPath(import.meta.url);

const __dirname=path.dirname(__filename);

const pathToFile=path.join(__dirname,'files','fresh.txt')

const content='I am fresh and young'

const create=async () => {
    if(fs.existsSync(pathToFile)) {throw new rror('FS operation failed')}

    try {
        fs.writeFileSync(path.join(__dirname,'files','fresh.txt'),content)

    } catch(error) {
        console.error(error);

    }


};

await create();