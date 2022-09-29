import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const Home = () => {
   const [activities, setActivities] = useState([]);
   const [timeRecquire, setTimerecquire] = useState(0);
   useEffect(() => {
      fetch('data.json')
         .then((res) => res.json())
         .then((data) => setActivities(data));
   }, []);
   return (
      <div className="grid grid-cols-3 lg:grid-cols-5">
         <div className="m-5 col-span-2 md:grid md:grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-3">
            {activities.map((activity) => (
               <Activity activity={activity} timeRecquire={timeRecquire} setTimerecquire={setTimerecquire} />
            ))}
         </div>
         <div className="bg-white col-span-1  ">
            <div className="flex justify-center items-center mt-8">
               <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" className="w-12 rounded-full" />
               <div className="ml-3">
                  <h1 className="text-lg font-bold">Ahsan Ullah</h1>
                  <p className="text-center text-sm">Black Belt</p>
               </div>
            </div>
            <div className="bg-base-100 flex justify-around items-center mt-8 mx-5 p-2 rounded-md">
               <div>
                  <h1 className="font-bold text-2xl">75</h1>
                  <p>weight</p>
               </div>
               <div>
                  <h1 className="font-bold text-2xl">6.5</h1>
                  <p>Height</p>
               </div>
               <div>
                  <h1 className="font-bold text-2xl">25</h1>
                  <p>years</p>
               </div>
            </div>
            <h1 className="text-xl font-bold mt-8 mx-5">Add a break</h1>
            <div className="bg-base-100 flex justify-around items-center mt-8 mx-5 p-4 rounded-md">
               <button className="bg-white rounded-full p-1">5m</button>
               <button className="bg-white rounded-full p-1">10m</button>
               <button className="bg-white rounded-full p-1">20m</button>
               <button className="bg-white rounded-full p-1">30m</button>
               <button className="bg-white rounded-full p-1">40m</button>
            </div>
            <h1 className="text-xl font-bold mt-8 mx-5">Activity Details</h1>
            <div className="bg-base-100 flex justify-around items-center mt-8 mx-5 p-4 rounded-md">
               <h1 className="font-semibold">Exercise Time</h1>
               <p>{timeRecquire}m</p>
            </div>
            <div className="bg-base-100 flex justify-around items-center mt-8 mx-5 p-4 rounded-md">
               <h1 className="font-semibold">Break Time</h1>
               <p>200m</p>
            </div>
         </div>
      </div>
   );
};

export default Home;
