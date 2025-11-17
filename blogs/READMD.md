## ১. `keyof` কীওয়ার্ড কী?

TypeScript-এ `keyof` এমন একটি keyword যেটি কোনো object-এর **property নামগুলোকে** টাইপ হিসেবে নিয়ে আসে।

### সহজভাবে বললে:

তুমি যখন কোনো object বানাও, `keyof` সেই object-এর সব key-গুলোর **লিস্ট** টাইপ আকারে তৈরি করে।

### উদাহরণ:

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
```

এখন `UserKeys` টাইপটি হচ্ছে:

```
"name" | "age"
```

অর্থাৎ তোমাকে আর ম্যানুয়ালি key লিখতে হচ্ছে না। TypeScript নিজেই object-এর key থেকে টাইপ বানিয়ে দিল।

### কেন দরকার?

এটি তখন কাজে লাগে যখন তুমি object-এর key নিয়ন্ত্রণ করতে চাও, ভুল key ব্যবহার হওয়া থেকে বাঁচতে চাও।

### আরেকটি মজার Example:

```ts
function getValue(obj: User, key: keyof User) {
  return obj[key];
}

const person = { name: "Rahim", age: 25 };

console.log(getValue(person, "name")); // ঠিক আছে
console.log(getValue(person, "age")); // ঠিক আছে
```

এখানে `"email"` দিলে TypeScript সঙ্গে সঙ্গে ভুল দেখাবে — কারণ `User` টাইপে এমন কোনো property নেই।

---

## ২. `any`, `unknown`, এবং `never` — সহজ পার্থক্য

TypeScript-এ তিনটি special টাইপ আছে, যেগুলো দেখতে একই রকম মনে হলেও এগুলোর কাজ একদম আলাদা।

---

### ১. `any` টাইপ

**সবচেয়ে ঢিলেঢালা টাইপ**—তুমি যেকোনো কিছু এতে রাখতে পারো।
TypeScript কোনো error দেখাবে না।

##### উদাহরণ:

```ts
let data: any = "Hello";
data = 10;
data = true;
```

সমস্যা: এটি ব্যবহার করলে TypeScript-এর type-checking সুবিধা হারিয়ে যায়।

---

### ২. `unknown` টাইপ

`any`-এর মতো যেকোনো ভ্যালু এতে রাখা যায় কিন্তু…
তুমি **যতক্ষণ না টাইপ চেক করছ**, ততক্ষণ এটি ব্যবহার করতে পারবে না।

##### উদাহরণ:

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ভুল — কারণ unknown

if (typeof value === "string") {
  console.log(value.toUpperCase()); // এখন ঠিক আছে
}
```

অর্থাৎ `unknown` হচ্ছে safe টাইপ।

---

### ৩. `never` টাইপ

এটি এমন একটি টাইপ যা **কখনো কোনো ভ্যালু ধারণ করে না**।
সাধারণত দুই ক্ষেত্রে দেখা যায়:

1. কোনো ফাংশন কখনো রিটার্ন না করলে
2. কোনো টাইপ লজিক্যালি অসম্ভব হলে

##### উদাহরণ:

```ts
function error(message: string): never {
  throw new Error(message);
}
```

এই ফাংশন কখনো return করবে না — তাই এর টাইপ `never`।
