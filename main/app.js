function addTokens(input, tokens) {
    if (typeof input === 'string') {
        if (input.length > 5) {
            toReplace = tokens.find(token => (typeof token.tokenName !== 'string') && (token.tokenName !== null))
            if (toReplace === undefined) {
                if (input.includes('...') === true) {
                    output = tokens.find(token => (typeof token.tokenName === 'string'));
                    toReplace = input.replace('...','');
                    finalString = toReplace.concat('${'+output.tokenName+'}');
                    return finalString;
                }
                else {
                    return input;
                }
            }
            else {
                throw new Error('Invalid array format');
            }
        }
        else {
            throw new Error('Input should have at least 6 characters');
        }

    }
    else {
        throw new Error('Invalid input');
    }
}
const app = {
    addTokens: addTokens
}

module.exports = app;
