import React from 'react';

const Activity = ({ activity, timeRecquire, setTimerecquire }) => {
   const { name, image, id, time, description } = activity;
   const handleAddToList = () => {
      const prevTime = timeRecquire;
      const curtime = time;
      const newTime = prevTime + curtime;
      setTimerecquire(newTime);
   };
   return (
      <div>
         <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
               <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>{description}</p>
               <p className="font-bold">Time: Reacquired: {time}m</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={handleAddToList}>
                     Add to list
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activity;
