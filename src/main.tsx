import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LandingPage } from './modules/landing';
import { SigninPage } from './modules/auth/signin';
import { ThemeContextProvider } from './core/contexts/theme/ThemeContext';

export const App = () => (
  <ThemeContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  </ThemeContextProvider>
);
