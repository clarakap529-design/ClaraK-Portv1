export const SESSION_UNLOCK_KEY = 'portfolio_project_access_unlocked';

const UNLOCK_EVENT = 'portfolio-project-access-unlocked';

export function isProjectAccessUnlocked(): boolean {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(SESSION_UNLOCK_KEY) === 'true';
}

export function setProjectAccessUnlocked(): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(SESSION_UNLOCK_KEY, 'true');
  window.dispatchEvent(new Event(UNLOCK_EVENT));
}

export function subscribeProjectAccessUnlocked(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(UNLOCK_EVENT, callback);
  return () => window.removeEventListener(UNLOCK_EVENT, callback);
}
