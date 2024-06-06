import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>ReservORT</h1>
            <div className="links">
                <Link href="/">Inicio</Link>
                <Link href="/reservas">Reservas</Link>
                <Link href="/about">Acerca de</Link>
                <Link href="/ayuda">Ayuda</Link>
            </div>
        </nav>
    );
}

export default Navbar;