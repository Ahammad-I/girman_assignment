 export const responseFormatter = {
   success: (data, message = 'Operation successful') => ({
     success: true,
     message,
     data
   }),
 
   error: (message = 'Operation failed', statusCode = 500) => ({
     success: false,
     message,
     statusCode
   })
 };