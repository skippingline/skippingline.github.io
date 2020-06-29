import React from 'react';
import QRCode from 'qrcode.react';


const QRCodeGenerator = () => {
    return (

    <div>
        <div className="row center-xs QRCodeBoxHeader">
        <label style={{color:'#757575', fontSize:'35px'}}>Whole Foods Market</label>
            <label style={{color:'#757575', fontSize:'18px'}}>299 SE 3rd Ave, Miami, FL 33131</label>
            <label style={{color:'#757575', fontSize:'25px', paddingTop:'25px', fontWeight:'bolder'}}>1 Skip - 4:00PM</label>
        </div>

        <div className="row center-xs QRCodeBox">
            <div ClassName="col-xs-12
                            col-sm-12
                            col-md-12">               
                        <QRCode
                        id="123456"
                        value="77823"
                        size={200}
                        level={"H"}
                        includeMargin={true}
                        />
            </div>
        </div>

        <div className="row center-xs QRCodeBoxDescription col-xs-12">
        </div>

    </div>
      
            )
}



export default QRCodeGenerator;