

export const processURLs = (val, cut=50) => {

    if(val.includes("http")){
        return (new URL(val)).pathname
    }

    if(cut && val.length > cut){
        return `${val.substring(0, cut)}...`
    }

    return val
}



export function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return string.includes("://") && (url.protocol.includes("http:") || url.protocol.includes("https:"))
  
  }