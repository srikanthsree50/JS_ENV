let re = /gr[ae]y/i
const str = 'grey';
const result = re.exec(str)
console.log(result)

function reTest(re,str){
    if(re.test(str)){
console.log(`${str} matches ${re.source}`)
    }
    else{
        console.log(`${str} doesnot matches ${re.source}`)
    }
}

reTest(re,str);