const crypto=require('node:crypto')

//generate 16 character random number
function generate(size=16){

    hex=''
    while(hex.length <size){
        hex+=Math.floor(Math.random()*16).toString(16)
    }
    return hex
}

function hexBetween(start='',end=''){

    if (!validHex(start)  || !validHex(end)){
        throw new error('invalid hexadecimal number')
    }else{

        start=parseInt(start,16)
        end=parseInt(end,16)
        var max=0;
        var min=0;

        if(start>end){
            max=start
            min=end
        }else{
            max=end
            min=start
        }

        hex=''
        while(hex.length<16){

            hex += Math.floor(Math.random() * (max-min+1)+min).toString(16)

        }
        return hex
    }

    function validHex(char){
        return /^[0-9a-fA-F]$/.test(char);
    }

}


var hash=''
const pacSceret='lseommvsldkmsmdmsdmpwm-e34887983wflksnldnwken-73437y49389wnfl-sndlnwl'

const dataCipher=(data='',salt)=>{

    try {
        const key=pacSceret+salt
        hash=crypto.createHmac('sha256',key).update(data).digest('hex')

        return hash
    } catch (error) {
        throw new error(error)
    }
    

}

const compareHash=(data,hash,salt)=>{

    const key=pacSceret+salt
    dataHash=crypto.createHmac('sha256',key).update(data).digest('hex')
    return hash === dataHash

}



module.exports={
    generate,
    hexBetween,
    dataChiper,
    compareHash
}


