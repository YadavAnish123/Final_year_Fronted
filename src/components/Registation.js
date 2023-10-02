import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext'
const Registation = () => {
    const context = useContext(dataContext)
    const { name, email, phone, setEmail, setPhone, setName, password, setPassword } = context


    const handleSubmit = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            full_name: name,
            email: email,
            mobile_number: phone,
            password: password
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:5000/api/v1/auth/register", requestOptions)
            // .then((result) => {
            //     console.log(result);
            //     // setName("");
            //     // setEmail("");
            //     // setPhone("");
            // })
            .then(response => response.json())
            .then(data => {
                // Handle success
                console.log(data);
            })
            .catch((error) => console.log("error", error));
        // Reset form fields
    };
    useEffect(() => {
        {setName("raju kumar")}
        {setEmail("er.rajukumar54321@gmail.com")}
        {setPhone(6203417361)}
        {setPassword("raju@123")}
    })
    return (
        <div>Registation
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Registation