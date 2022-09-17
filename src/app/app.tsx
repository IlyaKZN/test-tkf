import React, { useEffect } from 'react';
import Header from '../components/header/header';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/login-page';
import FriendsListPage from '../pages/friends-list/friends-list-page';
import { useDispatch } from '../types/hooks';
import getUserThunk from '../thunks/get-user-thunk';
import { getCookie } from '../utils/cookie-utils';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('accessToken');
    if (token && token?.length > 1) {
      dispatch(getUserThunk());
    }
  }, [dispatch])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/friends" element={<FriendsListPage />} />
      </Routes>
    </>
  );
}

export default App;
