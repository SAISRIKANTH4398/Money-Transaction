export function deposit(amount){
    return {type: 'deposit', payload: amount}
}

export function withdrawl(amount){
    return {type: 'withdrawl', payload: amount}
}

export function nameUpdate(fullName){
    return {type: 'updateName', payload: fullName}
}

export function mobileUpdate(mobile){
    return {type:'updateMobile', payload: mobile}
}

export function reset(){
    return {type: 'reset'}
}