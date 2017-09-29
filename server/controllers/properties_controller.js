module.exports = {
    createNewProperty: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { propertyName, propertyDescription, address, city, state, zip, imageUrl, loan, monthlyMortgage, desiredRent, userId } = req.body
        console.log(dbInstance)
        dbInstance.createNewProperty([ propertyName, propertyDescription, address, city, state, zip, imageUrl, loan, monthlyMortgage, desiredRent, userId ])
        .then( () => res.status(200).send() )
        .catch( (err) => res.status(500).send(err) )
    },

    getAllProperties: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        
        dbInstance.get_all_properties()
        .then( () => res.status(200).send( Properties ) )
        .catch( (err) => res.status(500).send(err) )
    },

    // filter: ( req, res, next ) => {
    //     const dbInstance = req.app.get('db');
    //     const { session } = req;
    //     const { params } = req;

    //     dbInstance.filter_properties( [ params.userId, params.amount ] )
    //     .then( () => res.status(200).send() )
    //     .catch( () => res.status(500).send() )
    // },

    deleteProperty: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { params } = req;

        dbInstance.delete_properties( [ params.PropertyId ] )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    }
}