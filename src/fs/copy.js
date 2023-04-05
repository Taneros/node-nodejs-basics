import fs from 'fs'

import path from 'path'

import {fileURLToPath} from 'url'

const fileName = fileURLToPath(import.meta.url)

const dirName = path.dirname(fileName)

const pathToOriginDir = path.join(dirName,'files')

const pathToNewDir =path.join(dirName,'files_copy')


const copy = async () => {
    if(!fs.existsSync(pathToNewDir) && !fs.existsSync(pathToNewDir) ) {
            fs.mkdirSync(pathToNewDir)

            fs.readdirSync(pathToOriginDir).forEach((file) => {
                console.log(file);
                fs.copyFileSync(path.join(pathToOriginDir, file), path.join(pathToNewDir, file))
            })

        } else {
            throw new Error('FS operation failed')
        }


};

await copy();
