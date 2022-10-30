/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const p = [];
    const len = strs.length;
    const first = strs[0];
    const rem = strs.splice(1, strs.length - 1);
    const rlen = len - 1;
    if (rlen === 0) {
        return first;
    }
    const maxlen = first.length;
    for (let i = 0; i < maxlen; i++) {
        const exist = rem.filter(c => c[i] === first[i]).length === rlen;
        if (!exist) {
            if (p.length === 0) {
                return '';
            } else {
                break;
            }
        }
        p.push(first[i]);
    }
    return p.join('');
};
const logger = console.log;
logger(longestCommonPrefix(["flower","flow","flight"]));
logger(longestCommonPrefix(["dog","racecar","car"]));
logger(longestCommonPrefix(["flower","flower","flower","flower"]));