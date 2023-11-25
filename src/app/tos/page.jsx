import { Container } from '@/components/Container'

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Multilingual Muse.',
}

export default function Tos() {
  return (
    <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Terms of Use for Multilingual Muse
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">

            <span className="font-semibold">Last Updated:</span> <span>25/11/2023</span>

            <p>
            Welcome to Multilingual Muse. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">1. Use of Our Service</h2>
            <p>
            Multilingual Muse provides a [brief description of services]. These services are provided for your personal and non-commercial use.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">2. User Conduct</h2>
            <p>
            When using Multilingual Muse, you agree to not:
            </p>
            <ul>
                <li className="list-disc pl-3 ml-8">Violate any laws, third party rights, or our policies.</li>
                <li className="list-disc pl-3 ml-8">Use our website or services to transmit harmful or disruptive communications.</li>
                <li className="list-disc pl-3 ml-8">Post false, inaccurate, misleading, defamatory, or libelous content.</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">3. Copyright and Content</h2>
            <p>
            The content on Multilingual Muse, including text, graphics, logos, and images, is the property of Multilingual Muse or its content suppliers and is protected by intellectual property laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission from us.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">4. Account Responsibility</h2>
            <p>
            If you create an account on Multilingual Muse, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">5. Privacy</h2>
            <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose information about you. By using Multilingual Muse, you agree to our collection, use, and disclosure of your information as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">6. Modifications to the Service and Prices</h2>
            <p>
            Multilingual Muse reserves the right at any time to modify or discontinue the service (or any part thereof) without notice at any time.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">7. Limitation of Liability</h2>
            <p>
            Multilingual Muse will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">8. Governing Law</h2>
            <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the state of Queensland, Australia, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">9. Changes to Terms of Use</h2>
            <p>
            We reserve the right to update or modify these Terms of Use at any time without prior notice. Your use of Multilingual Muse following any such change constitutes your agreement to follow and be bound by the Terms of Use as updated.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">10. Contact Information</h2>
            <p>
            For any questions about these Terms of Use, please <a href="mailto:soundofdialup@gmail.com" className="text-teal-600 dark:text-teal-300">contact us</a>. 
            </p>

        </div>

    </Container>
  )
}
