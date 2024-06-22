import React, {FC, ReactElement} from "react";

type BioBlockProps = {
    name: string;
    id: number;
    bio?: string;
};

const BioBlock: FC<BioBlockProps> = ({ name, id, bio = 'Bio empty'}) => {
    return (
        <div>
            <h1>Biography</h1>
            <h2>Name: {name}, Id: {id}</h2>
            <p>{bio}</p>
        </div>
    );
};

export default BioBlock;