import logo from '../../public/assets/images/logo.svg'

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Glucosync Logo" style={{ height: '40px', marginRight: '10px' }} />
                <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>Glucosync</h1>
            </div>
            <div className="nav-links" style={{
                display: 'flex',
                gap: '2rem',
            }}>
                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>About Us</a>
                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Login</a>
            </div>
        </nav>
    )
}

export default Navbar; 