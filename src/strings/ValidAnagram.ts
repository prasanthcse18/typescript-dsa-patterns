function isAnagram(s: string, t: string): boolean {
  if(s.length != t.length){
    return false
  }
  
  let map = new Map<string,number>();
  for(let charS of s){
    let count = (map.get(charS) || 0)+1;
    map.set(charS,count);
  }
    
    for(let charT of t){
        let count = map.get(charT);

        if(!count){
            return false;
        }

      map.set(charT,count-1);
    }

    return true;
};
