'use client';

import React, { createContext, useContext, useState } from 'react';

export const CefrContext = createContext();

export const useCefr = () => useContext(CefrContext);

export const CefrProvider = ({ children }) => {
  const [cefrLevel, setCefrLevel] = useState('C1');

  return (
    <CefrContext.Provider value={{ cefrLevel, setCefrLevel }}>
      {children}
    </CefrContext.Provider>
  );
};
