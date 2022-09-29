import React from 'react';

const Activity = ({ activity }) => {
   console.log(activity);
   const { name, image, id, time, description } = activity;
   return (
      <div>
         <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
               <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>{description}</p>
               <p className="font-bold">Time: Reacquired:{time}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to list</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activity;
