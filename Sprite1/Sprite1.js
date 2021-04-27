/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.x = 270;
    this.vars.y = 220;
    this.vars.a = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.t = 0;
    while (true) {
      yield* this.render(this.stage.vars.t);
      this.stage.vars.t += 1;
      yield;
    }
  }

  *render(t2) {
    this.clearPen();
    this.penColor = Color.rgb(0, 0, 0);
    this.vars.x = -260;
    for (let i = 0; i < 53; i++) {
      this.vars.y = -210;
      for (let i = 0; i < 43; i++) {
        this.penDown = false;
        this.goto(this.vars.x, this.vars.y);
        this.direction =
          Math.sin(
            this.degToRad(
              Math.sqrt(this.vars.x * this.vars.x + this.vars.y * this.vars.y) *
                0.5 +
                t2 * 1
            )
          ) * 360;
        this.move(20);
        this.penSize = Math.abs(
          Math.sin(
            this.degToRad(
              Math.sqrt(this.vars.x * this.vars.x + this.vars.y * this.vars.y) +
                t2 * -5
            )
          ) * 8
        );
        this.penDown = true;
        this.penDown = false;
        this.vars.y += 10;
      }
      this.vars.x += 10;
    }
  }
}
