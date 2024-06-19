import React from 'react';

type Props = {
  width?: string;
  height?: string;
  children: React.ReactNode;
};

const GlassCard: React.FC<Props> = ({ width = '80%', height = '100%', children }: Props) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(2px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '20px',
        margin: '20px auto', // 中央揃えにするために自動マージンを設定
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
