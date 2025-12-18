import React from 'react';
import { useWertWidget } from '@wert-io/module-react-component';
import type {
  ReactiveOptions,
  StaticOptions,
} from '@wert-io/module-react-component';

const WertButton = () => {
  const options: StaticOptions = {
    partner_id: 'default', // replace later with your real partner_id
    origin: 'https://sandbox.wert.io',
    commodity: 'ETH',
    network: 'sepolia',
  };

  const [reactiveOptions] = React.useState<ReactiveOptions>({
        theme: 'dark',
    listeners: {
      loaded: () => console.log('Wert widget loaded'),
    },
  });

  const { open } = useWertWidget(reactiveOptions);

  return (
    <button onClick={() => open(options)}>
      Open Wert widget
    </button>
  );
};

export default WertButton;
