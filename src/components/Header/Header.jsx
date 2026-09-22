import { Sun, Moon } from "lucide-react";
import "./Header.css";
function Header({ theme, setTheme }) {
  const onClickTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <header>
      <div className="logo">T O D O</div>
      <div className="icon">
        {theme === "dark" ? (
          <Sun className="theme-icon" onClick={onClickTheme} />
        ) : (
          <Moon className="theme-icon" onClick={onClickTheme} />
        )}
      </div>
    </header>
  );
}

export default Header;
