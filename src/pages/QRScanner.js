import React from 'react';
import QrReader from 'react-qr-reader';
 
const QRScanner = () => {

    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }

export default QRScanner;