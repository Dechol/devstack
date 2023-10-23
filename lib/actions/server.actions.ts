"use server";
import User from "@/database/user.model";
import { connectToDb } from "../mongoose";
import { GetAllUsersParams } from "./shared.types";

export default async function getUsers(params: GetAllUsersParams) {
  try {
    connectToDb();

    const users = await User.find({});

    console.log(users);

    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
