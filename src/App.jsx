import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website/Website';
import Admin from './views/admin/Admin';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Website />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<Website />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
