import { inject, Container } from "inversify";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { TYPES } from "./types";
import { buildProviderModule, provide } from "inversify-binding-decorators";
import "reflect-metadata";
@provide(TYPES.Weapon)
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

@provide(TYPES.ThrowableWeapon)
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@provide(TYPES.Warrior)
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
	    @inject(TYPES.Weapon) katana: Weapon,
	    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

const myContainer = new Container();

myContainer.load(buildProviderModule());

export { Ninja, Katana, Shuriken, myContainer };