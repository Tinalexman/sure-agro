import Users from "@/src/components/dashboard/users/Users";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Users"
}

export default function UsersPage() {
    return <Users />
}