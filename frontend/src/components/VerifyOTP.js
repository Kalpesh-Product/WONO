
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function VerifyOTP() {
    const [token, setTokens] = useState();

    const customInput = ({events, props}) => <input {...events} {...props} type="text" className="custom-otp-input" />;

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--surface-500);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--primary-color);
                    }
                `}
            </style>

            <InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
        </div>
    );
}
        