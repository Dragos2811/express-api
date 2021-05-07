const {transactionsHandler} = require('./');

const {response} = require('./helpers');

exports.handler = async ({ pathParameters, queryStringParameters }) => {
    try {
        let query = queryStringParameters || {};
        let { fields } = query || {};
        let data;
        let status;
        console.log("creating tx");
        var transaction_history_query = {'status': 'success'};
        var transaction_pathParam = {};
        const { statusCode, headers, body } = await exports.transactionsHandler({
            transaction_pathParam,
            transaction_history_query,
          });

        return response({ status, data, fields });
    } catch (error) {
        console.error('transactions error', error);
        return response({ status: 503 });
    } 
}
