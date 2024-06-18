// WavyBox.tsx
import React from 'react';
import './WavyBoxStyles.css';

interface WavyBoxProps {
  title: string;
  content: string;
}

const WavyBox: React.FC<WavyBoxProps> = ({ title, content }) => {
  return (
    <div className="wavy-box">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default WavyBox;
