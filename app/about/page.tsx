import PageTitle from "../components/PageTitle";

// To Do / Check
// - Use daisyUI Rotate

const About = () => {
  return (
    <main className="min-h-full flex flex-col gap-12 mx-4 sm:mx-8">
      {/* DIV 1 */}
      {/* HERO SECTION */}
      <div className="flex flex-col gap-2">
        <PageTitle title={"About"} />
        <h2 className="">
          Hello! Welcome to my tiny corner of the internet. My name is Yin Chu.
          I am a photographer/hiker...
        </h2>
      </div>

      {/* DIV 2 */}
      {/* PARAGRAPH SECTION */}
      <div className="flex flex-col gap-4">
        <p>
          I have been into tech and technologies since a young age. However, I
          did not go down the usual path to becoming a software engineer. I
          dabbled with some front-end fun when I was about 15 years old. Then
          forgot about it.
        </p>
        <p>
          As part of my study programme &#40;International Business for
          Asia&#41; I did my internship at a coding academy in Kuala Lumpur,
          Malaysia. This is when I first realised the importance of software
          engineering. Or should I say, the potential it bore. Upon arriving
          back home, I decided getting into data science is a good way to build
          and increase skills in an industry that&apos;s soaring. Or so I
          thought...
          {/* bore? */}
        </p>
        <p>
          Although data science is cool and I did enjoy learning it, I soon
          realised it&apos;s really &#40;really&#41; challenging.
        </p>
        <p>
          A few months later I gave the holy trinity of web development a shot:
          HTML, CSS and JavaScript. Almost three years later &#40;including a
          break due to... well... life&#41; {/* three years, it's been? */}
          we&apos;re here. &#40;Another&#41; portfolio and getting really
          serious. Because a job in software engineering, that&apos;s what I
          aspire.
        </p>
        {/* trinity? */}
        <p>
          Besides building things with code, I like to hike, &#40;mountain&#41;
          bike, &#40;trail&#41; run and trek in the mountains in the summer. In
          the winter, you can find me on a pair of skis going down, or up when
          I&apos;m ski touring. The mountains, in general, are my happy place.
        </p>
      </div>
    </main>
  );
};

export default About;
