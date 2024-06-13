import UsersRepository from '../repository/ms.users.repository.js'

const usersRepository = new UsersRepository()

const getAll = async () => {
    return usersRepository.getAll();
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
    return usersRepository.getbyRoles(status);

};

export {
    getAll,
    getByEmail,
    save,
    getById,
    getbyRoles,
    getByStatus
}