export class apiFeature {
    constructor(query, queryStr){
        this.query = query,
        this.queryStr = queryStr
    }

    //search feature 
    search(){
        const keyword = this.queryStr.keyword
        ? {
            name : {
                $regex : this.queryStr.keyword,   //$regex  -- mongodb operator
                $option : "i",                    //"i" -- case insensitive
            }
        }
        : {};
        // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;

    }

    // filter feature
    filter(){
    const queryCopy = {...this.queryStr}
    const removeFields = ["keywords", "page", "limit"];
    removeFields.forEach(key=>delete queryCopy[key])

    // console.log(queryCopy);

    this.query = this.query.find(queryCopy)
    return this;
}
};
