import { useAuth } from "../contexts/auth"

export default function Header() {
    const { user, logout } = useAuth()
    return(
        <header className="flex items-center justify-between px-5 py-4 text-3xl bg-emerald-500">
            <h1>Cookie Stand Admin</h1>
            <div className="flex items-center">
                <p className="px-5 py-1 text-black rounded-lg bg-emerald-100">
                    {user.id}
                </p>
                <button className="px-3 py-1 m-2 text-white rounded-lg bg-emerald-600" onClick={logout}>
                    Sign Out
                </button>
                <button className="inline-block px-2 py-0 text-sm bg-white rounded">
                    Overview
                </button>
            </div>
        </header>
      
    )
}