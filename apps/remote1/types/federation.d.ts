declare module 'host/UserContext' {
    export const UserProvider: React.FC;
  
    export const useUser: () => {
      user: { name: string } | null;
      login: (userData: { name: string }) => void;
      logout: () => void;
    };
  }