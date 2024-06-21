import Partners from "@/src/components/dashboard/partners/Partners";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Partners"
}

export default function UsersPage() {
    return <Partners />
}