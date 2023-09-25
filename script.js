
// JavaScript program to convert binary to decimal

// Function to convert binary to decimal
function binaryToDecimal(n)
{
	let num = n;
	let dec_value = 0;

	// Initializing base value to 1, i.e 2^0
	let base = 1;

	let temp = num;
	while (temp) {
		let last_digit = temp % 10;
		temp = Math.floor(temp / 10);

		dec_value += last_digit * base;

		base = base * 2;
	}

	return dec_value;
}

// Driver program to test above function
	let num = 10101001;

	document.write(binaryToDecimal(num) + "<br>");


// This code is contributed by Surbhi Tyagi
