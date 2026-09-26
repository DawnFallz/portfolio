import CountUp from '@/components/ui/CountUp';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

interface Stat {
  num: number;
  text: string;
  description: string;
}

const stats: Stat[] = [
  {
    num: 1,
    text: 'Years of Coding Experience',
    description:
      'A year of turning ideas into clean, functional digital experiences.',
  },
  {
    num: 10,
    text: 'Projects Completed',
    description:
      'From concepts to polished builds, bringing ideas to life through code.',
  },
  {
    num: 20,
    text: 'Technologies Learnt',
    description:
      'Continuously exploring modern tools, frameworks, and technologies.',
  },
  {
    num: 100,
    text: 'Hours of Coding',
    description:
      'Countless hours spent building, experimenting, debugging, and learning.',
  },
];

export default function Stats() {
  return (
    <div id="stats">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" What Has He Achieved So Far? "'
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

      <Title className="pl-2">Stats</Title>

      <div className="w-full p-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat) => (
          <div key={stat.num} className="hover-scale">
            <div
              className="border border-gradient p-4 space-y-2 md:space-y-4 text-center rounded-xl shadow-2xl shadow-shadow"
              data-aos="fade-up"
            >
              <div className="bg-zinc-800 rounded-t-xl">
                <h3 className="text-2xl font-bold text-gradient">
                  <CountUp
                    from={0}
                    to={stat.num}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                    delay={0.2}
                  />
                  +
                </h3>
                <h4 className="font-slab">{stat.text}</h4>
              </div>
              <p className="border-t border-gradient pt-2 text-sm text-zinc-400">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
