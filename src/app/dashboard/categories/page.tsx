import Categories from "@/src/components/dashboard/categories/Categories";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Categories",
}

export default function CategoriesPage() {
    return <Categories />
}