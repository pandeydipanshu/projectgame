import { UI } from "./data"

const canvas = new UICanvas()
const name = new UIText(canvas)
name.fontSize = 15
name.value = ""
name.positionX = 700
name.positionY = 600
name.vAlign = "bottom"

const name1 = new UIText(canvas)
name1.value = ""
name1.fontSize = 15
name1.vAlign = "bottom"
name1.positionX = 700
name1.positionY = 580

const name2 = new UIText(canvas)
 name2.value = ""
name2.fontSize = 15
name2.vAlign = "bottom"
name2.positionX = 700
name2.positionY = 560

const name3 = new UIText(canvas)
name3.value = ""
name3.fontSize = 15
name3.vAlign = "bottom"
name3.positionX = 700s
name3.positionY = 540

const name4 = new UIText(canvas)
name4.value = ""
name4.fontSize = 15
name4.vAlign = "bottom"
name4.positionX = 700
name4.positionY = 520

const name5 = new UIText(canvas)
name5.value = ""
name5.fontSize = 15
name5.vAlign = "bottom"
name5.positionX = 700
name5.positionY = 500


export async function newarray(){
const response = await fetch('https://asia-south1-chennai-dashboard.cloudfunctions.net/user/getCoinGameScores')
const newdata = await response.json()
// log("newdata: " +newdata[0].name)
// for ( let i =0; i= 4; i++){
  new UI(canvas,  700, 600,name.value = newdata[0].name, 15)
  new UI(canvas, 700, 580,name1.value = newdata[1].name, 15)
  new UI(canvas, 700, 560, name2.value = newdata[2].name, 15)
  new UI(canvas, 700, 540,name3.value = newdata[3].name, 15)
  new UI(canvas, 700, 520, name4.value = newdata[4].name, 15)
  new UI(canvas, 700, 500, name5.value = newdata[5].name,15)

        
//     log(newdata[i].name)
// }



//  name.value = newdata[0].name
//  name1.value = newdata[1].name
//  name2.value = newdata[2].name
//  name3.value= newdata[3].name
//  name4.value = newdata[4].name



// for (var i = 0; i < newdata.length; i++) {
//     newdata[i] = i * newdata;
//     newdata[i] =("new data: "+ [i])

// }




}


class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Prints 0, 0
log(`${pt.x}, ${pt.y}`);

class Point3 {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}


const string = (el : any) : number  => { return 1 } 
const number = (el : any) : number  => { return Number(el) }

let test = string;
test = number;