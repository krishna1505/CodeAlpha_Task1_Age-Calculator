document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!isValidDate(day, month, year)) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    const age = calculateAge(day, month, year);
    document.getElementById('result').innerText = `You are ${age} years old.`;
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date && date.getMonth() + 1 === month && date.getDate() === day && date.getFullYear() === year;
}

function calculateAge(day, month, year) {
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = today.getMonth() - (month - 1);

    if (m < 0 || (m === 0 && today.getDate() < day)) {
        age--;
    }

    return age;
}
