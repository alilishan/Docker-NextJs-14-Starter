import React from "react";
import { NextPage } from "next";


const AppPage:NextPage = async() => {

    return (
        <div className="container-full mx-auto h-100">
            <div className="row h-100">
                <div className="col-12 col-md-6 col-lg-4 mx-auto my-auto">
                    <h1 className="text-center">Welcome to Next 14 Starter Pack</h1>
                </div>
            </div>
        </div>
    );
};

export default AppPage;
