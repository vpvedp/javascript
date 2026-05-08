const accountId = "123456";
let accountEmail = "test@gmail.com";
let password = "123456"

/* Avoid using var because it causes 
 issues with block scope and function scope. */
  
console.table([accountId,accountEmail,password]);