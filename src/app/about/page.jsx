import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

import Level from '@/components/Level'

export const metadata = {
  title: 'About',
  description:
    'Multilingual Muse provides a comprehensive, accessible, and engaging platform for ESL students worldwide to master English effectively and confidently.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            The story behind Multilingual Muse.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            <div>
              <Level>
                <div level="A1">We want to help people speak different languages and make friends around the world. We have a good website to help students learn English well and feel sure.</div>
                <div level="B1">At Multilingual Muse, we are dedicated to overcoming language challenges and building worldwide connections. Our goal is to offer a detailed, easy-to-use, and interesting platform for ESL students globally to learn English effectively and with confidence.</div>
                <div level="C1">At Multilingual Muse, we believe in breaking down language barriers and fostering global connections. Our mission is to provide a comprehensive, accessible, and engaging platform for ESL students worldwide to master English effectively and confidently.</div>
              </Level>
            </div>

            <div>
              <Level>
                <div level="A1">I am an English teacher (20 years). I started Multilingual Muse to help students learn English in a fun way. I like teaching and want to help students from many places speak English.</div>
                <div level="B1">As an experienced ESL teacher with nearly two decades in the field, I founded Multilingual Muse. My goal was to create a welcoming and energetic space for ESL learners. Through this platform, I share my knowledge and enthusiasm for language teaching, aiding students from various backgrounds to meet their language objectives.</div>
                <div level="C1">As a seasoned ESL teacher with almost 20 years of experience, I founded Multilingual Muse with a vision to create a supportive and dynamic environment for ESL learners. Through this platform, I aim to share my expertise and passion for language teaching, helping students from diverse backgrounds achieve their language goals.</div>
              </Level>
            </div>

            <div>
              <Level>
                <div level="A1">We want to make our website better. We will add new things to help you practice English in real life. We want to connect students with people who speak English well.</div>
                <div level="B1">Looking forward, we aim to enhance our platform with more advanced features. We plan to provide more chances for practical language use and build a worldwide network linking ESL learners with native English speakers.</div>
                <div level="C1">Looking ahead, we aspire to enrich our platform further with advanced features, create more opportunities for real-world language practice, and establish a global network that connects ESL students with native English speakers.</div>
              </Level>
            </div>

          </div>
        </div>
        {/* <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div> */}
      </div>
    </Container>
  )
}
