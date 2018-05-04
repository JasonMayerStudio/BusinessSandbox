export function getMockJwt() {
  /**
   *  {
   *    "iss": "Online JWT Builder",
   *    "iat": 1507056210,
   *    "exp": 1538592210,
   *    "aud": "www.example.com",
   *    "sub": "scoodydoo@mysteryinc.com",
   *    "FirstName": "Scooby",
   *    "LastName": "Doo"
   *  }
   */
  return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MDcwNTYyMTAsImV4cCI6MTUzODU5MjIxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoic2Nvb2R5ZG9vQG15c3RlcnlpbmMuY29tIiwiRmlyc3ROYW1lIjoiU2Nvb2J5IiwiTGFzdE5hbWUiOiJEb28ifQ.8UECk7qUA02TNwrmNlQAJY1ayWFqr61YC2rmfl5xyhY';
}

export function getMockUser(type = 'MERCHANT_USER') {
  /* eslint-disable */
  const mockUsersByType = {
    MERCHANT_USER: {
      "email": "merchant_user@globalpay.com",
      "firstName": "merchant",
      "languageAbbr": null,
      "lastLoginDate": 1508976000000,
      "lastName": "user",
      "productAccessibleMonths": 3,
      "primaryMerchantId": 572,
      "role": {
        "name": "Merchant User",
        "description": "Merchant User",
        "key": "MERCHANT_USER",
        "id": 1,
        "permissions": [
          {
            "name": "Can Log In",
            "description": "This is a description of Can Log In",
            "key": "CAN_LOG_IN",
            "id": 76
          },
          {
            "name": "Create Merchant User",
            "description": "This is a description of Create Merchant User",
            "key": "CREATE_MERCHANT_USER",
            "id": 1
          },
          {
            "name": "View Merchant User",
            "description": "This is a description of View Merchant User",
            "key": "VIEW_MERCHANT_USER",
            "id": 11
          },
          {
            "name": "View Merchant Account Admin",
            "description": "This is a description of View Merchant Account Admin",
            "key": "VIEW_MERCHANT_ACCOUNT_ADMIN",
            "id": 12
          },
          {
            "name": "Edit Merchant User Role",
            "description": "This is a description of Edit Merchant User Role",
            "key": "EDIT_MERCHANT_USER_ROLE",
            "id": 21
          },
          {
            "name": "Edit Merchant Account Admin Role",
            "description": "This is a description of Edit Merchant Account Admin Role",
            "key": "EDIT_MERCHANT_ACCOUNT_ADMIN_ROLE",
            "id": 22
          },
          {
            "name": "Edit Merchant User Data Access",
            "description": "This is a description of Edit Merchant User Data Access",
            "key": "EDIT_MERCHANT_USER_DATA_ACCESS",
            "id": 32
          },
          {
            "name": "Register MID",
            "description": "This is a description of Register MID",
            "key": "REGISTER_MID",
            "id": 52
          },
          {
            "name": "View Locations MIDs and Data Hierarchy",
            "description": "This is a description of View Locations MIDs and Data Hierarchy",
            "key": "VIEW_LOCATIONS_MIDS_AND_DATA_HIERARCHY",
            "id": 54
          },
          {
            "name": "Activate and Deactivate Merchant Users",
            "description": "This is a description of Activate and Deactivate Merchant Users",
            "key": "ACTIVATE_AND_DEACTIVATE_MERCHANT_USERS",
            "id": 55
          },
          {
            "name": "Can transfer ownership",
            "description": "This is a description of Can transfer ownership",
            "key": "CAN_TRANSFER_OWNERSHIP",
            "id": 66
          },
          {
            "name": "Can view product selection",
            "description": "This is a description of Can view product selection",
            "key": "CAN_VIEW_PRODUCT_SELECTION",
            "id": 67
          },
          {
            "name": "Edit Personal Information",
            "description": "This is a description of Edit Personal Information",
            "key": "EDIT_PERSONAL_INFORMATION",
            "id": 68
          },
          {
            "name": "View Messages",
            "description": "This is a description of View Messages",
            "key": "VIEW_MESSAGES",
            "id": 69
          },
          {
            "name": "Can View Transaction Search",
            "description": "This is a description of Can View Transaction Search",
            "key": "CAN_VIEW_TRANSACTION_SEARCH",
            "id": 70
          },
          {
            "name": "Can View Full Credit Card Number",
            "description": "This is a description of Can View Full Credit Card Number",
            "key": "CAN_VIEW_FULL_CREDIT_CARD_NUMBER",
            "id": 71
          },
          {
            "name": "View Statements",
            "description": "This is a description of View Statements",
            "key": "VIEW_STATEMENTS",
            "id": 72
          },
          {
            "name": "Can View Reports",
            "description": "This is a description of Can View Reports",
            "key": "CAN_VIEW_REPORTS",
            "id": 73
          },
          {
            "name": "Can Export Reports",
            "description": "This is a description of Can Export Reports",
            "key": "CAN_EXPORT_REPORTS",
            "id": 74
          },
          {
            "name": "Can Export Reports With Full Card Number",
            "description": "This is a description of Can Export Reports With Full Card Number",
            "key": "CAN_EXPORT_REPORTS_WITH_FULL_CARD_NUMBER",
            "id": 75
          }
        ]
      },
      "dataAccess" : [
        {
          id: 3,
          label: '055',
          hasAccess: false,
          organizations: [
            {
              id: 12,
              label: '67',
              hasAccess: false,
              organizations: [
                {
                  id: 28,
                  label: '016',
                  hasAccess: false,
                  organizations: [
                    {
                      id: 60,
                      label: '001',
                      hasAccess: false,
                      organizations: [
                        {
                          id: 125,
                          label: '090',
                          hasAccess: false,
                          organizations: [
                            {
                              id: 573,
                              label: '1670272980',
                              name: 'ALL VALLEY WSHR-ROCKY',
                              hasAccess: true,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "status": "Active",
      "userId": 2
    },
    GLOBAL_PAYMENTS_EMPLOYEE: {
      "email": "gp_employee@globalpay.com",
      "firstName": "gp",
      "languageAbbr": null,
      "lastLoginDate": 1508976000000,
      "lastName": "employee",
      "productAccessibleMonths": null,
      "primaryMerchantId": null,
      "role": {
        "name": "Global Payments Employee",
        "description": "Global Payments Employee",
        "key": "GLOBAL_PAYMENTS_EMPLOYEE",
        "id": 3,
        "permissions": [
          {
            "name": "View Merchant User",
            "description": "This is a description of View Merchant User",
            "key": "VIEW_MERCHANT_USER",
            "id": 11
          },
          {
            "name": "View Merchant Account Admin",
            "description": "This is a description of View Merchant Account Admin",
            "key": "VIEW_MERCHANT_ACCOUNT_ADMIN",
            "id": 12
          },
          {
            "name": "View GP Employee",
            "description": "This is a description of View GP Employee",
            "key": "VIEW_GP_EMPLOYEE",
            "id": 13
          },
          {
            "name": "View GP Regional PM",
            "description": "This is a description of View GP Regional PM",
            "key": "VIEW_GP_REGIONAL_PM",
            "id": 14
          },
          {
            "name": "View GP Worldwide PM",
            "description": "This is a description of View GP Worldwide PM",
            "key": "VIEW_GP_WORLDWIDE_PM",
            "id": 15
          },
          {
            "name": "View GP Customer Service",
            "description": "This is a description of View GP Customer Service",
            "key": "VIEW_GP_CUSTOMER_SERVICE",
            "id": 16
          },
          {
            "name": "View GP Masterfile Analyst",
            "description": "This is a description of View GP Masterfile Analyst",
            "key": "VIEW_GP_MASTERFILE_ANALYST",
            "id": 17
          },
          {
            "name": "View GP Tech Support Admin",
            "description": "This is a description of View GP Tech Support Admin",
            "key": "VIEW_GP_TECH_SUPPORT_ADMIN",
            "id": 18
          },
          {
            "name": "View Acquirer User",
            "description": "This is a description of View Acquirer User",
            "key": "VIEW_ACQUIRER_USER",
            "id": 19
          },
          {
            "name": "View Acquirer Account Admin",
            "description": "This is a description of View Acquirer Account Admin",
            "key": "VIEW_ACQUIRER_ACCOUNT_ADMIN",
            "id": 20
          },
          {
            "name": "View Locations MIDs and Data Hierarchy",
            "description": "This is a description of View Locations MIDs and Data Hierarchy",
            "key": "VIEW_LOCATIONS_MIDS_AND_DATA_HIERARCHY",
            "id": 54
          },
          {
            "name": "Can view product selection",
            "description": "This is a description of Can view product selection",
            "key": "CAN_VIEW_PRODUCT_SELECTION",
            "id": 67
          },
          {
            "name": "Edit Personal Information",
            "description": "This is a description of Edit Personal Information",
            "key": "EDIT_PERSONAL_INFORMATION",
            "id": 68
          },
          {
            "name": "View Messages",
            "description": "This is a description of View Messages",
            "key": "VIEW_MESSAGES",
            "id": 69
          },
          {
            "name": "Can View Transaction Search",
            "description": "This is a description of Can View Transaction Search",
            "key": "CAN_VIEW_TRANSACTION_SEARCH",
            "id": 70
          },
          {
            "name": "Can Log In",
            "description": "This is a description of Can Log In",
            "key": "CAN_LOG_IN",
            "id": 76
          },
          {
            "name": "Can View Full Credit Card Number",
            "description": "This is a description of Can View Full Credit Card Number",
            "key": "CAN_VIEW_FULL_CREDIT_CARD_NUMBER",
            "id": 71
          },
          {
            "name": "View Statements",
            "description": "This is a description of View Statements",
            "key": "VIEW_STATEMENTS",
            "id": 72
          },
          {
            "name": "Can View Reports",
            "description": "This is a description of Can View Reports",
            "key": "CAN_VIEW_REPORTS",
            "id": 73
          },
          {
            "name": "Can Export Reports",
            "description": "This is a description of Can Export Reports",
            "key": "CAN_EXPORT_REPORTS",
            "id": 74
          },
          {
            "name": "Can Export Reports With Full Card Number",
            "description": "This is a description of Can Export Reports With Full Card Number",
            "key": "CAN_EXPORT_REPORTS_WITH_FULL_CARD_NUMBER",
            "id": 75
          }
        ]
      },
      "hierarchyReports":[{
        "id" : 6
      }],
      "dataAccess" : [
        {
          id: 3,
          label: '055',
          hasAccess: false,
          organizations: [
            {
              id: 12,
              label: '65',
              hasAccess: false,
              organizations: [
                {
                  id: 28,
                  label: '001',
                  hasAccess: false,
                  organizations: [
                    {
                      id: 60,
                      label: '001',
                      hasAccess: false,
                      organizations: [
                        {
                          id: 125,
                          label: '000',
                          hasAccess: false,
                          organizations: [
                            {
                              id: 573,
                              label: '1670272980',
                              name: 'ALL VALLEY WSHR-ROCKY',
                              hasAccess: true,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "status": "Active",
      "userId": 4
    },
  };

  if (mockUsersByType[type]) {
    return mockUsersByType[type];
  } else {
    return mockUsersByType['MERCHANT_USER'];
  }
  /* eslint-enable */
}
