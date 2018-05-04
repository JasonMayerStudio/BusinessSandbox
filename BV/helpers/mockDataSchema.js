/* eslint-disable */

export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 100,
      "maxItems": 300,
      "items": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 65535
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "role": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "pattern": "merchant_employee|merchant_owner|gp_employee|gp_admin|iso_employee|iso_admin"
              },
              "description": {
                "type": "string",
                "faker": "lorem.sentence"
              },
              "id": {
                "type": "integer",
                "minimum": 1,
                "maximum": 4088
              }
            },
            "required": ["name", "description", "id"]
          },
          "status": {
            "type": "string",
            "pattern": "PENDING|ACTIVE|ACTIVATED|DEACTIVATED|INACTIVE|DELETED"
          },
          "merchants": {
            "type": "array",
            "minItems": 15,
            "maxItems": 30,
            "items": {
              "type": "object",
              "properties": {
                "acquirer": {
                  "type": "string",
                  "faker": "name.findName"
                },
                "address1": {
                  "type": "string",
                  "faker": "address.streetAddress"
                },
                "address2": {
                  "type": "string",
                  "faker": "address.secondaryAddress"
                },
                "businessName": {
                  "type": "string",
                  "faker": "company.companyName"
                },
                "merchantNumber": {
                  "type": "string",
                  "pattern": "^[0-9]{13}$"
                },
                "merchantId": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 10000
                },
              },
              "required": ["address1", "address2", "businessName", "merchantNumber", "merchantId"]
            }
          }
        },
        "required": ["userId", "firstName", "lastName", "email", "role", "status", "merchants"]
      }
    },
    "merchants": {
      "type": "array",
      "minItems": 75,
      "maxItems": 300,
      "items": {
        "type": "object",
        "properties": {
          "acquirer": {
            "type": "string",
            "faker": "name.findName"
          },
          "address1": {
            "type": "string",
            "faker": "address.streetAddress"
          },
          "address2": {
            "type": "string",
            "faker": "address.secondaryAddress"
          },
          "associate": {
            "type": "string",
            "pattern": "^[0]{1}[0-9]{2}$"
          },
          "associateId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          },
          "attention": {
            "type": "string",
            "faker": "name.findName"
          },
          "businessName": {
            "type": "string",
            "faker": "company.companyName"
          },
          "chain": {
            "type": "string",
            "pattern": "^[0]{1}[0-9]{2}$"
          },
          "chainId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          },
          "city": {
            "type": "string",
            "faker": "address.city"
          },
          "corp": {
            "type": "string",
            "pattern": "^[0]{1}[0-9]{2}$"
          },
          "corpId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000
          },
          "country": {
            "type": "string",
            "faker": "address.country"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "fax": {
            "type": "string",
            "faker": "phone.phoneNumberFormat"
          },
          "id": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          },
          "merchantNumber": {
            "type": "string",
            "pattern": "^[0-9]{13}$"
          },
          "merchantId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000
          },
          "paperStatements": {
            "type": "boolean",
            "faker": "random.boolean"
          },
          "phoneNumber1": {
            "type": "string",
            "faker": "phone.phoneNumberFormat"
          },
          "phoneNumber2": {
            "type": "string",
            "faker": "phone.phoneNumberFormat"
          },
          "postalCode": {
            "type": "string",
            "faker": "address.zipCode"
          },
          "principal": {
            "type": "string",
            "pattern": "^[0]{1}[0-9]{2}$"
          },
          "principalId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          },
          "region": {
            "type": "string",
            "pattern": "^[0]{1}[0-9]{2}$"
          },
          "regionId": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000
          },
          "state": {
            "type": "string",
            "faker": "address.stateAbbr"
          }
        },
        "required": ["acquirer", "address1", "associate", "associateId", "attention", "businessName", "chain", "chainId", "city", "corp", "corpId", "country", "email", "fax", "id", "merchantId", "merchantNumber", "paperStatements", "phoneNumber1", "phoneNumber2", "postalCode", "principal", "principalId",  "region", "regionId", "state"]
      }
    }
  },
  "required": ["users", "merchants"]
};

/* eslint-enable */
