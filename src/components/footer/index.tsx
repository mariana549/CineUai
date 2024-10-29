import { Link } from "react-router-dom";
import { FooterContainer, FooterContent, FooterLink, RedeSocial } from "./footerSyteld";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>&copy; {new Date().getFullYear()} Creating by <RedeSocial href="https://github.com/mariana549">Mariana Antonia</RedeSocial>. All rights reserved.</p>
                <nav>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <FooterLink>Home</FooterLink>
                    </Link>
                </nav>
            </FooterContent>
        </FooterContainer>
    )
}