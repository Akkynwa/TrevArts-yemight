import { useState } from 'react';
import { useWertWidget } from '@wert-io/module-react-component';
import type { StaticOptions, ReactiveOptions } from '@wert-io/module-react-component';

export default function WertWidgetButton() {
  // 🔒 Amount selected in YOUR UI
  const amountInUsd = 50;

  const staticOptions: StaticOptions = {
            // partner_id: '01KC903Q0NY0H61RZ17G8H26T3',
            // origin: 'https://widget.wert.io',
            partner_id: 'default', // replace later with your real partner_id
    origin: 'https://sandbox.wert.io',
    commodity: 'ETH',
    // network: 'ethereum',
    network: 'sepolia',
    fiat_currency: 'USD',
    fiat_amount: amountInUsd,
  };

  const [reactiveOptions] = useState<ReactiveOptions>({
    theme: 'dark',
    listeners: {
      loaded: () => console.log('Wert widget loaded'),
      close: () => console.log('Widget closed'),
      error: (err) => console.error('Wert error:', err),
      'payment-status': (status) => {
        console.log('Payment status:', status);
      },
    },
  });

  const { open, isWidgetOpen } = useWertWidget(reactiveOptions);

  return (
    <button
      disabled={isWidgetOpen}
      onClick={() => open(staticOptions)}
    >
      {isWidgetOpen ? 'Processing...' : 'Buy Now'}
    </button>
  );
}
