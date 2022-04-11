export default function CreateForm({ handleAddReport, hours }) {
    function handleSubmit(event) {
        event.preventDefault();
  
        let dailyData = [];
      
        for (let hour in hours) {
            let min_customers_per_hour = parseFloat(event.target.min_customers_per_hour.value);
            let max_customers_per_hour = parseFloat(event.target.max_customers_per_hour.value);
            let avg_cookies_per_sale = parseFloat(event.target.avg_cookies_per_sale.value);
    
            let hourSalesNumber = Math.floor((Math.random() * (max_customers_per_hour - min_customers_per_hour) + min_customers_per_hour) * avg_cookies_per_sale);

            dailyData.push(hourSalesNumber);
        }
  
        let report = {
            name: event.target.location.value,
            dailyData: dailyData,
        };

        handleAddReport(report);
        
    }
  
    return(
        <form className="w-8/12 px-3 py-3 mx-auto text-sm rounded-lg bg-emerald-300" onSubmit={handleSubmit}>
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
                <div className="w-1/4 p-2 mx-1 mt-2 mb-1 rounded bg-emerald-200">
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

                <div className="w-1/4 p-2 mx-1 mt-2 mb-1 rounded bg-emerald-200">
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

                <div className="w-1/4 p-2 mx-1 mt-2 mb-1 rounded bg-emerald-200">
                    <label className="block mx-auto text-[0.67rem] font-bold text-center whitespace-nowrap" htmlFor="avg_cookies_per_sale">Average Cookies per Sale</label>
                    <input
                        id="avg_cookies_per_sale"
                        type="text"
                        className="w-full"
                        placeholder="0"
                    ></input>
                </div>

                <div className="flex items-center justify-center w-1/4 p-2 mx-1 mt-2 mb-1 bg-emerald-500">
                    <button className="w-full bg-emerald-500" type="submit">
                        Create
                    </button>
                </div>
            </div>   
        </form>
    );
}