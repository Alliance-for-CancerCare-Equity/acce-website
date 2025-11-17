"use client"

import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'

const loaders: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  'turning-breath-into-hope': () =>
    import('@/content/blogs/turning-breath-into-hope.mdx'),
}

export default function PostProseClient({ slug }: { slug: string }) {
  const [Comp, setComp] = useState<ComponentType<any> | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const importer = loaders[slug]
    if (!importer) {
      setErr('Post not found')
      return
    }
    importer()
      .then((m) => {
        if (mounted) setComp(() => m.default)
      })
      .catch((e) => {
        if (mounted) setErr(e?.message || 'Failed to load post')
      })
    return () => {
      mounted = false
    }
  }, [slug])

  if (err) return <div className="text-slate-500">{err}</div>
  if (!Comp) return <div className="text-slate-500">Loading…</div>
  return <Comp />
}
