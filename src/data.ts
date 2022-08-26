

export class UI extends Entity{
    constructor(canvas : UICanvas, posX :number,posY:number) {
      super();
      engine.addEntity(this);

      const Text = new UIText(canvas)
      Text.positionX = posX
      Text.positionY = posY
    // Text.vAlign = "bottom"
    //   Text.value = "name"
    //   Text.frontsize = Number
    // Text.string = value    //   

    }
    }












