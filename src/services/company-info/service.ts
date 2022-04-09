export const getCompanyInfo = async () => {
    try{
        const response = await fetch('https://api.spacexdata.com/v4/company')
        if(response.status !== 200)return;

        const companyInfo = await response.json();

        return companyInfo;

    }catch(e){
        console.error(e);
    }
}