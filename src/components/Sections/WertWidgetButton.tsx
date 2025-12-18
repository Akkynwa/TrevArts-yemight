import { useState } from 'react';
import { useWertWidget } from '@wert-io/module-react-component';
import type { StaticOptions, ReactiveOptions } from '@wert-io/module-react-component';

export default function WertWidgetButton() {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const reactiveOptions: ReactiveOptions = {
    theme: 'dark',
    listeners: {
      'payment-status': (s) => {
        if (s?.status === 'success') alert('Success! Your NFT is being minted.');
      },
    },
  };

  const { open, isWidgetOpen } = useWertWidget(reactiveOptions);

  const handleBuyClick = async () => {
    // Basic validation
    if (!address.startsWith('0x') || address.length !== 42) {
      alert("Please enter a valid Ethereum address (0x...)");
      return;
    }

    setLoading(true);

    try {
      // 1. Get the signature from your backend for THIS specific address and quantity
      const response = await fetch('http://localhost:4000/api/wert/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_address: address, quantity })
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      // 2. Configure the widget with the signed data
      const staticOptions: StaticOptions = {
        partner_id: 'default', // Replace with your Wert Partner ID
        origin: 'https://sandbox.wert.io',
        click_id: data.click_id,
        commodity: 'ETH',
        network: 'sepolia',
        fiat_currency: 'USD',
        fiat_amount: 50 * quantity,
        
        // Locked Smart Contract Data
        sc_address: data.sc_address,
        sc_input_data: data.sc_input_data,
        signature: data.signature,
        address: address, // The receiver address

        extra: {
          item_info: {
            name: `Genesis NFT x${quantity}`,
            author: 'TrevArts',
            image_url: 'https://yourcdn.com/nft.png',
            seller: 'TrevArts',
          },
        },
      };

      // 3. Open the widget
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

      {/* 2. Apply the animation to the wrapper div */}
                <div className="h-20"></div>
      <div style={{ 
        animation: 'fadeIn 0.6s ease-out forwards', // 0.6 second smooth fade
        minHeight: '200px', // Prevents the "push up" layout shift
        padding: '20px', 
        border: '1px solid #eee', 
        borderRadius: '16px', 
        maxWidth: '400px', 
        margin: '20px auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        backgroundColor: '#020202ff'
      }}>


    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '12px', maxWidth: '400px' }}>
      <h2 style={{ marginBottom: '16px' }}>NFT Checkout</h2>
      
      {/* Quantity Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Quantity:</span>
        <div>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span style={{ margin: '0 10px', fontWeight: 'bold' }}>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>

      {/* Address Input */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '12px', color: '#f53513' }}>Receiver Wallet Address</label>
        <input 
    type="text" 
    placeholder="0x..." 
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    style={{ 
      width: '100%', 
      padding: '14px',             // Extra padding for a larger "tap target"
      fontSize: '16px',            // Larger font (prevents auto-zoom on mobile)
      fontFamily: 'monospace',      // Monospace makes 0x addresses easier to read
      borderRadius: '8px', 
      border: '2px solid #000',    // Thick black border for high contrast
      backgroundColor: '#f9f9f9',  // Subtle off-white background
      boxSizing: 'border-box',
      color: '#000',               // Ensure text is deep black
      outline: 'none'              // We will handle the focus state below
    }}
    // This adds a blue glow when the user clicks inside
    onFocus={(e) => e.currentTarget.style.borderColor = '#f53513'} 
    onBlur={(e) => e.currentTarget.style.borderColor = '#000'}
  />
  
  <p style={{ fontSize: '11px', color: '#666', marginTop: '6px' }}>
    Double-check this address! NFTs cannot be recovered if sent to the wrong one.
  </p>
</div>

      {/* Submit Button */}
      <button
        onClick={handleBuyClick}
        disabled={loading || isWidgetOpen}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#f53513',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
{loading ? (
    <span style={{ opacity: 0.6, animation: 'pulse 1s infinite' }}>
      Securing Price...
    </span>
  ) : `Buy for $${50 * quantity}`}      </button>
    </div>
        </div>
    </>
  );
}