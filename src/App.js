import DashboardsLayout from './components/DashboardsLayout'
import 'antd/dist/antd.css'
import ScopusPage from './pages/ScopusPage';

function App() {
  return (
    <DashboardsLayout>
      <ScopusPage />
    </DashboardsLayout>
  );
}

export default App;
