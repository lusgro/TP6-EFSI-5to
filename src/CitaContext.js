"use client"

import { createContext, useState, useEffect, useContext } from 'react';
import Cita from './models/Cita';

export const CitaContext = createContext();

export function CitaProvider({ children }) {
    const [citas, setCitas] = useState([]);

    useEffect(()=> {
        const citasGuardadas = localStorage.getItem('citas');
        setCitas(citasGuardadas ? JSON.parse(citasGuardadas) : []);
    }, [])

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas));
    }, [citas]);

    return (
        <CitaContext.Provider value={{ citas, setCitas }}>
            {children}
        </CitaContext.Provider>
    );
}