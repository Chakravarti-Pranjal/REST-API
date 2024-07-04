const Product = require('../models/product')

const getAllProducts = async (req,res) => {

    // -----Naming filter functionality-----
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

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(","," ")
        apiData = apiData.sort(sortFix) ;
    }

    // select = name,company;
    if(select){
        // let selectFix = select.replace(","," ")
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix) ;
    }
     console.log(queryObject)

    const myData = await apiData.sort(sort);
    // console.log(queryObject);
    res.status(200).json({ myData });
}

const getAllProductsTesting = async(req,res) => {
     const myData = await Product
                                .find(req.query)
                                .select("name company")
                                ;
     res.status(200).json({ myData });
}


module.exports = {
     getAllProducts,
     getAllProductsTesting

}