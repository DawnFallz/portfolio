import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

interface FunFact {
  title: string;
  description: string;
}

const funFacts: FunFact[] = [
  {
    title: "I like building things from scratch",
    description: "There’s something incredibly satisfying about taking a vague idea and slowly turning it into something that actually works. I enjoy figuring out how all the little pieces fit together, experimenting with different approaches, and watching a project go from a blank screen to something I can actually use. Sometimes that means starting with a simple idea and accidentally turning it into a much bigger project than I originally planned. 😅",
  },
  {
    title: "I learn by making things",
    description: "Tutorials and documentation are great, but I understand a technology much better once I’ve actually used it in a real project. I like learning by experimenting, breaking things, figuring out why they broke, and trying again until everything finally clicks. The bugs are basically part of the curriculum at this point. Some lessons just happen to come with a very long error message. 🐛",
  },
  {
    title: "My entire setup is dark mode",
    description: "My editor, terminal, browser, phone, and pretty much every app I use live in dark mode. If something opens in a bright white interface, my first instinct is to look for the settings and find the darkest theme available. At this point, my entire setup has basically become one continuous dark-mode ecosystem. My screen has probably seen more purple and black than daylight. 🌌"
  }
]

export default function FunFacts() {
  return (
    <div id="fun-facts">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" Fun Facts About Him? "'
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

      <Title className="pl-3 mb-2">Fun Facts</Title>

      <div className="w-full p-3 grid grid-cols-1 gap-8">
        {funFacts.map((funFact, i) => (
          <div key={funFact.title} className="hover-scale">
            <div
              className="group border border-gradient p-4 space-y-2 md:space-y-4 text-center rounded-xl shadow-2xl shadow-shadow"
              data-aos="fade-up"
            >
              <div className="bg-zinc-800 rounded-t-xl">
                <h4 className="font-semibold text-primary-accent">
                  {i + 1}
                </h4>
              </div>

              <h3 className="w-full font-semibold border-b border-gradient shadow-lg shadow-shadow">{funFact.title}</h3>
              <p className="max-h-0 px-4 overflow-hidden text-zinc-400 text-sm opacity-0 transition-all duration-300 group-hover:max-h-52 group-hover:opacity-100 group-focus:max-h-52 group-focus:opacity-100">{funFact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
