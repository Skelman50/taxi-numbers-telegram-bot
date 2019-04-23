module.exports = function sortTaxi(filterNames, filterRatings, taxiPhoneNumbers) {
    const taxi = [];

    for (let i = 0; i < taxiPhoneNumbers.length; i++) {
        const taxiSchema = {};
        taxiSchema.name = filterNames[i];
        taxiSchema.rating = filterRatings[i];
        taxiSchema.phones = taxiPhoneNumbers[i];
        taxi.push(taxiSchema)
    }

    function compareNumeric(a, b) {
        return b.phones.length - a.phones.length;
    }

    taxi.sort(compareNumeric);
    return taxi;
}