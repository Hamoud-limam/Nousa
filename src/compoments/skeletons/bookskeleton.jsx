
function Skeleton(){
    return(
        <><div  dir="rtl" className="max-w-[800px] w-full p-5 m-[0px] mx-auto box-border"><div className="flex bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-5 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
        <div dir="rtl" className=" animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse flex ">
        <div className="flex items-center justify-center w-full h-46 bg-gray-300 p-10 rounded w-48 dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70px] m-4"></div>
            <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] m-4"></div>
            <div className="h-5 bg-gray-200 w-10 p-4 pl-10 rounded-md dark:bg-gray-700 m-4"></div>
           
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default function BookSkeleton(){
   return(<>
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>
    </>
   )
}