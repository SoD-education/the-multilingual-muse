import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import Level from '@/components/Level'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function NewsIcon(props) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M21.123 4.691 6.714 10H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.316l7.123 2.624C22.156 25.689 23 25.1 23 24V6c0-1.1-.844-1.689-1.877-1.309zM12 23H7v-2.895l5 1.842V23zm19-8a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-1.051 5.316c-.14.419-.53.684-.949.684l-3.316-1.052a1 1 0 1 1 .633-1.897l3 1a1 1 0 0 1 .632 1.265zm-4.898-9a1 1 0 0 1 .632-1.265l3-1a1 1 0 1 1 .633 1.897L26 12c-.419 0-.809-.265-.949-.684z"
        className="fill-teal-600  dark:fill-teal-300 "
      />

    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function News() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <NewsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Did you know?</span>
      </h2>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        <Level>
          <div level="A1">Woohoo! These words are very easy! Click again 😁</div>
          <div level="B1">There are three versions and clicking will cycle through them all. This nifty feature works on 90% of our site!</div>
          <div level="C1">You can simplify text on this site by clicking on it. This feature makes things easier for students at different stages of their English learning journey.
          <br />
          <br />
          Why not try it now by clicking on this text box!</div>
        </Level>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <Level>
            <div level="A1"><span className="text-teal-600 dark:text-teal-300">Multilingual Muse</span> helps you learn English.</div>
            <div level="B1"><span className="text-teal-600 dark:text-teal-300">Multilingual Muse</span> is your English learning resource.</div>
            <div level="C1"><span className="text-teal-600 dark:text-teal-300">Multilingual Muse</span> is your gateway to mastering English.</div>
          </Level>
        </h1>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-300">
          <Level>
            <div level="A1">Start learning English with <i>Multilingual Muse</i>! We help students learn English. You can find many resources and tools on our website. You can also meet people from all over the world who are learning English.</div>
            <div level="B1">Begin your English learning adventure with <i>Multilingual Muse</i>! Our site is designed to assist ESL students in improving their English skills. We offer a wide variety of resources, engaging tools, and a chance to connect with learners and native speakers globally.</div>
            <div level="C1">Embark on an exciting journey to master the English language with <i>Multilingual Muse</i>! Our platform is dedicated to helping ESL students like you unlock your full potential in English, providing a rich repository of resources, interactive tools, and a global community of learners and native speakers.</div>
          </Level>
        </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <News />
          </div>
        </div>
      </Container>
    </>
  )
}
