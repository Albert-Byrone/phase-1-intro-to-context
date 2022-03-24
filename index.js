// Your code here

let  createEmployeeRecord =(row)=>{
    return{
        firstName : row[0],
        familyName : row[1],
        title: row[2],
        payPerHour : row[3],
        timeInEvents : [],
        timeOutEvents : []
    }  
}

let createEmployeeRecords = (employeesData) =>{
    return employeesData.map(row => {
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = (record, time )=>{
    let [date, hour] = time.split(' ')

    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return record
}

let createTimeOutEvent = (record, time) =>{
    let [ date, hour ] = time.split(' ')
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return record
}

let hoursWorkedOnDate =(record, date)=>{
    let outEvent = record.timeOutEvents.find((e) =>{
        return e.date === date
    })

    let inEvent = record.timeInEvents.find((e) =>{
        return e.date === date
    })
    return (outEvent.hour - inEvent.hour )/100
}