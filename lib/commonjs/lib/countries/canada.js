"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canada = void 0;
exports.canada = {
    name: 'Canada',
    codes: ['CA', 'CAN', '124'],
    calcFn: function (vat) {
        var digits = vat.replace(/\D/g, '');
        if (digits.length !== 9 &&
            !((digits.length === 13 || digits.length === 15) && (vat.includes('RT') || vat.includes('rt')))) {
            return false;
        }
        var businessNumber = digits.substring(0, 9);
        var sum = 0;
        var multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1];
        for (var i = 0; i < businessNumber.length; i++) {
            var digit = parseInt(businessNumber[i], 10);
            var product = digit * multipliers[i];
            sum += product > 9 ? product - 9 : product;
        }
        return sum % 10 === 0;
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1, 2, 1]
        },
        regex: [/^[0-9]{9}$/, /^[0-9]{9}(RT|rt)[0-9]{4}$/]
    }
};
