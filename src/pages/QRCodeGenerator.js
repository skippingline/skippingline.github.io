import React from 'react';
import QRCode from 'qrcode.react';


const QRCodeGenerator = () => {
    return (

    <div>

            <div className="row center-xs col xs-12">
                <label style={{color:'#757575', fontSize:'35px', fontWeight:'bolder', paddingTop:'55px'}}>1 Skip Confirmed!</label>
            </div>

            <div className="row center-xs col xs-12">
                <label style={{color:'#757575', fontSize:'25px', paddingTop:'25px', fontWeight:'bolder', paddingTop:'45px'}}>Whole Foods Market</label>
            </div>

            <div className="row center-xs col xs-12">
                <label style={{color:'#757575', fontSize:'12px', fontWeight:'bolder'}}>299 SE 3rd Ave, Miami, FL 33131</label>
            </div>

            <div className="row center-xs col xs-12">
                <label style={{color:'#757575', fontSize:'15px', fontWeight:'bolder'}}>4:00-4:30 PM</label>
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
    </div>
      
            )
}



export default QRCodeGenerator;