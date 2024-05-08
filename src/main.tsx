import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LandingPage } from './modules/landing';
import { SigninPage } from './modules/auth/signin';
import { SignupPage } from './modules/auth/signup';
import { MyCoursesPage } from './modules/my-courses';
import { ThemeContextProvider } from './core/contexts/theme/ThemeContext';

export const App = () => (
  <>
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mycourses" element={<MyCoursesPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  </>
);
