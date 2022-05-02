import { Routes, Route, Link} from 'react-router-dom';
import { LaunchList } from './components/LaunchList';
import { LaunchDetail} from './components/LaunchDetail';


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:id" element={<LaunchDetail />} />
      </Routes>
    </>
  );
}