var canvas = document.createElement("canvas");
const font="15pt Arial";
var context = canvas.getContext("2d");
context!.font = font;
const width=600; // not including padding unless border-box is used
const maxLines=4;
const ellipsis = " . . . ";
const getTextWidth = (text:string) => context!.measureText(text).width;

const extraSpace = getTextWidth(ellipsis);

const ShortenText = (text:string) => {
    var curLine = 0;
    var curWidth = 0;
    var finalText="";
    const words = text.split(" ");
    const space = getTextWidth(" ");
    for (const i of words){
        const temp = getTextWidth(i);
        if (curWidth+temp>width){
            if (curLine===maxLines-1){
                finalText+=i;
                var extra=curWidth+temp-width;
                while(extraSpace+extra>0){
                    extra-=getTextWidth(finalText[finalText.length-1]);
                    finalText=finalText.slice(0,finalText.length-1);
                }
                finalText+=ellipsis;
                return finalText;
            }
            curLine++;
            curWidth=temp+space;
        }
        else{
            curWidth+=temp+space;
        }
        finalText+=i+" ";
    }
    return words.join(" ");
}

export default ShortenText;