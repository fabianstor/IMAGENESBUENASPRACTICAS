import React, { useEffect, useState } from 'react' //rafce
import Form from './Form';
import { UserCard } from './UserCard';
import { dataBase } from '../firebase-config/firebase';

const UserCrud = () => {

    const [userList, setUserList] = useState([]);

    const createUser = async (newUser) => {
        await dataBase.collection('user').doc().set(newUser);
    }

    const deleteUser = (userId) => {
        dataBase.collection('user').doc(userId).delete();
    }

    const getUserList = async () => {
        await dataBase.collection('user').onSnapshot((userListQuery) => {
            const userListGet = [];
            userListQuery.forEach(element => {
                userListGet.push({ ...element.data(), id: element.id })
            });
            setUserList(userListGet)
        });
    };

    const getUserListArray = () => {
        return userList;
    }

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            <Form getUserListArray={getUserListArray} createUser={createUser} />
            <UserCard getUserListArray={getUserListArray} deleteUser={deleteUser} />
        </div>
    );
}

export default UserCrud