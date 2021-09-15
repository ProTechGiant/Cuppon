import initDB from "../../helper/initDB";
import Category from "../../models/categorySchema";
import Company from "../../models/companySchema";
initDB();

const getAllCategories = async (req, res) => {
	Category.find().then((category) => {
		return res.status(200).json(category);
	});
};

export default getAllCategories;
