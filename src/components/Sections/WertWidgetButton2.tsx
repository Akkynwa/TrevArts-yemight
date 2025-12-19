import { useState } from 'react';
import { useWertWidget } from '@wert-io/module-react-component';
import type { ReactiveOptions } from '@wert-io/module-react-component';
import type { WertStaticOptions } from '../../types/wert';


const NFT_UNIT_PRICE = 50; // USD per NFT (must match backend logic)

export default function WertWidgetButton() {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔒 Widget behavior & listeners
  const reactiveOptions: ReactiveOptions = {
    theme: 'dark',
    listeners: {
      loaded: () => console.log('Wert widget loaded'),
      'payment-status': (s) => {
        if (s?.status === 'success') {
          alert('Payment successful! Your NFT is being minted.');
        }
      },
    },
  };

  const { open, isWidgetOpen } = useWertWidget(reactiveOptions);

  const handleBuyClick = async () => {
    // Basic validation
    if (!address.startsWith('0x') || address.length !== 42) {
      alert('Please enter a valid Ethereum address.');
      return;
    }

    setLoading(true);

    try {
      // 🔐 1. Request a signed session from YOUR backend
      const response = await fetch(
        'https://YOUR-RENDER-URL.onrender.com/api/wert/session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_address: address,
            quantity,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to create session');
      }

      // 🔐 2. Configure widget with LOCKED values from backend
      const staticOptions: WertStaticOptions = {
        partner_id: 'YOUR_WERT_PARTNER_ID',
        origin: 'https://sandbox.wert.io',
        click_id: data.click_id,

        commodity: 'ETH',
        network: 'sepolia',

        fiat_currency: 'USD',
        fiat_amount: data.fiat_amount, // 👈 backend-authoritative

        // 🔒 Smart contract data (LOCKED)
        sc_address: data.sc_address,
        sc_input_data: data.sc_input_data,
        signature: data.signature,

        // Receiver
        address,

        extra: {
          item_info: {
            name: `Genesis NFT x${quantity}`,
            author: 'TrevArts',
            seller: 'TrevArts',
            image_url: 'https://yourcdn.com/nft.png',
          },
        },
      };

      // 🚀 3. Open widget
      open(staticOptions);
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={{ height: '80px' }} />

      <div
        style={{
          animation: 'fadeIn 0.6s ease-out forwards',
          minHeight: '200px',
          padding: '20px',
          borderRadius: '16px',
          maxWidth: '420px',
          margin: '0 auto',
          backgroundColor: '#020202',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          color: '#fff',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>NFT Checkout</h2>

        {/* Quantity Selector */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <span>Quantity</span>
          <div>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span style={{ margin: '0 12px', fontWeight: 'bold' }}>
              {quantity}
            </span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        {/* Address Input */}
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              marginBottom: '6px',
              color: '#f53513',
            }}
          >
            Receiver Wallet Address
          </label>

          <input
            type="text"
            placeholder="0x..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              fontFamily: 'monospace',
              borderRadius: '8px',
              border: '2px solid #000',
              backgroundColor: '#f9f9f9',
              color: '#000',
              boxSizing: 'border-box',
              outline: 'none',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#f53513')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
          />

          <p style={{ fontSize: '11px', color: '#aaa', marginTop: '6px' }}>
            Double-check this address. NFTs cannot be recovered if sent incorrectly.
          </p>
        </div>

        {/* Buy Button */}
        <button
          onClick={handleBuyClick}
          disabled={loading || isWidgetOpen}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#f53513',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading
            ? 'Securing price...'
            : `Buy for $${NFT_UNIT_PRICE * quantity}`}
        </button>
      </div>
    </>
  );
}
