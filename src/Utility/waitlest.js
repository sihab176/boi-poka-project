const getWaitToLocalStroage=()=>{
    const stringifyData=localStorage.getItem("waitList")
    if(stringifyData){
        const data=JSON.parse(stringifyData)
        return data;
    }
    else{
        return [];
    }
}

const addWaitToLocalStrogae=(id)=>{
    const dataLoacal=getWaitToLocalStroage()
    if(dataLoacal.includes(id)){
        alert('you already added the items')
    }
    else{
        dataLoacal.push(id)
        const data=JSON.stringify(dataLoacal)
        localStorage.setItem("waitList",data)
        console.log(data)
    }
    
}

export {getWaitToLocalStroage,addWaitToLocalStrogae}