/* 
OPEN SOURCE CODE: https://github.com/Nyx3-wq

You should probably change this to ur own encryption just make sure you can decode it on Roblox studio.

If you do not know how to do that you can 

dm me: milw0rm.5
*/

export function d(e) {
    let f = "";
    for (let g = 0; g < e.length; g++) {
        f += ("00" + e.charCodeAt(g).toString(16)).slice(-2);
    }
    return f.toUpperCase();
}
