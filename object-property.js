const students = [
	{id:21, name:"Ratul"},
	{id:31, name:"Mofiz"},
	{id:41, name:"Nafi"},
	{id:51, name:"Milton"}
]

const names = students.map(s => s.name);
console.log(names);
const ids = students.filter(i => i.id > 31);
console.log(ids);
const bigger = students.find(s => s.id >21);
console.log(bigger);