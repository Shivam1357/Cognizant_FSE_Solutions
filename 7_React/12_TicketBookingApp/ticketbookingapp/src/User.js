import React from 'react';

export default function User({ setIsLoggedIn }) {
    return (
        <div>
            <h2>Welcome, Registered User!</h2>
            <p>You now have access to book flights, check availability, and manage your bookings.</p>
            <ul>
                <li>Book a Flight</li>
                <li>Check Flight Status</li>
                <li>Manage Your Bookings</li>
            </ul>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
    );
}
