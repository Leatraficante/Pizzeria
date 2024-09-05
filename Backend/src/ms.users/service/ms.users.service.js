import UsersRepository from '../repository/ms.users.repository.js'

const usersRepository = new UsersRepository()

const getAll = async (page = 1, limit = 10) => {
    const options = {
        page,
        limit
    };
    return usersRepository.getAll(options);
};

const getByEmail = async (email) => {
    return usersRepository.getByEmail(email);
};

const save = async (user) => {
    return usersRepository.save(user);
};

const getById = async (userId) => {
    return usersRepository.getById(userId);
};

const getbyRoles = async (roles) => {
    return usersRepository.getbyRoles(roles);

};

const getByStatus = async (status) => {
    return usersRepository.getByStatus(status);

};

const updateUser = async (userId, userData) => {
    return usersRepository.updateUser(userId, userData);
};

const deleteUser = async (userId) => {
    return usersRepository.deleteUser(userId);
};

export {
    getAll,
    getByEmail,
    save,
    getById,
    getbyRoles,
    getByStatus,
    updateUser,
    deleteUser
}