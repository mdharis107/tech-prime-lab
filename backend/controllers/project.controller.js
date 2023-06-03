const { ProjectModel } = require("../models/Project.model");

const addProject = async (req, res) => {
  const {
    ProjectName,
    Reason,
    Type,
    Division,
    Category,
    Priority,
    Department,
    StartDate,
    EndDate,
    Location,
    Status,
  } = req.body;

  const project = new ProjectModel({
    ProjectName,
    Reason,
    Type,
    Division,
    Category,
    Priority,
    Department,
    StartDate,
    EndDate,
    Location,
    Status,
  });
  try {
    await project.save();
    res.status(201).send({ msg: "New Project created" });
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Something went wrong" });
  }
};

const getProject = async (req, res) => {
  const projects = await ProjectModel.find({});
  try {
    res.status(200).send(projects);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "No Data Found" });
  }
};

// const countProjects = async (req, res) => {
//   const currentDate = new Date();
//   //   console.log(currentDate);

//   const totalProjects = await ProjectModel.countDocuments();

//   const closedProject = await ProjectModel.countDocuments({
//     Status: { $eq: "Closed" },
//   });

//   const runningProject = await ProjectModel.countDocuments({
//     Status: { $eq: "Running" },
//   });

//   const cancelledProject = await ProjectModel.countDocuments({
//     Status: { $eq: "Cancelled" },
//   });

//   const delayProject = await ProjectModel.countDocuments({
//     EndDate: { $gt: currentDate },
//   });

//   try {
//     res.status(200).send({
//       total: totalProjects,
//       closed: closedProject,
//       running: runningProject,
//       cancelled: cancelledProject,
//       delay: delayProject,
//     });
//   } catch (error) {
//     console.log(err);
//     res.status(400).send({ msg: "No Data Found" });
//   }
// };

// const chartProject = async (req, res) => {
//   const strategy = await ProjectModel.countDocuments({
//     Department: { $eq: "Strategy" },
//     Status: { $eq: "closed" },
//   });
//   const finance = await ProjectModel.countDocuments({
//     Department: { $eq: "Finance" },
//     Status: { $eq: "closed" },
//   });
//   const quality = await ProjectModel.countDocuments({
//     Department: { $eq: "Quality" },
//     Status: { $eq: "closed" },
//   });

//   const maintenance = await ProjectModel.countDocuments({
//     Department: { $eq: "Maintenance" },
//     Status: { $eq: "closed" },
//   });
//   const stores = await ProjectModel.countDocuments({
//     Department: { $eq: "Stores" },
//     Status: { $eq: "closed" },
//   });
//   const HR = await ProjectModel.countDocuments({
//     Department: { $eq: "HR" },
//     Status: { $eq: "closed" },
//   });

//   const totalStrategy = await ProjectModel.countDocuments({
//     Department: { $eq: "Strategy" },
//   });
//   const totalFinance = await ProjectModel.countDocuments({
//     Department: { $eq: "Finance" },
//   });
//   const totalQuality = await ProjectModel.countDocuments({
//     Department: { $eq: "Quality" },
//   });

//   const totalMaintenance = await ProjectModel.countDocuments({
//     Department: { $eq: "Maintenance" },
//   });
//   const totalStores = await ProjectModel.countDocuments({
//     Department: { $eq: "Stores" },
//   });
//   const totalHR = await ProjectModel.countDocuments({
//     Department: { $eq: "HR" },
//   });

//   const closed = [strategy, finance, quality, maintenance, stores, HR];

//   const total = [
//     totalStrategy,
//     totalFinance,
//     totalQuality,
//     totalMaintenance,
//     totalStores,
//     totalHR,
//   ];

//   try {
//     res.status(200).send({ closed, total });
//   } catch (err) {
//     console.log(err);
//     res.send({ msg: "No data found" });
//   }
// };

module.exports = {
  addProject,
  getProject,
  countProjects,
  chartProject,
};
