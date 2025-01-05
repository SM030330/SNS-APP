import React, { useContext } from 'react';
import { SessionContext } from '../sessionProvider';
import { Navigate } from 'react-router-dom';

function Home() {
  const { currentUser } = useContext(SessionContext);

  if (currentUser == null) return <Navigate to="/signin" />;

  return <div>This is home</div>;
}

export default Home;