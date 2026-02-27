import { useTheme } from "../context/ThemeContext";

function Page() {
  const { theme } = useTheme();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

export default Page;