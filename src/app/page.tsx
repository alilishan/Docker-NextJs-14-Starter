import React, { FC } from "react";
import {Button} from '@nextui-org/button';

interface Props {
    identifiers: string;
}

const AppPage:FC<Props> = () => {
    return (
        <div className="container-full mx-auto">
            <div className="grid grid-cols-3">

                <div className="bg-yellow-200">Sidebar</div>

                <div className="col-span-2 bg-red-300">Main Items</div>

            </div>
        </div>
    );
};

export default AppPage;
