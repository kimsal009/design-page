
"use client"
import { useParams } from "next/navigation";

export default function Page(){
   const param = useParams<{account: string}>()
   return (
    <h2 className="text-center">
        Overview: {param.account}
    </h2>
   ) 
}