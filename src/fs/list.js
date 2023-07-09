import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files')


const list=async () => {

        fs.readdir(pathToOriginDir,(error ,filesList) => {
            if(error) throw new Error('FS operation failed\n')
            console.log(filesList)
        })

};

await list();