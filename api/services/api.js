
exports.getLinks = (path, limit, offset, sort) => {

    const nextOffset = parseInt(offset)+parseInt(limit);
    const prevOffset = Math.max(parseInt(offset)-parseInt(limit),0);

    const next = `/${path}?limit=${limit}&offset=${nextOffset}&sort=${sort}`;
    const prev = `/${path}?limit=${limit}&offset=${prevOffset}&sort=${sort}`;

    return [{ next }, { prev}];
}

exports.mapListResponse = (data, limit, offset, sort) => {
    var links = exports.getLinks('authors',limit, offset, sort);

    return {
        data,
        limit,
        offset,
        sort,
        links 
    };
}


exports.getSearchParams = (req) => {
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;
    var sort = req.query.sort || 'au_lname';
    const sortDirection = sort[0] === '-' ? 'DESC' : 'ASC';
    sort = sort.replace('-','');     

    return { 
        limit,
        offset,
        sort,
        sortDirection
    };
}