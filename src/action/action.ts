"use server";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import connectMongo from "@/server/database/db";
import Parent from "@/server/Models/Parent";
import Baby from "@/server/Models/Baby";


export async function createParentAction() {
  try {
    // Fetch the current user and Clerk client
    const user = await currentUser();
    const client = await clerkClient();
    if (!user) {
      console.error("User information is incomplete or null");
      return "User not authenticated";
    }

    await connectMongo();

    // Check and update user metadata if necessary
    const hasProfile = user.publicMetadata?.hasProfile === "True";
    if (!hasProfile) {
      await client.users.updateUserMetadata(user.id, {
        publicMetadata: { hasProfile: "True" },
      });
    }

    // Check if the parent document already exists
    const parentExists = await Parent.exists({ clerkId: user.id });
    console.log("Parent document exists:", parentExists);
    if (parentExists) return;

    // Create and save a new parent document
    const newParent = new Parent({
      clerkId: user.id,
      email: user.primaryEmailAddress?.emailAddress,
    });
    await newParent.save();
    console.log("Parent document created successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in createParent:", error.message);
    } else {
      console.error("Error in createParent:", error);
    }
  }
}

export const updateParentAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  const parentName = formData.get("parentName");
  const phone = formData.get("phone");
  const relation = formData.get("relation");

  await connectMongo();
  await Parent.findOneAndUpdate(
    { clerkId: user?.id },
    { parentName, phone, relation }
  );

  return { message: "success" };
};

export const getParentAction = async (clerkId: string) => {
  await connectMongo();
  const parent = await Parent.findOne({ clerkId: clerkId }).populate("baby");
  return parent;
};

export const createAndUpdateBabyAction = async (
  prevState: any,
  payload: { formData: FormData; _id: string | null }
): Promise<{ message: string }> => {
  try {
    // Ensure the user is authenticated
    const user = await currentUser();
    if (!user) return { message: "User not authenticated" };

    const { formData, _id } = payload;
    const babyName = formData.get("babyName");
    const babyAge = formData.get("babyAge");
    const babyGender = formData.get("babyGender");

    // Connect to MongoDB
    await connectMongo();

    if (_id) {
      // Update baby if _id exists
      const result = await Baby.findByIdAndUpdate(_id, {
        babyName,
        babyAge,
        babyGender,
      });
      if (!result) return { message: "Baby not found or update failed" };

      return { message: "Baby updated successfully" };
    } else {
      // Create new baby if _id is null
      const parentExists = await Parent.exists({ clerkId: user.id });
      if (!parentExists) return { message: "Parent not found" };

      const baby = new Baby({
        babyName,
        babyAge,
        babyGender,
        parent: parentExists?._id,
      });
      await baby.save();

      // Add the baby to the parent's list
      await Parent.findOneAndUpdate(
        { clerkId: user.id },
        { $push: { baby: baby._id } }
      );

      return { message: "Baby created successfully" };
    }
  } catch (error) {
    console.error("Error in updateBabyAction:", error);
    return {
      message: `Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const deleteBabyAction = async (
  _id: string
): Promise<{ message: string }> => {
  try {
    if (!_id) {
      return { message: "Baby ID is required" };
    }

    // Connect to MongoDB if not already connected
    await connectMongo();

    // Find and delete the baby
    const baby = await Baby.findByIdAndDelete(_id);
    if (!baby) {
      return { message: "Baby not found or delete failed" };
    }

    // Remove the baby ID from the parent's baby array
    const parent = await Parent.findOneAndUpdate(
      { baby: _id }, // Find the parent that has the baby ID
      { $pull: { baby: _id } }, // Remove the baby ID from the array
      { new: true } // Return the updated document
    );

    if (!parent) {
      return { message: "Parent not found or baby ID not associated with a parent" };
    }
    return { message: "success" };
  } catch (error) {
    console.error("Error in deleteBabyAction:", error);
    return {
      message: `Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

