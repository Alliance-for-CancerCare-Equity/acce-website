/**
 * Canonical impact statistics for ACCE.
 *
 * These headline numbers appear across the site — the homepage hero and urgency
 * ticker, the Who We Are stats block, and the impact calculator. Update the raw
 * values here and every surface stays in sync. Do not hardcode these figures in
 * components; import from this module instead.
 */
export const impactStats = {
  /** Cumulative patients ACCE has helped (shown as "70+"). */
  patientsHelped: 70,
  /** Total raised for care, in thousands of dollars (135 => "$135k+"). */
  amountRaisedThousands: 135,
  /** Partner hospitals. */
  partnerHospitals: 3,
  /** Year ACCE was founded. */
  foundedYear: 2022,
} as const

/** Pre-formatted display strings derived from {@link impactStats}. */
export const impactDisplay = {
  /** e.g. "70+" */
  patientsHelped: `${impactStats.patientsHelped}+`,
  /** e.g. "$135k+" */
  amountRaised: `$${impactStats.amountRaisedThousands}k+`,
  /** e.g. "3" */
  partnerHospitals: `${impactStats.partnerHospitals}`,
  /** e.g. "2022" */
  foundedYear: `${impactStats.foundedYear}`,
} as const
