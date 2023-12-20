const calculate = (data, setError, setAge) => {
    const { DAY, MONTH, YEAR } = data;

    // Check if any field is empty
    if (DAY === undefined) {
        setError(({DAY: 'This field is required' }));
        return;
    }
    if (MONTH === undefined) {
        setError(({MONTH: 'This field is required' }));
        return;
    }
    if (YEAR === undefined) {
        setError(({YEAR: 'This field is required' }));
        return;
    }

    // Check if the day is not between 1-31
    if (DAY < 1 || DAY > 31) {
        setError(({DAY: 'Must be a valid day' }));
        return;
    }

    // Check if the month is not between 1-12
    if (MONTH < 1 || MONTH > 12) {
        setError(({MONTH: 'Must be a valid month' }));
        return;
    }
    setError({});

    // Check if the date is in the future
    const currentDate = new Date();
    const selectedDate = new Date(YEAR, MONTH - 1, DAY); // Month is 0-indexed in JavaScript Dates
    if (selectedDate > currentDate) {
        setError(({YEAR: 'Must be in the past' }));
        return;
    }

    // Check if the date is invalid (e.g., 31/04/1991)
    if (selectedDate.getMonth() !== MONTH - 1) {
        setError(({DAY: 'Invalid date' }));
        return;
    }

    const ageDate = new Date(currentDate - selectedDate);

    // Extract the calculated values
    const calculatedYear = ageDate.getUTCFullYear() - 1970;
    const calculatedMonth = ageDate.getUTCMonth();
    const calculatedDay = ageDate.getUTCDate();

    setAge(({years: calculatedYear, months: calculatedMonth, days: calculatedDay}));
};

export default calculate;