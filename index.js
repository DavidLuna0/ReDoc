const fs = require("fs");

const directoryPath = "C:/Users/dbluna/Downloads"
const name = "y2mate.com - ";

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    files.forEach((file) => {
        if (file.includes(name)) {
            let newName = file.replace(name, "");
            newName = newName.replace(newName[0], newName[0].toUpperCase())
            console.log(`Rename ${file} to ${newName}`)
            fs.renameSync(`${directoryPath}/${file}`, `${directoryPath}/${newName}`, function (err) {
                if (err) console.log("ERROR: " + err);
            });
        }
    });
});