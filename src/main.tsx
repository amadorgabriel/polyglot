import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LandingPage } from './modules/landing';
import { rootStore } from './core/config/redux';
import { SigninPage } from './modules/auth/signin';
import { SignupPage } from './modules/auth/signup';
import { MyCoursesPage } from './modules/my-courses';
import { ComingSoon, Error401, Error404 } from './modules/error';
import { ThemeContextProvider } from './core/contexts/theme/ThemeContext';
import { AuthRoleAlternativesContextProvider } from './core/contexts/auth/role-alternatives';
import { queryClient, QueryClientProvider } from './core/config/react-query';

export const App = () => (
  <>
    <Provider store={rootStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <AuthRoleAlternativesContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/courses" element={<ComingSoon />} />
                <Route path="/course/:courseId" element={<ComingSoon />} />

                <Route path="*" element={<Error404 />} />

                <Route path="/401" element={<Error401 />} />
              </Routes>
            </Router>
          </AuthRoleAlternativesContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </Provider>
  </>
);
