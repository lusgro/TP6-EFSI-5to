"use client"
import { useContext } from 'react';
import { CitaContext } from '@/CitaContext';

export default function useCitas() {
    const { citas, setCitas } = useContext(CitaContext);

    return { citas, setCitas };
}