import { ApolloClient, createNetworkInterface } from 'react-apollo'

const uri = 'http://localhost:3000/graphql-api'
const networkInterface = createNetworkInterface({
    uri
})
networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}  // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      const token = localStorage.getItem('token')
      req.options.headers.authorization = token ? token : null
      next();
    }
}]);
export const client = new ApolloClient({
    networkInterface
})