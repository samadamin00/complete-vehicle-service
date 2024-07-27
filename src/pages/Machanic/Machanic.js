import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Select from "react-select";
import MechanicCard from "./MechanicCard";
import axios from "axios";

const Machanic = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "var(--orange)" : "var(--orange)",
      "&:hover": {
        borderColor: state.isFocused ? "var(--orange)" : "var(--orange)",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "var(--orange)" : "white",
      color: state.isFocused ? "black" : "inherit",
    }),
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectLocations, setSelectLocations] = useState([]);
  const [selectService, setSelectService] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .get(
        "https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/user",
        {
          params: {
            location: selectLocations,
            neededService: selectService,
          },
        }
      )
      .then((response) => {
        const filteredData = response.data.filter(
          (item) =>
            item.location === selectLocations && item.service === selectService
        );

        setData(filteredData);
        console.log(filteredData)
      })
      .catch((error) => {
        console.error("Error:", error);
        setData("");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const optionLocation = [
    { value: "Karachi South", label: "Karachi South" },
    { value: "Karachi West", label: "Karachi West" },
    { value: "Karachi Central", label: "Karachi Central" },
    { value: "Karachi North", label: "Karachi North" },
    { value: "Korangi", label: "Korangi" },
  ];

  const optionService = [
    { value: "car mechanic", label: "Car Mechanic" },
    { value: "routine maintenance", label: "Routine Maintenance" },
    { value: "diagnostic services", label: "Diagnostic Services" },
    { value: "brake services", label: "Brake Services" },
    { value: "engine repair and maintenance", label: "Engine Repair and Maintenance",},
     { value: "tire services", label: "Tire Services" },
  ];

  return (
    <>
      <section className="backgroundOne">
        <Container maxWidth={"lg"}  >
          <Grid
            pt={15}
            pb={12}
            sx={{ zIndex: "1", position: "relative" }}
            container
            maxWidth={"lg"}
            rowSpacing={3}
            columnSpacing={3}
            justifyContent={'center'}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h2 style={{ textAlign: "center" }}>Search For Mechanic</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <form onSubmit={handleSubmit}>
                <Grid
                  sx={{ zIndex: "1", position: "relative" }}
                  container
                  maxWidth={"lg"}
                  rowSpacing={3}
                  columnSpacing={3}
                >
                  <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div
                    
                      style={{
                        fontSize: "2rem",
                        marginBottom:'2rem'
                      }}
                      className="searchBar"
                    >
                      <Select
                        styles={customStyles}
                        options={optionLocation}
                        onChange={(selectedOption) =>
                          setSelectLocations(selectedOption.value)
                        }
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div
                      style={{
                        fontSize: "2rem",
                        marginBottom:'2rem'
                      }}
                      className="searchBar"
                    >
                      <Select
                        styles={customStyles}
                        options={optionService}
                        onChange={(selectedOption) =>
                          setSelectService(selectedOption.value)
                        }
                      />
                    </div>
                  </Grid>
                  <Grid justifyContent={'center'} item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <button
                      variant="contained"
                      className="btn btn-orange"
                      type="submit"
                    >
                      Apply
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            {loading ? (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h4>Loading...</h4>
              </div>
            ) : data.length > 0 ? (
              data.map((mechanic, index) => (
                <MechanicCard
                  key={index}
                  avatar={mechanic.avatar}
                  name={mechanic.name}
                  service={mechanic.service}
                  phoneNumber={mechanic.phoneNumber}
                  locationData={mechanic.location}
                />
              ))
            ) : (
              <h3 style={{marginTop:'2.5rem'}}>
                No mechanics found.
              </h3>
            )}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Machanic;
