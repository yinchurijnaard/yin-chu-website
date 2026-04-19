// To Do / Check
// Use react-typed to animate hello in Dutch, English and (Swiss) German
// Is using an <h1> tag semantically logical to say "hello", instead of using it for the actual title or "My name is..."

export default function Home() {
  return (
    <main className="p-4 space-y-8 text-center">
      <h1 className="text-3xl">hallo / hello / grüezi</h1>
      <h2 className="text-6xl">I&apos;m Yin Chu</h2>
      <h3 className="text-3xl">
        I&apos;m a software engineer from the Netherlands 🇳🇱
        <br />
        Currently based in Switzerland 🇨🇭
      </h3>
    </main>
  );
}
