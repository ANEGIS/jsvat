import { Country } from '../jsvat';

export const unitedStates: Country = {
  name: 'United States of America',
  codes: ['US', 'USA', '840'],
  calcFn: (vat: string) => {
    const digits = vat.replace(/[\s-]/g, '');

    if (digits.length !== 9) {
      return false;
    }

    const invalidPrefixes = ['00', '07', '08', '09', '17', '18', '19', '28', '29', '49', '69', '89', '96', '97'];
    const prefix = digits.substring(0, 2);

    if (invalidPrefixes.includes(prefix)) {
      return false;
    }

    const prefixNum = parseInt(prefix, 10);
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
