import React from 'react';

const Home = () => {
  return (
    <>
      <main>
        <section className="row bg-gray-100 px-16 py-16">
          <div className="container grid grid-cols-1 justify-between lg:grid-cols-2 gap-8 items-center">
            <div className="hero-content text-center lg:text-left">
              <p className="mb-6 lg:mb-12">We are the World Best IT Company</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to Domex Technical</h1>
              <p className="mb-8 lg:mb-12">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Domex Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                <a href="/contact">
                  <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 lg:mr-4">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img src="/images/home.png" alt="coding together" className="w-full lg:w-3/4 h-auto" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

