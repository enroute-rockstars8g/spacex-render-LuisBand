import React, { FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex-rockets/service";
import { RocketCard } from "../rocket-card/component";

export const RocketsRender: FC = ({}) => {
    const [actualListOfRockets, setActualListOfRockets] = useState<any>([]);

    useEffect(()=>{
        const getListOfRockets = async () => {
            const lisOfRockets = await getRockets();
            setActualListOfRockets(lisOfRockets);
        }
       getListOfRockets();
    }, [])
    
    console.log(actualListOfRockets);

    return(
        <div>
            {
                actualListOfRockets !== undefined ?
                <div>
                    {actualListOfRockets.map((rocket: any, index:any)=> (
                        <RocketCard
                            key={rocket.id}
                            name={rocket.name}
                            id={rocket.id}
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