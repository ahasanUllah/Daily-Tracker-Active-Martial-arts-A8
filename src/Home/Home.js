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
      <div className="grid grid-cols-6 ">
         <div className="col-span-5 ml-80 mt-10 grid grid-cols-3">
            {activities.map((activity) => (
               <Activity activity={activity} />
            ))}
         </div>
         <div className="bg-primary">
            <h1>This is sidebar</h1>
         </div>
      </div>
   );
};

export default Home;
