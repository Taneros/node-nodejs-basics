import fs from 'fs'
import path from 'path'

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const content = 'I am fresh and young'

const create = async () => {
    
    try {
        fs.writeFileSync(path.join(__dirname, '/files', 'fresh.txt'), content)    

    } catch (error) {
        console.error(error);
        
    }
    
};

await create();