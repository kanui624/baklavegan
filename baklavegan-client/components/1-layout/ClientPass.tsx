// React
import { useState, useEffect } from 'react';

// React Types
import { ReactNode, FC } from 'react';

// Component Level Types
interface ClientPassProps {
  children: ReactNode;
}

const ClientOnly = ({ children }: any) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return children;
};

export default ClientOnly;
