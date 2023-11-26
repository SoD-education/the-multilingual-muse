import { Container } from '@/components/Container';

export function SimpleLayout({ title, intro, children, headingLevel = 'h1' }) {
  // Function to return the correct heading component based on the heading level
  const Heading = ({ level, ...props }) => {
    const Tag = level;
    return <Tag {...props} />;
  };

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <Heading
          level={headingLevel}
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          {title}
        </Heading>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-300">
          {intro}
        </div>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}
