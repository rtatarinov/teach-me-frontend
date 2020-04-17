import React, { useState } from 'react';

const CollapsedHeader = React.createContext();

const CollapsedHeaderProvider = ({ children }) => {
  const [isCollapsedHeader, setIsCollapsedHeader] = useState(false);
  const value = {
    isCollapsedHeader,
    setIsCollapsedHeader,
  };

  return (
    <CollapsedHeader.Provider value={value}>
      {children}
    </CollapsedHeader.Provider>
  );
};

export { CollapsedHeader, CollapsedHeaderProvider };
