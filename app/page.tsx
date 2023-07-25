"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      entires.forEach((entire) => {
        console.log(entire);

        if (entire.isIntersecting) {
          entire.target.classList.add("show-elements");
        } else {
          entire.target.classList.remove("show-elements");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-elements");
    hiddenElements.forEach((element) => observer.observe(element));
  });

  return (
    <main className="p-5 text-center">
      <div className="px-8">
        <section className="scroll-animation">
          <a href="#secret">
            <h1 className="bg-red-500 inline-block text-gray-700 px-6 py-4 text-6xl rounded-lg cubano">
              Shush... SECRET
            </h1>
          </a>
        </section>
        <div className="md:px-10">
          <section className="scroll-animation hidden-elements" id="secret">
            <p className="text-4xl text-gray-300 px-4">
              Most browsers <span className="text-red-500">don't care</span> of
              you're privacy and sell it to advertisers to make money!
            </p>
            <p>
              <a
                href="#answer"
                className="block mt-10 text-2xl no-underline animate-spin"
              >
                NOOOOO!
              </a>
            </p>
          </section>
          <section className="scroll-animation hidden-elements" id="answer">
            <h1 className="bg-green-600 inline-block text-gray-700 px-6 py-4 text-6xl rounded-lg cubano">
              SOLUTION
            </h1>
            <div className="mt-10">
              <p className="text-4xl px-4">
                Sloth browser has nothing to do with you're personal
                information, thus{" "}
                <span className="text-green-400">making it safe</span>. The
                browser no way uses you're information in any manner.
              </p>
              <a
                href="#how"
                className="block animate-bounce mt-10 text-2xl no-underline"
              >
                But how?
              </a>
            </div>
          </section>
          <section className="scroll-animation hidden-elements" id="how">
            <h1 className="bg-blue-500 inline-block text-gray-700 px-6 py-4 text-6xl rounded-lg cubano">
              How
            </h1>
            <div className="mt-10">
              <p className="text-4xl px-4">
                The browser is{" "}
                <span className="text-blue-500">incognito by default</span>,
                thus making sure you're search history is not saved.
              </p>
              <p>
                <a href="#why" className="block mt-10 text-2xl no-underline">
                  Some reasons why
                </a>
              </p>
            </div>
          </section>
          <section className="scroll-animation hidden-elements" id="why">
            <h1 className="bg-yellow-500 inline-block text-gray-700 px-6 py-4 text-6xl rounded-lg cubano">
              Reasons
            </h1>
            <div className="grid mt-[100px] gap-y-10">
              <div className="hidden-elements reason grid grid-cols-2 gap-x-5">
                <div className="text-2xl flex flex-col justify-center">
                  <h2 className="text-5xl">Simple UI</h2>
                  <p>
                    Might be bad, but it's simple and not confusing. With this
                    simple UI you can focus on what you're doing not what the
                    browser want's you to do.
                  </p>
                </div>
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/104765117/255600277-cfb63d24-e0ae-4635-ba93-a915817a917b.png"
                    alt="screenshot of the browser"
                  />
                </div>
              </div>
              <div className="hidden-elements reason grid grid-cols-2 gap-x-5">
                <div>
                  <img
                    src="https://github.com/EzpieCo/ezpie/assets/104765117/a86b5559-7e39-4299-9b58-6165a9108135"
                    alt="some features"
                  />
                </div>
                <div className="text-2xl flex flex-col justify-center">
                  <h2 className="text-5xl">Same old features</h2>
                  <p>
                    Those same boring old features you see in every browser, but
                    with privacy in mind, we made sloth incognito by default,
                    not saving you'r browsing history.
                  </p>
                </div>
              </div>
              <div className="hidden-elements reason grid grid-cols-2 gap-x-5">
                <div className="text-2xl flex flex-col justify-center">
                  <h2 className="text-5xl">Trust</h2>
                  <p>
                    We hate hiding things. Our browser is made for you by you.
                    The sloth browser is free as in freedom, thus{" "}
                    <a
                      href="https://github.com/ezpieCo/sloth-browser"
                      className="text-blue-500 animate-pulse"
                      target="_blank"
                    >
                      the code is available
                    </a>{" "}
                    for everyone
                  </p>
                </div>
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/104765117/255895175-dc8a3fb7-587a-45c8-8b88-fda49e87538b.png"
                    alt="some features"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-animation hidden-elements">
            <a href="/versions/v1-beta/sloth-installer.exe" download>
              <h1 className="bg-gray-600 text-gray-700 text-6xl px-6 py-4 rounded-lg cubano hover:bg-gray-700 hover:text-gray-600 hover:scale-125 duration-500">
                Download
              </h1>
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
