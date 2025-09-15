import './home.scss'
import { Link } from "react-router"

export default function Home() {
    return (
        <div>
            <h1>Marcos Gomes dos Santos</h1>
            <h2>Info B</h2>
            
            <Link to={'/Multi'}>Multipliquye</Link>
        </div>
    )
}