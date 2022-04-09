import React from "react";


export const RocketCard = (props:any) => {
    return(
        //In the next div if i didn't specify the value of h on every screen there were some cards bigers than others:(
        <div className="rounded-xl sm:flex space-x-6 bg-white shadow-xl xl:h-72 lg:h-96 md:h-64 sm:h-72">
            <img src={props.images[0]} alt="art cover" loading="lazy" width="1000" height="667" className="sm:h-full w-full sm:w-5/12 object-cover rounded-lg"/>
            <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-sky-900">{props.name}</h4>
                    <p className="text-gray-600">{props.description}</p>
                </div>
            </div>
        </div>
    );
} 