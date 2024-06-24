/**
 * Formats a string or Date object as a date according to the specified options.
 *
 * @param date - The date to format. Can be a string in a valid date format or a Date object.
 * @returns A formatted string representing the date in US English format (short month, numeric day, year), or "Invalid Date or Type" if the input is invalid.
 *
 * @throws {Error} - If the provided string cannot be parsed as a valid Date object.
 */
export function FormatDate(date: string | Date): string {
	if (typeof date === 'string') {
		date = new Date(date);
	}

	try {
		return new Intl.DateTimeFormat('en-US', {
			dateStyle: undefined, // Omit date style (e.g., full date)
			year: 'numeric', // Include year (e.g., 2024)
			month: 'short', // Use short month name (e.g., May)
			weekday: undefined, // Omit weekday
			day: 'numeric', // Include numeric day (e.g., 16)
			dayPeriod: undefined, // Omit day period (e.g., AM/PM)
			hour: undefined, // Omit hour
			minute: undefined, // Omit minute
			second: undefined, // Omit second
			hour12: true, // Use 12-hour format (e.g., 10:30 AM)
			timeZone: 'UTC', // Convert to UTC time zone for consistent formatting
			timeZoneName: undefined, // Omit time zone name
		}).format(date);
	} catch (error) {
		return 'Invalid Date or Type';
	}
}
