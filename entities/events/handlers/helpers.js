exports.validateParams = eventParams => {
    const failLogContent = "Failed: problem in key: ";

    for (let [key, value] of Object.entries(eventParams)) {
        if (validate(key, value) === false) {
            return failLogContent + key;
        }
    }

    return true;
}


exports.setEventformat = eventParams => {
    const { name, admin, type, profilePicture = null, time = null, Messages = [], participants = [], invitations = [], Images = [], timeSelection = null } = eventParams;
    return { name, admin, type, profilePicture, time, Messages, participants, invitations, Images, timeSelection };
}

exports.getPrefferedDate = selection => {
    const { suggestions, dates } = selection;
    const suggestionsScore = [];

    dates.forEach(date => suggestionsScore.push(0));

    suggestions.forEach(suggestion => {
        const { maybeDates, availableDates, extraWeight } = suggestion;
        availableDates.forEach(dateIndex => suggestionsScore[dateIndex] += extraWeight ? 4 : 2);
        maybeDates.forEach(dateIndex => suggestionsScore[dateIndex] += extraWeight ? 2 : 1);
    });

    return dates[suggestionsScore.indexOf(Math.max(...suggestionsScore))];
}

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


const validate = (key, value) => {
    switch (key) {
        case 'name':
            return nameValidation(value);
        case 'profileImage':
            return typeof value == 'string';
        case 'time':
            return timeValidation(value);
        case 'type':
            return typeof value == 'string';
        default:
            return true;
    }
}

nameValidation = name => typeof name === 'string' && name.length > 4 && name.length < 30;

timeValidation = time => time.getTime() - Date.now() > 0;

exports.containsAllRequired = params => {
    return 'name' in params == false ? '"name" is mandatory' :
        'admin' in params == false ? '"admin" is mandatory' :
            'type' in params == false ? '"type" is mandatory' :
                true;
}

exports.getIndex = (array, elemId) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]._id == elemId) {
            return i;
        }
    }
}

exports.typeTypes = [
    'Birthday',
    'Barbeque',
    'Meeting',
    'Engagement',
    'Baclor/Bachlorette',
    'Graduation',
    'Anniversary',
    'Baby shower',
    'Party'
]
