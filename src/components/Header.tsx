type Props = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const SunIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export function Header({ theme, onToggle }: Props) {
  const isDark = theme === "dark";

  return (
    <header className="calculator-header">
      <div className="header-top">
        <div style={{ width: 56 }} />

        <div className="murabuy-logo-mark">
          <span className="logo-m gold">M</span>
          <span className="logo-m white">M</span>
        </div>

        <button className="theme-toggle" onClick={onToggle} aria-label="Сменить тему">
          <span className="toggle-pill" data-dark={String(isDark)}>
            <span className="toggle-icon-inner toggle-icon-sun"><SunIcon /></span>
            <span className="toggle-dot" />
            <span className="toggle-icon-inner toggle-icon-moon"><MoonIcon /></span>
          </span>
        </button>
      </div>

      <div className="murabuy-name">MURABUY</div>

      <div className="murabuy-divider">
        <span className="divider-line" />
        <span className="divider-diamond" />
        <span className="divider-line" />
      </div>
    </header>
  );
}
