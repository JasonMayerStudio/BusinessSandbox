/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';
import { getRolesForDropdown } from './roleSelectors';

describe('Role selectors', function () {
  describe('getRolesForDropdown', function () {
    it('should return an empty array when given an empty array', function () {
      // arrange
      const rolesPermissions = [];
      const expectedRoles = [];

      // act
      const roles = getRolesForDropdown(rolesPermissions);

      // asset
      expect(roles).to.eql(expectedRoles);
    });

    it('should return just the role from an array of one role/permission combo', function () {
      // arrange
      const rolesPermissions = [
        {
          name: 'Merchant Employee',
          description: 'THIS IS A ROLE IN ENGLISH!',
          id: 1,
          permissions: [
            {
              id: 1,
              name: 'Create_Merchant_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
            {
              id: 7,
              name: 'View_External_Users',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
      ];
      const expectedRoles = [
        {
          name: 'Merchant Employee',
          text: 'Merchant Employee',
          description: 'THIS IS A ROLE IN ENGLISH!',
          id: 1,
          value: 1,
          permissions: [
            {
              id: 1,
              name: 'Create_Merchant_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
            {
              id: 7,
              name: 'View_External_Users',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
      ];

      // act
      const roles = getRolesForDropdown(rolesPermissions);

      // asset
      expect(roles).to.eql(expectedRoles);
    });

    it('should return just the roles from an array of multiple role/permission combos', function () {
      // arrange
      const rolesPermissions = [
        {
          name: 'Merchant Employee',
          description: 'THIS IS A ROLE IN ENGLISH!',
          id: 1,
          permissions: [
            {
              id: 1,
              name: 'Create_Merchant_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
            {
              id: 7,
              name: 'View_External_Users',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
        {
          name: 'ISO Admin',
          description: 'THIS IS ANOTHER ROLE IN ENGLISH!',
          id: 5,
          permissions: [
            {
              id: 5,
              name: 'Create_ISO_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
      ];
      const expectedRoles = [
        {
          name: 'ISO Admin',
          text: 'ISO Admin',
          description: 'THIS IS ANOTHER ROLE IN ENGLISH!',
          id: 5,
          value: 5,
          permissions: [
            {
              id: 5,
              name: 'Create_ISO_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
        {
          name: 'Merchant Employee',
          text: 'Merchant Employee',
          description: 'THIS IS A ROLE IN ENGLISH!',
          id: 1,
          value: 1,
          permissions: [
            {
              id: 1,
              name: 'Create_Merchant_Employee',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
            {
              id: 7,
              name: 'View_External_Users',
              description: 'THIS IS A PERMISSION IN ENGLISH!',
              optional: false,
            },
          ],
        },
      ];

      // act
      const roles = getRolesForDropdown(rolesPermissions);

      // asset
      expect(roles).to.eql(expectedRoles);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
