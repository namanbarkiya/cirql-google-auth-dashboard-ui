import React from "react";

function MainCard({ title }: { title: string }) {
    return (
        <div className=" w-full mt-5 bg-white rounded-xl p-6">
            <h1 className="font-bold">{title}</h1>
        </div>
    );
}

export default MainCard;
