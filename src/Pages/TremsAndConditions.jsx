import React from 'react';
import { Link } from 'react-router-dom';

const TremsAndConditions = () => {
    return (
        <div>
            This is our Trems and Condition
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TremsAndConditions;