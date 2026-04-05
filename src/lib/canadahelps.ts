const CAMPAIGN_URL =
  'https://www.canadahelps.org/en/pages/no-patient-left-behind/'

export type CampaignData = {
  raised: number
  goal: number
  status: string
}

const FALLBACK: CampaignData = { raised: 0, goal: 50000, status: 'ACTIVE' }

export async function fetchCampaignData(): Promise<CampaignData> {
  try {
    const res = await fetch(CAMPAIGN_URL, {
      next: { revalidate: 900 }, // cache 15 minutes
    })
    if (!res.ok) return FALLBACK

    const html = await res.text()

    // CanadaHelps embeds campaign data as __INITIAL_DATA__ in a script tag
    const match = html.match(
      /fundraisingPage\s*:\s*(\{[\s\S]*?\})\s*,\s*\n\s*viewLanguage/,
    )
    if (!match?.[1]) return FALLBACK

    const data = JSON.parse(match[1])
    return {
      raised: parseFloat(data.totalAmountRaised) || 0,
      goal: parseFloat(data.goalAmount) || 50000,
      status: data.status || 'ACTIVE',
    }
  } catch {
    return FALLBACK
  }
}
