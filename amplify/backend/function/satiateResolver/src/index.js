/* Amplify Params - DO NOT EDIT
	API_SATIATE_DAYTABLE_ARN
	API_SATIATE_DAYTABLE_NAME
	API_SATIATE_GRAPHQLAPIENDPOINTOUTPUT
	API_SATIATE_GRAPHQLAPIIDOUTPUT
	API_SATIATE_PARAMETERTABLE_ARN
	API_SATIATE_PARAMETERTABLE_NAME
	API_SATIATE_SAVEDINGREDIENTTABLE_ARN
	API_SATIATE_SAVEDINGREDIENTTABLE_NAME
	API_SATIATE_SAVEDMEALTABLE_ARN
	API_SATIATE_SAVEDMEALTABLE_NAME
	API_SATIATE_USERTABLE_ARN
	API_SATIATE_USERTABLE_NAME
	AUTH_SATIATE_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
