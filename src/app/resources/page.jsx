import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnki from '@/images/logos/anki.webp'
import logoLearnEnglish from '@/images/logos/british_council.webp'
import logoHowjsay from '@/images/logos/howjsay.webp'
import logoKapwing from '@/images/logos/kapwing.webp'

import Level from '@/components/Level'

const resources = [
  {
    name: 'Anki app',
    description:
      'Anki helps you remember all of the things you’re learning, while decreasing the time you spend studying. It uses spaced repetition, which is a proven technique for increasing your memory.',
    link: { href: 'https://apps.ankiweb.net/', label: 'apps.ankiweb.net' },
    logo: logoAnki,
  },
  {
    name: 'howjsay',
    description:
      'When said by a native speaker, "How do you say," is pronounced, "howjsay". This site helps you sound more like a native English speaker by offering excellent audio recordings of common phrases and words.',
    link: { href: 'https://howjsay.com/', label: 'howjsay.com' },
    logo: logoHowjsay,
  },
  {
    name: 'British Council: LearnEnglish',
    description:
      'This is a great site for practising reading, writing, listening and speaking. It has different levels: A1 (pre-intermediate), B1 (intermediate), and C1 (upper-intermediate).',
    link: { href: 'https://learnenglish.britishcouncil.org/skills/listening', label: 'britishcouncil.org' },
    logo: logoLearnEnglish,
  },
  {
    name: 'Mood Board Maker',
    description:
      'Grab images from your computer, phone or Google Images and create a mood board to visualise what you’ve learnt and help yourself remember and understand more.',
    link: { href: 'https://www.kapwing.com/studio/editor', label: 'kapwing.com' },
    logo: logoKapwing,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Resources',
  description: 'These are some mint ESL resources that will definitely help you on your learning journey.',
}

export default function Resources() {
  return (
    <SimpleLayout
      title="Sites and apps to help you learn English."
      intro={
        <Level>
          <p level="A1">These are some good websites and apps for learning English. Many of them are free!</p>
          <p level="B1">Explore these useful websites and apps to advance your English skills. We’ve tried to pick as many free ones as possible, so hopefully you’ll find them useful!</p>
          <p level="C1">These are comprehensive resources for enhancing your English proficiency. We’ve tried to pick as many free ones as possible, so hopefully you’ll find them useful!</p>
        </Level>
      }
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {resources.map((resource) => (
          <Card as="li" key={resource.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={resource.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={resource.link.href}>{resource.name}</Card.Link>
            </h2>
            <Card.Description>{resource.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{resource.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
