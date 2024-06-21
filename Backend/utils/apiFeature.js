export class apiFeature {
    constructor(query, queryStr){
        this.query = query,
        this.queryStr = queryStr
    }

    //search feature 
    search(){
        const keyword = this.queryStr.keyword
        ? {
            name :{
                $regex : this.queryStr.keyword,
                $option : "i",
            }
        }
        : {
            
        }

    }
};
