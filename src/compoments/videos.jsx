import { useState } from "react";
import { useEffect } from "react";

export default function Videos(){
const [videos,setVideos]= useState([]);

useEffect(()=>{
    async function getBooks(){
  try{
    const data = await fetch('/getvideos');
    const allVideos = await data.json()
    setVideos(allVideos)
    console.log()
  }
  
  catch(err){
    console.log(err)
  }
    }
    getBooks()
},[])

return (
  <> <div dir="rtl" className="flex overflow-x-scroll scroll-snap-x mandatory -webkit-overflow-scrolling-touch p-2 mr-5 transition-transform duration-300 ease-in-out">
    {videos.map(video => (
     
        <div key={video._id} className=" flex-none relative w-[13vw] h-auto scroll-snap-start mx-[-2px] transform scale-[0.9] transition-transform duration-300 ease-in-out hover:scale-90">
          <a href={video.url}>
            <img className="flex-none relative w-[13vw] h-auto scroll-snap-start mx-[-2px] transform scale-[0.9] transition-transform duration-300 ease-in-out hover:scale-100" src={video.imgUrl} alt={video.title} />
          </a>
        </div>
    ))}
    
    </div>
  </>
);

}

