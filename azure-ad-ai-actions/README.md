# Azure AD AI Actions App for Freshdesk

This Freshworks app provides AI Actions for managing Azure Active Directory users through Microsoft Graph API. The app enables Freshdesk AI agents to perform user management tasks autonomously.

## Features

### 1. Reset User Password
- Reset a user's password in Azure AD
- Optionally force password change on next sign-in using `forceChangePasswordNextSignIn` flag
- Requires: `userId` (user ID or userPrincipalName) and `newPassword`

### 2. Search User
- Search for users in Azure AD by email, display name, or user principal name
- Supports optional OData filters
- Returns matching users with their details
- Requires: `searchQuery`

### 3. Unlock Account
- Unlock a locked Azure AD user account by enabling it
- Sets `accountEnabled` to `true`
- Requires: `userId` (user ID or userPrincipalName)

## Setup Instructions

### Prerequisites
1. Azure AD application registration with the following API permissions:
   - `User.ReadWrite.All` (Application permission)
   - `Directory.ReadWrite.All` (Application permission)
2. Client ID and Client Secret from your Azure AD app registration

### Installation

1. **Install FDK:**
   ```bash
   npm install -g @freshworks/fdk
   ```

2. **Navigate to app directory:**
   ```bash
   cd azure-ad-ai-actions
   ```

3. **Run the app:**
   ```bash
   fdk run
   ```

4. **Configure OAuth:**
   - During app installation, you'll be prompted to authorize the app
   - Enter your Azure AD Application (Client) ID and Client Secret
   - Authorize the app to access Microsoft Graph API

### Azure AD App Registration

To create an Azure AD app registration:

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Enter a name and select **Accounts in any organizational directory**
5. After creation, note the **Application (client) ID**
6. Go to **Certificates & secrets** > **New client secret**
7. Copy the **Value** (this is your client secret)
8. Go to **API permissions** > **Add a permission** > **Microsoft Graph**
9. Add **Application permissions**:
   - `User.ReadWrite.All`
   - `Directory.ReadWrite.All`
10. Click **Grant admin consent** for your organization

## Usage

### In Freshdesk Workflows

These actions can be used in Freshdesk automation workflows and AI agent flows:

1. **Reset Password Action:**
   - Action: `resetPassword`
   - Parameters:
     - `userId`: User ID or email
     - `newPassword`: New password
     - `forceChangePasswordNextSignIn`: (optional) true/false

2. **Search User Action:**
   - Action: `searchUser`
   - Parameters:
     - `searchQuery`: Search term
     - `filter`: (optional) OData filter
     - `top`: (optional) Max results (default: 10)

3. **Unlock Account Action:**
   - Action: `unlockAccount`
   - Parameters:
     - `userId`: User ID or email

## Testing

To test actions locally:

1. Run `fdk run`
2. Open `https://localhost:10001/web/test` in your browser
3. Select type: `actions`
4. Choose an action to test
5. Enter test payload and click **Simulate**

## API Endpoints Used

- **Password Reset:** `PATCH /v1.0/users/{id}` with `passwordProfile` object
- **Search Users:** `GET /v1.0/users` with `$search` and `$filter` parameters
- **Unlock Account:** `PATCH /v1.0/users/{id}` with `accountEnabled: true`

## Support

For issues or questions, refer to:
- [Freshworks Developer Documentation](https://developers.freshworks.com/)
- [Microsoft Graph API Documentation](https://docs.microsoft.com/en-us/graph/api/overview)
