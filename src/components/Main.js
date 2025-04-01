import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { BookingPage } from '../pages/Booking';

export const Main = () => {
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};
