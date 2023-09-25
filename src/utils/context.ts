import { TLinks } from '@/types/interface';
import { createContext } from 'react';

interface IContext {
  links?: TLinks[];
  skillsOpen?: boolean;
  setSkillsOpen?: any;
}

export const Context = createContext<IContext | null>(null);
