import path from "path";

export default class Helpers {
    static url(direction: string): string {

        return path.join(<string>require.main?.path, direction);
    }
    static join(paths : string[]): string {
        return path.join(...paths);
    }

}