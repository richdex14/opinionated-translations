import { useState } from 'react';

export default function Toggle({ trigger, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span style={{ display: 'inline' }}>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'inherit',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          padding: '0 2px',
          margin: '0 1px',
          fontSize: 'inherit',
          fontFamily: 'inherit',
        }}
      >
        {trigger}
      </button>
      {visible && <span>{children}</span>}
    </span>
  );
}
