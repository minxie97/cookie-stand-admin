import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer';
import { hours } from '../data';
import { useAuth } from '../contexts/auth';

export default function Home() {
    const { user } = useAuth()

    return (
        <div>
            {user ? <CookieStandAdmin/> : <LoginForm/>}
        </div>
    )
}

function CookieStandAdmin() {

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="p-6 bg-emerald-50">
                <CreateForm hours={hours}/>
                <ReportTable hours={hours}/>
            </main>
            
            <Footer/>
        
        </div>
    );
}

function LoginForm() {

    const { login } = useAuth()
  
    async function handleSubmit(event) {
        event.preventDefault()
        login(event.target.username.value, event.target.password.value)
    }
  
    return (
        <div className="w-8/12 m-3 mx-auto border-2 border-solid p-7 rounded-xl bg-emerald-200 border-emerald-500">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label className="block m-2 mt-0 font-bold text-center" htmlFor="username">USER NAME</label>
                    <input className="block w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="User Name"></input>
                    
                    <label className="block m-2 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
                    <input className="block w-full p-2 m-2 mx-auto" type="password" name="password" placeholder="Password"></input>
        
                    <button className="block w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
                </fieldset>
            </form>
        </div>
    )
}
