export const usersFilter = (users) => {
    return users.filter((user) => user.name.length > 16)
}
