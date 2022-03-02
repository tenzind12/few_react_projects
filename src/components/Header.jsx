import logo from "../logo.svg";

const Header = ({ isDone, totalTask }) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>TO DO LIST</h1>
      <div>
        <i className="fas fa-tasks"></i>
        <span>
          {isDone()} / {totalTask}
        </span>
      </div>
    </header>
  );
};

export default Header;
