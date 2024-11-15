import userModel from "../model/userModel.js";
//craete a user
export const createUser = async (req,res) => {
  try {
    const { name, email, password } = req.body;
    const userinfo = { name, email, password };
    const user = await userModel.create(userinfo);
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error)
  }
};
