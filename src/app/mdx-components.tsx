import type { MDXComponents } from 'mdx/types'

export default function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        {...props}
        className="mt-10 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        {...props}
        className="mt-10 text-2xl font-semibold tracking-tight text-slate-900"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="mt-8 text-xl font-semibold tracking-tight text-slate-900"
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p {...props} className="mt-6 text-base/7 text-slate-700">
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a {...props} className="font-semibold text-blue-600 hover:text-blue-500">
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul {...props} className="mt-6 list-disc space-y-2 pl-6 text-base/7 text-slate-700">
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol {...props} className="mt-6 list-decimal space-y-2 pl-6 text-base/7 text-slate-700">
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li {...props} className="marker:text-slate-400">
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong {...props} className="font-semibold text-slate-900">
        {children}
      </strong>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        {...props}
        className="mt-8 border-l-4 border-slate-200 pl-4 italic text-slate-600"
      >
        {children}
      </blockquote>
    ),
    img: (props) => (
      // Keep MDX <img> for flexibility; style it nicely
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} className="mx-auto rounded-xl shadow-md" />
    ),
    ...components,
  }
}
