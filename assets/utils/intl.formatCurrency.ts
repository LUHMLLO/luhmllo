/**
 * Formats a number or string representing a number as currency.
 *
 * @param amount - The amount to format. Can be a number or a string that can be parsed as a number.
 * @returns A formatted string representing the currency value (USD by default), or "Invalid Amount or Type" if the input is invalid.
 */
export function FormatCurrency(amount: string | number): string {
	if (typeof amount !== 'number' && isNaN(parseFloat(String(amount)))) {
		return 'Invalid Amount or Type';
	}

	try {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(parseFloat(String(amount)));
	} catch (error) {
		return 'Invalid Amount or Type';
	}
}
