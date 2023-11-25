import { Container } from '@/components/Container'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Multilingual Muse.',
}

export default function Privacy() {
  return (
    <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Privacy Policy of Multilingual Muse
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">

            <span className="font-semibold">Effective Date:</span> <span>25/11/2023</span>

            <p>
            Welcome to Multilingual Muse. This Privacy Policy outlines our commitment to protecting the privacy and handling of personal information of our users, in compliance with the Australian Privacy Principles (APP) under the Privacy Act 1988 (Cth).
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Collection of Personal Information</h2>
            <p>
            Multilingual Muse may collect personal information in the course of your use of our website. This information can include, but is not limited to, your name, contact details, and any other information you choose to provide to us. The collection of this information will be transparent, and your consent will be sought where necessary.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Use of Personal Information</h2>
            <p>
            The personal information collected is used primarily to provide and enhance our services. This includes:
            </p>
            <ul>
                <li className="list-disc pl-3 ml-8">Personalising your experience on Multilingual Muse</li>
                <li className="list-disc pl-3 ml-8">Communicating with you about our services or offers</li>
                <li className="list-disc pl-3 ml-8">Conducting internal research and analysis to improve our platform</li>
            </ul>
            <p>
            We will not use or disclose your personal information for purposes other than those for which it was collected, except with your consent or as required by law.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Disclosure of Personal Information</h2>
            <p>
            Multilingual Muse may disclose your personal information to third parties in the following circumstances:
            </p>
            <ul>
                <li className="list-disc pl-3 ml-8">To service providers who assist us in operating our website and conducting our business, under confidentiality agreements</li>
                <li className="list-disc pl-3 ml-8">When complying with legal requirements, such as a court order</li>
                <li className="list-disc pl-3 ml-8">To protect the rights, property, or safety of Multilingual Muse, our users, or others</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Data Security</h2>
            <p>
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Access and Correction</h2>
            <p>
            Under the Privacy Act, you have the right to access and correct any personal information that we hold about you. If you would like to access or correct your personal information, please <a href="mailto:soundofdialup@gmail.com" className="text-teal-600 dark:text-teal-300">contact us</a>.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">Changes to Our Privacy Policy</h2>
            <p>
            Multilingual Muse reserves the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
            </p>

        </div>

    </Container>
  )
}
