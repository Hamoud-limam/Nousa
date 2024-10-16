export default function PopUp(){
    return(
        <>
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
                    :   الاسم الكامل
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-right text-gray-700">
                    :     رقم الهاتف
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-right text-gray-700">
                    : ملاحظة 
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded p-2 focus:outline-none focus:ring"
                      name="note"
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
            </div></>
    )
}