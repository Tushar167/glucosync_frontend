import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{
                backgroundColor: '#ffffff',
                padding: '2rem 0',
                textAlign: 'center',
                boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
                marginTop: '2rem',
            }}>
                <div style={{ marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0, color: '#333' }}>Glucosync</h2>
                    <p style={{ color: '#666' }}>Your health, our priority.</p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '1rem',
                }}>
                    <a href="#" style={{ color: '#333', textDecoration: 'none' }}>About Us</a>
                    <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Contact</a>
                    <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Privacy Policy</a>
                </div>
                <div style={{ color: '#666' }}>
                    <p>© {new Date().getFullYear()} Glucosync. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer; 