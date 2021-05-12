const { response, getAddressTransactions } = require('./helpers');


exports.handler = async ({ pathParameters, queryStringParameters }) => {
    try {
        let query = queryStringParameters || {};
        let { fields } = query || {};
        const keys = [
            'address',
            'before',
            'after',
            'condition',
        ];

        Object.keys(query).forEach((key) => {
            if (!keys.includes(key)) {
                delete query[key];
            }
        });

        let data;
        let status;
        console.log("creating tx");
        let address = query['address'] || '';
        let before = query['before'] || Math.floor(Date.now() / 1000);;
        data = await getAddressTransactions(address, before);

        return response({ status, data, fields });
    } catch (error) {
        console.error('transactions error', error);
        return response({ status: 503 });
    }
}
