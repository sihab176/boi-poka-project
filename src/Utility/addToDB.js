const getStoredBook=()=>{

    const getTolocalStr=localStorage.getItem('readList')
    if(getTolocalStr){
        const stroedBookData=JSON.parse(getTolocalStr)
        return stroedBookData
    }
    else{
        return []
    }

}

const addToStoredDB=(id)=>{

    const storedData=getStoredBook()
    console.log(storedData)
    if(storedData.includes(id)){
        alert("the data you already added")
    }
    else{
        storedData.push(id)
        const data=JSON.stringify(storedData)
        localStorage.setItem("readList",data)
        console.log(id)
    }

}
export {getStoredBook,addToStoredDB}