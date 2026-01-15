const user = {
    name: "Jimy",
    age: 21
};
console.log("Keys:", Object.keys(user));
console.log("values:", Object.values(user));
console.log("entries:", Object.entries(user));

const copiedUser = Object.fromEntries(Object.entries(user));
console.log("copiedUser:", copiedUser);
const updatedUser = Object.assign({}, user, { age: 20 });
console.log("updatedUser:", updatedUser);

console.log("has name:", Object.hasOwn(updatedUser, "name"));
console.log("has email:", Object.hasOwn(updatedUser, 'email'));

Object.freeze(updatedUser);
updatedUser.age = 15;
console.log("after Freeze:", updatedUser);

console.log("isFrozen:", Object.isFrozen(updatedUser));

console.log("NaN === NaN:", NaN === NaN);
console.log("object.is(NaN,NaN)", Object.is(NaN, NaN));

console.log("prototype:", Object.getPrototypeOf(user));

const safeobj = Object.create(null);
safeobj.city = "Delhi";
console.log("safeobj:", safeobj);

const product = {};
Object.defineProperty(product, "price", {
    value: 100,
    writable: false,
    enumerable: true
});
product.price = 200;
console.log("product price:", product.price);

console.log(
    "price descriptor:",
    Object.getOwnPropertyDescriptor(product, "price")
);

const car = { brand: "BMW" };
Object.preventExtensions(car);
car.model = "X5"; //not added

console.log("car:", car);


console.log("isExtensible:", Object.isExtensible(car));


const book = { title: "JS Guide" };
Object.seal(book);
book.title = "Node Guide"; //  allowed
delete book.title; //  not allowed
console.log("book:", book);


console.log("isSealed:", Object.isSealed(book));


const numObj = Object(10);
const strObj = Object("hello");
console.log(typeof numObj, typeof strObj);