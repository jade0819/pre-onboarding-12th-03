import { BrowserRouter } from 'react-router-dom';
import PageLayout from './layout/PageLaout';
import AppRoutes from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
