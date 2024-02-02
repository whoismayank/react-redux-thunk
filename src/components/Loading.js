import React from 'react';

const LoadingComponent = () => {
    const spinnerStyle = {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3', // Light grey
        borderTop: '5px solid #3498db', // Blue color
        borderRadius: '50%',
        animation: 'spin 2s linear infinite'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    return (
        <div style={containerStyle}>
            <div style={spinnerStyle} />
        </div>
    );
};

export default LoadingComponent;
