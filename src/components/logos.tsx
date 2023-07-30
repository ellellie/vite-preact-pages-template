import { useEffect, useState } from "preact/hooks"
import './logos.css'

interface Logo {
    name: string;
    url: string;
    icon_url: string;
}

export const Logo = ({ logo }: { logo: Logo }) => 
    <a class="logo" href={logo.url} target="_blank">
        <img src={logo.icon_url} alt={logo.name + " Logo"} />
        <h2 class="title">{logo.name}</h2>
    </a>

export const LogoContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>()
    const [logos, setLogos] = useState<Logo[]>([])

    useEffect(() => {
        fetch("/api/logos")
            .then(res => res.json())
            .then(logos => {
                setLogos(logos)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if(error)
        return <div class="error">{error}</div>

    if(loading)
        return <h1 class="muted">Loading logos...</h1>

    return <div class="logo-container">
        { logos.map((logo) => <Logo logo={logo} />) }
    </div>
}