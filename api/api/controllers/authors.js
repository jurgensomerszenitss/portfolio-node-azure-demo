const sql = require('mssql');
const { connect } = require('../../services/database');
const { getSearchParams, mapListResponse } = require('../../services/api');

const map_author = (author) => {
    return {
        ...author,
        links : [
            { self : `/authors/${author.au_id}`},
        ]
    }
} 

exports.authors_search = async (req, res, next) => {
    try {
        await connect();

        const { limit, offset, sort, sortDirection } = getSearchParams(req);
 
        const result = await sql.query(`SELECT * FROM Authors ORDER BY ${sort} ${sortDirection} OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`);
        const response = mapListResponse(
            result.recordsets[0].map(x => map_author(x)),
            limit,
            offset,
            sort
        );
 
        res.status(200).json(response);
    }
    catch(err){
        console.error(err);
        res.status(500).json(err);
    }
}

exports.authors_get = async(req,res,next) => {
    try {
        await connect();
        const result = await sql.query(`SELECT * FROM Authors WHERE au_id = '${req.params.authorId}'`);

        if(result.rowsAffected[0] >= 1)
            res.status(200).json(result.recordsets[0][0]);
        else if (result.rowsAffected[0] === 0)
            res.status(404).json(); 
    }
    catch(err){
        console.error(err);
        res.status(500).json(err);
    }
}

