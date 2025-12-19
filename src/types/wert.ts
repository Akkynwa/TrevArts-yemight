import type { StaticOptions } from '@wert-io/module-react-component';

/**
 * Extends Wert StaticOptions to include
 * fiat locking fields supported by Wert widget
 */
export type WertStaticOptions = StaticOptions & {
  fiat_currency?: 'USD' | 'EUR';
  fiat_amount?: number;
};
