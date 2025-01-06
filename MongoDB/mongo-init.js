db = new Mongo().getDB('admin')

// Change this to fit your need
db.createUser({
    user: 'adminaccount',
    pwd: 'password',
    roles: [
        {
            role: 'root',
            db: 'admin',
        },
    ],
});

//Change this to fit your need
db.createUser({
    user: 'project',
    pwd: 'pass',
    roles: [
        {
            role: 'readWrite',
            db: 'project',
        },
    ],
});

db = new Mongo().getDB('project')

db.createCollection('users', { capped: false });
db.createCollection('data', { capped: false });

// Need to add something to db else it doesn't get created
db.users.insert([
    { 
        "Name": "Initial",
        "Surname": "User",
        "Project": "First project mongodb test"
    },
]);

// Seed Data
db.data.insert([
    {
        "item": 1
    },
]);