import CssBaseline from "@mui/material/CssBaseline";
import Header from "./header";
import Footer from "./footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
