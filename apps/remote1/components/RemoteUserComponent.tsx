
import React from 'react';
//@ts-ignore
import { useUser } from 'host/UserContext';  // Import UserContext from host

export default function RemoteUserComponent() {
  const { user, login, logout } = useUser();

  return (
    <div>
      <h2>Remote User Component</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'Smith Milner' })}>Login</button>
      )}
    </div>
  );
};

