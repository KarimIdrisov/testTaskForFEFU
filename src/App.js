import DashboardsLayout from './components/DashboardsLayout'
import 'antd/dist/antd.css'
import ScopusPage from './pages/ScopusPage';
import './App.css'

function App() {
  return (
    <DashboardsLayout>
      <ScopusPage />
    </DashboardsLayout>
  );
}

export default App;
