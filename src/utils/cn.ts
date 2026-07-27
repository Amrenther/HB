import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility: merges Tailwind class names, resolving conflicts.
 * Usage: cn('px-4 py-2', isActive && 'bg-white', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
