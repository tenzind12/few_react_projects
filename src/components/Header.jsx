import logo from '../logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h1>TO DO LIST</h1>
            <div>
            <i className="fas fa-tasks"></i>
            <span>2 / 3</span>
            </div>
        </header>
    )
}

export default Header;