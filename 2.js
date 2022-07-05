//timer
const timer = ms => new Promise(res => setTimeout(res, ms))

for (let i = 2; i < 100; i++) {
  try {
    getElementByXpath("/html/body/div[5]/div/div[3]/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div["+i+"]/div/div[1]/a").click();
    setTimeout(y, 1000);
    setTimeout(x, 1000);//не работает в циклах поэтому добавил асинхронный таймер ниже
    await timer(2000);
    
  } catch (err) {
      for (let k = 1; k < 10; k++) {
    try {
      getElementByXpath("/html/body/div[5]/div/div[3]/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div["+i+"]/div/div["+k+"]/a").click();
      setTimeout(y, 1000);
      setTimeout(x, 1000);
      await timer(2000);
    } catch (err) {continue;}
}
    continue;}
}
//функция резюме дс
function y() {
  return getElementByXpath("/html/body/div[14]/div/div[1]/div[4]/button/span").click();
}
function x() {
  return getElementByXpath("/html/body/div[11]/div/div[1]/div[5]/div/button/span").click();
}
//функция xpath для работы доступа по пути
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
load();
document.onload=check()
 
