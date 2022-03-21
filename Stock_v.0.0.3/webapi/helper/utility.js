const crypto =  require('crypto')


function randomTokenString(){
    return crypto.randomBytes(4).toString('hex').toLocaleUpperCase();
}
module.exports =  {randomTokenString};

