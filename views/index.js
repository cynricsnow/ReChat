'use strict'
const reactRoot = document.getElementById('react-root');
console.log(reactRoot);
import style from './style';
function getName(name) {
    return new Promise((resolve, reject) => {
        resolve(name);
    })
}
async function gen() {
    const name1 = await getName('user1');
    const name2 = await getName('user2');
    console.log(name1 + name2);
}

gen()
