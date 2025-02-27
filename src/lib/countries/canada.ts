import { Country } from '../jsvat';

export const canada: Country = {
  name: 'Canada',
  codes: ['CA', 'CAN', '124'],
  calcFn: (vat: string) => {
    const digits = vat.replace(/\D/g, '');

    if (
      digits.length !== 9 &&
      !((digits.length === 13 || digits.length === 15) && (vat.includes('RT') || vat.includes('rt')))
    ) {
      return false;
    }

    const businessNumber = digits.substring(0, 9);
    let sum = 0;

    const multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1];

    for (let i = 0; i < businessNumber.length; i++) {
      const digit = parseInt(businessNumber[i], 10);
      const product = digit * multipliers[i];
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
