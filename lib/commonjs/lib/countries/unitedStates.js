"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitedStates = void 0;
exports.unitedStates = {
    name: 'United States of America',
    codes: ['US', 'USA', '840'],
    calcFn: function (vat) {
        var digits = vat.replace(/[\s-]/g, '');
        if (digits.length !== 9) {
            return false;
        }
        var invalidPrefixes = ['00', '07', '08', '09', '17', '18', '19', '28', '29', '49', '69', '89', '96', '97'];
        var prefix = digits.substring(0, 2);
        if (invalidPrefixes.includes(prefix)) {
            return false;
        }
        var prefixNum = parseInt(prefix, 10);
        if (prefixNum >= 70 && prefixNum <= 79) {
            return false;
        }
        return true;
    },
    rules: {
        multipliers: {},
        regex: [/^[0-9]{2}-?[0-9]{7}$/]
    }
};
