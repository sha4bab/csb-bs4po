import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 249.38668544595689,
    y: 226.9516239392259,
    direction: -32.050446408,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
