import { fileURLToPath } from 'url';

export const getPath = (relativePath: string): string => fileURLToPath(new URL(relativePath, import.meta.url));
