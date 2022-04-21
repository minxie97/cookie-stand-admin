import useResource from "../hooks/useResource";

export default function ReportTable({hours}) {

    const { resources } = useResource()

    if (resources && resources.length) {
        
        return (
            <table className="w-8/12 px-3 py-3 mx-auto my-6 text-sm rounded bg-emerald-500">
                <thead>
                    <tr>
                        <th className="text-center">Location</th>
                            {hours.map((hour) => (<th key={hour}>{hour}</th>))}
                        <th>Totals</th>
                    </tr>
                </thead>

                <tbody>
                    {resources.map((report) => (<ResultsRow key={report.location} report={report}/>))}
                </tbody>

                <tfoot>
                    <tr>
                        <td className="font-bold text-center border border-black">
                            Totals
                        </td>

                        {hours.map((hour, index) => (
                        <td key={hour} className="pl-4 font-bold border border-black">
                            {resources.reduce((prev, curr) => prev + curr.hourly_sales[index], 0)}
                        </td>
                        ))}

                        <td className="pl-4 font-bold border border-black">
                            {hours.map((_, index) => 
                            resources.reduce((prev, curr) => 
                            prev + curr.hourly_sales[index], 0))
                            .reduce((prev, curr) => prev + curr, 0)}
                        </td>
                        
                    </tr>
                </tfoot>
            </table>
        );
        
    } else {
        return (
            <p className="w-8/12 mx-auto mt-6 text-lg text-center">
                No Cookie Stands Available
            </p>
        );
    }
}

function ResultsRow({ report }) {
    
    return (
        <tr>
            <td className="pl-4 border border-black">
                {report.location}
            </td>

            {report.hourly_sales.map((hourSalesNumber, index) => (
            <td className="pl-4 border border-black" key={index}>
                {hourSalesNumber}
            </td>
            ))}
            
            <td className="pl-4 border border-black">
                {report.hourly_sales.reduce((prev, curr) => prev + curr)}
            </td>
        </tr>
    );
}