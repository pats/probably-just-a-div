export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

export const USERS: User[] = [
  { id: 1, name: "Alice Nowak", email: "alice@example.com", department: "Engineering" },
  { id: 2, name: "Bob Kowalski", email: "bob@example.com", department: "Design" },
  { id: 3, name: "Carol Wiśniewska", email: "carol@example.com", department: "Engineering" },
  { id: 4, name: "Dan Zieliński", email: "dan@example.com", department: "Product" },
  { id: 5, name: "Eve Wójcik", email: "eve@example.com", department: "Engineering" },
  { id: 6, name: "Frank Lewandowski", email: "frank@example.com", department: "Design" },
  { id: 7, name: "Grace Dąbrowska", email: "grace@example.com", department: "HR" },
  { id: 8, name: "Hank Kamński", email: "hank@example.com", department: "Product" },
  { id: 9, name: "Iris Szymańska", email: "iris@example.com", department: "Engineering" },
  { id: 10, name: "Jack Woźniak", email: "jack@example.com", department: "Design" },
];
