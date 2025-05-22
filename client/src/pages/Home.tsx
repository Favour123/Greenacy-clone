// import React from 'react'
import Counter from "../components/layouts/homepage/Counter";
import EventSection from "../components/layouts/homepage/Event";
import Focus from "../components/layouts/homepage/focus/Focus";
import Blog from "../components/layouts/Blog/Blog";
import Hero from "../components/layouts/homepage/Hero/Hero";

function Home() {
   return (
      <>
         <Hero />
         <Focus />
         <Counter />
         <Blog />
         <EventSection />
      </>
   );
}

export default Home;
