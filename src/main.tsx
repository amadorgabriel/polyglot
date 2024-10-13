import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LandingPage } from './modules/landing';
import { SigninPage } from './modules/auth/signin';
import { SignupPage } from './modules/auth/signup';
import { MyCoursesPage } from './modules/my-courses';
import { ComingSoon, Error401, Error404 } from './modules/error';
import { ThemeContextProvider } from './core/contexts/theme/ThemeContext';

export const App = () => (
  <>
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<ComingSoon />} />

          <Route path="/main" element={<ComingSoon />} />
          <Route path="/signup" element={<ComingSoon />} />

          <Route path="*" element={<Error404 />} />

          {/*
          <Route path="/" element={<ComingSoon />} />
          <Route path="/course/id" element={<ComingSoon />} />

          <Route path="/401" element={<Error401 />} />
          */}
        </Routes>
      </Router>
    </ThemeContextProvider>
  </>
);
