module.exports = class ProjectController {
    static async CreateProjectPostController(req, res, next) {
        try {
            const allowTypeForFiles = [
                ".zip",
                ".rar",
                ".obj",
                ".png",
                ".jpg",
                ".jpeg",
                ".fbx",
                ".stl",
            ];
            const files = req.files?.files;

            if (!files) throw new res.error(404, "Files not found");

            files.map((file) => {
                if (!allowTypeForFiles.includes(getExtension(file.name))) {
                    throw new res.error(
                        400,
                        "Not allowed file type " + getExtension(file.name)
                    );
                }
            });
        } catch (error) {
            next(error);
        }
    }
};

function getExtension(filename) {
    let i = filename.lastIndexOf(".");
    return i < 0 ? "" : filename.substr(i);
}
