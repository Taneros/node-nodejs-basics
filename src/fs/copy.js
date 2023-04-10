import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files1')

const pathToNewDir=path.join(dirName,'files_copy')


const copy=async () => {


    fs.mkdir(pathToNewDir,(error) => {
        if(error) throw new Error('FS operation failed\n')
    })

    fs.readdir(pathToOriginDir,(error,files) => {
        if(error) throw new Error('FS operation failed\n')
        
        files.forEach((file) => {
            const oldFilePath=path.join(pathToOriginDir,file)
            const newFilePath=path.join(pathToNewDir,file)
            
            fs.copyFile(oldFilePath,newFilePath,(err) => {
                if(error) throw new Error('FS operation failed\n')
            })
        })
        console.log('\nCopied successfully!')
    })

};

await copy();
