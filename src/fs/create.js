import fs, {constants} from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';

const fileName=fileURLToPath(import.meta.url);

const dirName=path.dirname(fileName);

const pathToFile=path.join(dirName,'files','fresh.txt')

const content='I am fresh and young'

const create=async () => {

    fs.stat(pathToFile,(err,stat) => {
        if(err === null) throw new Error('FS operation failed\n')
    })

    fs.writeFile(pathToFile, content,'utf-8',(error) => {
        console.log(`create.js - line: 21 ->> error`, error)
        if(error) {throw new Error('FS operation failed\n')}
        console.log('File created successfully!\n')
    })

};

await create();