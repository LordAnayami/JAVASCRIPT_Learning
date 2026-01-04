let userName: string;
const API_KEY = "abc123xyz";
//API_KEY = "newKey456"; // This will cause an error because API_KEY is a constant

//userName = 34; // This will cause a type error
userName = "Max";

let userAge = 34;

let isValid: boolean;
isValid = true;

type StringorNum = string | number;

let userId: StringorNum;
userId = 123;
userId = "ABC123";

//let user: object;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string;
};

let user: User;

//let user: {
//  name: string;
//  age: number;
//  isAdmin: boolean;
//  id: number | string;
//};

//user = "Max"; // This will cause a type error
//user = 34; // This will cause a type error

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", //123
};

//user= {}; // This will cause a type error

//let hobbies: Array<string>;
let hobbies: string[]; //number[], boolean[], {name:string; age:number}[]
hobbies = ["Sports", "Cooking", "Reading"];
//hobbies = [100]; // This will cause a type error

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "myPassword",
  email: "myEmail",
};

//interfce Credentials {
//  mode: string;
//}

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
  constructor(email: string, password: string, userName: string) {
    this.email = email;
    this.password = password;
    this.userName = userName;
  }
}

function login(Credentials: Credentials) {
  console.log(Credentials.email, Credentials.password);
}

login(new AuthCredentials("myEmail", "myPassword", "myUserName"));

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;
// admin = {
//   permissions: ["login"],
//   userName: "Max",
// };

interface Admin {
  permissions: string[];
}
interface AppUser {
  userName: string;
}
interface AppAdmin extends Admin, AppUser {}
let admin: AppAdmin;
admin = {
  permissions: ["login"],
  userName: "Max",
};

type Role = "admin" | "user" | "editor";

//let role: string; // 'admin' | 'user' | 'editor';
let role: Role;
role = "admin";
role = "user";
role = "editor";
//role = "abc";

function perfirmAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log(`Performing ${action} as an admin.`);
  }
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const newUser1 = merge({ name: "Max" }, { age: 34 });
