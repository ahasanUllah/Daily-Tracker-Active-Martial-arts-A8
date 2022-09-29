import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const Home = () => {
   const [activities, setActivities] = useState([]);
   useEffect(() => {
      fetch('data.json')
         .then((res) => res.json())
         .then((data) => setActivities(data));
   }, []);
   return (
      <div className="grid grid-cols-3 lg:grid-cols-5">
         <div className="m-5 col-span-2 md:grid md:grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-3">
            {activities.map((activity) => (
               <Activity activity={activity} />
            ))}
         </div>
         <div className="bg-primary col-span-1  ">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" className="w-12 rounded-full" />
            <h1 className="text-md font-bold">Ahsan Ullah</h1>
         </div>
      </div>
   );
};

export default Home;
