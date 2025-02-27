"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitedEmirates = void 0;
exports.unitedEmirates = {
    name: 'United Arab Emirates',
    codes: ['AE', 'ARE', '784'],
    calcFn: function (vat) {
        var digits = vat.replace(/[\s-]/g, '');
        if (digits.length !== 15) {
            return false;
        }
        if (digits[0] !== '3') {
            return false;
        }
        if (!/^\d+$/.test(digits)) {
            return false;
        }
        var sum = 0;
        var multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
        for (var i = 0; i < digits.length; i++) {
            var digit = parseInt(digits[i], 10);
            var product = digit * multipliers[i];
            sum += product > 9 ? Math.floor(product / 10) + (product % 10) : product;
        }
        return sum % 10 === 0;
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]
        },
        regex: [/^3\d{14}$/]
    }
};
