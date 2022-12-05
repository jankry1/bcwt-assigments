'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async (res) => {
    try {
        const sql = 'SELECT cat_id, wop_cat.name, weight, owner, filename, birthdate, wop_user.name AS ownername'+
        'FROM wop_cat JOIN wop_user ON wop_cat.owner = wop_user.user_id';
        const [rows] = await promisePool.query(sql);
        return rows;
    } catch (e) {
        console.error('error', e.message);
        res.status(500).send(e.message);
    }
};

const getCatById = async (res, cat_id) => {
    try {
        const [rows] = await promisePool.query(
            'SELECT * FROM wop_cat WHERE cat_id = ?',
            [catId]
        );
        return rows[0];
    } catch (e){
        console.error('error', e.message);
        res.status(500).send(e.message);
    }
};

const addCat = async (cat, res) => {
    try {
        console.log('addCat(): ', cat);
        const sql = "INSERT INTO wop_cat VALUES (null, ?, ?, ?, ?, ?)";
        const values = [cat.name, cat.weight, cat.owner, cat.filename, cat.birthdate];
        const [result] = await promisePool.query(sql, values);
        return result.insertId;
    } catch (e){
        console.error('error', e.message);
        res.status(500).send(e.message);
    }
};

// const modifyCatById = async (catId, res) => {
//     try {
//         const [rows] = await promisePool.query(
//             'UPDATE FROM wop_cat WHERE catId = ?',
//             [catId]
//         );
//         return rows;
//     } catch (e){
//         console.error('error', e.message);
//         res.status(500).send(e.message);
//     }
// };

const deleteCatById = async (catId, res) => {
    try {
        const [rows] = await promisePool.query(
            'DELETE FROM wop_cat WHERE catId = ?',
            [catId]
        );
        return rows;
    } catch (e){
        console.error('error', e.message);
        res.status(500).send(e.message);
    }
};

const updateCatById = async (cat, res) => {
    try {
        console.log('Modify cat: ', catId, cat);
        const sql = 'UPDATE wop_cat SET name = ?, weight = ?, owner = ?, bithdate = ?' +
            'WHERE cat_id = ?';
        const values = [cat.name, cat.weight, cat.birthdate, catId];
        const [rows] =
            await promisePool.query(sql, values);
        return rows;
    } catch (e){
        console.error('error', e.message);
        res.status(500).json({'error': e.message});
    }
};

module.exports = {
    getAllCats,
    getCatById,
    addCat,
    deleteCatById,
    updateCatById
};




// const cats = [
//     {
//         id: '1',
//         name: 'Frank',
//         birthdate: '2010-10-30',
//         weight: '5',
//         owner: '1',
//         filename: 'http://placekitten.com/400/300',
//     },
//     {
//         id: '2',
//         name: 'James',
//         birthdate: '2015-12-25',
//         weight: '11',
//         owner: '2',
//         filename: 'http://placekitten.com/400/302',
//     },
//     {
//         id: '3',
//         name: 'James 2nd',
//         birthdate: '2015-12-25',
//         weight: '11',
//         owner: '2',
//         filename: 'http://placekitten.com/400/302',
//     },
// ];
//
// module.exports = {
//     cats,
// };