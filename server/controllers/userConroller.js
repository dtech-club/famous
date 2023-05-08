import FanCollection from '../models/fanModel.js';
import ArtistCollection from '../models/artistModel.js';
import AlbumCollection from '../models/albumModel.js';
import TrackCollection from '../models/trackModel.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res) => {
    try {
        const users = await FanCollection.find();
        res.json({ success: true, data: users });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = new FanCollection(req.body);
        await user.save();
        res.json({ success: true, data: user });
    } catch {
        res.json({ success: false, message: err.message });
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await FanCollection.findById(id);
        if (user) {
            res.json({ success: true, data: user });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await FanCollection.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json({ success: true, data: updateUser });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await FanCollection.findByIdAndDelete(id);
        res.json({ success: true, data: deletedUser });
    } catch {
        res.json({ success: false, message: err.message });
    }
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserCollection.findOne({ email });
        if (user) {
            const verifyPassword = bcrypt.compareSync(password, user.password);
            if (verifyPassword) {
                const token = jwt.sign(
                    { _id: user._id, email: user.email },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '24h',
                        issuer: 'FamousApp',
                        audience: 'FamousApp users',
                    }
                );
                res.header('token', token).json({ success: true, data: user });
            } else {
                res.json({ success: false, message: `Password doesn't match` });
            }
        } else {
            res.json({ success: false, message: `Email doesn't match` });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const logoutUser = async (req, res) => {
    try {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    res.json({ success: false, message: err.message });
                } else {
                    res.json({ success: true, data: 'Logout successfully' });
                }
            });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
