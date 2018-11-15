let axios = {
    get:(url:string)=>{
        return new Promise(
        (resolve: (value?:any) => void, reject: () => void) => {
            
            resolve({data:{name:"Bob"}});
        });
    }
};

export default axios