import React from 'react';

export default function Guest({ setIsLoggedIn }) {
    return (
        <div>
            <h2>Welcome, Guest!</h2>
            <p>Please log in to book your tickets and manage your travel.</p>
            <p>As a guest, you can:</p>
            <ul>
                <li>View available flights</li>
                <li>Search by destination</li>
                <li>Check flight times</li>
            </ul>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
    );
}
