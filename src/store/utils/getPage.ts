export const getPage = (url:string): number => {
  const regExp = /page=[0-9]+/mg
  
  if(url !== null && url.match(regExp)) {
    const page = url.match(regExp)
    if(page) {
      return Number(page[0].split('=')[1]);
    } else {
      return  1;
    }
  } else {
    return 1
  }

}