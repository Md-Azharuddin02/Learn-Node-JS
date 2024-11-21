// 1. Importing the fs Module

const { log } = require("console")
const fs = require("fs")



//(a) Write to a File

/*
fs.writeFileSync('Test.txt', 'Hey there ! I am Azharuddin')


fs.writeFile('Test-2.txt', "Hey there ! I am Azharuddin and this is the second file with call back fun",(err)=>{
    if(err){
        console.error(err)
    }
    console.log("File created successfully!")
})
*/

// (b) Read Files
/*
//Note: utf8 ensures the content is read as text instead of raw binary data.
const result =fs.readFileSync('test.txt', 'utf-8')
console.log(result)


fs.readFile('./Test-2.txt', 'utf8', (err, result)=>{
    if(err){
        console.error(err)
    }
    console.log(result)
})
*/


// (c) Append Data to a File
/*
fs.appendFileSync("test-2.txt","\n file is modified")

fs.appendFile('test.txt','\nThis file has been apended',(err)=>{
    if(err){
        console.error(err)
    }
    console.log("File appended successfully!")
 
})
*/

// (d) Delete a File
/*
fs.unlinkSync('test.txt')

fs.unlink('test.txt', (err)=>{
    if(err){
        console.error(err)
    }
    console.log("File deleted successfully");
})
*/


// (e) Create a Directory
/*
fs.mkdirSync('MynewDir')
fs.mkdirSync('newDir/another/again-another', {recursive:true})

fs.mkdir("AnotherDir/newDir/anotherDewDir", {recursive:true}, (err)=>{
    if(err){
        console.error(err)
    }
    
    console.log("Directory Successfully Created")
})
*/


// (f) Read a Directory
/*
const getdir= fs.readdirSync("NewDir", {recursive: true})
console.log(getdir)

fs.readdir('NewDir', {recursive:true}, (err, res)=>{
    if(err){
        console.error(err)
    }
    console.log(res)
})
*/

// (gc) Remove a Directory

/*
fs.rmdirSync('Mynewdir')

fs.rmdir('new', (err)=>{
    if(err){
        console.error(err)
    }
    console.log("Directory deleted successfully!")
})
*/

// (h). File/Folder Stats: To get information about a file (size, creation date, etc.):
/*
const rst= fs.statSync('Test-2.txt')
console.log(rst)

fs.stat('anotherdir', (err, res)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(res)
    console.log('Is File:', stats.isFile());
    console.log('Is Directory:', stats.isDirectory());
})
*/

//(i) Watching Files and Directories: To monitor changes in a file:
/*
fs.watch('newDir', (eventType, filename)=>{
    console.log(filename, eventType)
})
*/
