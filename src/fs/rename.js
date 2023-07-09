import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToWrongFile=path.join(dirName,'files', 'wrongFilename.txt')

const pathToCorrectFile=path.join(dirName,'files','properFilename.md')

const rename=async () => {
    if(fs.existsSync(pathToWrongFile) && !fs.existsSync(pathToCorrectFile)) {
        
        fs.rename(pathToWrongFile,pathToCorrectFile,(err) => {
            if(err)  throw new Error ('FS operation failed')
            console.log('\nRenamed successfully!')
        })
        

    } else {
        throw new Error ('FS operation failed\n')
    }
};

await rename();