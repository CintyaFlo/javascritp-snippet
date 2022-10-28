// RESTRICT POSSIBLE USERNAMES

/*
1-Usernames can only use alpha-numeric characters.

2-The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. Username cannot start with the number.

3-Username letters can be lowercase and uppercase.

4-Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as characters
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z](([a-z]+\d*)|(\d{2,}))$/i;
let result = userCheck.test(username);
console.log(result);

/* here i used a series of comands to set the possibilities 
and impossibilities to my UserName:
^ it will be start with [a-z] -> one alphabetic letter, than must be followed by either

(([a-z]+  -> one or more alphabetic letter and 
\d*) -> zero or more digits (numbers)

or |

(\d {2,})) -> dois ou mais digitos (numeros)
$ -> symbol that inform end of string
/i -> Ignore case - so no matter if is lower or upper case.
*/
