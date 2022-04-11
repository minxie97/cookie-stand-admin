export default function ReportTable({ hours, reports }) {
    if (reports.length) {
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
                    {reports.map((report) => (<ResultsRow key={report.name} report={report}/>))}
                </tbody>

                <tfoot>
                    <tr>
                        <td className="font-bold text-center border border-black">
                            Totals
                        </td>

                        {hours.map((hour, index) => (
                        <td key={hour} className="pl-4 font-bold border border-black">
                            {reports.reduce((prev, curr) => prev + curr.dailyData[index], 0)}
                        </td>
                        ))}

                        <td className="pl-4 font-bold border border-black">
                            {hours.map((_, index) => 
                            reports.reduce((prev, curr) => 
                            prev + curr.dailyData[index], 0))
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
                {report.name}
            </td>

            {report.dailyData.map((hourSalesNumber, index) => (
            <td className="pl-4 border border-black" key={index}>
                {hourSalesNumber}
            </td>
            ))}
            
            <td className="pl-4 border border-black">
                {report.dailyData.reduce((prev, curr) => prev + curr)}
            </td>
        </tr>
    );
}