import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Prescriptions from "./Prescriptions";
import Notes from "./Notes";
import { getPatientRecord } from "../Util/AxiosUtil";
import { useParams } from "react-router-dom";
import "../css/patientPage.css";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import AppointmentCard from "./AppointmentCard"

export const PatientRecordContext = React.createContext(null);

function PatientPage() {
  const [ patientRecord, setPatientRecord ] = useState({})
  const [ currentAppointment, setCurrentAppointment ] = useState(0)
  let { id } = useParams();
  useEffect(() => {
    getPatientRecord(setPatientRecord, id);
  }, []);
  console.log(patientRecord);

  if (!patientRecord.record) {
    return (
      <div className="loading">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={200}
          width={200}
        />
      </div>
    );
  } else if (patientRecord.record === null) {
    return <div>Patient Record Not Found</div>;
  } else {
    return (
      <div>
        <Navbar />
        <div className="patientPageContainer">
          <PatientRecordContext.Provider
            value={{ patientRecord, setPatientRecord, currentAppointment, setCurrentAppointment }}
          >
            <div className="patientInfoContainer">
              <div className="infoLeft">
                Name:
                <br />
                DOB:
              </div>
              <div className="infoRight">
                {patientRecord.patient.fName +
                  " " +
                  patientRecord.patient.lName}
                <br />
                420/69
              </div>
            </div>
            <div className="columnContainer">
              <div className="appointmentColumn">
                  <AppointmentCard />
                  poopy
              </div>
              <div className="notesColumn">
                <Notes />
              </div>
              <div className="prescriptionColumn">
                <Prescriptions />
              </div>
            </div>
          </PatientRecordContext.Provider>
        </div>
      </div>
    );
  }
}

export default PatientPage;
