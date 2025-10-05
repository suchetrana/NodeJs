import {readFile, writeFile} from 'fs/promises';

const path = new URL('./index.html', import.meta.url);
console.log(path);

let contents = await readFile(path, {encoding: 'utf-8'});

const data = {
    name : "Suchet",
    company : "Bloomberg",
    age : "22"
}

for( const[key, value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`, value);
}
console.log(contents);


// '.' means current folder
//  '..' means previous one folder

await writeFile(new URL('./newindex.html', import.meta.url), contents);