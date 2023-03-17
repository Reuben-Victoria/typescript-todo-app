import {  useMutation } from "@tanstack/react-query";
import instance from "../services/api";

const addNewUser = async (userData) => {
    return await instance.post("/users/register", userData)
}

export const useAddNewUser = () => {
    return useMutation(addNewUser)
}