"use client"

import { createContext, useState } from 'react';
import Cita from './models/Cita';

export const CitaContext = createContext();

export function CitaProvider({ children }) {
    const [citas, setCitas] = useState([]);

    return (
        <CitaContext.Provider value={{ citas, setCitas }}>
            {children}
        </CitaContext.Provider>
    )
}