/**
 * Formats a date string into Indonesian format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in Indonesian
 * 
 * @example
 * // returns "Senin, 1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 * 
 * // returns "1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 * 
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = 'full') => {
    const date = new Date(isoString);

    const formats = {
        full: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Jakarta'
        },
        short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Jakarta'
        },
        time: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta'
        }
    };

    // Indonesian month names mapping
    const monthsTamil = {
        'January': 'ஜனவரி',
        'February': 'பிப்ரவரி',
        'March': 'மார்ச்',
        'April': 'ஏப்ரல்',
        'May': 'மே',
        'June': 'ஜூன்',
        'July': 'ஜூலை',
        'August': 'ஆகஸ்ட்',
        'September': 'செப்டம்பர்',
        'October': 'அக்டோபர்',
        'November': 'நவம்பர்',
        'December': 'டிசம்பர்'
    };

    // Indonesian day names mapping
    const daysTamil = {
        'Sunday': 'ஞாயிறு',
        'Monday': 'திங்கட்கிழமை',
        'Tuesday': 'செவ்வாய்க்கிழமை',
        'Wednesday': 'புதன்கிழமை',
        'Thursday': 'வியாழக்கிழமை',
        'Friday': 'வெள்ளிக்கிழமை',
        'Saturday': 'சனிக்கிழமை'

    };

    let formatted = date.toLocaleDateString('en-US', formats[format]);

    // Handle time format separately
    if (format === 'time') {
        return date.toLocaleTimeString('en-US', formats[format]);
    }

    // Replace English month and day names with Indonesian ones
    Object.keys(monthsTamil).forEach(english => {
        formatted = formatted.replace(english, monthsTamil[english]);
    });

    Object.keys(daysTamil).forEach(english => {
        formatted = formatted.replace(english, daysTamil[english]);
    });

    // Format adjustment for full date
    if (format === 'full') {
        // Convert "Hari, Tanggal Bulan Tahun" format
        const parts = formatted.split(', ');
        if (parts.length === 2) {
            formatted = `${parts[0]}, ${parts[1]}`;
        }
    }

    return formatted;
};