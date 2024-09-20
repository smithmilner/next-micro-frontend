import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { UserProvider } from '../components/UserContext';

//@ts-ignore
const RemoteUserComponent = dynamic(() => import('remote/RemoteUserComponent'), {
  ssr: false, 
});

export default function UserPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <UserProvider>
      <h1>User Page</h1>
      <RemoteUserComponent />
    </UserProvider>
  );
}
