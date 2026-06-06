const friends=["Nimani",
"Dev",
"Zayn",
"Theja",
"Dimal",
"Megha",
"Vinu",
"Pahasara",
"Tharushi"];
//Modify the 2nd index into another name
friends[2]="Mithu";

console.log("After Modification:");

for(let key in friends){
	console.log(friends[key]);
	
}


friends.push("Abhi");
console.log("After adding:");

for(let key in friends){
console.log(friends[key]);}

friends.pop();
console.log("After removing:");

for(let key in friends){
console.log(friends[key]);}
	
	