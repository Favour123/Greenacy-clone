// import React from 'react'
import Counter from "../components/layouts/homepage/Counter";
import EventSection from "../components/layouts/homepage/Event";
import Focus from "../components/layouts/homepage/focus/Focus";
import Blog from "../components/layouts/Blog/Blog";

function Home() {
   return (
      <>
         <Focus />
         <Counter />
         <Blog/>
         <EventSection />
      </>
   );
}

export default Home;
