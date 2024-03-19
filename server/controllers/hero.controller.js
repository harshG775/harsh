const createHero = (req, res) => {
    res.json({
        hero: "create hero",
    });
};
const getHero = (req, res) => {
    res.json({
        hero: "get hero",
    });
};
const updateHero = (req, res) => {
    res.json({
        hero: "update hero",
    });
};
const deleteHero = (req, res) => {
    res.json({
        hero: "Delete hero",
    });
};

export default { createHero, getHero, updateHero, deleteHero };