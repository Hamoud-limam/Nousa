import Header from "./header"
import Footer from "./footer.jsx";
import {books} from "./compomentsData.js"
import { useState } from "react";




 function Books() {
let [book, setBook] = useState(null)


function hidePopUp(){
  setBook(null) 
}

async function sendRequest(e){
  e.preventDefault();
const talab = {name:e.target.name.value , phone:e.target.phone.value, bookname:book,place:e.target.place.value}
try{
 const send = await fetch("http://localhost:3000/sendTalab",{
    method:"POST",
    body:JSON.stringify(talab),
    headers:{
      "Content-Type":"application/json",
    }
  })
  if(send.ok){
    console.log("nice")
  }
}
catch(err){
  console.log(err)
}
}
  let booksForsale = books.filter(books=>
    books.isBying === true
  );
    
  let booksfree = books.filter(books=> 
    books.isBying !==true
  );
      return(
      <>  
<div className="flex justify-center items-center mt-8">
  <h1 dir="rtl" className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mx-4">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">مرحبا بكم في</span> متجر الكتب
  </h1>
</div>

     {booksForsale.map(books=>
<div key={books.bookName} dir="rtl" className="max-w-[800px] w-full p-5 m-[0px] mx-auto box-border">
   <div className="flex bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-5 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
     <img src={books.url} alt="صورة الكتاب" className="w-[200px] h-auto sm:h-[160px]" />
     <div className="p-5 flex-grow">
       <h2 className="text-base text-[#00E7C8] mb-2.5"> {books.bookName}</h2>
       <h5 className="text-sm text-[#202020] mb-4 font-light"> {books.description}</h5>
       <div className="flex justify-between items-center">
         <button onClick={()=>{setBook(books.bookName)}} className="bg-[rgba(0,172,163,0.12)] text-[#00E7C8] py-2.5 px-5 text-xs rounded-md cursor-pointer transition-all duration-300 hover:bg-[#202020] hover:-translate-y-0.5">
         شراء
         </button>
       </div>
     </div>
   </div></div>

   )}
    { booksfree.map(books=>

<div key={books.bookName} dir="rtl" className="max-w-[800px] w-full p-5 m-[0px] mx-auto box-border">
   <div className="flex bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-5 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
     <img src={books.url} alt="صورة الكتاب" className="w-[200px] h-auto sm:h-[160px]" />
     <div className="p-5 flex-grow">
       <h2 className="text-base text-[#00E7C8] mb-2.5"> {books.bookName}</h2>
       <h5 className="text-sm text-[#202020] mb-4 font-light"> {books.description}</h5>
       <div className="flex justify-between items-center" >
       <a  href={books.downloadUrl} className="inline-block" download >
  <button className="bg-[rgba(0,172,163,0.12)] text-[#00E7C8] py-2.5 px-5 text-xs rounded-md cursor-pointer transition-all duration-300 hover:bg-[#202020] hover:-translate-y-0.5">
  تحميل
  </button>
</a>

       </div>
     </div>
   </div></div>
  
   )}{ book &&(
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-end">
                  <button onClick={hidePopUp}  className="text-gray-1000">
                    &times;
                  </button>
                </div>
                 <h2 className="text-xl mb-4 text-center font-semibold">
               {book} 
                </h2>
                <form onSubmit={sendRequest}>
                  <div className="mb-4">
                    <label className="block text-right text-gray-700">
                      الاسم الكامل:
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-right text-gray-700">
                      رقم الهاتف:
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-right text-gray-700">
                      عنوان التوصيل:
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="place"
                    />
                  </div>
                  <div className="mb-4">
                  
                    
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-teal-500 text-white py-2 px-7 rounded hover:bg-teal-600"
                    >
                      إرسال الطلب
                    </button>
                  </div>
                </form>
              </div>
            </div>)
 }
        
   </>
      )
    
  }


  export default function Bookstore(){

    return(<>
        <Header/>
        <Books/>
        <Footer/>
        </>
    )
  }
