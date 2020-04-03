function findMatching(driversArray, driverString) {
    return driversArray.filter(d => {
        return d.toLowerCase().includes(driverString.toLowerCase())
    })
}

function fuzzyMatch(driversArray, driverString) {
    return driversArray.filter(d => {
        return d.toLowerCase().startsWith(driverString.toLowerCase())
    })
}

function matchName(driversArray, driverString) {
    return driversArray.filter(d => {
        return d.name.toLowerCase().includes(driverString.toLowerCase())
    })
}