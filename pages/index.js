import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer';
import { hours } from '../data';
import { useState } from 'react';


export default function CookieStandAdmin() {
    const [reports, setReports] = useState([]);

    function handleAddReport(report) {
        setReports([...reports, report]);
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="p-6 bg-emerald-50">
                <CreateForm handleAddReport={handleAddReport} hours={hours} />
                <ReportTable hours={hours} reports={reports} />
            </main>
            
            <Footer reports={reports}/>
        
        </div>
    )
}
