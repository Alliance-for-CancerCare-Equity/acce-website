type DateInput = string | Date

/**
 * Formats a content date for display.
 *
 * Dates are authored as date-only strings (e.g. "2026-02-01"), which JavaScript
 * parses as UTC midnight. Formatting in the local time zone then shifts the
 * shown day backwards for anyone behind UTC (Feb 1 -> Jan 31). Formatting in UTC
 * keeps the displayed date equal to the authored calendar date everywhere, and
 * pinning the locale keeps the static build output deterministic.
 */
export function formatDate(
  date: DateInput,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', { timeZone: 'UTC', ...options })
}
