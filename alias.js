function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
createUser({ name: "Abhsihek", email: "au78943@gyu", isActive: true });
