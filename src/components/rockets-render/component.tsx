import React, { FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex-rockets/service";
import { RocketCard } from "../rocket-card/component";
// import { MainDiv } from "./componentStyles";

export const RocketsRender: FC = ({}) => {
    const [actualListOfRockets, setActualListOfRockets] = useState<any>([]);

    useEffect(()=>{
        const getListOfRockets = async () => {
            const lisOfRockets = await getRockets();
            setActualListOfRockets(lisOfRockets);
        }
       getListOfRockets();
    }, [])
    
    return(
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mb-16">
            {
                actualListOfRockets !== undefined ?
                <div className="grid gap-12 lg:grid-cols-2">
                    {actualListOfRockets.map((rocket: any, index:any)=> (
                        <RocketCard
                            key={rocket.id}
                            name={rocket.name}
                            id={rocket.id}
                            description={rocket.description}
                            images={rocket.flickr_images}
                        />
                    ))}
                </div>
                :
                <div>
                    <h1>Not entrys Found</h1>
                </div>
            }
        </div>
    )
}