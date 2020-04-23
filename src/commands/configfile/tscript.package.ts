
class TSPackage {
    name = 'typescript-start';

    version = "0.0.0";

    description = "";

    main = "./src/index.ts";

    scripts = {
        "start": "ts-node src/index.ts",
        "dev": "nodemon --watch src -e ts,ejs --exec \" npm run serve \"",
        "build": "tsc -p .",
        "serve": "ts-node src/index.ts"
    };

    keywords = [];
    author = "tranvd2010 <tranvd2010@gmail.com>";
    homepage = "";
    license = "ISC";

    devDependencies = {
        "nodemon": "latest",
        "ts-node": "latest",
        "typescript": "latest",
        "@types/node": "latest"
    }
};


export const ts = new TSPackage();