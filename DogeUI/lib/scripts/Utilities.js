import { world } from "@minecraft/server";
export default class Utilities {
    static fillBlock(blockPerm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        var _a;
        const overworld = world.getDimension("overworld");
        for (let i = xFrom; i <= xTo; i++) {
            for (let j = yFrom; j <= yTo; j++) {
                for (let k = zFrom; k <= zTo; k++) {
                    (_a = overworld.getBlock({ x: i, y: j, z: k })) === null || _a === void 0 ? void 0 : _a.setPermutation(blockPerm);
                }
            }
        }
    }
    static fourWalls(perm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        var _a, _b, _c, _d;
        const overworld = world.getDimension("overworld");
        const xFromP = Math.min(xFrom, xTo);
        const xToP = Math.max(xFrom, xTo);
        const yFromP = Math.min(yFrom, yTo);
        const yToP = Math.max(yFrom, yTo);
        const zFromP = Math.min(zFrom, zTo);
        const zToP = Math.max(zFrom, zTo);
        for (let i = xFromP; i <= xToP; i++) {
            for (let k = yFromP; k <= yToP; k++) {
                (_a = overworld.getBlock({ x: i, y: k, z: zFromP })) === null || _a === void 0 ? void 0 : _a.setPermutation(perm);
                (_b = overworld.getBlock({ x: i, y: k, z: zToP })) === null || _b === void 0 ? void 0 : _b.setPermutation(perm);
            }
        }
        for (let j = zFromP + 1; j < zToP; j++) {
            for (let k = yFromP; k <= yToP; k++) {
                (_c = overworld.getBlock({ x: xFromP, y: k, z: j })) === null || _c === void 0 ? void 0 : _c.setPermutation(perm);
                (_d = overworld.getBlock({ x: xToP, y: k, z: j })) === null || _d === void 0 ? void 0 : _d.setPermutation(perm);
            }
        }
    }
}
//# sourceMappingURL=Utilities.js.map