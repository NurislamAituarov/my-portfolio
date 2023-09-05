import { TLinks } from '@/types/interface';
import { createContext } from 'react';

export const Context = createContext<TLinks[] | null>(null);
