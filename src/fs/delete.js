import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToDeleteFile=path.join(dirName,'files','fileToRemove.txt')


const remove=async () => {

    fs.stat(pathToDeleteFile,(err,stat) => {
        if(err) throw new Error('FS operation failed\n')
        
        fs.rm(pathToDeleteFile, (err) => {
            
            if(err) throw new Error('FS operation failed\n')

            console.log('\nDeleted successfully!')
            
        })
    })
};

await remove();