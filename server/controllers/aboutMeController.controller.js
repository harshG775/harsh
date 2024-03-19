const createAboutMe = (req, res) => {
    res.json({
        hero: "create AboutMe",
    });
};
const getAboutMe = (req, res) => {
    res.json({
        hero: "get AboutMe",
    });
};
const updateAboutMe = (req, res) => {
    res.json({
        hero: "update AboutMe",
    });
};
const deleteAboutMe = (req, res) => {
    res.json({
        hero: "Delete AboutMe",
    });
};

export default { createAboutMe, getAboutMe, updateAboutMe, deleteAboutMe };
