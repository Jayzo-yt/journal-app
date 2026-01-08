import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound =()=>{
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                oops! this page doesn't exist.
            </p>
            <Link href="/">
                <Button variant="outline" className="bg-black text-white border-black px-8 py-6 rounded-full flex items-center gap-2">Return Home</Button>
            </Link>
        </div>
    )
};

export default NotFound;