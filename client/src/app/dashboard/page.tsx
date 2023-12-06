"use client";
import Map from "../../components/map";
import Stats from "../../components/stats";
import {Input, Button} from "@nextui-org/react";

export default function Dashboard() {
    return (
        <>
            <div className="" style={{display: "flex", flexDirection: "row"}}>
                <div
                    style={{
                        width: "20vw",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        background: 'radial-gradient(circle, rgba(4,4,4,1) 0%, rgba(68,1,59,1) 0%, rgba(0,0,0,1) 100%)',
                        position: "relative",
                        left: 0,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingTop:'10%'
                    }}
                >
                    <Button variant='light' color='danger' style={{borderRadius:'30px',height:'7vh',fontSize:'20px',margin:15,}}>Home</Button>
                   <Button variant='shadow' color='danger' style={{borderRadius:'30px',height:'7vh',fontSize:'20px',margin:15,}}>Dashboard</Button>
                    <Button variant='light' color='danger' style={{borderRadius:'30px',height:'7vh',fontSize:'20px',margin:15,}}>Properties</Button>
                    <Button variant='light' color='danger' style={{borderRadius:'30px',height:'7vh',fontSize:'20px',margin:15,}}>SCM</Button>
                    <Button variant='light' color='danger' style={{position:"relative",top:"30%",borderRadius:'30px',height:'7vh',fontSize:'20px',margin:15,}}>LogOut</Button>
                </div>
                <div className=""
                     style={{display: "flex", flexDirection: 'column', width: '100%', paddingBottom: '20px'}}>
                    <div className="input" style={{paddingLeft:'50px',paddingRight:'50px',marginTop:'20px',marginBottom:'20px'}}>
                        <Input
                            label="Search"
                            isClearable
                            radius="lg"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "dark:bg-default/60",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focused=true]:bg-default-200/50",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Type to search..."
                            startContent={
                                <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                >
                                    <path
                                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M22 22L20 20"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            }
                        />
                    </div>
                    <div className="" style={{display: 'flex', flexDirection: "row", padding: '10px',alignItems:'center',marginLeft:'2vw'}}>
                        <Stats title='Total Stores' data={350}/>
                        <Stats title='Total Population' data={10000000}/>
                        <Stats title='Average Income' data={500000}/>
                        <Stats title='Most Populated Area' data={1}/>
                    </div>
                    <Map/>
                </div>
            </div>
        </>
    );
}
