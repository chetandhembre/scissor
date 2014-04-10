/**
 * Created by ichetandhembre on 3/4/14.
 */
'use strict';



//we are using this delimiter
var delimiter = [
    ',',
    '.',
    '!',
    ' ',
    '?',
    ';',
    '&',
    ':',
    '%',
    ')'
];

//removing delimiter from start of word
var removeInitialDelimiter = function (str) {
    var i = 0;
    for (i = 0; i <  str.length; i++) {
        if (delimiter.indexOf(str[i]) === -1) {
            break;
        }
    }

    return str.substring(i);
};


/**
 *
 * @param str is array of string
 * @param limit max number of
 * @returns {{end: boolean, result: *}}
 */
var splitString = function (str, limit) {

    var length = str.length;

    //always last string is we need to split according to limit
    var lastString = str[length - 1];

    //if length of string is less than limit then return same string back
    if (lastString.length <= limit) {
        return {
            end : true,
            result : str
        };
    }

    //get substring of require limit
    var s = lastString.substring(0, limit);
    var start = s.length;
    var i;

    //check if it is spliting word, if it is then avoid breaking word and traverse back to last delimiter and split string from that
    //to find word we travel from one next character from split word
    //if character is space then word in not split
    //if not then word is split and travess back to find delimiter if find then now we will split string from that character
    //any how if we do not get delimiter then we split word and add '-'
    for (i = start; i >= 0; i = i - 1) {
        if (delimiter.indexOf(lastString[i]) !== -1) {
            if (limit > i + 1) {
                limit = i + 1;
            } else if (i !== start || lastString[i] === ' ') {
                start =  start + 1;
            }
            break;
        }
    }

    //if we find word is split then we add '-' in it
    if (i <  0 || start === limit) {
        str[length - 1] = lastString.substring(0, limit - 1).trim() + '-';
        str[length] =  '-' + lastString.substring(limit - 1).trim();
    } else {
        //if word is not split then we trim word and remove all delimiter from prefix
        str[length - 1] = lastString.substring(0, limit).trim();
        str[length] = removeInitialDelimiter(lastString.substring(limit).trim());
    }

    //end false then we have to split last string from array to split
    return {
        end : false,
        result : str
    };
};



var split = function (str, limit) {
    if (typeof str !== 'string') {
        return [];
    }

    if (!limit) {
        return [str];
    }

    str  = [str];
    var ret;
    do {
        ret = splitString(str, limit);
        str = ret.result;
    } while (!ret.end);

    return ret.result;
};


exports.split = split;