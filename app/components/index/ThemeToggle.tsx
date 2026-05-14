import { useTheme } from '../../context/ThemeContext';

function SunIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      <path d="M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10 7 10 0 1 1-10-10" fill={color} />
    </svg>
  );
}

function ThemeToggle() {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <button
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          width: '60px',
          height: '30px',
          borderRadius: '15px',
          border: `2px solid ${colors.text}`,
          background: isDark ? '#1c1c1c' : '#fefefe',
          cursor: 'pointer',
          position: 'relative',
          padding: '0 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          outline: 'none',
          transition: 'background 0.3s',
        }}
      >
        <span
          style={{
            opacity: isDark ? 0.3 : 1,
            transition: 'opacity 0.3s',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SunIcon color={isDark ? '#b8b8b8' : '#949494'} />
        </span>
        <span
          style={{
            opacity: isDark ? 1 : 0.3,
            transition: 'opacity 0.3s',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MoonIcon color={isDark ? '#b8b8b8' : '#949494'} />
        </span>
        <div
          style={{
            position: 'absolute',
            left: isDark ? 'calc(100% - 24px)' : '4px',
            transition: 'left 0.25s ease',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: colors.text,
            pointerEvents: 'none',
          }}
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
