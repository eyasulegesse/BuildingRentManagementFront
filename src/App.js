import './App.css';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import FloorManagement from './Pages/FloorManagement';
import RoomTypeManagement from './Pages/RoomTypeManagement';
import Room from './Pages/RoomManagement';
import Report from './Pages/Report';
import RentManagement from './Pages/RentManagement';
import Renter from './Pages/RenterManagement';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/floor' element={<FloorManagement />} />
      <Route path='/roomtype' element={<RoomTypeManagement />} />
      <Route path='/room' element={<Room />} />
      <Route path='/report' element={<Report />} />
      <Route path='/rent' element={<RentManagement />} />
      <Route path='/renter' element={<Renter />} />
    </Routes>
  );
}

export default App;
