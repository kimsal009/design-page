import { Navbar1 } from "@/components/layout/navbar"
import FooterSection from "@/components/layout/sections/footer-section"

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar1 />
            {children}
            <FooterSection />
        </div>
    )
}