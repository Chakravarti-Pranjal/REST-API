# 👇👇👇 Code Important subparts 👇👇👇


### Below code used for performing _Naming filter_ functionality
```
    const { company,name, featured, sort, select } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex : name, $options : "i" };
    }
     if(featured){
        queryObject.featured = featured;
    }
```


### Below code used for performing _Sort_ functionality
```
    if(sort){
        let sortFix = sort.replace(","," ")
        apiData = apiData.sort(sortFix) ;
    }
```

### Below code used for performing _Select_ functionality
```
 // select = name,company;
    if(select){
        // let selectFix = select.replace(","," ")
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix) ;
    }
```

### Below code used for performing _Pagination_ functionality
``` 
// pagination
    let page = Number(req.query.page) || 1 ;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1 ) * limit;

    apiData = apiData.skip(skip).limit(limit);
```