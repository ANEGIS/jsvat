import { Country } from '../jsvat';

export const unitedEmirates: Country = {
  name: 'United Arab Emirates',
  codes: ['AE', 'ARE', '784'],
  calcFn: (vat: string) => {
    const digits = vat.replace(/[\s-]/g, '');

    if (digits.length !== 15) {
      return false;
    }

    if (digits[0] !== '3') {
      return false;
    }

    if (!/^\d+$/.test(digits)) {
      return false;
    }

    let sum = 0;
    const multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

    for (let i = 0; i < digits.length; i++) {
      const digit = parseInt(digits[i], 10);
      const product = digit * multipliers[i];
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
