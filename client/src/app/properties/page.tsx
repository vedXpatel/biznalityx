'use client';
import axios from 'axios';
import {useEffect} from 'react';
import {Button} from "@nextui-org/react";
import Link from 'next/link';

export default function Properties() {

    const options = {
        method: 'GET',
        url: 'https://realty-mole-property-api.p.rapidapi.com/properties',
        params: {
            address: '5500 Grand Lake Dr, San Antonio, TX, 78244'
        },
        headers: {
            'X-RapidAPI-Key': '6c1fe4c821msh8b654637670d234p19ad34jsn6d6450f1ed46',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className="" style={{display: "flex", flexDirection: "row"}}>
                <div
                    style={{
                        width: "16.5vw",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        background: 'radial-gradient(circle, rgba(4,4,4,1) 0%, rgba(68,1,59,1) 0%, rgba(0,0,0,1) 100%)',
                        position: "relative",
                        left: 0,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingTop: '10%'
                    }}
                >
                    <Button variant='light' color='danger'
                            style={{borderRadius: '30px', height: '7vh', fontSize: '20px', margin: 15,}}>Home</Button>
                    <Button as={Link} href='/dashboard' variant='light' color='danger' style={{
                        borderRadius: '30px',
                        height: '7vh',
                        fontSize: '20px',
                        margin: 15,
                    }}>Dashboard</Button>
                    <Button variant='shadow' color='danger' style={{
                        borderRadius: '30px',
                        height: '7vh',
                        fontSize: '20px',
                        margin: 15,
                    }}>Properties</Button>
                    <Button variant='light' color='danger'
                            style={{borderRadius: '30px', height: '7vh', fontSize: '20px', margin: 15,}}>SCM</Button>
                    <Button variant='light' color='danger' style={{
                        position: "relative",
                        top: "30%",
                        borderRadius: '30px',
                        height: '7vh',
                        fontSize: '20px',
                        margin: 15,
                    }}>LogOut</Button>
                </div>
            </div>
        </>
    )
}