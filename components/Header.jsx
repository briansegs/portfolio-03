import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>logo container</div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
