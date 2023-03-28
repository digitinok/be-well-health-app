import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Header />
            <main  className="m-5">{children}</main>
            <Footer />
            
        </>
    )
}