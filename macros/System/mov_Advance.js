//@id=19NMQ6ayvlRtVjs3
//@name=Advance
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Advance",
  type: "Move Action",
  description: `When you take the <i>Advance</i> move action, you can move a number of squares up to your speed. You can break up this movement granted with your maneuver and action however you wish.`
});
