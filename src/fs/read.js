import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files', 'fileToRead.txt')

const read=async () => {

        fs.readFile(pathToOriginDir, 'utf8', (error, data) => {
            if(error) throw new Error ('FS operation failed\n')
                    
            console.log(data);

            console.log('\nRead file successfully!')
        })


};

await read();