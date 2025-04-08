import React from 'react';

const Spinner2 = ({ size = '3rem', color = '#000' }) => {
    return (
        <div className="custom-spinner" style={{ width: size, height: size }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: color }}
            >
                <style>
                    {`
                        .spinner_b2T7 {
                            animation: spinner_xe7Q .8s linear infinite;
                        }

                        .spinner_YRVV {
                            animation-delay: -.65s;
                        }

                        .spinner_c9oY {
                            animation-delay: -.5s;
                        }

                        @keyframes spinner_xe7Q {
                            93.75%, 100% {
                                r: 3px;
                            }

                            46.875% {
                                r: .2px;
                            }
                        }
                    `}
                </style>
                <circle className="spinner_b2T7" cx="4" cy="12" r="3" />
                <circle className="spinner_b2T7 spinner_YRVV" cx="12" cy="12" r="3" />
                <circle className="spinner_b2T7 spinner_c9oY" cx="20" cy="12" r="3" />
            </svg>
        </div>
    );
};

export default Spinner2;
