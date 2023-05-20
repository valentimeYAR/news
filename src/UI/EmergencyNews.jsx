import React from 'react';

const EmergencyNews = ({children}) => {
    const styles = {
        backgroundColor: '#E54545',
        color: 'white',
        padding: '5px 7px',
        fontWeight: 'bold'
    }
    return (
        <span style={{...styles}}>
            {children}
        </span>
    );
};

export default EmergencyNews;