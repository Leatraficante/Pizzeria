import userModel from '../models/users.model.js'

export default class UsersRepository {
    constructor() {
    }

    getAll = async () => {
        const users = await userModel.find().lean();
        return users;
    }

    getByEmail = async (email) => {
        const user = await userModel.findOne({ email }).lean();
        return user;
    }

    save = async (user) => {
        const result = await userModel.create(user);
        return result;
    };

    getById = async (userId) => {
        const user = await userModel.findById(userId)
        return user;
    };

    getbyRoles = async (roles) => {
        const users = await userModel.find({ role: { $in: roles } });
        return users;
    };

    getByStatus = async (status) => {
        const users = await userModel.find({ status: { $in: status } });
        return users;
    }
}

