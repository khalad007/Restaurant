import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            {/* <p>{heading}</p>
            <h3>{subHeading}</h3> */}
            <div className="text-center my-10">
                <h1 className="text-[#D99904] font-normal my-5 text-sm">{heading}</h1>
                <hr className="bg-[#E8E8E8] border-2 w-60 mx-auto" />

                <h1 className="text-4xl font-normal my-5">{subHeading}</h1>
                <hr className="bg-[#E8E8E8] border-2 w-60 mx-auto" />
            </div>
        </div>
    );
};

export default SectionTitle;