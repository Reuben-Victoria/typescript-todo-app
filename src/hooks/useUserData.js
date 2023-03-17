import {  useMutation } from "@tanstack/react-query";
import instance from "../services/api";

const addNewUser = async (userData) => {
    return await instance.post("/users/register", userData)
}

const signInUser = async (userData) => {
    return await instance.post("users/login", userData);
}

export const useAddNewUser = () => {
    return useMutation(["registerUser"], addNewUser)
}

export const useSignInUser = () => {
    return useMutation(["login"], signInUser)
}