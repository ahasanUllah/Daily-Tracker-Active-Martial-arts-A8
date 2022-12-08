import React from 'react';

const Qna = () => {
   return (
      <div className="flex flex-col justify-start items-center  bg-white">
         <div className="w-1/2 ml-10 mt-24">
            <h1 className="text-4xl font-bold">Who React Works</h1>
            <p>
               <strong>Virtual DOM</strong> react creates a copy of dom whitch its called virtual dom. Html dom is
               pretty much an interface or API to modify nodes in it. That means whenever we want to change content we
               are modifiying the Dom which is quite expensive. Here comes the magic of virtual dom it just modifiy the
               specific dom whicth need no change so its very lightweight and fast.
               <strong>JSX</strong> is a syntactic sugar for the react. is allow us to write html code in a js file.
               Under the hood its compile the code into pure js using babel.
            </p>
         </div>

         <div className="w-1/2 ml-10 mt-24">
            <h1 className="text-4xl font-bold">Difference between props and stats</h1>
            <p>
               <strong>Props</strong> are used to pass data from one component to another. The <strong>State</strong> is
               a local data storage that is local to the component only and cannot be passed to other components.
            </p>
         </div>
         <div className="w-1/2 ml-10 mt-24">
            <h1 className="text-4xl font-bold">What is the usage of use effect other than fetching data?</h1>
            <p>
               One of the main purpose of use effect is to perform side effects in components. use effect is used to
               directly updating the Dom, and timers.
            </p>
         </div>
      </div>
   );
};

export default Qna;
