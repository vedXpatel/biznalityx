"use client";
import Map from "../../components/map";
import Stats from "../../components/stats";
import {
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import bg from "../../../public/images/dashboardBG.png";
import Link from "next/link";
import { getMetrics, getData, getEpicenters } from "@/components/data";
import * as React from "react";
import { Spinner } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

export default function Interactive() {
  const [coordinates, setCoordinates] = React.useState<Array<Array<number>>>(
    [],
  );
  const [metrics, setMetrics] = React.useState<Object | undefined>({});
  const [selectedCounty, setSelectedCounty] = React.useState<string>("ny");
  const [priority, setPriority] = React.useState<number>(200);
  const [priorityCoordinates, setPriorityCoordinates] = React.useState<
    Array<Array<number>>
  >([]);
  const [epicenters, setEpicenters] = React.useState<boolean>(false);
  const [epArray, setEpArray] = React.useState<Array<any>>([]);

  const counties = [
    { label: "Bronx", value: "bronx" },
    { label: "Kings", value: "kings" },
    { label: "NY", value: "ny" },
    { label: "Queens", value: "queens" },
    { label: "Richmond", value: "richmond" },
  ];

  React.useEffect(() => {
    getMetrics({ county: selectedCounty })
      .then((response) => setMetrics(response))
      .catch((error) => console.error(error));
    getData({ county: selectedCounty })
      .then((response) => setCoordinates(response))
      .catch((error) => console.error(error));
  }, [selectedCounty]);

  React.useEffect(() => {
    getMetrics({ county: selectedCounty })
      .then((response) => setMetrics(response))
      .catch((error) => console.error(error));
    getData({ county: selectedCounty })
      .then((response) => setCoordinates(response))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    epicenters &&
      getEpicenters({ county: selectedCounty })
        .then((response) => setEpArray(response))
        .catch((error) => console.error(error));
    !epicenters && setEpArray({});
  }, [epicenters, selectedCounty]);

  React.useEffect(() => {
    priority > 0 && setPriorityCoordinates(coordinates.slice(0, priority));
    priority === 0 && setPriorityCoordinates(coordinates);
    console.log(priority);
  }, [priority]);

  return (
    <>
      <div className="" style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "20vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            background:
              "radial-gradient(circle, rgba(4,4,4,1) 0%, rgba(68,1,59,1) 0%, rgba(0,0,0,1) 100%)",
            position: "relative",
            left: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop: "10%",
          }}
        >
          <Button
            as={Link}
            href="/"
            variant="light"
            color="danger"
            style={{
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            Home
          </Button>
          <Button
            as={Link}
            href="/dashboard"
            variant="light"
            color="danger"
            style={{
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            Dashboard
          </Button>
          <Button
            as={Link}
            href="/interactive"
            variant="shadow"
            color="danger"
            style={{
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            Interactive Map
          </Button>
          <Button
            as={Link}
            href="/properties"
            variant="light"
            color="danger"
            style={{
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            Properties
          </Button>
          <Button
            variant="light"
            color="danger"
            style={{
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            SCM
          </Button>
          <Button
            variant="light"
            color="danger"
            style={{
              position: "relative",
              top: "30%",
              borderRadius: "30px",
              height: "7vh",
              fontSize: "20px",
              margin: 15,
            }}
          >
            LogOut
          </Button>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingBottom: "20px",
            background: `url(${bg.src})`,
          }}
        >
          <div
            className="input"
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              marginTop: "20px",
              marginBottom: "20px",
              width: "50%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Autocomplete
              defaultItems={counties}
              label="County / City"
              placeholder="Search a county"
              onSelectionChange={setSelectedCounty}
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
            >
              {(county) => (
                <AutocompleteItem key={county.value}>
                  {county.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <Input
              onValueChange={(value) => setPriority(+value)}
              type="number"
              label="Priority"
              placeholder="Enter Top Priority Number"
            />
            <Switch
              onValueChange={(isSelected: boolean) => setEpicenters(isSelected)}
              style={{ marginLeft: "5vw" }}
            >
              EpiCenters
            </Switch>
          </div>
          {priorityCoordinates.length > 0 ||
          coordinates.length > 0 ||
          epArray.length > 0 ? (
            <Map pinData={priorityCoordinates} ep={epArray} height="80vh" />
          ) : (
            <div style={{ top: "20vh", left: "40vw", position: "relative" }}>
              <Spinner size="lg" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
