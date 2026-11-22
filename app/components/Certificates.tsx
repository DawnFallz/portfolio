import CertificateCarousel from '@/components/ui/CertificateCarousel';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';

interface Certificate {
  title: string;
  href: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: 'SoloLearn - Introduction to HTML',
    href: 'https://www.sololearn.com/certificates/CC-J1LFRRZP',
    image: '/images/certificates/sololearn-introduction-to-html.webp',
  },
  {
    title: 'SoloLearn - Introduction to CSS',
    href: 'https://www.sololearn.com/certificates/CC-ORZWELWE',
    image: '/images/certificates/sololearn-introduction-to-css.webp',
  },
  {
    title: 'SoloLearn - Introduction to JavaScript',
    href: 'https://www.sololearn.com/certificates/CC-8BNQYYAY',
    image: '/images/certificates/sololearn-introduction-to-javascript.webp',
  },
  {
    title: 'SoloLearn - JavaScript Intermediate',
    href: 'https://www.sololearn.com/certificates/CC-XDVXR1E8',
    image: '/images/certificates/sololearn-javascript-intermediate.webp',
  },
  {
    title: 'SoloLearn - Introduction to Python',
    href: 'https://www.sololearn.com/certificates/CC-2SID3OCX',
    image: '/images/certificates/sololearn-introduction-to-python.webp',
  },
  {
    title: 'SoloLearn - Python Intermediate',
    href: 'https://www.sololearn.com/certificates/CC-EIBXZVYN',
    image: '/images/certificates/sololearn-python-intermediate.webp',
  },
  {
    title: 'SoloLearn - Python Developer',
    href: 'https://www.sololearn.com/certificates/CC-TNZ6AS7B',
    image: '/images/certificates/sololearn-python-developer.webp',
  },
  {
    title: 'SoloLearn - Introduction to Java',
    href: 'https://www.sololearn.com/certificates/CC-LE6LEKG2',
    image: '/images/certificates/sololearn-introduction-to-java.webp',
  },
  {
    title: 'SoloLearn - Tech for Everyone',
    href: 'https://www.sololearn.com/certificates/CC-OEQ5XCHO',
    image: '/images/certificates/sololearn-tech-for-everyone.webp',
  },
  {
    title: 'SoloLearn - Prompt Engineering',
    href: 'https://www.sololearn.com/certificates/CC-GNBZIO7Z',
    image: '/images/certificates/sololearn-prompt-engineering.webp',
  },
  {
    title: 'SoloLearn - SEO with AI',
    href: 'https://www.sololearn.com/certificates/CC-YKZXUI42',
    image: '/images/certificates/sololearn-seo-with-ai.webp',
  },
  {
    title: 'freeCodeCamp - Legacy Responsive Web Design V8',
    href: 'https://freecodecamp.org/certification/dawnfallz/responsive-web-design',
    image:
      '/images/certificates/freecodecamp-legacy-responsive-web-design-v8.webp',
  },
];

export default function Certificates() {
  return (
    <div id="certificates">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" May I See His Certificates? "'
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

      <Title className="pl-2">Certificates</Title>

      {/* Carousel */}
      <CertificateCarousel
        certificates={certificates}
        autoPlay
        interval={5000}
        pauseOnHover
        loop
        initialIndex={0}
        showArrows
        showDots
        ariaLabel="Certificates"
      />
    </div>
  );
}
