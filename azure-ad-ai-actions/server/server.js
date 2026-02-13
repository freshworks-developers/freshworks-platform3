// Error handler - MUST be included
const __formatError = (error, functionName) => {
  console.error(`[${functionName}] Error:`, error);
  let message;
  try {
    message = error.response ? JSON.parse(error.response) : error.message;
  } catch {
    message = error.response || error.message || "Unknown error";
  }
  const parsedMessage = message instanceof Object ? JSON.stringify(message) : message;
  return { status: error.status || 500, message: parsedMessage };
};

exports = {
  resetPassword: async function(args) {
    try {
      const { userId, newPassword, forceChangePasswordNextSignIn } = args;
      
      if (!userId || !newPassword) {
        const error = { status: 400, message: "userId and newPassword are required" };
        renderData(error);
        return;
      }

      // Build request body - construct nested object in server.js
      const requestBody = {
        passwordProfile: {
          password: newPassword,
          forceChangePasswordNextSignIn: forceChangePasswordNextSignIn !== undefined ? forceChangePasswordNextSignIn : false
        }
      };

      await $request.invokeTemplate('graphApiPatch', {
        context: {
          path: `/users/${encodeURIComponent(userId)}`
        },
        body: JSON.stringify(requestBody)
      });

      renderData(null, {
        data: {
          response: "Password reset successful",
          response_variables: {
            success: true,
            userId: userId,
            message: "Password has been reset successfully"
          }
        }
      });
    } catch (error) {
      const formattedError = __formatError(error, 'resetPassword');
      renderData(formattedError);
    }
  },

  searchUser: async function(args) {
    try {
      const { searchQuery, filter, top } = args;
      
      if (!searchQuery) {
        const error = { status: 400, message: "searchQuery is required" };
        renderData(error);
        return;
      }

      // Build query parameters
      const queryParams = [];
      
      // Escape single quotes in search query for OData filter
      const escapedQuery = searchQuery.replace(/'/g, "''");
      
      // Use $filter with startswith or contains for search
      // Search across displayName, userPrincipalName, and mail
      const searchFilter = `(startswith(displayName,'${escapedQuery}') or startswith(userPrincipalName,'${escapedQuery}') or startswith(mail,'${escapedQuery}') or contains(displayName,'${escapedQuery}') or contains(userPrincipalName,'${escapedQuery}') or contains(mail,'${escapedQuery}'))`;
      
      if (filter) {
        queryParams.push(`$filter=${encodeURIComponent(`${searchFilter} and ${filter}`)}`);
      } else {
        queryParams.push(`$filter=${encodeURIComponent(searchFilter)}`);
      }
      
      const topValue = top && top > 0 ? top : 10;
      queryParams.push(`$top=${topValue}`);
      
      queryParams.push('$select=id,userPrincipalName,displayName,mail,accountEnabled');
      
      const queryString = queryParams.join('&');
      const path = `/users?${queryString}`;

      const response = await $request.invokeTemplate('graphApiGet', {
        context: {
          path: path
        }
      });

      const responseData = JSON.parse(response.response);
      const users = responseData.value || [];

      renderData(null, {
        data: {
          response: `Found ${users.length} user(s)`,
          response_variables: {
            users: users,
            count: users.length
          }
        }
      });
    } catch (error) {
      const formattedError = __formatError(error, 'searchUser');
      renderData(formattedError);
    }
  },

  unlockAccount: async function(args) {
    try {
      const { userId } = args;
      
      if (!userId) {
        const error = { status: 400, message: "userId is required" };
        renderData(error);
        return;
      }

      // Build request body - construct nested object in server.js
      const requestBody = {
        accountEnabled: true
      };

      await $request.invokeTemplate('graphApiPatch', {
        context: {
          path: `/users/${encodeURIComponent(userId)}`
        },
        body: JSON.stringify(requestBody)
      });

      renderData(null, {
        data: {
          response: "Account unlocked successfully",
          response_variables: {
            success: true,
            userId: userId,
            message: "Account has been unlocked successfully"
          }
        }
      });
    } catch (error) {
      const formattedError = __formatError(error, 'unlockAccount');
      renderData(formattedError);
    }
  }
};
