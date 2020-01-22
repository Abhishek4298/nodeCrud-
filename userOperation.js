const fs = require('fs');
const db = 'data.json';


function addUser(data) {
	const body = JSON.parse(data);
	let rawdata = fs.readFileSync(db);
	const parse = JSON.parse(rawdata);
	let flag = true;
	for (let i = 0; i < parse.length; i++) {

		if( parse[i].emailid=== body.emailid ){
			flag = false;
		}
	}

	if (flag) {
		parse.push(body);

		fs.writeFileSync(db, JSON.stringify(parse), function (err) {
			if (err) throw err;
		});
		return 'User added successfully..!';
	 } else {
		return 'mail already exist..!';
	 }
}

 function deleteUser(data) {
	 flag = 0;
	 console.log("delete")
 	const body = JSON.parse(data);
 	let rawdata = fs.readFileSync(db);
	 const parse = JSON.parse(rawdata);

	 
 	for (let i = 0; i < parse.length; i++) {
	
 		if (parse[i].id === body.id) {
			 console.log(parse[i].id);
 			 parse.splice(i,1);
 			flag = 1;
 			break;
 		}
 	}
 	if (flag === 1) {
		 console.log("true");
 	  fs.writeFile(db, JSON.stringify(parse), function (err) {
 			if (err) throw err;
 		});

 		return 'Successfully removed user';
   }
 }

function getUser(data)
{
	console.log("getUser");
	
	const body = JSON.parse(data);
 	let rawdata = fs.readFileSync(db);
	const parse = JSON.parse(rawdata);
	
	for (let i = 0; i < parse.length; i++) {
		
		let ans;
		if(body.id === parse[i].id){
			 ans = parse[i];
		}
		return(JSON.stringify(ans));
	}
}

module.exports = {
	addUser,
	deleteUser,
	getUser
}