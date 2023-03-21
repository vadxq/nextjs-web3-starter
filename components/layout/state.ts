'use client';

import { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const StartRouterChangeContext = createContext<() => void>(() => {});

export default StartRouterChangeContext;
