const makeChange = (c) => {
  // your name here
	let remaining = c

	const q = Math.floor(remaining/25);
	remaining = remaining%25;

	const d = Math.floor(remaining/10);
	remaining = remaining%10;

	const n = Math.floor(remaining/5);
	remaining = remaining%5;

	const p = remaining

	return {q, d, n, p} 
	
};

// // Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
