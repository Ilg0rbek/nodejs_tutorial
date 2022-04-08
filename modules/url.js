
const newUrl = new URL('https://bexruz.ru:5000/users.html?name=bexruz&status=active&age=22')
//umumiy url manzil
console.log(newUrl.href);
//domain port bilan birga
console.log(newUrl.host);
//host name domainni ozi
console.log(newUrl.hostname);
//saytni nomidan keyin qaysi filega murojat qilinayotganini korsatadi
console.log(newUrl.pathname);
//query paramaterni qaytaradi
console.log(newUrl.search);
//query parametrlarni object holda korishlik uchun
console.log(newUrl.searchParams);
//query parametrlariga malumot qoshishlik uchun 
newUrl.searchParams.append('firstname', 'Abdumalikov')
console.log(newUrl.searchParams);

//loop 
newUrl.searchParams.forEach((name, value) => {
    console.log(`${value}: ${name}`);
})