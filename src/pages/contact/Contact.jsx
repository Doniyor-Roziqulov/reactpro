import React, { useEffect } from "react";
import Address from "../../companents/address/Address";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Address />
        </main>
    );
};

export default Contact;
