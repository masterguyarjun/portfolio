import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export function formatDateRange(start: Date | string, end?: Date | string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const isPresent = !end || end === 'Present';

  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endStr = isPresent ? 'Present' : endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return `${startStr} – ${endStr}`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
