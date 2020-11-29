import React from 'react';
import { ContextValue } from './types';

const SongContext = React.createContext<ContextValue>(undefined);

export default SongContext;
