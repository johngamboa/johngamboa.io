import { ThemeProvider } from './context/ThemeContext';
import Index from './routes/index';

export default function App() {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}
