import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getVideos, VItem } from '@/lib/video'
import Image from 'next/image'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const techStack = [
  { name: 'React', image: 'static/images/cshar.png' },
  // { name: 'Next.js', image: '/images/nextjs-logo.png' },
  // { name: 'JavaScript', image: '/images/javascript-logo.png' },
  // { name: 'TypeScript', image: '/images/typescript-logo.png' },
  // { name: 'Node.js', image: '/images/nodejs-logo.png' },
  // { name: 'Python', image: '/images/python-logo.png' },
  // Add more technologies as needed
]

export const getStaticProps: GetStaticProps<{ videos: VItem[] }> = async () => {
  const videos = await getVideos()
  return { props: { videos: JSON.parse(JSON.stringify(videos)) } }
}

export default function TechStack({ videos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Technology Used - ${siteMetadata.author}`} description="My Tech Stack" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Tech Stack
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">My Tech Stack</p>
        </div>

        <div className="container py-12">
          {/* <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <Image
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h3 className="mt-4 text-xl font-bold">{tech.name}</h3>
              </div>
            ))}
          </section> */}
        </div>
      </div>
    </>
  )
}
