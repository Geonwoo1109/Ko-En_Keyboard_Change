const scriptName = "Ko-En_Keyboard_Change";
const Keyboard_En = [
"q","w","e","r","t","y","u","i","o","p",
"a","s","d","f","g","h","j","k","l",
"z","x","c","v","b","n","m"];
const Keyboard_Ko_ = [
"r","s","e","f","a","q","t","d","w","c","z","v","x","g",
"R","E","Q","T","W",
"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",];
const Keyboard_Ko = [
"ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ",
"ㄲ","ㄸ","ㅃ","ㅆ","ㅉ",
"","","","","","","","","","","",
"ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ",
"ㅐ","ㅒ","ㅔ","ㅖ","ㅘ","ㅙ","ㅚ","ㅝ","ㅞ","ㅟ","ㅢ" ];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
try {
  if (msg.startsWith(".키보드 ")) {
    
    /*
    var First = msg.split(" ")[1][0];
    var Last = msg.split(" ")[1][1];
    
    replier.reply(msg.substr(5).normalize("NFD")[1]);
    replier.reply(msg.substr(5).normalize("NFD").length);
    var a = [];
    for (i=0; i<msg.substr(5).normalize("NFD").length; i++) {
      a.push(Keyboard_En[Keyboard_Ko.indexOf(msg.substr(5).normalize("NFD")[i])]);
    }
    replier.reply(a);
    */
  }
  
} catch(e) {replier.reply(e);}
}
