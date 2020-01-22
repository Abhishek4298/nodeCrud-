const fs = require('fs');
const db = 'data.json';


function addUser(data) {
	const body = JSON.parse(data);
	let rawdata = fs.readFileSync(db);
	const parse = JSON.parse(rawdata);
	let flag = true;
	for (let i = 0; i < parse.length; i++) {
		if( parse[i].emailid === body.emailid ){
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
	letflag = 0;
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
	const body = JSON.parse(data);
 	let rawdata = fs.readFileSync(db);
	const parse = JSON.parse(rawdata);
	let flag = true;
	let data1;

	for (let i = 0; i < parse.length; i++) {
		if(body.id === parse[i].id){
			data1 = parse[i];	
			flag = true;
		}
	}
		if(flag){		
		return data1;
 		}else{
		return "no value get";
		}
}
function editUser(data)
{
	const body = JSON.parse(data);
  let rawdata = fs.readFileSync(db);
	const parse = JSON.parse(rawdata);
	
	for (let i = 0; i < parse.length; i++)
	{
		flag = true;
		if(body.id == parse[i].id){
			console.log(body.id);
			if(body.name != "")
			{
				parse[i].name = body.name;
				flag =true;
			}		
			if(body.emailid != "")
			{
				parse[i].emailid = body.emailid;
				flag =true;
			}	
			if(body.mobileno != "")
			{
				parse[i].mobileno = body.mobileno;
				flag =true;
			}	
			if(body.age != "")
			{
				parse[i].age = body.age;
				flag =true;
			}	
			if(body.enrollno != "")
			{
				parse[i].enrollno = body.enrollno;
				flag =true;
			}	
		}
	}		
		if(flag)
		{
			fs.writeFile(db, JSON.stringify(parse), function (err) {
			if (err) throw err;
			});
			return 'Successfully Updated user';
		}	
		else
		{
			console.log("data entry is null");
		}


}
module.exports = {
	addUser,
	deleteUser,
	getUser,
	editUser
}