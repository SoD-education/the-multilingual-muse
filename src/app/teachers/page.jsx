import { Container } from '@/components/Container'

export const metadata = {
  title: 'Teachers',
  description:
    'Classroom activities for teachers.',
}

export default function Teachers() {
  return (
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Activities for the Classroom.
      </h1>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {/* START OF LEFT COLUMN */}
        <div>
          {/* TPR: Vocab Practice */}
          <div className="mt-6 lg:mr-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"><span className="text-teal-600 dark:text-teal-300">TPR: Vocab Practice</span></h2>
            <div>
              <p className="pb-4"><b>Level:</b> Any.</p>
              <p className="pb-4"><b>Materials:</b> Definitions of target words on pieces of paper (1 per student).</p>
              <p className="pb-4"><b>Time:</b> 15+ minutes</p>
              <p className="pb-4"><b>Demo:</b> <a href="https://www.youtube.com/watch?v=7l87XOFLTQU" className="text-teal-600 dark:text-teal-300">YouTube</a></p>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-3/4">Activity</th>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-1/4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b">Assign each student in your class a different vocabulary word</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Have each student quickly learn the definition to their word</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Have students form one large circle so they are all side by side</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Start with the first student and have them loudly say their vocabulary word along with a quick motion for the word</td>
                    <td className="text-center border-b">15 sec</td>
                  </tr>
                  <tr>
                    <td className="border-b">After the student performs the action while saying the word, have the rest of the students repeat the word and motion together</td>
                    <td className="text-center border-b">15 sec</td>
                  </tr>
                  <tr>
                    <td className="border-b">Repeat until every student has given their word and motion</td>
                    <td className="text-center border-b">5 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Go around the circle one more time for practice</td>
                    <td className="text-center border-b">2 min</td>
                  </tr>
                  <tr>
                    <td className="border-b"><i>The fun part:</i> One student does their word+motion, then someone else’s. That person must do their own word+motion, then someone else’s. Students must remember each other’s words and motions as quickly as possible.</td>
                    <td className="text-center border-b">7+ min</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Word Grab Race */}
          <div className="mt-6 lg:mr-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"><span className="text-teal-600 dark:text-teal-300">Word Grab Race</span></h2>
            <div>
              <p className="pb-4"><b>Level:</b> Any.</p>
              <p className="pb-4"><b>Materials:</b> Target words on cards.</p>
              <p className="pb-4"><b>Time:</b> 15+ minutes</p>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-3/4">Activity</th>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-1/4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b">Attach the vocab cards to a whiteboard, or spread them out over a desk.</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Divide the class into teams.</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">The teacher says a word and the chosen student from each team runs to the front and grabs the correct card. Repeat until all cards have been nabbed. The team with the most at the end is the winner.</td>
                    <td className="text-center border-b">5+ min</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        {/* END OF LEFT COLUMN */}

        {/* START OF RIGHT COLUMN */}
        <div>
          {/* Whispers */}
          <div className="mt-6 lg:ml-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"><span className="text-teal-600 dark:text-teal-300">Whispers</span></h2>
            <div>
              <p className="pb-4"><b>Level:</b> Pre-int to Advanced.</p>
              <p className="pb-4"><b>Time:</b> 5+ minutes</p>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-3/4">Activity</th>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-1/4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b">Have the students stand or sit in a row</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Person 1 whispers a sentence to person 2, without anyone else hearing</td>
                    <td className="text-center border-b">10 seconds</td>
                  </tr>
                  <tr>
                    <td className="border-b">Person 2 then needs to whisper the message to person 3 etc until it reaches the end of the line</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">The last person then reveals the message to the class</td>
                    <td className="text-center border-b">10 seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* I went to the supermarket... */}
          <div className="mt-6 lg:ml-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"><span className="text-teal-600 dark:text-teal-300">I went to the supermarket...</span></h2>
            <div>
              <p className="pb-4"><b>Level:</b> Any.</p>
              <p className="pb-4"><b>Time:</b> 5+ minutes</p>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-3/4">Activity</th>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-1/4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b">Have the students stand or sit in a circle</td>
                    <td className="text-center border-b">1 min</td>
                  </tr>
                  <tr>
                    <td className="border-b">Person 1 starts by saying, ’I went to the supermarket and bought [<b>some bread</b>].’</td>
                    <td className="text-center border-b">10 seconds</td>
                  </tr>
                  <tr>
                    <td className="border-b">Person 2 then says, ’I went to the supermarket and bought <b>some bread</b> and [<b>an apple</b>].’</td>
                    <td className="text-center border-b">10 seconds</td>
                  </tr>
                  <tr>
                    <td className="border-b">Person 3 then says, ’I went to the supermarket and bought <b>some bread</b>, <b>an apple</b> and [<b>some cheese</b>].’</td>
                    <td className="text-center border-b">10 seconds</td>
                  </tr>
                  <tr>
                    <td className="border-b">Continue around the circle until someone is unable to remember all of the list.</td>
                    <td className="text-center border-b">5+ mins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* I went to the supermarket... */}
          <div className="mt-6 lg:ml-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"><span className="text-teal-600 dark:text-teal-300">Synonyms</span></h2>
            <div>
              <p className="pb-4"><b>Level:</b> Int to Advanced.</p>
              <p className="pb-4"><b>Time:</b> 5+ minutes</p>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-3/4">Activity</th>
                    <th className="bg-zinc-200 dark:bg-zinc-800 w-1/4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b">The teacher says a word and points to a student, who then gives a synonym for that word</td>
                    <td className="text-center border-b">5+ min</td>
                  </tr>
                  <tr>
                    <td className="border-b">
                      <ul>
                        <li className="list-disc ml-4"><i>Use antonyms instead.</i></li>
                        <li className="list-disc ml-4"><i>Student who answers can ask the next student.</i></li>
                        <li className="list-disc ml-4"><i>Add a time limit of 5 seconds to reply.</i></li>
                      </ul>
                    </td>
                    <td className="text-center border-b"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        {/* END OF RIGHT COLUMN */}

        </div>
      </div>

    </Container>
  )
}
