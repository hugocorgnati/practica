(async () => {
    const { franc } = await import("franc");
    const langs = require("langs");
    const colors = require("colors");
    const input = process.argv[2];
    const langCode = franc(input);
    try {
        if (langCode == "und") {
            console.log("Sorry, try again".red);
        } else {
            const language = langs.where("3", langCode);
            console.log(`Our best guess is : ${language.name}`.green)
        }
    } catch {
        console.log("Sorry, an error was ocurred".red)
    }
})();
