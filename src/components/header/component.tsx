import React, { FC, useEffect, useState } from "react";
import { getCompanyInfo } from "../../services/company-info/service";

export const Header: FC = () => {
    const [companyInfo, setCompanyInfo] = useState<any>();

    useEffect(()=>{
        const getInfo = async () => {
            const info = await getCompanyInfo();
            setCompanyInfo(info);
        }
       getInfo();
    }, [])

    return(
        <div className="space-y-2 text-center flex flex-col">
            <img src="https://cdn.worldvectorlogo.com/logos/spacex-logo-1.svg" alt="spacex-logo" className="h-24 sm:h-40"/>
        </div> 
    )
}