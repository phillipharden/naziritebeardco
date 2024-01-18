import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "phillipharden78@gmail.com",
        password: bcrypt.hashSync('CucumberNaziriteFish630', 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "john@email.com",
        password: bcrypt.hashSync('password123', 10),
        isAdmin: false,
    },
    {
        name: "Jane Doe",
        email: "jane@email.com",
        password: bcrypt.hashSync('password123', 10),
        isAdmin: false,
    },
];

export default users;