import useResource from "../hooks/useResource"

export default function Footer() {
    const { resources } = useResource()

    return(
        <footer className="flex items-center justify-between px-5 py-3 bg-emerald-500">
        	<p className="text-sm text-center">{resources && resources.length} Locations World Wide</p>
        </footer>
    )
}