import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LandingPage } from './modules/landing';
import { SigninPage } from './modules/auth/signin';
import { ThemeContextProvider } from './core/contexts/theme/ThemeContext';
import { SignupPage } from './modules/auth/signup';

export const App = () => (
  <ThemeContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  </ThemeContextProvider>
);
