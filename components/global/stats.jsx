import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Stats({ block, dataBinding }) {
  // The image is hardcoded in this template, but we can make it dynamic if needed later.
  const imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80";

  return (
    <div className="relative bg-white" data-cms-bind={dataBinding}>
      <img
        alt=""
        src={imageUrl}
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            {/* The original component had two titles. We'll use the main one for the h2 and the suffix for the main paragraph. */}
            <h2 className="text-base/8 font-semibold text-indigo-600">{block.title}</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {block.title_suffix}
            </p>
            <div className="mt-6 text-lg/8 text-gray-600" dangerouslySetInnerHTML={{ __html: md.render(block.description) }} />
            
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {block.numbers?.map((stat, i) => (
                <div key={i} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm/6 text-gray-600">{stat.text}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.prefix}{stat.number}{stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
