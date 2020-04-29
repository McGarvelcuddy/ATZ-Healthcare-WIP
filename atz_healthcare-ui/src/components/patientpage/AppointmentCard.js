import React, { useContext } from 'react'
import { PatientRecordContext } from './PatientPage'

function AppointmentCard() {
    const { patientRecord, currentAppointment, ...rest } = useContext(PatientRecordContext)
    return (
        <div className="appointmentCard">
            {patientRecord.record.appointments[0]}
        </div>
    )
}

export default AppointmentCard