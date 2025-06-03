
export function isObjectNotEmpty(obj) {
    return Object.keys(obj).length >= 1;
}

export function formatDate() {
    const startTime = new Date();

    // Get the components of the date
    const year = startTime.getFullYear();
    const month = String(startTime.getMonth() + 1).padStart(2, '0');
    const day = String(startTime.getDate()).padStart(2, '0');
    const hours = String(startTime.getHours()).padStart(2, '0');
    const minutes = String(startTime.getMinutes()).padStart(2, '0');
    const seconds = String(startTime.getSeconds()).padStart(2, '0');

    // Get milliseconds and convert to microseconds
    const microseconds = String(startTime.getMilliseconds()).padStart(3, '0') + '000';

    // Combine everything into the desired format
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${microseconds}`;

    console.log(formattedTime);
}

export function splitAndPopSeparator(text, separator) {
    // Split the string using the separator and trim each part
    const parts = text.split(separator).map(part => part.trim());
    // Return the array of parts
    return parts;
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

