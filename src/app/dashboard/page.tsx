import { redirect } from "next/navigation"


export default function Page() {
    const isLoggedId = true
    if (isLoggedId){
        redirect("/dashboard/overview")
    }else {
        redirect("/login")
    }
    // return (
    //     <h2 className="text-center text-2xl">
    //         Dashboard Page
    //     </h2>
    // )
}