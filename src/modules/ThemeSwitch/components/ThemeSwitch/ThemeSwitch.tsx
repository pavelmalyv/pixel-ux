import useTheme from "@modules/ThemeSwitch/hooks/useTheme/useTheme";
import Icon from "@UI/Icon/Icon";
import WbSunny from "@material-symbols/svg-400/outlined/wb_sunny.svg?react";
import DarkMode from "@material-symbols/svg-400/outlined/dark_mode.svg?react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useTheme();

  return (
    <form>
      <label className="inline-flex relative has-focus-visible:outline-2">
        <input
          className="sr-only peer"
          type="checkbox"
          name="theme"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          aria-label="Темная тема"
        />
        <span
          data-transition-theme-change
          className="absolute top-1/2 -translate-y-1/2 w-5.5 aspect-square right-[calc(100%-_var(--spacing)*(5.5+2))] peer-checked:right-2 bg-accent-primary rounded-full transition-[right]"
        ></span>
        <span className="flex items-center gap-x-3 h-8 px-3 border border-stroke-secondary rounded-md bg-bg-primary">
          <Icon Icon={WbSunny} />
          <Icon Icon={DarkMode} />
        </span>
      </label>
    </form>
  );
};
export default ThemeSwitch;
