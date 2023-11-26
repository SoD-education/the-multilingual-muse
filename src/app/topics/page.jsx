import { Card } from '@/components/Card'
import Level from '@/components/Level'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TopicsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Topic({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Topics',
  description: 'Learn more about specific topics through online lessons and videos.',
}

export default function Topics() {
  return (
    <SimpleLayout
      title="Learn more about specific topics."
      intro={
        <Level>
          <p level="A1">Are you studying food, animals, health, or how to get a job? These websites will help you learn more about lots of things!</p>
          <p level="B1">Regardless of your study area, whether it’s food, animals, health, or job applications, these additional learning materials can significantly aid your understanding and skill practice.</p>
          <p level="C1">Whether you’re studying food, animals, health, or how to apply for a job, these extra learning materials will go a long way to helping you understand more and practise your skills.</p>
        </Level>
      }
    >
      <div className="space-y-20">
        <TopicsSection title="Jobs">
          <Topic title="Videos of Example Job Interviews">
            <ul>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=B7SoNGxJVc8" className="text-teal-600 dark:text-teal-300">Job Interview Etiquette</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=HG68Ymazo18" className="text-teal-600 dark:text-teal-300">Top Interview Tips</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=naIkpQ_cIt0" className="text-teal-600 dark:text-teal-300">I Want to Learn (ESL)</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=FEJswfDbXyw" className="text-teal-600 dark:text-teal-300">Bad Job Interview Clips</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=Uo0KjdDJr1c" className="text-teal-600 dark:text-teal-300">THE Millennial Job Interview</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=Pt2ZZBZ4Mow" className="text-teal-600 dark:text-teal-300">I Have Problems</a> (example of a bad interview)</li>
            </ul>
          </Topic>

          <Topic title="Videos Showing How to Answer Specific Questions">
            <ul>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=fPWmTm6XRBA" className="text-teal-600 dark:text-teal-300">Tell Me About Yourself</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=yzWo8EXsfTs" className="text-teal-600 dark:text-teal-300">What is your Weakness?</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=n0f86_T8YZQ" className="text-teal-600 dark:text-teal-300">Where Do You See Yourself in 5 Years?</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=WQ6snVCCgt4" className="text-teal-600 dark:text-teal-300">Why Should We Hire You?</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=WChxbBSlWnQ" className="text-teal-600 dark:text-teal-300">What are your Salary Expectations?</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=OvvTD5rtnNA" className="text-teal-600 dark:text-teal-300">Questions to Ask at the End of an Interview</a></li>
            </ul>
          </Topic>

          <Topic title="Videos Showing How to Make a Good Impression">
            <ul>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=JrbnTZPjg0k" className="text-teal-600 dark:text-teal-300">12 Things That Ruin a First Impression Immediately</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=PCWVi5pAa30" className="text-teal-600 dark:text-teal-300">7 body language tips to impress at your next job interview</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=Si4GLeQoqLA" className="text-teal-600 dark:text-teal-300">How To Ace Your Job Interview Over Zoom</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=opMoECG3mCg" className="text-teal-600 dark:text-teal-300">Advice for your university interview on Zoom</a></li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.youtube.com/watch?v=uAHb6uzDVrU" className="text-teal-600 dark:text-teal-300">What to do with your hands during a job interview</a></li>
            </ul>
          </Topic>
        </TopicsSection>

        <TopicsSection title="News">
          <Topic title="The News in Australia">
            <ul>
              <li className="list-disc pl-3 ml-4"><a href="https://www.abc.net.au/news/qld" className="text-teal-600 dark:text-teal-300">ABC News</a>: A free online news resource, which is a great way to practise your reading skills.</li>
            </ul>
          </Topic>
        </TopicsSection>

        <TopicsSection title="Idioms">
          <Topic title="Idioms that use: ’word’">
            <ul>
              <li className="list-disc pl-3 ml-4"><a href="https://www.abc.net.au/education/learn-english/more-word-idioms/13118116" className="text-teal-600 dark:text-teal-300">ABC Education</a>: A modest collection of ’word’ idioms that are commonly used in Australia. </li>
              <li className="list-disc pl-3 ml-4"><a href="https://www.oxfordlearnersdictionaries.com/definition/english/word_1?q=word" className="text-teal-600 dark:text-teal-300">Oxford Learner’s Dictionaries</a>: Contains even more ’word’ idioms. Be sure to expand the ’Extra Examples’ sections if you really want to blow your mind! </li>
            </ul>
          </Topic>
        </TopicsSection>

      </div>
    </SimpleLayout>
  )
}
