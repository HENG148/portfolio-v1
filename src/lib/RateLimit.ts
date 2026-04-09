const ipMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 1000
const MAX_REQUEST = 3;

export function rateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = ipMap.get(ip)

  if (!record || now > record.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUEST - 1}
  }

  if (record.count >= MAX_REQUEST) {
    return { allowed: false, remaining: 0 };
  }
  record.count++;
  return { allowed: true, remaining: MAX_REQUEST - record.count}
}