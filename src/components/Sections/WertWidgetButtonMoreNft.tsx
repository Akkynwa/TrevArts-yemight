// Add 'useState' inside the curly braces here:
import { useEffect, useState } from 'react'; 
import { useWertWidget } from '@wert-io/module-react-component';
import type { StaticOptions, ReactiveOptions } from '@wert-io/module-react-component';
import { useAccount } from 'wagmi';

export default function WertWidgetButton() {
  const { address } = useAccount();
  const [quantity, setQuantity] = useState(1);
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Fetch new signature whenever quantity changes
  useEffect(() => {
    if (!address) return;
    setLoading(true);

    fetch('http://localhost:4000/api/wert/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_address: address, quantity })
    })
      .then(res => res.json())
      .then(data => {
        setSessionData(data);
        setLoading(false);
      });
  }, [address, quantity]);

  const staticOptions: StaticOptions = {
    partner_id: 'YOUR_PARTNER_ID',
    origin: 'https://sandbox.wert.io',
    click_id: sessionData?.click_id,
    commodity: 'ETH',
    network: 'sepolia',
    fiat_currency: 'USD',
    fiat_amount: 50 * quantity, // Total price passed to widget
    
    // Values from backend signature
    sc_address: sessionData?.sc_address || '',
    sc_input_data: sessionData?.sc_input_data || '',
    signature: sessionData?.signature || '',

    extra: {
      item_info: {
        name: `Genesis NFT x${quantity}`,
        author: 'TrevArts',
        image_url: 'https://yourcdn.com/nft.png',
        seller: 'TrevArts',
      },
    },
  };

  const reactiveOptions: ReactiveOptions = {
    theme: 'dark',
    listeners: {
      'payment-status': (s) => s?.status === 'success' && (window.location.href = '/success'),
    },
  };

  const { open, isWidgetOpen } = useWertWidget(reactiveOptions);

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
      <h3 className="text-lg font-bold mb-4">Mint Your NFT</h3>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button 
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >-</button>
          <span className="font-mono text-xl">{quantity}</span>
          <button 
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => setQuantity(quantity + 1)}
          >+</button>
        </div>
        <span className="font-bold text-green-600">${50 * quantity}</span>
      </div>

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold disabled:bg-gray-400"
        disabled={!sessionData || loading || isWidgetOpen}
        onClick={() => open(staticOptions)}
      >
        {loading ? 'Locking Price...' : `Buy ${quantity} NFT with Card`}
      </button>
    </div>
  );
}