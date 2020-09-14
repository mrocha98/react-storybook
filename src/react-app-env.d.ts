/// <reference types="react-scripts" />
type WithChildren<T = unknown> = T & { children?: React.ReactNode }
