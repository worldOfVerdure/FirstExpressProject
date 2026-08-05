import { fileURLToPath } from 'node:url';
import path from 'node:path';
// Step 1: Establish the safe base directory (the module's directory)
// baseDir is loosely: C:/Users/[...]/FirstExpressProject/
const baseDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Step 2–4: Resolve, normalize, validate, and return the safe path
export const getSafePath = (relativePath: string): string => {
  // Step 2: Normalize the user-supplied path against the base directory
  const resolved = path.resolve(baseDir, relativePath);
  // Step 3: Enforce the boundary — block directory traversal
  if (!resolved.startsWith(baseDir)) {
    throw new Error('Directory traversal attempt detected');
  }
  // Step 4: Return the validated, safe path
  return resolved;
};
