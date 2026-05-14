import { useTheme } from '../../context/ThemeContext';

function Header() {
  const { colors } = useTheme();

  return (
    <h2>
      <span>
        <b style={{ color: colors.text }}>john gamboa</b>
      </span>
    </h2>
  );
}

export default Header;
