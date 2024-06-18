import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h2>お問い合わせ</h2>
      <p>お問い合わせ先の詳細情報をここに記述します。</p>
      <iframe 
        title="お問い合わせフォーム" 
        src="https://docs.google.com/forms/d/e/1FAIpQLScsH2GZijKbk1XyLo4w_neMQ3JVu6osROS-ThN-V-nJvKX-jA/viewform?embedded=true" 
        width="640" 
        height="800" 
        frameBorder="0"
        style={{ marginTop: '0', marginBottom: '0', marginLeft: '0', marginRight: '0' }}
        >読み込み中…</iframe>
    </div>
  );
}
export default Contact;
