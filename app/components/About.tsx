import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

export default function About() {
  return (
    <div className="prose mx-auto" id="about">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text="&quot; Who Is This? &quot;"
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover={true}
          disabled={false}
        />
      </h1>

      <Title>About Me</Title>

      <div className="space-y-4">
        <p data-aos="fade-up">
          I&apos;m DawnFallz. I&apos;m a self-taught full-stack developer
          passionate about web development, backend systems, and modern
          technologies.
        </p>

        <p data-aos="fade-up">
          <strong>Why did I start coding?</strong> I was just a regular person
          browsing the web when one question suddenly popped up in my mind:
        </p>

        <blockquote data-aos="fade-up">
          &quot;How are these websites made? How do they work? What really are
          they?&quot;
        </blockquote>

        <p data-aos="fade-up">
          And that curiosity made me unknowingly stepped into the world of tech
          and learned languages like Python, JavaScript and eventually,
          full-stack development. I also learned Linux. It was fun but
          exhausting. Since then, I&apos;ve enjoyed building things and learning
          how software works behind the scenes.
        </p>

        <p data-aos="fade-up">
          <strong>What do I enjoy building?</strong> I enjoy creating full-stack
          web applications where I can work on both the frontend and backend. I
          like designing user interfaces, building APIs, working with databases
          and turning ideas into real, functional websites.
        </p>
      </div>
    </div>
  );
}
