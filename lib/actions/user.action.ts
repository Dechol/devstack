"use server";

import Question from "@/database/question.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";
import { connectToDb } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";

export async function getUserById(params: any) {
  try {
    connectToDb();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDb();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDb();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDb();

    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw Error("user not found! ");
    }

    // deelte user from db
    // delete questions, answers , ect

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id });

    // delete user questions
    await Question.deleteMany({ author: user._id });

    // TODO delete user answer, comments ect

    const deleteUser = await User.findByIdAndDelete(user._id);

    return deleteUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
