import React, { FC, useEffect, useState } from "react";
import { getCompanyInfo } from "../../services/company-info/service";
import {FaFlickr, FaTwitterSquare} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'

export const Footer: FC = () => {
    const [companyInfo, setCompanyInfo] = useState<any>();

    useEffect(()=>{
        const getInfo = async () => {
            const info = await getCompanyInfo();
            setCompanyInfo(info);
        }
       getInfo();
    }, [])
    
    return(
        <div className="text-center w-auto h-40 bg-black bottom-0">
            {
                companyInfo !== undefined ?
                <div className=" text-center">
                    <p className="lg:w-6/12 lg:mx-auto text-gray-400 pt-8 mb-6">{companyInfo.summary}</p>
                    <div className="width-auto flex place-content-center gap-6">
                        <a href={companyInfo.links.website}>
                            <CgWebsite style={{fontSize: '30px', color:'#6f6f6f'}}/>
                        </a>
                        <a href={companyInfo.links.flickr}>
                            <FaFlickr style={{fontSize: '30px', color:'#6f6f6f'}}/>
                        </a>
                        <a href={companyInfo.links.twitter}>
                            <FaTwitterSquare style={{fontSize: '30px', color:'#6f6f6f'}}/>
                        </a>
                    </div>
                </div>
                :null
            }
        </div>
    )
}