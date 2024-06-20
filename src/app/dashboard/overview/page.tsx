import Overview from "@/src/components/dashboard/overview/Overview";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Overview"
}

export default function OverviewPage() {
    return <Overview />
}