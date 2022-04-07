export default function Main() {
    let placeholder = '{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
    return(
      <main className="p-6 bg-emerald-50">
        <form className="w-8/12 px-3 py-3 mx-auto text-sm rounded-lg bg-emerald-300">
          <div className="flex items-center justify-center text-xl">
            <h1>Create Cookie Stand</h1>
          </div>
  
          <div className="flex items-center">
            <label className="text-[0.67rem] font-bold text-center" htmlFor="location">Location</label>
            <div className="block w-full m-2">
              <input id="location" type="text" className="flex-grow w-full " placeholder="Cookie Stand Location" required></input>
            </div>
          </div>
  
          <div className="flex mt-3">
            <div className="w-1/3 p-2 mt-2 rounded mb-2/3 mx-1/2">
              <label className="block mx-auto text-[0.67rem] font-bold text-center whitespace-nowrap" htmlFor="min_cookies_per_sale">
                Minimum Customers per Hour
              </label>
              <input 
                id="min_customers_per_hour" 
                type="text" 
                className="w-full" 
                placeholder="0"
              ></input>
            </div>
  
            <div className="w-1/3 p-2 mt-2 rounded mb-2/3 mx-1/2">
              <label className="block mx-auto text-[0.67rem] font-bold text-center whitespace-nowrap" htmlFor="max_cookies_per_sale">
                Maximum Customers per Hour
              </label>
              <input 
                id="max_customers_per_hour" 
                type="text" 
                className="w-full" 
                placeholder="0"
              ></input>
            </div>
  
            <div className="w-1/3 p-2 mt-2 rounded mb-2/3 mx-1/2">
              <label className="block mx-auto text-[0.67rem] font-bold text-center whitespace-nowrap" htmlFor="avg_cookies_per_sale">Average Cookies per Sale</label>
              <input
                id="avg_cookies_per_sale"
                type="text"
                className="w-full"
                placeholder="0"
              ></input>
            </div>
  
            <div className="flex items-center justify-center w-1/3 p-2 mx-1 mt-2 bg-emerald-500">
              <button className="w-full bg-emerald-500" type="submit">
                Create
              </button>
            </div>
          </div>   
        </form>
        <div className='py-2 mx-auto text-center text-gray-500 text-s'>
            <p className='py-4'> Report Table Coming Soon...</p>
            <p className='py-1'>{placeholder}</p>
        </div>
      </main>
    )
  }