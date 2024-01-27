import Tiger from "./tiger.js";
import Wolf from "./wolf.js";

const tiger = new Tiger();
const wolf = new Wolf();

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

fighting(tiger, wolf);
