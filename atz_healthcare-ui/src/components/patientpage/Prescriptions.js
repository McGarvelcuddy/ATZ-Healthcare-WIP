import React,{useState, useContext} from "react";
import { useFormState } from "react-use-form-state";
import {Button} from 'react-bootstrap'
import {PatientRecordContext} from './PatientPage'
import {updateRecord} from '../Util/AxiosUtil'

function Prescriptions(props) {
  const { patientRecord, setPatientRecord, currentAppointment, ...rest} = useContext(PatientRecordContext)
  const [formState, { text }] = useFormState();
  const [isSuccess, setIsSuccess] = useState(false)
  const handleSubmit = e =>{
    var patRecord = patientRecord
    patRecord.record.prescriptions[currentAppointment] = formState.values.newPrescription
    setPatientRecord(patRecord)
    updateRecord(patientRecord, setPatientRecord, patientRecord.patient._id)
    console.log(patientRecord)
    setIsSuccess(true)
  }
  return (
    <div className="prescriptionText">
      <h1>Prescriptions</h1>
      <p><b>Currently Prescribed: </b></p>
      <span className="inline-form">
        <input {...text("newPrescription")} className="form-control"  placeholder="Add a Prescription"/>
        <Button variant="outline-primary" className="form" onClick={e => handleSubmit(e)}>Prescribe</Button>
      </span>
        {isSuccess ? <p style={{color:"green"}}><i>Prescription Added Successfully</i></p> : ''}
    </div>
  );
}

export default Prescriptions;
