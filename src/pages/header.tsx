import Link from "next/link";
import '../app/globals.css'
export default function Header() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/graph">Graph Search</Link>
            </li>
            <li>
                <Link href="/binary">Binary Sort</Link>
            </li>
            <li>
                <Link href="/floyd">Floyd Warshall Algorithm</Link>
            </li>
            <li>
                <Link href="/radix">Radix Sort</Link>
            </li>
        </ul>
    )
}
