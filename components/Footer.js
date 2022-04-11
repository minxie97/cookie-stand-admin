export default function Footer({reports}) {
    return(
        <footer className="flex items-center justify-between px-5 py-3 bg-emerald-500">
        	<p className="text-sm text-center">{reports.length} Locations World Wide</p>
        </footer>
    )
}