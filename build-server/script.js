const {exec}= require('child_process')
const path = require('path')
const fs = require('fs')
const { S3Client, 
    PutObjectCommand
}= require('@aws-sdk/client-s3')
const mime = require('mime-types')
const dotenv = require('dotenv')

dotenv.config()

const s3Client= new s3Client({
    region:'eu-north-1',
    credentials:{
      accessKeyId:process.env.AWS_ACCESS_KEY_ID | "" ,
      secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY | ""
    }
})

const PROJECT_ID = process.env.PROJECT_ID

async function init(){
    console.log('executing script.js')
    
    // first build the output code after cloning from 
    // github 

    //we stored path in output folder 
    const outDir = path.join(__dirname,'output')
    const p= exec(`cd ${outDir} && npm install && npm run build`)

    // capturing the log during command execution
    p.stdout.on('data',function(data){
        console.log(data.toString())
    })

    // capturing error
    p.stdout.on('error',function(data){
        console.log('Error',data.toString())
    })

    p.on('close', async function(){
        console.log('build complete')

        // after build dist folder created
        const distFolderPath =  path.join(__dirname,'output','dist')

        const distFolderContent = fs.readdirSync(
            distFolderPath,{
                recursive:true
            }
        )
        //iterating file by file 
        for(const file of distFolderContent){

            const filePath = path.join(distFolderPath,file);
            if(fs.lstatSync(filePath).isDirectory()) continue;

            console.log('uploading ',filePath)

            // upload on s3
            const command = new PutObjectCommand({
                Bucket:'deploy-zone',
                Key:`__outputs/${PROJECT_ID}/${file}`,
                Body:fs.createReadStream(filePath),
                ContentType:mime.lookup(filePath)
            })

            await s3Client.send(command);
            console.log('uploaded',filePath)
        }

        console.log('Done ...')

    })




}

init()