import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { APP_COLOR_MAIN, BG_COLOR_SECONDARY, TEXT_COLOR_MAIN, TEXT_COLOR_SECONDARY } from '../configs/configs';

const SectionOne = () => {
  return (
    <Section isFirstSection={true}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
            <p className={`mt-4 text-[${TEXT_COLOR_SECONDARY}]`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
            </p>
            <a
              href="#"
              className={`mt-8 inline-flex items-center rounded border border-[${APP_COLOR_MAIN}] bg-[${APP_COLOR_MAIN}] px-8 py-3 text-[${TEXT_COLOR_MAIN}] hover:bg-transparent hover:text-[${APP_COLOR_MAIN}] focus:outline-none focus:ring active:text-[${APP_COLOR_MAIN}]`}
            >
              <span className="text-sm font-medium"> Get Started </span>
              <svg className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

const SectionTwo = () => {
  const FEATURES_LIST = [
    {
      id: '1',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    },
    {
      id: '2',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    },
    {
      id: '3',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    },
    {
      id: '4',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    },
    {
      id: '5',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    },
    {
      id: '6',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?'
    }
  ];

  return (
    <Section>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>
          <p className={`mt-4 text-[${TEXT_COLOR_SECONDARY}]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {FEATURES_LIST.map((item) => (
            <div key={item.id} className="flex items-start">
              <span className={`flex-shrink-0 rounded-lg bg-[${BG_COLOR_SECONDARY}] p-4`}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div className="ml-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className={`mt-1 text-sm text-[${TEXT_COLOR_SECONDARY}]`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <SectionOne />
          <SectionTwo />
          <div className="text-center bg-primary-bg">
            {/* bg-secondary-color  */}
            <h1>Hello World</h1>
          </div>
          <div className="text-center theme-swiss bg-primary-bg text-primary-text">
            {/* bg-secondary-color  */}
            <h1>Hello World</h1>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Page;
