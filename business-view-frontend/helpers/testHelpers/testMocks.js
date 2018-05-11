/* eslint-disable */

export function getReportTableData() {
  return [
    {
      id: 1,
      firstName: 'Fred',
      lastName: 'Jones',
      nickName: 'Freddie',
      hairColor: 'Blonde',
      hobby: 'Setting Traps',
    },
    {
      id: 2,
      firstName: 'Daphne',
      lastName: 'Blake',
      nickName: 'Danger-prone Daphne',
      hairColor: 'Red',
      hobby: 'Karate',
    },
    {
      id: 3,
      firstName: 'Velma',
      lastName: 'Dinkley',
      nickName: '(none)',
      hairColor: 'Auburn',
      hobby: 'Weight Lifting',
    },
    {
      id: 4,
      firstName: 'Norville',
      lastName: 'Rogers',
      nickName: 'Shaggy',
      hairColor: 'Dirty Blonde',
      hobby: 'Eating',
    },
  ];
}

export function getSavedGlobalFilter(levelToStopAt = 6, countOfMerchantsToInclude = 1, itemToPick = 0) {
  const savedFilter = {
    startData: [],
    corps: [],
    selectedCorp: null,
    regions: [],
    selectedRegion: null,
    principals: [],
    selectedPrincipal: null,
    associates: [],
    selectedAssociate: null,
    chains: [],
    selectedChain: null,
    availableMerchants: [],
    selectedMerchants: null,
  };

  const rawDataAccess = getDataAccess();
  let levelCount = levelToStopAt;

  savedFilter.corps = rawDataAccess;
  savedFilter.corps[itemToPick].selected = true;
  savedFilter.selectedCorp = savedFilter.corps[itemToPick];
  levelCount -= 1;

  if (levelCount > 0) {
    savedFilter.regions = savedFilter.corps[0].organizations;
    savedFilter.regions[0].selected = true;
    savedFilter.selectedRegion = savedFilter.regions[0];
  }
  levelCount -= 1;

  if (levelCount > 0) {
    savedFilter.principals = savedFilter.regions[0].organizations;
    savedFilter.principals[0].selected = true;
    savedFilter.selectedPrincipal = savedFilter.principals[0];
  }
  levelCount -= 1;

  if (levelCount > 0) {
    savedFilter.associates = savedFilter.principals[0].organizations;
    savedFilter.associates[0].selected = true;
    savedFilter.selectedAssociate = savedFilter.associates[0];
  }
  levelCount -= 1;

  if (levelCount > 0) {
    savedFilter.chains = savedFilter.associates[0].organizations;
    savedFilter.chains[0].selected = true;
    savedFilter.selectedChain = savedFilter.chains[0];
  }
  levelCount -= 1;

  if (levelCount > 0) {
    savedFilter.availableMerchants = savedFilter.chains[0].organizations;
    const selectedMerchants = [];
    for (let i = 0; i < countOfMerchantsToInclude; i += 1) {
      savedFilter.availableMerchants[i].selected = true;
      selectedMerchants.push(savedFilter.availableMerchants[i]);
    }
    savedFilter.selectedMerchants = selectedMerchants;
  }

  savedFilter.startData = savedFilter.corps;

  return savedFilter;
}

export function getGlobalFilterFirstTwoMerchantsSelected(dataAccess) {
  const startData = dataAccess;

  startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0].selected = true;
  startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2].selected = true;

  const newBranch = {
    startData,
    corps: startData,
    selectedCorp: startData[0],
    regions: startData[0].organizations,
    selectedRegion: startData[0].organizations[0],
    principals: startData[0].organizations[0].organizations,
    selectedPrincipal: startData[0].organizations[0].organizations[0],
    associates: startData[0].organizations[0].organizations[0].organizations,
    selectedAssociate: startData[0].organizations[0].organizations[0].organizations[0],
    chains: startData[0].organizations[0].organizations[0].organizations[0].organizations,
    selectedChain: startData[0].organizations[0].organizations[0].organizations[0].organizations[0],
    availableMerchants: startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations,
    selectedMerchants: [
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[0],
      startData[0].organizations[0].organizations[0].organizations[0].organizations[0].organizations[2]
    ],
  }

  return newBranch;
}

export function getDataAccess() {
  return [
    {
      'id': 16,
      'label': '057',
      'organizations': [
        {
          'id': 28,
          'label': '04',
          'organizations': [
            {
              'id': 59,
              'label': '300',
              'organizations': [
                {
                  'id': 196,
                  'label': '012',
                  'organizations': [
                    {
                      'id': 130,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 323,
                          'label': '0000062243315704',
                          'organizations': []
                        },
                        {
                          'id': 321,
                          'label': '0000062243955704',
                          'organizations': []
                        },
                        {
                          'id': 324,
                          'label': '0000062242445704',
                          'organizations': []
                        },
                        {
                          'id': 322,
                          'label': '0000062243405704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 195,
                  'label': '189',
                  'organizations': [
                    {
                      'id': 129,
                      'label': '022',
                      'organizations': [
                        {
                          'id': 320,
                          'label': '0000062331615704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 54,
              'label': '805',
              'organizations': [
                {
                  'id': 186,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 122,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 306,
                          'label': '0000062207875704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 46,
              'label': '823',
              'organizations': [
                {
                  'id': 176,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 112,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 298,
                          'label': '0000047168935703',
                          'organizations': []
                        },
                        {
                          'id': 300,
                          'label': '0000047163585703',
                          'organizations': []
                        },
                        {
                          'id': 277,
                          'label': '0000046233345703',
                          'organizations': []
                        },
                        {
                          'id': 299,
                          'label': '0000047168895703',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 56,
              'label': '724',
              'organizations': [
                {
                  'id': 188,
                  'label': '021',
                  'organizations': [
                    {
                      'id': 124,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 308,
                          'label': '0000062309985704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 55,
              'label': '798',
              'organizations': [
                {
                  'id': 187,
                  'label': '003',
                  'organizations': [
                    {
                      'id': 123,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 307,
                          'label': '0000062317705704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 51,
              'label': '855',
              'organizations': [
                {
                  'id': 183,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 119,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 297,
                          'label': '0000047172175703',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 52,
              'label': '849',
              'organizations': [
                {
                  'id': 184,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 120,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 304,
                          'label': '0000044843815704',
                          'organizations': []
                        },
                        {
                          'id': 303,
                          'label': '0000044853845704',
                          'organizations': []
                        },
                        {
                          'id': 302,
                          'label': '0000085061795703',
                          'organizations': []
                        },
                        {
                          'id': 301,
                          'label': '0000085061945703',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 58,
              'label': '350',
              'organizations': [
                {
                  'id': 194,
                  'label': '900',
                  'organizations': [
                    {
                      'id': 128,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 318,
                          'label': '0000062004405704',
                          'organizations': []
                        },
                        {
                          'id': 316,
                          'label': '0000062302285704',
                          'organizations': []
                        },
                        {
                          'id': 317,
                          'label': '0000062221425704',
                          'organizations': []
                        },
                        {
                          'id': 319,
                          'label': '0000061832155704',
                          'organizations': []
                        },
                        {
                          'id': 315,
                          'label': '0000062325445704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 191,
                  'label': '902',
                  'organizations': [
                    {
                      'id': 126,
                      'label': '966',
                      'organizations': [
                        {
                          'id': 312,
                          'label': '0000047163115703',
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 126,
                      'label': '847',
                      'organizations': [
                        {
                          'id': 313,
                          'label': '0000061348635704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 193,
                  'label': '901',
                  'organizations': [
                    {
                      'id': 127,
                      'label': '706',
                      'organizations': [
                        {
                          'id': 314,
                          'label': '0000062263785704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 57,
              'label': '500',
              'organizations': [
                {
                  'id': 189,
                  'label': '028',
                  'organizations': [
                    {
                      'id': 125,
                      'label': '011',
                      'organizations': [
                        {
                          'id': 310,
                          'label': '0000062321655704',
                          'organizations': []
                        },
                        {
                          'id': 309,
                          'label': '0000062321005704',
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 125,
                      'label': '007',
                      'organizations': [
                        {
                          'id': 311,
                          'label': '0000062309805704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 53,
              'label': '810',
              'organizations': [
                {
                  'id': 185,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 121,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 305,
                          'label': '0000062230905704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 26,
          'label': '05',
          'organizations': [
            {
              'id': 44,
              'label': '200',
              'organizations': [
                {
                  'id': 174,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 110,
                      'label': '931',
                      'organizations': [
                        {
                          'id': 275,
                          'label': '0000002519435705',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 50,
              'label': '350',
              'organizations': [
                {
                  'id': 182,
                  'label': '900',
                  'organizations': [
                    {
                      'id': 118,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 295,
                          'label': '0000003196185705',
                          'organizations': []
                        },
                        {
                          'id': 292,
                          'label': '0000003196225705',
                          'organizations': []
                        },
                        {
                          'id': 293,
                          'label': '0000003196215705',
                          'organizations': []
                        },
                        {
                          'id': 296,
                          'label': '0000003195535705',
                          'organizations': []
                        },
                        {
                          'id': 294,
                          'label': '0000003196195705',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 29,
          'label': '14',
          'organizations': [
            {
              'id': 49,
              'label': '350',
              'organizations': [
                {
                  'id': 181,
                  'label': '900',
                  'organizations': [
                    {
                      'id': 117,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 288,
                          'label': '0000062321505704',
                          'organizations': []
                        },
                        {
                          'id': 291,
                          'label': '0000061747735704',
                          'organizations': []
                        },
                        {
                          'id': 289,
                          'label': '0000062219395704',
                          'organizations': []
                        },
                        {
                          'id': 286,
                          'label': '0000076074035704',
                          'organizations': []
                        },
                        {
                          'id': 290,
                          'label': '0000062117615704',
                          'organizations': []
                        },
                        {
                          'id': 287,
                          'label': '0000062323165704',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 27,
          'label': '27',
          'organizations': [
            {
              'id': 47,
              'label': '200',
              'organizations': [
                {
                  'id': 177,
                  'label': '200',
                  'organizations': [
                    {
                      'id': 113,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 278,
                          'label': '0000099377515727',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 45,
              'label': '001',
              'organizations': [
                {
                  'id': 175,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 111,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 285,
                          'label': '0000099327145727',
                          'organizations': []
                        },
                        {
                          'id': 276,
                          'label': '0000099325855727',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 48,
              'label': '100',
              'organizations': [
                {
                  'id': 180,
                  'label': '200',
                  'organizations': [
                    {
                      'id': 116,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 283,
                          'label': '0000099377485727',
                          'organizations': []
                        },
                        {
                          'id': 284,
                          'label': '0000099377475727',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 179,
                  'label': '400',
                  'organizations': [
                    {
                      'id': 115,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 281,
                          'label': '0000099377505727',
                          'organizations': []
                        },
                        {
                          'id': 282,
                          'label': '0000099377495727',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 178,
                  'label': '900',
                  'organizations': [
                    {
                      'id': 114,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 280,
                          'label': '0000099377465727',
                          'organizations': []
                        },
                        {
                          'id': 279,
                          'label': '0000099377525727',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 18,
      'label': '055',
      'organizations': [
        {
          'id': 34,
          'label': '70',
          'organizations': [
            {
              'id': 68,
              'label': '205',
              'organizations': [
                {
                  'id': 212,
                  'label': '002',
                  'organizations': [
                    {
                      'id': 145,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 385,
                          'label': '0008788205008849',
                          'organizations': []
                        },
                        {
                          'id': 384,
                          'label': '0008788205008848',
                          'organizations': []
                        },
                        {
                          'id': 383,
                          'label': '0008788205008846',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 67,
              'label': '082',
              'organizations': [
                {
                  'id': 210,
                  'label': '383',
                  'organizations': [
                    {
                      'id': 143,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 381,
                          'label': '0008788820018537',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 211,
                  'label': '384',
                  'organizations': [
                    {
                      'id': 144,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 382,
                          'label': '0008788820018540',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 66,
              'label': '081',
              'organizations': [
                {
                  'id': 209,
                  'label': '378',
                  'organizations': [
                    {
                      'id': 142,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 380,
                          'label': '0008788810020695',
                          'organizations': []
                        },
                        {
                          'id': 379,
                          'label': '0008788810020692',
                          'organizations': []
                        },
                        {
                          'id': 378,
                          'label': '0008788810020683',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 208,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 141,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 376,
                          'label': '0008788810020688',
                          'organizations': []
                        },
                        {
                          'id': 375,
                          'label': '0008788810020687',
                          'organizations': []
                        },
                        {
                          'id': 377,
                          'label': '0008788810020691',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 69,
              'label': '243',
              'organizations': [
                {
                  'id': 213,
                  'label': '104',
                  'organizations': [
                    {
                      'id': 146,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 386,
                          'label': '0008788430339384',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 214,
                  'label': '007',
                  'organizations': [
                    {
                      'id': 147,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 401,
                          'label': '0008788430375693',
                          'organizations': []
                        },
                        {
                          'id': 409,
                          'label': '0008788430375875',
                          'organizations': []
                        },
                        {
                          'id': 404,
                          'label': '0008788430375735',
                          'organizations': []
                        },
                        {
                          'id': 421,
                          'label': '0008788430376089',
                          'organizations': []
                        },
                        {
                          'id': 417,
                          'label': '0008788430376022',
                          'organizations': []
                        },
                        {
                          'id': 413,
                          'label': '0008788430375958',
                          'organizations': []
                        },
                        {
                          'id': 408,
                          'label': '0008788430375859',
                          'organizations': []
                        },
                        {
                          'id': 396,
                          'label': '0008788430375610',
                          'organizations': []
                        },
                        {
                          'id': 406,
                          'label': '0008788430375800',
                          'organizations': []
                        },
                        {
                          'id': 418,
                          'label': '0008788430376030',
                          'organizations': []
                        },
                        {
                          'id': 397,
                          'label': '0008788430375636',
                          'organizations': []
                        },
                        {
                          'id': 389,
                          'label': '0008788430365793',
                          'organizations': []
                        },
                        {
                          'id': 393,
                          'label': '0008788430375511',
                          'organizations': []
                        },
                        {
                          'id': 400,
                          'label': '0008788430375677',
                          'organizations': []
                        },
                        {
                          'id': 414,
                          'label': '0008788430375982',
                          'organizations': []
                        },
                        {
                          'id': 412,
                          'label': '0008788430375917',
                          'organizations': []
                        },
                        {
                          'id': 402,
                          'label': '0008788430375701',
                          'organizations': []
                        },
                        {
                          'id': 392,
                          'label': '0008788430375073',
                          'organizations': []
                        },
                        {
                          'id': 419,
                          'label': '0008788430376055',
                          'organizations': []
                        },
                        {
                          'id': 407,
                          'label': '0008788430375842',
                          'organizations': []
                        },
                        {
                          'id': 390,
                          'label': '0008788430372146',
                          'organizations': []
                        },
                        {
                          'id': 387,
                          'label': '0008788430340234',
                          'organizations': []
                        },
                        {
                          'id': 405,
                          'label': '0008788430375784',
                          'organizations': []
                        },
                        {
                          'id': 403,
                          'label': '0008788430375719',
                          'organizations': []
                        },
                        {
                          'id': 410,
                          'label': '0008788430375883',
                          'organizations': []
                        },
                        {
                          'id': 391,
                          'label': '0008788430373144',
                          'organizations': []
                        },
                        {
                          'id': 416,
                          'label': '0008788430376014',
                          'organizations': []
                        },
                        {
                          'id': 388,
                          'label': '0008788430365728',
                          'organizations': []
                        },
                        {
                          'id': 423,
                          'label': '0008788430376121',
                          'organizations': []
                        },
                        {
                          'id': 399,
                          'label': '0008788430375669',
                          'organizations': []
                        },
                        {
                          'id': 422,
                          'label': '0008788430376105',
                          'organizations': []
                        },
                        {
                          'id': 424,
                          'label': '0008788430376139',
                          'organizations': []
                        },
                        {
                          'id': 415,
                          'label': '0008788430375990',
                          'organizations': []
                        },
                        {
                          'id': 394,
                          'label': '0008788430375529',
                          'organizations': []
                        },
                        {
                          'id': 398,
                          'label': '0008788430375644',
                          'organizations': []
                        },
                        {
                          'id': 395,
                          'label': '0008788430375602',
                          'organizations': []
                        },
                        {
                          'id': 420,
                          'label': '0008788430376063',
                          'organizations': []
                        },
                        {
                          'id': 411,
                          'label': '0008788430375909',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 15,
      'label': '042',
      'organizations': [
        {
          'id': 22,
          'label': '70',
          'organizations': [
            {
              'id': 37,
              'label': '027',
              'organizations': [
                {
                  'id': 163,
                  'label': '014',
                  'organizations': [
                    {
                      'id': 100,
                      'label': '402',
                      'organizations': [
                        {
                          'id': 226,
                          'label': '0008788270082700',
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 100,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 227,
                          'label': '0008788270082214',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 14,
      'label': '027',
      'organizations': [
        {
          'id': 24,
          'label': '22',
          'organizations': [
            {
              'id': 40,
              'label': '500',
              'organizations': [
                {
                  'id': 167,
                  'label': '100',
                  'organizations': [
                    {
                      'id': 103,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 248,
                          'label': '0000272200002777',
                          'organizations': []
                        },
                        {
                          'id': 249,
                          'label': '0000272200002553',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 25,
          'label': '15',
          'organizations': [
            {
              'id': 41,
              'label': '700',
              'organizations': [
                {
                  'id': 168,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 104,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 266,
                          'label': '0000271500525990',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 42,
              'label': '001',
              'organizations': [
                {
                  'id': 169,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 105,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 268,
                          'label': '0000271500514242',
                          'organizations': []
                        },
                        {
                          'id': 267,
                          'label': '0000271500517658',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 23,
          'label': '24',
          'organizations': [
            {
              'id': 38,
              'label': '500',
              'organizations': [
                {
                  'id': 165,
                  'label': '100',
                  'organizations': [
                    {
                      'id': 101,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 236,
                          'label': '0000272400280892',
                          'organizations': []
                        },
                        {
                          'id': 241,
                          'label': '0000272400280363',
                          'organizations': []
                        },
                        {
                          'id': 233,
                          'label': '0000272400281478',
                          'organizations': []
                        },
                        {
                          'id': 230,
                          'label': '0000272400281924',
                          'organizations': []
                        },
                        {
                          'id': 231,
                          'label': '0000272400281643',
                          'organizations': []
                        },
                        {
                          'id': 234,
                          'label': '0000272400281437',
                          'organizations': []
                        },
                        {
                          'id': 239,
                          'label': '0000272400280694',
                          'organizations': []
                        },
                        {
                          'id': 229,
                          'label': '0000272400282021',
                          'organizations': []
                        },
                        {
                          'id': 243,
                          'label': '0000272400280199',
                          'organizations': []
                        },
                        {
                          'id': 245,
                          'label': '0000272400279548',
                          'organizations': []
                        },
                        {
                          'id': 240,
                          'label': '0000272400280462',
                          'organizations': []
                        },
                        {
                          'id': 235,
                          'label': '0000272400281353',
                          'organizations': []
                        },
                        {
                          'id': 228,
                          'label': '0000272400282096',
                          'organizations': []
                        },
                        {
                          'id': 232,
                          'label': '0000272400281577',
                          'organizations': []
                        },
                        {
                          'id': 238,
                          'label': '0000272400280702',
                          'organizations': []
                        },
                        {
                          'id': 237,
                          'label': '0000272400280819',
                          'organizations': []
                        },
                        {
                          'id': 244,
                          'label': '0000272400279563',
                          'organizations': []
                        },
                        {
                          'id': 242,
                          'label': '0000272400280223',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 21,
          'label': '02',
          'organizations': [
            {
              'id': 36,
              'label': '600',
              'organizations': [
                {
                  'id': 173,
                  'label': '300',
                  'organizations': [
                    {
                      'id': 109,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 274,
                          'label': '0000270200906336',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 172,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 108,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 273,
                          'label': '0000270200907730',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 162,
                  'label': '500',
                  'organizations': [
                    {
                      'id': 99,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 272,
                          'label': '0000270200909942',
                          'organizations': []
                        },
                        {
                          'id': 225,
                          'label': '0000271200081815',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 43,
              'label': '001',
              'organizations': [
                {
                  'id': 171,
                  'label': '175',
                  'organizations': [
                    {
                      'id': 107,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 270,
                          'label': '0000270201087987',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 39,
              'label': '500',
              'organizations': [
                {
                  'id': 166,
                  'label': '800',
                  'organizations': [
                    {
                      'id': 102,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 254,
                          'label': '0000270201105078',
                          'organizations': []
                        },
                        {
                          'id': 261,
                          'label': '0000270201079208',
                          'organizations': []
                        },
                        {
                          'id': 251,
                          'label': '0000270201110326',
                          'organizations': []
                        },
                        {
                          'id': 256,
                          'label': '0000270201103040',
                          'organizations': []
                        },
                        {
                          'id': 260,
                          'label': '0000270201084794',
                          'organizations': []
                        },
                        {
                          'id': 265,
                          'label': '0000270201073862',
                          'organizations': []
                        },
                        {
                          'id': 250,
                          'label': '0000270201118659',
                          'organizations': []
                        },
                        {
                          'id': 259,
                          'label': '0000270201090742',
                          'organizations': []
                        },
                        {
                          'id': 255,
                          'label': '0000270201104071',
                          'organizations': []
                        },
                        {
                          'id': 257,
                          'label': '0000270201093043',
                          'organizations': []
                        },
                        {
                          'id': 247,
                          'label': '0000270201142113',
                          'organizations': []
                        },
                        {
                          'id': 263,
                          'label': '0000270201074878',
                          'organizations': []
                        },
                        {
                          'id': 246,
                          'label': '0000270201147708',
                          'organizations': []
                        },
                        {
                          'id': 253,
                          'label': '0000270201106514',
                          'organizations': []
                        },
                        {
                          'id': 262,
                          'label': '0000270201076022',
                          'organizations': []
                        },
                        {
                          'id': 264,
                          'label': '0000270201074530',
                          'organizations': []
                        },
                        {
                          'id': 258,
                          'label': '0000270201092888',
                          'organizations': []
                        },
                        {
                          'id': 252,
                          'label': '0000270201106571',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 170,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 106,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 269,
                          'label': '0000270201092839',
                          'organizations': []
                        },
                        {
                          'id': 271,
                          'label': '0000270200915725',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 17,
      'label': '052',
      'organizations': [
        {
          'id': 32,
          'label': '04',
          'organizations': [
            {
              'id': 64,
              'label': '004',
              'organizations': [
                {
                  'id': 203,
                  'label': '006',
                  'organizations': [
                    {
                      'id': 137,
                      'label': 'DJL',
                      'organizations': [
                        {
                          'id': 346,
                          'label': '0000000031393751',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 62,
              'label': '001',
              'organizations': [
                {
                  'id': 200,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 134,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 340,
                          'label': '0000000031424861',
                          'organizations': []
                        },
                        {
                          'id': 352,
                          'label': '0000000031398051',
                          'organizations': []
                        },
                        {
                          'id': 374,
                          'label': '0000000031323391',
                          'organizations': []
                        },
                        {
                          'id': 368,
                          'label': '0000000031057981',
                          'organizations': []
                        },
                        {
                          'id': 337,
                          'label': '0000000031456871',
                          'organizations': []
                        },
                        {
                          'id': 339,
                          'label': '0000000031414471',
                          'organizations': []
                        },
                        {
                          'id': 335,
                          'label': '0000000031470711',
                          'organizations': []
                        },
                        {
                          'id': 359,
                          'label': '0000000031395811',
                          'organizations': []
                        },
                        {
                          'id': 332,
                          'label': '0000000031431611',
                          'organizations': []
                        },
                        {
                          'id': 336,
                          'label': '0000000031457291',
                          'organizations': []
                        },
                        {
                          'id': 349,
                          'label': '0000000031414391',
                          'organizations': []
                        },
                        {
                          'id': 330,
                          'label': '0000000031458771',
                          'organizations': []
                        },
                        {
                          'id': 328,
                          'label': '0000000031477251',
                          'organizations': []
                        },
                        {
                          'id': 345,
                          'label': '0000000031367931',
                          'organizations': []
                        },
                        {
                          'id': 357,
                          'label': '0000000031427421',
                          'organizations': []
                        },
                        {
                          'id': 356,
                          'label': '0000000031394251',
                          'organizations': []
                        },
                        {
                          'id': 347,
                          'label': '0000000031428661',
                          'organizations': []
                        },
                        {
                          'id': 354,
                          'label': '0000000031370231',
                          'organizations': []
                        },
                        {
                          'id': 341,
                          'label': '0000000031411731',
                          'organizations': []
                        },
                        {
                          'id': 353,
                          'label': '0000000031407201',
                          'organizations': []
                        },
                        {
                          'id': 343,
                          'label': '0000000031429991',
                          'organizations': []
                        },
                        {
                          'id': 365,
                          'label': '0000000031345091',
                          'organizations': []
                        },
                        {
                          'id': 369,
                          'label': '0000000031170091',
                          'organizations': []
                        },
                        {
                          'id': 344,
                          'label': '0000000031431951',
                          'organizations': []
                        },
                        {
                          'id': 351,
                          'label': '0000000031399611',
                          'organizations': []
                        },
                        {
                          'id': 348,
                          'label': '0000000031406211',
                          'organizations': []
                        },
                        {
                          'id': 338,
                          'label': '0000000031432371',
                          'organizations': []
                        },
                        {
                          'id': 355,
                          'label': '0000000031395241',
                          'organizations': []
                        },
                        {
                          'id': 362,
                          'label': '0000000031387321',
                          'organizations': []
                        },
                        {
                          'id': 360,
                          'label': '0000000000231921',
                          'organizations': []
                        },
                        {
                          'id': 342,
                          'label': '0000000031438231',
                          'organizations': []
                        },
                        {
                          'id': 333,
                          'label': '0000000031469091',
                          'organizations': []
                        },
                        {
                          'id': 372,
                          'label': '0000000031183531',
                          'organizations': []
                        },
                        {
                          'id': 358,
                          'label': '0000000031368351',
                          'organizations': []
                        },
                        {
                          'id': 364,
                          'label': '0000000031386251',
                          'organizations': []
                        },
                        {
                          'id': 370,
                          'label': '0000000031152681',
                          'organizations': []
                        },
                        {
                          'id': 334,
                          'label': '0000000031463541',
                          'organizations': []
                        },
                        {
                          'id': 371,
                          'label': '0000000031137681',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 199,
                  'label': '088',
                  'organizations': [
                    {
                      'id': 133,
                      'label': 'AAB',
                      'organizations': [
                        {
                          'id': 327,
                          'label': '0000000031482771',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 63,
              'label': '002',
              'organizations': [
                {
                  'id': 201,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 135,
                      'label': 'DMQ',
                      'organizations': [
                        {
                          'id': 373,
                          'label': '0000000000561351',
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 135,
                      'label': 'FFA',
                      'organizations': [
                        {
                          'id': 329,
                          'label': '0000000040775411',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 30,
          'label': '01',
          'organizations': [
            {
              'id': 60,
              'label': '001',
              'organizations': [
                {
                  'id': 206,
                  'label': '109',
                  'organizations': [
                    {
                      'id': 140,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 367,
                          'label': '0000000031261821',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 197,
                  'label': '005',
                  'organizations': [
                    {
                      'id': 131,
                      'label': 'ACE',
                      'organizations': [
                        {
                          'id': 325,
                          'label': '0000000031481861',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 204,
                  'label': '029',
                  'organizations': [
                    {
                      'id': 138,
                      'label': 'AAA',
                      'organizations': [
                        {
                          'id': 350,
                          'label': '0000000031425281',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 33,
          'label': '02',
          'organizations': [
            {
              'id': 65,
              'label': '001',
              'organizations': [
                {
                  'id': 205,
                  'label': '073',
                  'organizations': [
                    {
                      'id': 139,
                      'label': '000',
                      'organizations': [
                        {
                          'id': 363,
                          'label': '0000000031344831',
                          'organizations': []
                        },
                        {
                          'id': 366,
                          'label': '0000000031353321',
                          'organizations': []
                        },
                        {
                          'id': 361,
                          'label': '0000000031353161',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 31,
          'label': '03',
          'organizations': [
            {
              'id': 61,
              'label': '001',
              'organizations': [
                {
                  'id': 198,
                  'label': '087',
                  'organizations': [
                    {
                      'id': 132,
                      'label': 'AAH',
                      'organizations': [
                        {
                          'id': 326,
                          'label': '0000000000436461',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 202,
                  'label': '093',
                  'organizations': [
                    {
                      'id': 136,
                      'label': 'AAA',
                      'organizations': [
                        {
                          'id': 331,
                          'label': '0000000000600531',
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}

export function getMockFilterArray() {
  return [
    {
      'singularName': 'Corp',
      'pluralName': 'Corps',
      'selectorDataType': 'corps',
      'selectedItemType': 'selectedCorp',
      'currentData': [
        {
          'id': 16,
          'label': '057',
          'organizations': [
            {
              'id': 28,
              'label': '04',
              'organizations': [
                {
                  'id': 59,
                  'label': '300',
                  'organizations': [
                    {
                      'id': 196,
                      'label': '012',
                      'organizations': [
                        {
                          'id': 130,
                          'label': '001',
                          'organizations': [
                            {
                              'id': 323,
                              'label': '0000062243315704',
                              'organizations': []
                            },
                            {
                              'id': 321,
                              'label': '0000062243955704',
                              'organizations': []
                            },
                            {
                              'id': 324,
                              'label': '0000062242445704',
                              'organizations': []
                            },
                            {
                              'id': 322,
                              'label': '0000062243405704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 195,
                      'label': '189',
                      'organizations': [
                        {
                          'id': 129,
                          'label': '022',
                          'organizations': [
                            {
                              'id': 320,
                              'label': '0000062331615704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 54,
                  'label': '805',
                  'organizations': [
                    {
                      'id': 186,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 122,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 306,
                              'label': '0000062207875704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 46,
                  'label': '823',
                  'organizations': [
                    {
                      'id': 176,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 112,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 298,
                              'label': '0000047168935703',
                              'organizations': []
                            },
                            {
                              'id': 300,
                              'label': '0000047163585703',
                              'organizations': []
                            },
                            {
                              'id': 277,
                              'label': '0000046233345703',
                              'organizations': []
                            },
                            {
                              'id': 299,
                              'label': '0000047168895703',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 56,
                  'label': '724',
                  'organizations': [
                    {
                      'id': 188,
                      'label': '021',
                      'organizations': [
                        {
                          'id': 124,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 308,
                              'label': '0000062309985704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 55,
                  'label': '798',
                  'organizations': [
                    {
                      'id': 187,
                      'label': '003',
                      'organizations': [
                        {
                          'id': 123,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 307,
                              'label': '0000062317705704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 51,
                  'label': '855',
                  'organizations': [
                    {
                      'id': 183,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 119,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 297,
                              'label': '0000047172175703',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 52,
                  'label': '849',
                  'organizations': [
                    {
                      'id': 184,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 120,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 304,
                              'label': '0000044843815704',
                              'organizations': []
                            },
                            {
                              'id': 303,
                              'label': '0000044853845704',
                              'organizations': []
                            },
                            {
                              'id': 302,
                              'label': '0000085061795703',
                              'organizations': []
                            },
                            {
                              'id': 301,
                              'label': '0000085061945703',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 58,
                  'label': '350',
                  'organizations': [
                    {
                      'id': 194,
                      'label': '900',
                      'organizations': [
                        {
                          'id': 128,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 318,
                              'label': '0000062004405704',
                              'organizations': []
                            },
                            {
                              'id': 316,
                              'label': '0000062302285704',
                              'organizations': []
                            },
                            {
                              'id': 317,
                              'label': '0000062221425704',
                              'organizations': []
                            },
                            {
                              'id': 319,
                              'label': '0000061832155704',
                              'organizations': []
                            },
                            {
                              'id': 315,
                              'label': '0000062325445704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 191,
                      'label': '902',
                      'organizations': [
                        {
                          'id': 126,
                          'label': '966',
                          'organizations': [
                            {
                              'id': 312,
                              'label': '0000047163115703',
                              'organizations': []
                            }
                          ]
                        },
                        {
                          'id': 126,
                          'label': '847',
                          'organizations': [
                            {
                              'id': 313,
                              'label': '0000061348635704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 193,
                      'label': '901',
                      'organizations': [
                        {
                          'id': 127,
                          'label': '706',
                          'organizations': [
                            {
                              'id': 314,
                              'label': '0000062263785704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 57,
                  'label': '500',
                  'organizations': [
                    {
                      'id': 189,
                      'label': '028',
                      'organizations': [
                        {
                          'id': 125,
                          'label': '011',
                          'organizations': [
                            {
                              'id': 310,
                              'label': '0000062321655704',
                              'organizations': []
                            },
                            {
                              'id': 309,
                              'label': '0000062321005704',
                              'organizations': []
                            }
                          ]
                        },
                        {
                          'id': 125,
                          'label': '007',
                          'organizations': [
                            {
                              'id': 311,
                              'label': '0000062309805704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 53,
                  'label': '810',
                  'organizations': [
                    {
                      'id': 185,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 121,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 305,
                              'label': '0000062230905704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 26,
              'label': '05',
              'organizations': [
                {
                  'id': 44,
                  'label': '200',
                  'organizations': [
                    {
                      'id': 174,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 110,
                          'label': '931',
                          'organizations': [
                            {
                              'id': 275,
                              'label': '0000002519435705',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 50,
                  'label': '350',
                  'organizations': [
                    {
                      'id': 182,
                      'label': '900',
                      'organizations': [
                        {
                          'id': 118,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 295,
                              'label': '0000003196185705',
                              'organizations': []
                            },
                            {
                              'id': 292,
                              'label': '0000003196225705',
                              'organizations': []
                            },
                            {
                              'id': 293,
                              'label': '0000003196215705',
                              'organizations': []
                            },
                            {
                              'id': 296,
                              'label': '0000003195535705',
                              'organizations': []
                            },
                            {
                              'id': 294,
                              'label': '0000003196195705',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 29,
              'label': '14',
              'organizations': [
                {
                  'id': 49,
                  'label': '350',
                  'organizations': [
                    {
                      'id': 181,
                      'label': '900',
                      'organizations': [
                        {
                          'id': 117,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 288,
                              'label': '0000062321505704',
                              'organizations': []
                            },
                            {
                              'id': 291,
                              'label': '0000061747735704',
                              'organizations': []
                            },
                            {
                              'id': 289,
                              'label': '0000062219395704',
                              'organizations': []
                            },
                            {
                              'id': 286,
                              'label': '0000076074035704',
                              'organizations': []
                            },
                            {
                              'id': 290,
                              'label': '0000062117615704',
                              'organizations': []
                            },
                            {
                              'id': 287,
                              'label': '0000062323165704',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 27,
              'label': '27',
              'organizations': [
                {
                  'id': 47,
                  'label': '200',
                  'organizations': [
                    {
                      'id': 177,
                      'label': '200',
                      'organizations': [
                        {
                          'id': 113,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 278,
                              'label': '0000099377515727',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 45,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 175,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 111,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 285,
                              'label': '0000099327145727',
                              'organizations': []
                            },
                            {
                              'id': 276,
                              'label': '0000099325855727',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 48,
                  'label': '100',
                  'organizations': [
                    {
                      'id': 180,
                      'label': '200',
                      'organizations': [
                        {
                          'id': 116,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 283,
                              'label': '0000099377485727',
                              'organizations': []
                            },
                            {
                              'id': 284,
                              'label': '0000099377475727',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 179,
                      'label': '400',
                      'organizations': [
                        {
                          'id': 115,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 281,
                              'label': '0000099377505727',
                              'organizations': []
                            },
                            {
                              'id': 282,
                              'label': '0000099377495727',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 178,
                      'label': '900',
                      'organizations': [
                        {
                          'id': 114,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 280,
                              'label': '0000099377465727',
                              'organizations': []
                            },
                            {
                              'id': 279,
                              'label': '0000099377525727',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          'mainLine': '057'
        },
        {
          'id': 18,
          'label': '055',
          'organizations': [
            {
              'id': 34,
              'label': '70',
              'organizations': [
                {
                  'id': 68,
                  'label': '205',
                  'organizations': [
                    {
                      'id': 212,
                      'label': '002',
                      'organizations': [
                        {
                          'id': 145,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 385,
                              'label': '0008788205008849',
                              'organizations': []
                            },
                            {
                              'id': 384,
                              'label': '0008788205008848',
                              'organizations': []
                            },
                            {
                              'id': 383,
                              'label': '0008788205008846',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 67,
                  'label': '082',
                  'organizations': [
                    {
                      'id': 210,
                      'label': '383',
                      'organizations': [
                        {
                          'id': 143,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 381,
                              'label': '0008788820018537',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 211,
                      'label': '384',
                      'organizations': [
                        {
                          'id': 144,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 382,
                              'label': '0008788820018540',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 66,
                  'label': '081',
                  'organizations': [
                    {
                      'id': 209,
                      'label': '378',
                      'organizations': [
                        {
                          'id': 142,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 380,
                              'label': '0008788810020695',
                              'organizations': []
                            },
                            {
                              'id': 379,
                              'label': '0008788810020692',
                              'organizations': []
                            },
                            {
                              'id': 378,
                              'label': '0008788810020683',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 208,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 141,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 376,
                              'label': '0008788810020688',
                              'organizations': []
                            },
                            {
                              'id': 375,
                              'label': '0008788810020687',
                              'organizations': []
                            },
                            {
                              'id': 377,
                              'label': '0008788810020691',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 69,
                  'label': '243',
                  'organizations': [
                    {
                      'id': 213,
                      'label': '104',
                      'organizations': [
                        {
                          'id': 146,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 386,
                              'label': '0008788430339384',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 214,
                      'label': '007',
                      'organizations': [
                        {
                          'id': 147,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 401,
                              'label': '0008788430375693',
                              'organizations': []
                            },
                            {
                              'id': 409,
                              'label': '0008788430375875',
                              'organizations': []
                            },
                            {
                              'id': 404,
                              'label': '0008788430375735',
                              'organizations': []
                            },
                            {
                              'id': 421,
                              'label': '0008788430376089',
                              'organizations': []
                            },
                            {
                              'id': 417,
                              'label': '0008788430376022',
                              'organizations': []
                            },
                            {
                              'id': 413,
                              'label': '0008788430375958',
                              'organizations': []
                            },
                            {
                              'id': 408,
                              'label': '0008788430375859',
                              'organizations': []
                            },
                            {
                              'id': 396,
                              'label': '0008788430375610',
                              'organizations': []
                            },
                            {
                              'id': 406,
                              'label': '0008788430375800',
                              'organizations': []
                            },
                            {
                              'id': 418,
                              'label': '0008788430376030',
                              'organizations': []
                            },
                            {
                              'id': 397,
                              'label': '0008788430375636',
                              'organizations': []
                            },
                            {
                              'id': 389,
                              'label': '0008788430365793',
                              'organizations': []
                            },
                            {
                              'id': 393,
                              'label': '0008788430375511',
                              'organizations': []
                            },
                            {
                              'id': 400,
                              'label': '0008788430375677',
                              'organizations': []
                            },
                            {
                              'id': 414,
                              'label': '0008788430375982',
                              'organizations': []
                            },
                            {
                              'id': 412,
                              'label': '0008788430375917',
                              'organizations': []
                            },
                            {
                              'id': 402,
                              'label': '0008788430375701',
                              'organizations': []
                            },
                            {
                              'id': 392,
                              'label': '0008788430375073',
                              'organizations': []
                            },
                            {
                              'id': 419,
                              'label': '0008788430376055',
                              'organizations': []
                            },
                            {
                              'id': 407,
                              'label': '0008788430375842',
                              'organizations': []
                            },
                            {
                              'id': 390,
                              'label': '0008788430372146',
                              'organizations': []
                            },
                            {
                              'id': 387,
                              'label': '0008788430340234',
                              'organizations': []
                            },
                            {
                              'id': 405,
                              'label': '0008788430375784',
                              'organizations': []
                            },
                            {
                              'id': 403,
                              'label': '0008788430375719',
                              'organizations': []
                            },
                            {
                              'id': 410,
                              'label': '0008788430375883',
                              'organizations': []
                            },
                            {
                              'id': 391,
                              'label': '0008788430373144',
                              'organizations': []
                            },
                            {
                              'id': 416,
                              'label': '0008788430376014',
                              'organizations': []
                            },
                            {
                              'id': 388,
                              'label': '0008788430365728',
                              'organizations': []
                            },
                            {
                              'id': 423,
                              'label': '0008788430376121',
                              'organizations': []
                            },
                            {
                              'id': 399,
                              'label': '0008788430375669',
                              'organizations': []
                            },
                            {
                              'id': 422,
                              'label': '0008788430376105',
                              'organizations': []
                            },
                            {
                              'id': 424,
                              'label': '0008788430376139',
                              'organizations': []
                            },
                            {
                              'id': 415,
                              'label': '0008788430375990',
                              'organizations': []
                            },
                            {
                              'id': 394,
                              'label': '0008788430375529',
                              'organizations': []
                            },
                            {
                              'id': 398,
                              'label': '0008788430375644',
                              'organizations': []
                            },
                            {
                              'id': 395,
                              'label': '0008788430375602',
                              'organizations': []
                            },
                            {
                              'id': 420,
                              'label': '0008788430376063',
                              'organizations': []
                            },
                            {
                              'id': 411,
                              'label': '0008788430375909',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          'mainLine': '055'
        },
        {
          'id': 15,
          'label': '042',
          'organizations': [
            {
              'id': 22,
              'label': '70',
              'organizations': [
                {
                  'id': 37,
                  'label': '027',
                  'organizations': [
                    {
                      'id': 163,
                      'label': '014',
                      'organizations': [
                        {
                          'id': 100,
                          'label': '402',
                          'organizations': [
                            {
                              'id': 226,
                              'label': '0008788270082700',
                              'organizations': []
                            }
                          ]
                        },
                        {
                          'id': 100,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 227,
                              'label': '0008788270082214',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          'mainLine': '042'
        },
        {
          'id': 14,
          'label': '027',
          'organizations': [
            {
              'id': 24,
              'label': '22',
              'organizations': [
                {
                  'id': 40,
                  'label': '500',
                  'organizations': [
                    {
                      'id': 167,
                      'label': '100',
                      'organizations': [
                        {
                          'id': 103,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 248,
                              'label': '0000272200002777',
                              'organizations': []
                            },
                            {
                              'id': 249,
                              'label': '0000272200002553',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 25,
              'label': '15',
              'organizations': [
                {
                  'id': 41,
                  'label': '700',
                  'organizations': [
                    {
                      'id': 168,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 104,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 266,
                              'label': '0000271500525990',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 42,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 169,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 105,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 268,
                              'label': '0000271500514242',
                              'organizations': []
                            },
                            {
                              'id': 267,
                              'label': '0000271500517658',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 23,
              'label': '24',
              'organizations': [
                {
                  'id': 38,
                  'label': '500',
                  'organizations': [
                    {
                      'id': 165,
                      'label': '100',
                      'organizations': [
                        {
                          'id': 101,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 236,
                              'label': '0000272400280892',
                              'organizations': []
                            },
                            {
                              'id': 241,
                              'label': '0000272400280363',
                              'organizations': []
                            },
                            {
                              'id': 233,
                              'label': '0000272400281478',
                              'organizations': []
                            },
                            {
                              'id': 230,
                              'label': '0000272400281924',
                              'organizations': []
                            },
                            {
                              'id': 231,
                              'label': '0000272400281643',
                              'organizations': []
                            },
                            {
                              'id': 234,
                              'label': '0000272400281437',
                              'organizations': []
                            },
                            {
                              'id': 239,
                              'label': '0000272400280694',
                              'organizations': []
                            },
                            {
                              'id': 229,
                              'label': '0000272400282021',
                              'organizations': []
                            },
                            {
                              'id': 243,
                              'label': '0000272400280199',
                              'organizations': []
                            },
                            {
                              'id': 245,
                              'label': '0000272400279548',
                              'organizations': []
                            },
                            {
                              'id': 240,
                              'label': '0000272400280462',
                              'organizations': []
                            },
                            {
                              'id': 235,
                              'label': '0000272400281353',
                              'organizations': []
                            },
                            {
                              'id': 228,
                              'label': '0000272400282096',
                              'organizations': []
                            },
                            {
                              'id': 232,
                              'label': '0000272400281577',
                              'organizations': []
                            },
                            {
                              'id': 238,
                              'label': '0000272400280702',
                              'organizations': []
                            },
                            {
                              'id': 237,
                              'label': '0000272400280819',
                              'organizations': []
                            },
                            {
                              'id': 244,
                              'label': '0000272400279563',
                              'organizations': []
                            },
                            {
                              'id': 242,
                              'label': '0000272400280223',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 21,
              'label': '02',
              'organizations': [
                {
                  'id': 36,
                  'label': '600',
                  'organizations': [
                    {
                      'id': 173,
                      'label': '300',
                      'organizations': [
                        {
                          'id': 109,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 274,
                              'label': '0000270200906336',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 172,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 108,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 273,
                              'label': '0000270200907730',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 162,
                      'label': '500',
                      'organizations': [
                        {
                          'id': 99,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 272,
                              'label': '0000270200909942',
                              'organizations': []
                            },
                            {
                              'id': 225,
                              'label': '0000271200081815',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 43,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 171,
                      'label': '175',
                      'organizations': [
                        {
                          'id': 107,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 270,
                              'label': '0000270201087987',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 39,
                  'label': '500',
                  'organizations': [
                    {
                      'id': 166,
                      'label': '800',
                      'organizations': [
                        {
                          'id': 102,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 254,
                              'label': '0000270201105078',
                              'organizations': []
                            },
                            {
                              'id': 261,
                              'label': '0000270201079208',
                              'organizations': []
                            },
                            {
                              'id': 251,
                              'label': '0000270201110326',
                              'organizations': []
                            },
                            {
                              'id': 256,
                              'label': '0000270201103040',
                              'organizations': []
                            },
                            {
                              'id': 260,
                              'label': '0000270201084794',
                              'organizations': []
                            },
                            {
                              'id': 265,
                              'label': '0000270201073862',
                              'organizations': []
                            },
                            {
                              'id': 250,
                              'label': '0000270201118659',
                              'organizations': []
                            },
                            {
                              'id': 259,
                              'label': '0000270201090742',
                              'organizations': []
                            },
                            {
                              'id': 255,
                              'label': '0000270201104071',
                              'organizations': []
                            },
                            {
                              'id': 257,
                              'label': '0000270201093043',
                              'organizations': []
                            },
                            {
                              'id': 247,
                              'label': '0000270201142113',
                              'organizations': []
                            },
                            {
                              'id': 263,
                              'label': '0000270201074878',
                              'organizations': []
                            },
                            {
                              'id': 246,
                              'label': '0000270201147708',
                              'organizations': []
                            },
                            {
                              'id': 253,
                              'label': '0000270201106514',
                              'organizations': []
                            },
                            {
                              'id': 262,
                              'label': '0000270201076022',
                              'organizations': []
                            },
                            {
                              'id': 264,
                              'label': '0000270201074530',
                              'organizations': []
                            },
                            {
                              'id': 258,
                              'label': '0000270201092888',
                              'organizations': []
                            },
                            {
                              'id': 252,
                              'label': '0000270201106571',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 170,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 106,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 269,
                              'label': '0000270201092839',
                              'organizations': []
                            },
                            {
                              'id': 271,
                              'label': '0000270200915725',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          'mainLine': '027'
        },
        {
          'id': 17,
          'label': '052',
          'organizations': [
            {
              'id': 32,
              'label': '04',
              'organizations': [
                {
                  'id': 64,
                  'label': '004',
                  'organizations': [
                    {
                      'id': 203,
                      'label': '006',
                      'organizations': [
                        {
                          'id': 137,
                          'label': 'DJL',
                          'organizations': [
                            {
                              'id': 346,
                              'label': '0000000031393751',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 62,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 200,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 134,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 340,
                              'label': '0000000031424861',
                              'organizations': []
                            },
                            {
                              'id': 352,
                              'label': '0000000031398051',
                              'organizations': []
                            },
                            {
                              'id': 374,
                              'label': '0000000031323391',
                              'organizations': []
                            },
                            {
                              'id': 368,
                              'label': '0000000031057981',
                              'organizations': []
                            },
                            {
                              'id': 337,
                              'label': '0000000031456871',
                              'organizations': []
                            },
                            {
                              'id': 339,
                              'label': '0000000031414471',
                              'organizations': []
                            },
                            {
                              'id': 335,
                              'label': '0000000031470711',
                              'organizations': []
                            },
                            {
                              'id': 359,
                              'label': '0000000031395811',
                              'organizations': []
                            },
                            {
                              'id': 332,
                              'label': '0000000031431611',
                              'organizations': []
                            },
                            {
                              'id': 336,
                              'label': '0000000031457291',
                              'organizations': []
                            },
                            {
                              'id': 349,
                              'label': '0000000031414391',
                              'organizations': []
                            },
                            {
                              'id': 330,
                              'label': '0000000031458771',
                              'organizations': []
                            },
                            {
                              'id': 328,
                              'label': '0000000031477251',
                              'organizations': []
                            },
                            {
                              'id': 345,
                              'label': '0000000031367931',
                              'organizations': []
                            },
                            {
                              'id': 357,
                              'label': '0000000031427421',
                              'organizations': []
                            },
                            {
                              'id': 356,
                              'label': '0000000031394251',
                              'organizations': []
                            },
                            {
                              'id': 347,
                              'label': '0000000031428661',
                              'organizations': []
                            },
                            {
                              'id': 354,
                              'label': '0000000031370231',
                              'organizations': []
                            },
                            {
                              'id': 341,
                              'label': '0000000031411731',
                              'organizations': []
                            },
                            {
                              'id': 353,
                              'label': '0000000031407201',
                              'organizations': []
                            },
                            {
                              'id': 343,
                              'label': '0000000031429991',
                              'organizations': []
                            },
                            {
                              'id': 365,
                              'label': '0000000031345091',
                              'organizations': []
                            },
                            {
                              'id': 369,
                              'label': '0000000031170091',
                              'organizations': []
                            },
                            {
                              'id': 344,
                              'label': '0000000031431951',
                              'organizations': []
                            },
                            {
                              'id': 351,
                              'label': '0000000031399611',
                              'organizations': []
                            },
                            {
                              'id': 348,
                              'label': '0000000031406211',
                              'organizations': []
                            },
                            {
                              'id': 338,
                              'label': '0000000031432371',
                              'organizations': []
                            },
                            {
                              'id': 355,
                              'label': '0000000031395241',
                              'organizations': []
                            },
                            {
                              'id': 362,
                              'label': '0000000031387321',
                              'organizations': []
                            },
                            {
                              'id': 360,
                              'label': '0000000000231921',
                              'organizations': []
                            },
                            {
                              'id': 342,
                              'label': '0000000031438231',
                              'organizations': []
                            },
                            {
                              'id': 333,
                              'label': '0000000031469091',
                              'organizations': []
                            },
                            {
                              'id': 372,
                              'label': '0000000031183531',
                              'organizations': []
                            },
                            {
                              'id': 358,
                              'label': '0000000031368351',
                              'organizations': []
                            },
                            {
                              'id': 364,
                              'label': '0000000031386251',
                              'organizations': []
                            },
                            {
                              'id': 370,
                              'label': '0000000031152681',
                              'organizations': []
                            },
                            {
                              'id': 334,
                              'label': '0000000031463541',
                              'organizations': []
                            },
                            {
                              'id': 371,
                              'label': '0000000031137681',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 199,
                      'label': '088',
                      'organizations': [
                        {
                          'id': 133,
                          'label': 'AAB',
                          'organizations': [
                            {
                              'id': 327,
                              'label': '0000000031482771',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 63,
                  'label': '002',
                  'organizations': [
                    {
                      'id': 201,
                      'label': '001',
                      'organizations': [
                        {
                          'id': 135,
                          'label': 'DMQ',
                          'organizations': [
                            {
                              'id': 373,
                              'label': '0000000000561351',
                              'organizations': []
                            }
                          ]
                        },
                        {
                          'id': 135,
                          'label': 'FFA',
                          'organizations': [
                            {
                              'id': 329,
                              'label': '0000000040775411',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 30,
              'label': '01',
              'organizations': [
                {
                  'id': 60,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 206,
                      'label': '109',
                      'organizations': [
                        {
                          'id': 140,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 367,
                              'label': '0000000031261821',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 197,
                      'label': '005',
                      'organizations': [
                        {
                          'id': 131,
                          'label': 'ACE',
                          'organizations': [
                            {
                              'id': 325,
                              'label': '0000000031481861',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 204,
                      'label': '029',
                      'organizations': [
                        {
                          'id': 138,
                          'label': 'AAA',
                          'organizations': [
                            {
                              'id': 350,
                              'label': '0000000031425281',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 33,
              'label': '02',
              'organizations': [
                {
                  'id': 65,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 205,
                      'label': '073',
                      'organizations': [
                        {
                          'id': 139,
                          'label': '000',
                          'organizations': [
                            {
                              'id': 363,
                              'label': '0000000031344831',
                              'organizations': []
                            },
                            {
                              'id': 366,
                              'label': '0000000031353321',
                              'organizations': []
                            },
                            {
                              'id': 361,
                              'label': '0000000031353161',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 31,
              'label': '03',
              'organizations': [
                {
                  'id': 61,
                  'label': '001',
                  'organizations': [
                    {
                      'id': 198,
                      'label': '087',
                      'organizations': [
                        {
                          'id': 132,
                          'label': 'AAH',
                          'organizations': [
                            {
                              'id': 326,
                              'label': '0000000000436461',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 202,
                      'label': '093',
                      'organizations': [
                        {
                          'id': 136,
                          'label': 'AAA',
                          'organizations': [
                            {
                              'id': 331,
                              'label': '0000000000600531',
                              'organizations': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          'mainLine': '052'
        }
      ],
      'currentSelectedItem': null,
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    },
    {
      'singularName': 'Region',
      'pluralName': 'Regions',
      'selectorDataType': 'regions',
      'selectedItemType': 'selectedRegion',
      'currentData': [],
      'currentSelectedItem': null,
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    },
    {
      'singularName': 'Principal',
      'pluralName': 'Principals',
      'selectorDataType': 'principals',
      'selectedItemType': 'selectedPrincipal',
      'currentData': [],
      'currentSelectedItem': null,
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    },
    {
      'singularName': 'Associate',
      'pluralName': 'Associates',
      'selectorDataType': 'associates',
      'selectedItemType': 'selectedAssociate',
      'currentData': [],
      'currentSelectedItem': null,
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    },
    {
      'singularName': 'Chain',
      'pluralName': 'Chains',
      'selectorDataType': 'chains',
      'selectedItemType': 'selectedChain',
      'currentData': [],
      'currentSelectedItem': null,
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    },
    {
      'singularName': 'Merchant',
      'pluralName': 'Merchants',
      'selectorDataType': 'availableMerchants',
      'selectedItemType': 'selectedMerchant',
      'currentData': [
        {
          'id': 323,
          'label': '0000062243315704',
          'organizations': [],
          'mainLine': '0000062243315704'
        },
        {
          'id': 321,
          'label': '0000062243955704',
          'organizations': [],
          'mainLine': '0000062243955704'
        },
        {
          'id': 324,
          'label': '0000062242445704',
          'organizations': [],
          'mainLine': '0000062242445704'
        },
        {
          'id': 322,
          'label': '0000062243405704',
          'organizations': [],
          'mainLine': '0000062243405704'
        },
        {
          'id': 320,
          'label': '0000062331615704',
          'organizations': [],
          'mainLine': '0000062331615704'
        },
        {
          'id': 306,
          'label': '0000062207875704',
          'organizations': [],
          'mainLine': '0000062207875704'
        },
        {
          'id': 298,
          'label': '0000047168935703',
          'organizations': [],
          'mainLine': '0000047168935703'
        },
        {
          'id': 300,
          'label': '0000047163585703',
          'organizations': [],
          'mainLine': '0000047163585703'
        },
        {
          'id': 277,
          'label': '0000046233345703',
          'organizations': [],
          'mainLine': '0000046233345703'
        },
        {
          'id': 299,
          'label': '0000047168895703',
          'organizations': [],
          'mainLine': '0000047168895703'
        },
        {
          'id': 308,
          'label': '0000062309985704',
          'organizations': [],
          'mainLine': '0000062309985704'
        },
        {
          'id': 307,
          'label': '0000062317705704',
          'organizations': [],
          'mainLine': '0000062317705704'
        },
        {
          'id': 297,
          'label': '0000047172175703',
          'organizations': [],
          'mainLine': '0000047172175703'
        },
        {
          'id': 304,
          'label': '0000044843815704',
          'organizations': [],
          'mainLine': '0000044843815704'
        },
        {
          'id': 303,
          'label': '0000044853845704',
          'organizations': [],
          'mainLine': '0000044853845704'
        },
        {
          'id': 302,
          'label': '0000085061795703',
          'organizations': [],
          'mainLine': '0000085061795703'
        },
        {
          'id': 301,
          'label': '0000085061945703',
          'organizations': [],
          'mainLine': '0000085061945703'
        },
        {
          'id': 318,
          'label': '0000062004405704',
          'organizations': [],
          'mainLine': '0000062004405704'
        },
        {
          'id': 316,
          'label': '0000062302285704',
          'organizations': [],
          'mainLine': '0000062302285704'
        },
        {
          'id': 317,
          'label': '0000062221425704',
          'organizations': [],
          'mainLine': '0000062221425704'
        },
        {
          'id': 319,
          'label': '0000061832155704',
          'organizations': [],
          'mainLine': '0000061832155704'
        },
        {
          'id': 315,
          'label': '0000062325445704',
          'organizations': [],
          'mainLine': '0000062325445704'
        },
        {
          'id': 312,
          'label': '0000047163115703',
          'organizations': [],
          'mainLine': '0000047163115703'
        },
        {
          'id': 313,
          'label': '0000061348635704',
          'organizations': [],
          'mainLine': '0000061348635704'
        },
        {
          'id': 314,
          'label': '0000062263785704',
          'organizations': [],
          'mainLine': '0000062263785704'
        },
        {
          'id': 310,
          'label': '0000062321655704',
          'organizations': [],
          'mainLine': '0000062321655704'
        },
        {
          'id': 309,
          'label': '0000062321005704',
          'organizations': [],
          'mainLine': '0000062321005704'
        },
        {
          'id': 311,
          'label': '0000062309805704',
          'organizations': [],
          'mainLine': '0000062309805704'
        },
        {
          'id': 305,
          'label': '0000062230905704',
          'organizations': [],
          'mainLine': '0000062230905704'
        },
        {
          'id': 275,
          'label': '0000002519435705',
          'organizations': [],
          'mainLine': '0000002519435705'
        },
        {
          'id': 295,
          'label': '0000003196185705',
          'organizations': [],
          'mainLine': '0000003196185705'
        },
        {
          'id': 292,
          'label': '0000003196225705',
          'organizations': [],
          'mainLine': '0000003196225705'
        },
        {
          'id': 293,
          'label': '0000003196215705',
          'organizations': [],
          'mainLine': '0000003196215705'
        },
        {
          'id': 296,
          'label': '0000003195535705',
          'organizations': [],
          'mainLine': '0000003195535705'
        },
        {
          'id': 294,
          'label': '0000003196195705',
          'organizations': [],
          'mainLine': '0000003196195705'
        },
        {
          'id': 288,
          'label': '0000062321505704',
          'organizations': [],
          'mainLine': '0000062321505704'
        },
        {
          'id': 291,
          'label': '0000061747735704',
          'organizations': [],
          'mainLine': '0000061747735704'
        },
        {
          'id': 289,
          'label': '0000062219395704',
          'organizations': [],
          'mainLine': '0000062219395704'
        },
        {
          'id': 286,
          'label': '0000076074035704',
          'organizations': [],
          'mainLine': '0000076074035704'
        },
        {
          'id': 290,
          'label': '0000062117615704',
          'organizations': [],
          'mainLine': '0000062117615704'
        },
        {
          'id': 287,
          'label': '0000062323165704',
          'organizations': [],
          'mainLine': '0000062323165704'
        },
        {
          'id': 278,
          'label': '0000099377515727',
          'organizations': [],
          'mainLine': '0000099377515727'
        },
        {
          'id': 285,
          'label': '0000099327145727',
          'organizations': [],
          'mainLine': '0000099327145727'
        },
        {
          'id': 276,
          'label': '0000099325855727',
          'organizations': [],
          'mainLine': '0000099325855727'
        },
        {
          'id': 283,
          'label': '0000099377485727',
          'organizations': [],
          'mainLine': '0000099377485727'
        },
        {
          'id': 284,
          'label': '0000099377475727',
          'organizations': [],
          'mainLine': '0000099377475727'
        },
        {
          'id': 281,
          'label': '0000099377505727',
          'organizations': [],
          'mainLine': '0000099377505727'
        },
        {
          'id': 282,
          'label': '0000099377495727',
          'organizations': [],
          'mainLine': '0000099377495727'
        },
        {
          'id': 280,
          'label': '0000099377465727',
          'organizations': [],
          'mainLine': '0000099377465727'
        },
        {
          'id': 279,
          'label': '0000099377525727',
          'organizations': [],
          'mainLine': '0000099377525727'
        },
        {
          'id': 385,
          'label': '0008788205008849',
          'organizations': [],
          'mainLine': '0008788205008849'
        },
        {
          'id': 384,
          'label': '0008788205008848',
          'organizations': [],
          'mainLine': '0008788205008848'
        },
        {
          'id': 383,
          'label': '0008788205008846',
          'organizations': [],
          'mainLine': '0008788205008846'
        },
        {
          'id': 381,
          'label': '0008788820018537',
          'organizations': [],
          'mainLine': '0008788820018537'
        },
        {
          'id': 382,
          'label': '0008788820018540',
          'organizations': [],
          'mainLine': '0008788820018540'
        },
        {
          'id': 380,
          'label': '0008788810020695',
          'organizations': [],
          'mainLine': '0008788810020695'
        },
        {
          'id': 379,
          'label': '0008788810020692',
          'organizations': [],
          'mainLine': '0008788810020692'
        },
        {
          'id': 378,
          'label': '0008788810020683',
          'organizations': [],
          'mainLine': '0008788810020683'
        },
        {
          'id': 376,
          'label': '0008788810020688',
          'organizations': [],
          'mainLine': '0008788810020688'
        },
        {
          'id': 375,
          'label': '0008788810020687',
          'organizations': [],
          'mainLine': '0008788810020687'
        },
        {
          'id': 377,
          'label': '0008788810020691',
          'organizations': [],
          'mainLine': '0008788810020691'
        },
        {
          'id': 386,
          'label': '0008788430339384',
          'organizations': [],
          'mainLine': '0008788430339384'
        },
        {
          'id': 401,
          'label': '0008788430375693',
          'organizations': [],
          'mainLine': '0008788430375693'
        },
        {
          'id': 409,
          'label': '0008788430375875',
          'organizations': [],
          'mainLine': '0008788430375875'
        },
        {
          'id': 404,
          'label': '0008788430375735',
          'organizations': [],
          'mainLine': '0008788430375735'
        },
        {
          'id': 421,
          'label': '0008788430376089',
          'organizations': [],
          'mainLine': '0008788430376089'
        },
        {
          'id': 417,
          'label': '0008788430376022',
          'organizations': [],
          'mainLine': '0008788430376022'
        },
        {
          'id': 413,
          'label': '0008788430375958',
          'organizations': [],
          'mainLine': '0008788430375958'
        },
        {
          'id': 408,
          'label': '0008788430375859',
          'organizations': [],
          'mainLine': '0008788430375859'
        },
        {
          'id': 396,
          'label': '0008788430375610',
          'organizations': [],
          'mainLine': '0008788430375610'
        },
        {
          'id': 406,
          'label': '0008788430375800',
          'organizations': [],
          'mainLine': '0008788430375800'
        },
        {
          'id': 418,
          'label': '0008788430376030',
          'organizations': [],
          'mainLine': '0008788430376030'
        },
        {
          'id': 397,
          'label': '0008788430375636',
          'organizations': [],
          'mainLine': '0008788430375636'
        },
        {
          'id': 389,
          'label': '0008788430365793',
          'organizations': [],
          'mainLine': '0008788430365793'
        },
        {
          'id': 393,
          'label': '0008788430375511',
          'organizations': [],
          'mainLine': '0008788430375511'
        },
        {
          'id': 400,
          'label': '0008788430375677',
          'organizations': [],
          'mainLine': '0008788430375677'
        },
        {
          'id': 414,
          'label': '0008788430375982',
          'organizations': [],
          'mainLine': '0008788430375982'
        },
        {
          'id': 412,
          'label': '0008788430375917',
          'organizations': [],
          'mainLine': '0008788430375917'
        },
        {
          'id': 402,
          'label': '0008788430375701',
          'organizations': [],
          'mainLine': '0008788430375701'
        },
        {
          'id': 392,
          'label': '0008788430375073',
          'organizations': [],
          'mainLine': '0008788430375073'
        },
        {
          'id': 419,
          'label': '0008788430376055',
          'organizations': [],
          'mainLine': '0008788430376055'
        },
        {
          'id': 407,
          'label': '0008788430375842',
          'organizations': [],
          'mainLine': '0008788430375842'
        },
        {
          'id': 390,
          'label': '0008788430372146',
          'organizations': [],
          'mainLine': '0008788430372146'
        },
        {
          'id': 387,
          'label': '0008788430340234',
          'organizations': [],
          'mainLine': '0008788430340234'
        },
        {
          'id': 405,
          'label': '0008788430375784',
          'organizations': [],
          'mainLine': '0008788430375784'
        },
        {
          'id': 403,
          'label': '0008788430375719',
          'organizations': [],
          'mainLine': '0008788430375719'
        },
        {
          'id': 410,
          'label': '0008788430375883',
          'organizations': [],
          'mainLine': '0008788430375883'
        },
        {
          'id': 391,
          'label': '0008788430373144',
          'organizations': [],
          'mainLine': '0008788430373144'
        },
        {
          'id': 416,
          'label': '0008788430376014',
          'organizations': [],
          'mainLine': '0008788430376014'
        },
        {
          'id': 388,
          'label': '0008788430365728',
          'organizations': [],
          'mainLine': '0008788430365728'
        },
        {
          'id': 423,
          'label': '0008788430376121',
          'organizations': [],
          'mainLine': '0008788430376121'
        },
        {
          'id': 399,
          'label': '0008788430375669',
          'organizations': [],
          'mainLine': '0008788430375669'
        },
        {
          'id': 422,
          'label': '0008788430376105',
          'organizations': [],
          'mainLine': '0008788430376105'
        },
        {
          'id': 424,
          'label': '0008788430376139',
          'organizations': [],
          'mainLine': '0008788430376139'
        },
        {
          'id': 415,
          'label': '0008788430375990',
          'organizations': [],
          'mainLine': '0008788430375990'
        },
        {
          'id': 394,
          'label': '0008788430375529',
          'organizations': [],
          'mainLine': '0008788430375529'
        },
        {
          'id': 398,
          'label': '0008788430375644',
          'organizations': [],
          'mainLine': '0008788430375644'
        },
        {
          'id': 395,
          'label': '0008788430375602',
          'organizations': [],
          'mainLine': '0008788430375602'
        },
        {
          'id': 420,
          'label': '0008788430376063',
          'organizations': [],
          'mainLine': '0008788430376063'
        },
        {
          'id': 411,
          'label': '0008788430375909',
          'organizations': [],
          'mainLine': '0008788430375909'
        },
        {
          'id': 226,
          'label': '0008788270082700',
          'organizations': [],
          'mainLine': '0008788270082700'
        },
        {
          'id': 227,
          'label': '0008788270082214',
          'organizations': [],
          'mainLine': '0008788270082214'
        },
        {
          'id': 248,
          'label': '0000272200002777',
          'organizations': [],
          'mainLine': '0000272200002777'
        },
        {
          'id': 249,
          'label': '0000272200002553',
          'organizations': [],
          'mainLine': '0000272200002553'
        },
        {
          'id': 266,
          'label': '0000271500525990',
          'organizations': [],
          'mainLine': '0000271500525990'
        },
        {
          'id': 268,
          'label': '0000271500514242',
          'organizations': [],
          'mainLine': '0000271500514242'
        },
        {
          'id': 267,
          'label': '0000271500517658',
          'organizations': [],
          'mainLine': '0000271500517658'
        },
        {
          'id': 236,
          'label': '0000272400280892',
          'organizations': [],
          'mainLine': '0000272400280892'
        },
        {
          'id': 241,
          'label': '0000272400280363',
          'organizations': [],
          'mainLine': '0000272400280363'
        },
        {
          'id': 233,
          'label': '0000272400281478',
          'organizations': [],
          'mainLine': '0000272400281478'
        },
        {
          'id': 230,
          'label': '0000272400281924',
          'organizations': [],
          'mainLine': '0000272400281924'
        },
        {
          'id': 231,
          'label': '0000272400281643',
          'organizations': [],
          'mainLine': '0000272400281643'
        },
        {
          'id': 234,
          'label': '0000272400281437',
          'organizations': [],
          'mainLine': '0000272400281437'
        },
        {
          'id': 239,
          'label': '0000272400280694',
          'organizations': [],
          'mainLine': '0000272400280694'
        },
        {
          'id': 229,
          'label': '0000272400282021',
          'organizations': [],
          'mainLine': '0000272400282021'
        },
        {
          'id': 243,
          'label': '0000272400280199',
          'organizations': [],
          'mainLine': '0000272400280199'
        },
        {
          'id': 245,
          'label': '0000272400279548',
          'organizations': [],
          'mainLine': '0000272400279548'
        },
        {
          'id': 240,
          'label': '0000272400280462',
          'organizations': [],
          'mainLine': '0000272400280462'
        },
        {
          'id': 235,
          'label': '0000272400281353',
          'organizations': [],
          'mainLine': '0000272400281353'
        },
        {
          'id': 228,
          'label': '0000272400282096',
          'organizations': [],
          'mainLine': '0000272400282096'
        },
        {
          'id': 232,
          'label': '0000272400281577',
          'organizations': [],
          'mainLine': '0000272400281577'
        },
        {
          'id': 238,
          'label': '0000272400280702',
          'organizations': [],
          'mainLine': '0000272400280702'
        },
        {
          'id': 237,
          'label': '0000272400280819',
          'organizations': [],
          'mainLine': '0000272400280819'
        },
        {
          'id': 244,
          'label': '0000272400279563',
          'organizations': [],
          'mainLine': '0000272400279563'
        },
        {
          'id': 242,
          'label': '0000272400280223',
          'organizations': [],
          'mainLine': '0000272400280223'
        },
        {
          'id': 274,
          'label': '0000270200906336',
          'organizations': [],
          'mainLine': '0000270200906336'
        },
        {
          'id': 273,
          'label': '0000270200907730',
          'organizations': [],
          'mainLine': '0000270200907730'
        },
        {
          'id': 272,
          'label': '0000270200909942',
          'organizations': [],
          'mainLine': '0000270200909942'
        },
        {
          'id': 225,
          'label': '0000271200081815',
          'organizations': [],
          'mainLine': '0000271200081815'
        },
        {
          'id': 270,
          'label': '0000270201087987',
          'organizations': [],
          'mainLine': '0000270201087987'
        },
        {
          'id': 254,
          'label': '0000270201105078',
          'organizations': [],
          'mainLine': '0000270201105078'
        },
        {
          'id': 261,
          'label': '0000270201079208',
          'organizations': [],
          'mainLine': '0000270201079208'
        },
        {
          'id': 251,
          'label': '0000270201110326',
          'organizations': [],
          'mainLine': '0000270201110326'
        },
        {
          'id': 256,
          'label': '0000270201103040',
          'organizations': [],
          'mainLine': '0000270201103040'
        },
        {
          'id': 260,
          'label': '0000270201084794',
          'organizations': [],
          'mainLine': '0000270201084794'
        },
        {
          'id': 265,
          'label': '0000270201073862',
          'organizations': [],
          'mainLine': '0000270201073862'
        },
        {
          'id': 250,
          'label': '0000270201118659',
          'organizations': [],
          'mainLine': '0000270201118659'
        },
        {
          'id': 259,
          'label': '0000270201090742',
          'organizations': [],
          'mainLine': '0000270201090742'
        },
        {
          'id': 255,
          'label': '0000270201104071',
          'organizations': [],
          'mainLine': '0000270201104071'
        },
        {
          'id': 257,
          'label': '0000270201093043',
          'organizations': [],
          'mainLine': '0000270201093043'
        },
        {
          'id': 247,
          'label': '0000270201142113',
          'organizations': [],
          'mainLine': '0000270201142113'
        },
        {
          'id': 263,
          'label': '0000270201074878',
          'organizations': [],
          'mainLine': '0000270201074878'
        },
        {
          'id': 246,
          'label': '0000270201147708',
          'organizations': [],
          'mainLine': '0000270201147708'
        },
        {
          'id': 253,
          'label': '0000270201106514',
          'organizations': [],
          'mainLine': '0000270201106514'
        },
        {
          'id': 262,
          'label': '0000270201076022',
          'organizations': [],
          'mainLine': '0000270201076022'
        },
        {
          'id': 264,
          'label': '0000270201074530',
          'organizations': [],
          'mainLine': '0000270201074530'
        },
        {
          'id': 258,
          'label': '0000270201092888',
          'organizations': [],
          'mainLine': '0000270201092888'
        },
        {
          'id': 252,
          'label': '0000270201106571',
          'organizations': [],
          'mainLine': '0000270201106571'
        },
        {
          'id': 269,
          'label': '0000270201092839',
          'organizations': [],
          'mainLine': '0000270201092839'
        },
        {
          'id': 271,
          'label': '0000270200915725',
          'organizations': [],
          'mainLine': '0000270200915725'
        },
        {
          'id': 346,
          'label': '0000000031393751',
          'organizations': [],
          'mainLine': '0000000031393751'
        },
        {
          'id': 340,
          'label': '0000000031424861',
          'organizations': [],
          'mainLine': '0000000031424861'
        },
        {
          'id': 352,
          'label': '0000000031398051',
          'organizations': [],
          'mainLine': '0000000031398051'
        },
        {
          'id': 374,
          'label': '0000000031323391',
          'organizations': [],
          'mainLine': '0000000031323391'
        },
        {
          'id': 368,
          'label': '0000000031057981',
          'organizations': [],
          'mainLine': '0000000031057981'
        },
        {
          'id': 337,
          'label': '0000000031456871',
          'organizations': [],
          'mainLine': '0000000031456871'
        },
        {
          'id': 339,
          'label': '0000000031414471',
          'organizations': [],
          'mainLine': '0000000031414471'
        },
        {
          'id': 335,
          'label': '0000000031470711',
          'organizations': [],
          'mainLine': '0000000031470711'
        },
        {
          'id': 359,
          'label': '0000000031395811',
          'organizations': [],
          'mainLine': '0000000031395811'
        },
        {
          'id': 332,
          'label': '0000000031431611',
          'organizations': [],
          'mainLine': '0000000031431611'
        },
        {
          'id': 336,
          'label': '0000000031457291',
          'organizations': [],
          'mainLine': '0000000031457291'
        },
        {
          'id': 349,
          'label': '0000000031414391',
          'organizations': [],
          'mainLine': '0000000031414391'
        },
        {
          'id': 330,
          'label': '0000000031458771',
          'organizations': [],
          'mainLine': '0000000031458771'
        },
        {
          'id': 328,
          'label': '0000000031477251',
          'organizations': [],
          'mainLine': '0000000031477251'
        },
        {
          'id': 345,
          'label': '0000000031367931',
          'organizations': [],
          'mainLine': '0000000031367931'
        },
        {
          'id': 357,
          'label': '0000000031427421',
          'organizations': [],
          'mainLine': '0000000031427421'
        },
        {
          'id': 356,
          'label': '0000000031394251',
          'organizations': [],
          'mainLine': '0000000031394251'
        },
        {
          'id': 347,
          'label': '0000000031428661',
          'organizations': [],
          'mainLine': '0000000031428661'
        },
        {
          'id': 354,
          'label': '0000000031370231',
          'organizations': [],
          'mainLine': '0000000031370231'
        },
        {
          'id': 341,
          'label': '0000000031411731',
          'organizations': [],
          'mainLine': '0000000031411731'
        },
        {
          'id': 353,
          'label': '0000000031407201',
          'organizations': [],
          'mainLine': '0000000031407201'
        },
        {
          'id': 343,
          'label': '0000000031429991',
          'organizations': [],
          'mainLine': '0000000031429991'
        },
        {
          'id': 365,
          'label': '0000000031345091',
          'organizations': [],
          'mainLine': '0000000031345091'
        },
        {
          'id': 369,
          'label': '0000000031170091',
          'organizations': [],
          'mainLine': '0000000031170091'
        },
        {
          'id': 344,
          'label': '0000000031431951',
          'organizations': [],
          'mainLine': '0000000031431951'
        },
        {
          'id': 351,
          'label': '0000000031399611',
          'organizations': [],
          'mainLine': '0000000031399611'
        },
        {
          'id': 348,
          'label': '0000000031406211',
          'organizations': [],
          'mainLine': '0000000031406211'
        },
        {
          'id': 338,
          'label': '0000000031432371',
          'organizations': [],
          'mainLine': '0000000031432371'
        },
        {
          'id': 355,
          'label': '0000000031395241',
          'organizations': [],
          'mainLine': '0000000031395241'
        },
        {
          'id': 362,
          'label': '0000000031387321',
          'organizations': [],
          'mainLine': '0000000031387321'
        },
        {
          'id': 360,
          'label': '0000000000231921',
          'organizations': [],
          'mainLine': '0000000000231921'
        },
        {
          'id': 342,
          'label': '0000000031438231',
          'organizations': [],
          'mainLine': '0000000031438231'
        },
        {
          'id': 333,
          'label': '0000000031469091',
          'organizations': [],
          'mainLine': '0000000031469091'
        },
        {
          'id': 372,
          'label': '0000000031183531',
          'organizations': [],
          'mainLine': '0000000031183531'
        },
        {
          'id': 358,
          'label': '0000000031368351',
          'organizations': [],
          'mainLine': '0000000031368351'
        },
        {
          'id': 364,
          'label': '0000000031386251',
          'organizations': [],
          'mainLine': '0000000031386251'
        },
        {
          'id': 370,
          'label': '0000000031152681',
          'organizations': [],
          'mainLine': '0000000031152681'
        },
        {
          'id': 334,
          'label': '0000000031463541',
          'organizations': [],
          'mainLine': '0000000031463541'
        },
        {
          'id': 371,
          'label': '0000000031137681',
          'organizations': [],
          'mainLine': '0000000031137681'
        },
        {
          'id': 327,
          'label': '0000000031482771',
          'organizations': [],
          'mainLine': '0000000031482771'
        },
        {
          'id': 373,
          'label': '0000000000561351',
          'organizations': [],
          'mainLine': '0000000000561351'
        },
        {
          'id': 329,
          'label': '0000000040775411',
          'organizations': [],
          'mainLine': '0000000040775411'
        },
        {
          'id': 367,
          'label': '0000000031261821',
          'organizations': [],
          'mainLine': '0000000031261821'
        },
        {
          'id': 325,
          'label': '0000000031481861',
          'organizations': [],
          'mainLine': '0000000031481861'
        },
        {
          'id': 350,
          'label': '0000000031425281',
          'organizations': [],
          'mainLine': '0000000031425281'
        },
        {
          'id': 363,
          'label': '0000000031344831',
          'organizations': [],
          'mainLine': '0000000031344831'
        },
        {
          'id': 366,
          'label': '0000000031353321',
          'organizations': [],
          'mainLine': '0000000031353321'
        },
        {
          'id': 361,
          'label': '0000000031353161',
          'organizations': [],
          'mainLine': '0000000031353161'
        },
        {
          'id': 326,
          'label': '0000000000436461',
          'organizations': [],
          'mainLine': '0000000000436461'
        },
        {
          'id': 331,
          'label': '0000000000600531',
          'organizations': [],
          'mainLine': '0000000000600531'
        }
      ],
      'currentSearchTerm': '',
      'currentHandleSelect': function () {},
      'currentOnChange': function () {},
    }
  ];
}

export function getLimitedDataAccess() {
  return [
    {
      'id': 16,
      'label': '057',
      'hasAccess': false,
      'organizations': [
        {
          'id': 28,
          'label': '04',
          'hasAccess': false,
          'organizations': [
            {
              'id': 59,
              'label': '300',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 196,
                  'label': '012',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 130,
                      'label': '001',
                      'hasAccess': true,
                      'organizations': [
                        {
                          'id': 323,
                          'label': '0000062243315704',
                          'hasAccess': true,
                          'organizations': []
                        },
                        {
                          'id': 321,
                          'label': '0000062243955704',
                          'hasAccess': true,
                          'organizations': []
                        },
                        {
                          'id': 324,
                          'label': '0000062242445704',
                          'hasAccess': true,
                          'organizations': []
                        },
                        {
                          'id': 322,
                          'label': '0000062243405704',
                          'hasAccess': true,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 54,
              'label': '805',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 186,
                  'label': '001',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 122,
                      'label': '000',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 306,
                          'label': '0000062207875704',
                          'hasAccess': true,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 15,
      'label': '042',
      'hasAccess': false,
      'organizations': [
        {
          'id': 22,
          'label': '70',
          'hasAccess': false,
          'organizations': [
            {
              'id': 37,
              'label': '027',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 163,
                  'label': '014',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 100,
                      'label': '402',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 226,
                          'label': '0008788270082700',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 100,
                      'label': '000',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 227,
                          'label': '0008788270082214',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 17,
      'label': '052',
      'hasAccess': false,
      'organizations': [
        {
          'id': 32,
          'label': '04',
          'hasAccess': false,
          'organizations': [
            {
              'id': 64,
              'label': '004',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 203,
                  'label': '006',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 137,
                      'label': 'DJL',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 346,
                          'label': '0000000031393751',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ];
}

function getLimitedDataAccess() {
  return [
    {
      'id': 16,
      'label': '057',
      'hasAccess': false,
      'organizations': [
        {
          'id': 28,
          'label': '04',
          'hasAccess': false,
          'organizations': [
            {
              'id': 59,
              'label': '300',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 196,
                  'label': '012',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 130,
                      'label': '001',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 323,
                          'label': '0000062243315704',
                          'hasAccess': false,
                          'organizations': []
                        },
                        {
                          'id': 321,
                          'label': '0000062243955704',
                          'hasAccess': false,
                          'organizations': []
                        },
                        {
                          'id': 324,
                          'label': '0000062242445704',
                          'hasAccess': false,
                          'organizations': []
                        },
                        {
                          'id': 322,
                          'label': '0000062243405704',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 54,
              'label': '805',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 186,
                  'label': '001',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 122,
                      'label': '000',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 306,
                          'label': '0000062207875704',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 15,
      'label': '042',
      'hasAccess': false,
      'organizations': [
        {
          'id': 22,
          'label': '70',
          'hasAccess': false,
          'organizations': [
            {
              'id': 37,
              'label': '027',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 163,
                  'label': '014',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 100,
                      'label': '402',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 226,
                          'label': '0008788270082700',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    },
                    {
                      'id': 100,
                      'label': '000',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 227,
                          'label': '0008788270082214',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 17,
      'label': '052',
      'hasAccess': false,
      'organizations': [
        {
          'id': 32,
          'label': '04',
          'hasAccess': false,
          'organizations': [
            {
              'id': 64,
              'label': '004',
              'hasAccess': false,
              'organizations': [
                {
                  'id': 203,
                  'label': '006',
                  'hasAccess': false,
                  'organizations': [
                    {
                      'id': 137,
                      'label': 'DJL',
                      'hasAccess': false,
                      'organizations': [
                        {
                          'id': 346,
                          'label': '0000000031393751',
                          'hasAccess': false,
                          'organizations': []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ];
}

export function getAllMerchantsTestResponse() {
  return [
    { id: 323, label: '0000062243315704', organizations: [], parentIds: [16, 28, 59, 196, 130] },
    { id: 321, label: '0000062243955704', organizations: [], parentIds: [16, 28, 59, 196, 130] },
    { id: 324, label: '0000062242445704', organizations: [], parentIds: [16, 28, 59, 196, 130] },
    { id: 322, label: '0000062243405704', organizations: [], parentIds: [16, 28, 59, 196, 130] },
    { id: 320, label: '0000062331615704', organizations: [], parentIds: [16, 28, 59, 195, 129] },
    { id: 306, label: '0000062207875704', organizations: [], parentIds: [16, 28, 54, 186, 122] },
    { id: 298, label: '0000047168935703', organizations: [], parentIds: [16, 28, 46, 176, 112] },
    { id: 300, label: '0000047163585703', organizations: [], parentIds: [16, 28, 46, 176, 112] },
    { id: 277, label: '0000046233345703', organizations: [], parentIds: [16, 28, 46, 176, 112] },
    { id: 299, label: '0000047168895703', organizations: [], parentIds: [16, 28, 46, 176, 112] },
    { id: 308, label: '0000062309985704', organizations: [], parentIds: [16, 28, 56, 188, 124] },
    { id: 307, label: '0000062317705704', organizations: [], parentIds: [16, 28, 55, 187, 123] },
    { id: 297, label: '0000047172175703', organizations: [], parentIds: [16, 28, 51, 183, 119] },
    { id: 304, label: '0000044843815704', organizations: [], parentIds: [16, 28, 52, 184, 120] },
    { id: 303, label: '0000044853845704', organizations: [], parentIds: [16, 28, 52, 184, 120] },
    { id: 302, label: '0000085061795703', organizations: [], parentIds: [16, 28, 52, 184, 120] },
    { id: 301, label: '0000085061945703', organizations: [], parentIds: [16, 28, 52, 184, 120] },
    { id: 318, label: '0000062004405704', organizations: [], parentIds: [16, 28, 58, 194, 128] },
    { id: 316, label: '0000062302285704', organizations: [], parentIds: [16, 28, 58, 194, 128] },
    { id: 317, label: '0000062221425704', organizations: [], parentIds: [16, 28, 58, 194, 128] },
    { id: 319, label: '0000061832155704', organizations: [], parentIds: [16, 28, 58, 194, 128] },
    { id: 315, label: '0000062325445704', organizations: [], parentIds: [16, 28, 58, 194, 128] },
    { id: 312, label: '0000047163115703', organizations: [], parentIds: [16, 28, 58, 191, 126] },
    { id: 313, label: '0000061348635704', organizations: [], parentIds: [16, 28, 58, 191, 126] },
    { id: 314, label: '0000062263785704', organizations: [], parentIds: [16, 28, 58, 193, 127] },
    { id: 310, label: '0000062321655704', organizations: [], parentIds: [16, 28, 57, 189, 125] },
    { id: 309, label: '0000062321005704', organizations: [], parentIds: [16, 28, 57, 189, 125] },
    { id: 311, label: '0000062309805704', organizations: [], parentIds: [16, 28, 57, 189, 125] },
    { id: 305, label: '0000062230905704', organizations: [], parentIds: [16, 28, 53, 185, 121] },
    { id: 275, label: '0000002519435705', organizations: [], parentIds: [16, 26, 44, 174, 110] },
    { id: 295, label: '0000003196185705', organizations: [], parentIds: [16, 26, 50, 182, 118] },
    { id: 292, label: '0000003196225705', organizations: [], parentIds: [16, 26, 50, 182, 118] },
    { id: 293, label: '0000003196215705', organizations: [], parentIds: [16, 26, 50, 182, 118] },
    { id: 296, label: '0000003195535705', organizations: [], parentIds: [16, 26, 50, 182, 118] },
    { id: 294, label: '0000003196195705', organizations: [], parentIds: [16, 26, 50, 182, 118] },
    { id: 288, label: '0000062321505704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 291, label: '0000061747735704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 289, label: '0000062219395704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 286, label: '0000076074035704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 290, label: '0000062117615704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 287, label: '0000062323165704', organizations: [], parentIds: [16, 29, 49, 181, 117] },
    { id: 278, label: '0000099377515727', organizations: [], parentIds: [16, 27, 47, 177, 113] },
    { id: 285, label: '0000099327145727', organizations: [], parentIds: [16, 27, 45, 175, 111] },
    { id: 276, label: '0000099325855727', organizations: [], parentIds: [16, 27, 45, 175, 111] },
    { id: 283, label: '0000099377485727', organizations: [], parentIds: [16, 27, 48, 180, 116] },
    { id: 284, label: '0000099377475727', organizations: [], parentIds: [16, 27, 48, 180, 116] },
    { id: 281, label: '0000099377505727', organizations: [], parentIds: [16, 27, 48, 179, 115] },
    { id: 282, label: '0000099377495727', organizations: [], parentIds: [16, 27, 48, 179, 115] },
    { id: 280, label: '0000099377465727', organizations: [], parentIds: [16, 27, 48, 178, 114] },
    { id: 279, label: '0000099377525727', organizations: [], parentIds: [16, 27, 48, 178, 114] },
    { id: 385, label: '0008788205008849', organizations: [], parentIds: [18, 34, 68, 212, 145] },
    { id: 384, label: '0008788205008848', organizations: [], parentIds: [18, 34, 68, 212, 145] },
    { id: 383, label: '0008788205008846', organizations: [], parentIds: [18, 34, 68, 212, 145] },
    { id: 381, label: '0008788820018537', organizations: [], parentIds: [18, 34, 67, 210, 143] },
    { id: 382, label: '0008788820018540', organizations: [], parentIds: [18, 34, 67, 211, 144] },
    { id: 380, label: '0008788810020695', organizations: [], parentIds: [18, 34, 66, 209, 142] },
    { id: 379, label: '0008788810020692', organizations: [], parentIds: [18, 34, 66, 209, 142] },
    { id: 378, label: '0008788810020683', organizations: [], parentIds: [18, 34, 66, 209, 142] },
    { id: 376, label: '0008788810020688', organizations: [], parentIds: [18, 34, 66, 208, 141] },
    { id: 375, label: '0008788810020687', organizations: [], parentIds: [18, 34, 66, 208, 141] },
    { id: 377, label: '0008788810020691', organizations: [], parentIds: [18, 34, 66, 208, 141] },
    { id: 386, label: '0008788430339384', organizations: [], parentIds: [18, 34, 69, 213, 146] },
    { id: 401, label: '0008788430375693', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 409, label: '0008788430375875', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 404, label: '0008788430375735', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 421, label: '0008788430376089', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 417, label: '0008788430376022', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 413, label: '0008788430375958', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 408, label: '0008788430375859', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 396, label: '0008788430375610', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 406, label: '0008788430375800', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 418, label: '0008788430376030', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 397, label: '0008788430375636', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 389, label: '0008788430365793', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 393, label: '0008788430375511', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 400, label: '0008788430375677', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 414, label: '0008788430375982', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 412, label: '0008788430375917', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 402, label: '0008788430375701', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 392, label: '0008788430375073', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 419, label: '0008788430376055', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 407, label: '0008788430375842', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 390, label: '0008788430372146', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 387, label: '0008788430340234', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 405, label: '0008788430375784', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 403, label: '0008788430375719', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 410, label: '0008788430375883', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 391, label: '0008788430373144', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 416, label: '0008788430376014', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 388, label: '0008788430365728', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 423, label: '0008788430376121', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 399, label: '0008788430375669', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 422, label: '0008788430376105', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 424, label: '0008788430376139', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 415, label: '0008788430375990', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 394, label: '0008788430375529', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 398, label: '0008788430375644', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 395, label: '0008788430375602', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 420, label: '0008788430376063', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 411, label: '0008788430375909', organizations: [], parentIds: [18, 34, 69, 214, 147] },
    { id: 226, label: '0008788270082700', organizations: [], parentIds: [15, 22, 37, 163, 100] },
    { id: 227, label: '0008788270082214', organizations: [], parentIds: [15, 22, 37, 163, 100] },
    { id: 248, label: '0000272200002777', organizations: [], parentIds: [14, 24, 40, 167, 103] },
    { id: 249, label: '0000272200002553', organizations: [], parentIds: [14, 24, 40, 167, 103] },
    { id: 266, label: '0000271500525990', organizations: [], parentIds: [14, 25, 41, 168, 104] },
    { id: 268, label: '0000271500514242', organizations: [], parentIds: [14, 25, 42, 169, 105] },
    { id: 267, label: '0000271500517658', organizations: [], parentIds: [14, 25, 42, 169, 105] },
    { id: 236, label: '0000272400280892', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 241, label: '0000272400280363', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 233, label: '0000272400281478', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 230, label: '0000272400281924', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 231, label: '0000272400281643', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 234, label: '0000272400281437', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 239, label: '0000272400280694', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 229, label: '0000272400282021', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 243, label: '0000272400280199', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 245, label: '0000272400279548', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 240, label: '0000272400280462', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 235, label: '0000272400281353', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 228, label: '0000272400282096', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 232, label: '0000272400281577', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 238, label: '0000272400280702', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 237, label: '0000272400280819', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 244, label: '0000272400279563', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 242, label: '0000272400280223', organizations: [], parentIds: [14, 23, 38, 165, 101] },
    { id: 274, label: '0000270200906336', organizations: [], parentIds: [14, 21, 36, 173, 109] },
    { id: 273, label: '0000270200907730', organizations: [], parentIds: [14, 21, 36, 172, 108] },
    { id: 272, label: '0000270200909942', organizations: [], parentIds: [14, 21, 36, 162, 99] },
    { id: 225, label: '0000271200081815', organizations: [], parentIds: [14, 21, 36, 162, 99] },
    { id: 270, label: '0000270201087987', organizations: [], parentIds: [14, 21, 43, 171, 107] },
    { id: 254, label: '0000270201105078', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 261, label: '0000270201079208', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 251, label: '0000270201110326', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 256, label: '0000270201103040', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 260, label: '0000270201084794', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 265, label: '0000270201073862', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 250, label: '0000270201118659', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 259, label: '0000270201090742', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 255, label: '0000270201104071', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 257, label: '0000270201093043', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 247, label: '0000270201142113', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 263, label: '0000270201074878', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 246, label: '0000270201147708', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 253, label: '0000270201106514', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 262, label: '0000270201076022', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 264, label: '0000270201074530', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 258, label: '0000270201092888', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 252, label: '0000270201106571', organizations: [], parentIds: [14, 21, 39, 166, 102] },
    { id: 269, label: '0000270201092839', organizations: [], parentIds: [14, 21, 39, 170, 106] },
    { id: 271, label: '0000270200915725', organizations: [], parentIds: [14, 21, 39, 170, 106] },
    { id: 346, label: '0000000031393751', organizations: [], parentIds: [17, 32, 64, 203, 137] },
    { id: 340, label: '0000000031424861', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 352, label: '0000000031398051', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 374, label: '0000000031323391', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 368, label: '0000000031057981', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 337, label: '0000000031456871', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 339, label: '0000000031414471', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 335, label: '0000000031470711', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 359, label: '0000000031395811', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 332, label: '0000000031431611', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 336, label: '0000000031457291', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 349, label: '0000000031414391', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 330, label: '0000000031458771', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 328, label: '0000000031477251', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 345, label: '0000000031367931', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 357, label: '0000000031427421', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 356, label: '0000000031394251', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 347, label: '0000000031428661', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 354, label: '0000000031370231', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 341, label: '0000000031411731', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 353, label: '0000000031407201', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 343, label: '0000000031429991', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 365, label: '0000000031345091', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 369, label: '0000000031170091', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 344, label: '0000000031431951', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 351, label: '0000000031399611', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 348, label: '0000000031406211', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 338, label: '0000000031432371', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 355, label: '0000000031395241', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 362, label: '0000000031387321', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 360, label: '0000000000231921', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 342, label: '0000000031438231', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 333, label: '0000000031469091', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 372, label: '0000000031183531', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 358, label: '0000000031368351', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 364, label: '0000000031386251', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 370, label: '0000000031152681', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 334, label: '0000000031463541', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 371, label: '0000000031137681', organizations: [], parentIds: [17, 32, 62, 200, 134] },
    { id: 327, label: '0000000031482771', organizations: [], parentIds: [17, 32, 62, 199, 133] },
    { id: 373, label: '0000000000561351', organizations: [], parentIds: [17, 32, 63, 201, 135] },
    { id: 329, label: '0000000040775411', organizations: [], parentIds: [17, 32, 63, 201, 135] },
    { id: 367, label: '0000000031261821', organizations: [], parentIds: [17, 30, 60, 206, 140] },
    { id: 325, label: '0000000031481861', organizations: [], parentIds: [17, 30, 60, 197, 131] },
    { id: 350, label: '0000000031425281', organizations: [], parentIds: [17, 30, 60, 204, 138] },
    { id: 363, label: '0000000031344831', organizations: [], parentIds: [17, 33, 65, 205, 139] },
    { id: 366, label: '0000000031353321', organizations: [], parentIds: [17, 33, 65, 205, 139] },
    { id: 361, label: '0000000031353161', organizations: [], parentIds: [17, 33, 65, 205, 139] },
    { id: 326, label: '0000000000436461', organizations: [], parentIds: [17, 31, 61, 198, 132] },
    { id: 331, label: '0000000000600531', organizations: [], parentIds: [17, 31, 61, 202, 136] }
  ];
}

export function getMockReportMetadata() {
  return   {
    "name": "Chargebacks ",
    "lookerView": "chargebacks",
    "lookerModel": "disputes",
    "category": "Disputes",
    "displayOrder": 1,
    "description": " extendedDescription of the chargebacks report",
    "id": 1,
    "reportColumns": [
      {
        "reportId": 1,
        "columnId": 1,
        "type": "cc_number",
        "displayOrder": 45,
        "jsonKey": "chargebacks.rpt_cardholder_number",
        "label": "Card Number ",
        "filter": {
          "id": 1,
          "type": "cc_number",
          "values": [
            {
              "id": 1,
              "value": null,
              "valueLabel": null,
              "desc": null
            }
          ]
        },
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 1,
        "filterable": true,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 2,
        "type": "string",
        "displayOrder": 2,
        "jsonKey": "chargebacks.rpt_card_number_hash",
        "label": "Masked Card Number ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 2,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 3,
        "type": "currency",
        "displayOrder": 3,
        "jsonKey": "chargebacks.case_amount",
        "label": "Case Amount ",
        "filter": {
          "id": 6,
          "type": "currency",
          "values": [
            {
              "id": 3,
              "value": null,
              "valueLabel": null,
              "desc": null
            }
          ]
        },
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 3,
        "filterable": true,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 4,
        "type": "string",
        "displayOrder": 4,
        "jsonKey": "chargebacks.case_reason_code",
        "label": "Reason Code ",
        "filter": {
          "id": 3,
          "type": "multiselect",
          "values": [
            {
              "id": 1,
              "value": "01",
              "valueLabel": "01",
              "desc": "Mastercard Non-receipt Of Requested Item (en-us)"
            },
            {
              "id": 2,
              "value": "02",
              "valueLabel": "02 [Multiple Values]",
              "desc": "Amex Requested Required Information Illegible Or Missing (en-us), Discover Transaction Documentation Request - T&e (en-us), Mastercard Requested Required Information Illegible Or Missing (en-us)"
            },
            {
              "id": 5,
              "value": "021",
              "valueLabel": "021",
              "desc": "Amex Goods Services Cancelled Or Expired (en-us)"
            },
            {
              "id": 6,
              "value": "024",
              "valueLabel": "024",
              "desc": "Amex Goods Services Damaged Or Defective (en-us)"
            },
            {
              "id": 7,
              "value": "03",
              "valueLabel": "03 [Multiple Values]",
              "desc": "Discover Transaction Documentation Request Due To Cardholder Dispute (en-us), Mastercard Unable To Determine Representment Code (en-us)"
            },
            {
              "id": 9,
              "value": "04",
              "valueLabel": "04",
              "desc": "Discover Transaction Documentation Request For Fraud Analysis (en-us)"
            },
            {
              "id": 10,
              "value": "05",
              "valueLabel": "05 [Multiple Values]",
              "desc": "Amex Cardholder Does Not Agree With Amount Billed (en-us), Discover Good Faith Investigation (en-us), Mastercard Cardholder Does Not Agree With Amount Billed (en-us)"
            },
            {
              "id": 13,
              "value": "059",
              "valueLabel": "059",
              "desc": "Amex Repair Or Replacement Requested (en-us)"
            },
            {
              "id": 14,
              "value": "06",
              "valueLabel": "06",
              "desc": "Amex Error In Original Paper Presentment (en-us)"
            },
            {
              "id": 15,
              "value": "061",
              "valueLabel": "061",
              "desc": "Amex Credit Processed As Charge (en-us)"
            },
            {
              "id": 16,
              "value": "062",
              "valueLabel": "062",
              "desc": "Amex Charge Processed As Credit (en-us)"
            },
            {
              "id": 17,
              "value": "063",
              "valueLabel": "063",
              "desc": "Amex Goods Services Not As Described (en-us)"
            },
            {
              "id": 18,
              "value": "07",
              "valueLabel": "07 [Multiple Values]",
              "desc": "Amex Warning Bulletin (en-us), Mastercard Warning Bulletin (en-us)"
            },
            {
              "id": 20,
              "value": "08",
              "valueLabel": "08 [Multiple Values]",
              "desc": "Amex Exceeds Floor Limit - Not Authorized (en-us), Mastercard Exceeds Floor Limit - Not Authorized (en-us)"
            },
            {
              "id": 22,
              "value": "10",
              "valueLabel": "10 [Multiple Values]",
              "desc": "Amex Declined Authorization (en-us), Mastercard Declined Authorization (en-us)"
            },
            {
              "id": 24,
              "value": "101",
              "valueLabel": "101",
              "desc": "Visa Emv Liability Shift Counterfeit Fraud (en-us)"
            },
            {
              "id": 25,
              "value": "102",
              "valueLabel": "102",
              "desc": "Visa Emv Liability Shift Non-counterfeit Fraud (en-us)"
            },
            {
              "id": 26,
              "value": "103",
              "valueLabel": "103",
              "desc": "Visa Other Fraud-card Present Environment (en-us)"
            },
            {
              "id": 27,
              "value": "104",
              "valueLabel": "104",
              "desc": "Visa Other Fraud-card Absent Environment (en-us)"
            },
            {
              "id": 28,
              "value": "105",
              "valueLabel": "105",
              "desc": "Visa Visa Fraud Monitoring Program (en-us)"
            },
            {
              "id": 29,
              "value": "111",
              "valueLabel": "111",
              "desc": "Visa Card Recovery Bulletin (en-us)"
            },
            {
              "id": 30,
              "value": "112",
              "valueLabel": "112",
              "desc": "Visa Declined Authorization (en-us)"
            },
            {
              "id": 31,
              "value": "113",
              "valueLabel": "113",
              "desc": "Visa No Authorization (en-us)"
            },
            {
              "id": 32,
              "value": "12",
              "valueLabel": "12 [Multiple Values]",
              "desc": "Amex Non-matching Account Number (en-us), Mastercard Account Number Not On File (en-us)"
            },
            {
              "id": 34,
              "value": "121",
              "valueLabel": "121",
              "desc": "Visa Late Presentment (en-us)"
            },
            {
              "id": 35,
              "value": "122",
              "valueLabel": "122",
              "desc": "Visa Incorrect Transaction Code (en-us)"
            },
            {
              "id": 36,
              "value": "123",
              "valueLabel": "123",
              "desc": "Visa Incorrect Currency (en-us)"
            },
            {
              "id": 37,
              "value": "124",
              "valueLabel": "124",
              "desc": "Visa Incorrect Account Number (en-us)"
            },
            {
              "id": 38,
              "value": "125",
              "valueLabel": "125",
              "desc": "Visa Incorrect Amount (en-us)"
            },
            {
              "id": 39,
              "value": "126",
              "valueLabel": "126",
              "desc": "Visa Duplicate Processing Paid By Other Means (en-us)"
            },
            {
              "id": 40,
              "value": "127",
              "valueLabel": "127 [Multiple Values]",
              "desc": "Amex Charge Not Recognized (en-us), Visa Invalid Data (en-us)"
            },
            {
              "id": 42,
              "value": "131",
              "valueLabel": "131",
              "desc": "Visa Merchandise Services Not Received (en-us)"
            },
            {
              "id": 43,
              "value": "132",
              "valueLabel": "132",
              "desc": "Visa Cancelled Recurring (en-us)"
            },
            {
              "id": 44,
              "value": "133",
              "valueLabel": "133",
              "desc": "Visa Not As Described Or Defective Merchandise Services (en-us)"
            },
            {
              "id": 45,
              "value": "134",
              "valueLabel": "134",
              "desc": "Visa Counterfeit Merchandise (en-us)"
            },
            {
              "id": 46,
              "value": "135",
              "valueLabel": "135",
              "desc": "Visa Misrepresentation (en-us)"
            },
            {
              "id": 47,
              "value": "136",
              "valueLabel": "136",
              "desc": "Visa Credit Not Processed (en-us)"
            },
            {
              "id": 48,
              "value": "137",
              "valueLabel": "137",
              "desc": "Visa Cancelled Merchandise Services (en-us)"
            },
            {
              "id": 49,
              "value": "138",
              "valueLabel": "138",
              "desc": "Visa Original Credit Transaction Not Accepted (en-us)"
            },
            {
              "id": 50,
              "value": "139",
              "valueLabel": "139",
              "desc": "Visa Non-receipt Of Cash Or Load Transaction Value (en-us)"
            },
            {
              "id": 51,
              "value": "147",
              "valueLabel": "147",
              "desc": "Amex Charge To Be Paid By Insurance (en-us)"
            },
            {
              "id": 52,
              "value": "154",
              "valueLabel": "154",
              "desc": "Amex Goods Services Cancelled (en-us)"
            },
            {
              "id": 53,
              "value": "155",
              "valueLabel": "155",
              "desc": "Amex Credit For Goods Services Not Received (en-us)"
            },
            {
              "id": 54,
              "value": "158",
              "valueLabel": "158",
              "desc": "Amex Goods Returned (en-us)"
            },
            {
              "id": 55,
              "value": "169",
              "valueLabel": "169",
              "desc": "Amex Currency Discrepancy (en-us)"
            },
            {
              "id": 56,
              "value": "170",
              "valueLabel": "170",
              "desc": "Amex Cancelled Lodging Reservation  (en-us)"
            },
            {
              "id": 57,
              "value": "173",
              "valueLabel": "173",
              "desc": "Amex Duplicate Billing (en-us)"
            },
            {
              "id": 58,
              "value": "175",
              "valueLabel": "175",
              "desc": "Amex Credit Not Processed (en-us)"
            },
            {
              "id": 59,
              "value": "176",
              "valueLabel": "176",
              "desc": "Amex Card Not Present Charge Not Recognized (en-us)"
            },
            {
              "id": 60,
              "value": "177",
              "valueLabel": "177",
              "desc": "Amex No Cardholder Authorization  (en-us)"
            },
            {
              "id": 61,
              "value": "193",
              "valueLabel": "193",
              "desc": "Amex Fraudulent Charge (en-us)"
            },
            {
              "id": 62,
              "value": "20",
              "valueLabel": "20",
              "desc": "Visa T And E No Authorization (en-us)"
            },
            {
              "id": 63,
              "value": "21",
              "valueLabel": "21 [Multiple Values]",
              "desc": "Amex Cardholder Does Not Recognize Transaction. (en-us), Mastercard Cardholder Does Not Recognize Transaction. (en-us), Visa T And E Late Presentment- (en-us)"
            },
            {
              "id": 66,
              "value": "22",
              "valueLabel": "22",
              "desc": "Visa T And E Expired Card  (en-us)"
            },
            {
              "id": 67,
              "value": "23",
              "valueLabel": "23 [Multiple Values]",
              "desc": "Amex Cardholder Needs For Personal Records (en-us), Mastercard Cardholder Needs For Personal Records. (en-us), Visa T And E Invalid Transaction (en-us)"
            },
            {
              "id": 70,
              "value": "24",
              "valueLabel": "24 [Multiple Values]",
              "desc": "Amex Cancelled Hotel Reservation (en-us), Mastercard Earlier Warning Bulletin Protections (en-us), Visa T And E Merchant Service Error (en-us)"
            },
            {
              "id": 73,
              "value": "25",
              "valueLabel": "25",
              "desc": "Visa T And E Processing Error (en-us)"
            },
            {
              "id": 74,
              "value": "26",
              "valueLabel": "26 [Multiple Values]",
              "desc": "Amex Advance Lodging Deposit (en-us), Visa T And E Copy Fulfillment (en-us)"
            },
            {
              "id": 76,
              "value": "27",
              "valueLabel": "27",
              "desc": "Visa T And E Document Fulfillment (en-us)"
            },
            {
              "id": 77,
              "value": "28",
              "valueLabel": "28",
              "desc": "Visa T And E Account Number Verification (en-us)"
            },
            {
              "id": 78,
              "value": "29",
              "valueLabel": "29",
              "desc": "Visa T And E Transaction Declined Authorization (en-us)"
            },
            {
              "id": 79,
              "value": "30",
              "valueLabel": "30",
              "desc": "Visa Cardholder Dispute, Cardholder Requests Draft. (en-us)"
            },
            {
              "id": 80,
              "value": "31",
              "valueLabel": "31 [Multiple Values]",
              "desc": "Amex Error In Addition (en-us), Mastercard Error In Addition (en-us), Visa Chargeback Documentation. (en-us)"
            },
            {
              "id": 83,
              "value": "32",
              "valueLabel": "32 [Multiple Values]",
              "desc": "Amex Altered Amount (en-us), Mastercard Altered Amount (en-us), Visa Original Paper Lost In Transit (en-us)"
            },
            {
              "id": 86,
              "value": "33",
              "valueLabel": "33",
              "desc": "Visa Fraud Analysis Request (en-us)"
            },
            {
              "id": 87,
              "value": "34",
              "valueLabel": "34 [Multiple Values]",
              "desc": "Amex Duplicate Processing (en-us), Mastercard Duplicate Processing (en-us), Visa Legal Process Request (en-us)"
            },
            {
              "id": 90,
              "value": "35",
              "valueLabel": "35 [Multiple Values]",
              "desc": "Amex Expired Card (en-us), Mastercard Expired Card (en-us), Visa Written Cardholder Demand For Original Paper. (en-us)"
            },
            {
              "id": 93,
              "value": "36",
              "valueLabel": "36 [Multiple Values]",
              "desc": "Amex Incorrect Account Number  (en-us), Mastercard Incorrect Account Number (en-us), Visa Legal Process (e.g. Subpoena) Specifies Original Paper. (en-us)"
            },
            {
              "id": 96,
              "value": "37",
              "valueLabel": "37 [Multiple Values]",
              "desc": "Amex Fraudulent Transaction - No Cardholder Signature (en-us), Mastercard No Cardholder Authorization (en-us), Visa Copy Previously Sent Illegible. (en-us)"
            },
            {
              "id": 99,
              "value": "38",
              "valueLabel": "38",
              "desc": "Visa Required For Paper Handwriting Analysis. (en-us)"
            },
            {
              "id": 100,
              "value": "39",
              "valueLabel": "39 [Multiple Values]",
              "desc": "Amex Fraudulent Transaction - No Imprint (en-us), Visa Repeat Request For Original Paper. (en-us)"
            },
            {
              "id": 102,
              "value": "40",
              "valueLabel": "40 [Multiple Values]",
              "desc": "Amex Fraudulent Processing Of Transactions (en-us), Mastercard Fraudulent Processing Of Transactions (en-us), Visa Required For Arbitration. (en-us)"
            },
            {
              "id": 105,
              "value": "41",
              "valueLabel": "41 [Multiple Values]",
              "desc": "Amex Legal Or Fraud Analysis (en-us), Mastercard Cancelled Recurring Transaction (en-us), Visa Cancelled Recurring Transaction (en-us)"
            },
            {
              "id": 108,
              "value": "42",
              "valueLabel": "42 [Multiple Values]",
              "desc": "Amex Late Presentment (en-us), Mastercard Late Presentment (en-us)"
            },
            {
              "id": 110,
              "value": "43",
              "valueLabel": "43",
              "desc": "Amex Unauthorized Moto Transaction (en-us)"
            },
            {
              "id": 111,
              "value": "45",
              "valueLabel": "45",
              "desc": "Amex Unauthorized Purchaser (en-us)"
            },
            {
              "id": 112,
              "value": "46",
              "valueLabel": "46 [Multiple Values]",
              "desc": "Amex Correct Transaction Currency Code Not Provided (en-us), Mastercard Correct Transaction Currency Code Not Provided (en-us)"
            },
            {
              "id": 114,
              "value": "47",
              "valueLabel": "47 [Multiple Values]",
              "desc": "Amex Fraudulent Transaction - Exceeds Floor Limit Not Authorized (en-us), Mastercard Fraudulent Transaction - Exceeds Floor Limit Not Authorized (en-us), Visa Fraud Transaction - No Authorization (en-us)"
            },
            {
              "id": 117,
              "value": "4801",
              "valueLabel": "4801",
              "desc": "Mastercard Requested Tran Data Was Not Received Within Max Timeframe (en-us)"
            },
            {
              "id": 118,
              "value": "4802",
              "valueLabel": "4802",
              "desc": "Mastercard Requested Info Illegible Or Missing Within Max Timeframe (en-us)"
            },
            {
              "id": 119,
              "value": "4803",
              "valueLabel": "4803",
              "desc": "Mastercard Unable To Determine Representment Code (en-us)"
            },
            {
              "id": 120,
              "value": "4807",
              "valueLabel": "4807",
              "desc": "Mastercard Warning Bulletin (en-us)"
            },
            {
              "id": 121,
              "value": "4808",
              "valueLabel": "4808",
              "desc": "Mastercard Exceeds Floor Limit - Not Authorized (en-us)"
            },
            {
              "id": 122,
              "value": "4810",
              "valueLabel": "4810",
              "desc": "Mastercard Declined Authorization (en-us)"
            },
            {
              "id": 123,
              "value": "4812",
              "valueLabel": "4812",
              "desc": "Mastercard Account Number Not On File (en-us)"
            },
            {
              "id": 124,
              "value": "4824",
              "valueLabel": "4824",
              "desc": "Mastercard Earlier Warning Bulletin Protections (en-us)"
            },
            {
              "id": 125,
              "value": "4831",
              "valueLabel": "4831",
              "desc": "Mastercard Transaction Amount Differs (en-us)"
            },
            {
              "id": 126,
              "value": "4832",
              "valueLabel": "4832",
              "desc": "Mastercard Altered Amount (en-us)"
            },
            {
              "id": 127,
              "value": "4834",
              "valueLabel": "4834",
              "desc": "Mastercard Point Of Interaction Error (en-us)"
            },
            {
              "id": 128,
              "value": "4835",
              "valueLabel": "4835",
              "desc": "Mastercard Expired Card (en-us)"
            },
            {
              "id": 129,
              "value": "4836",
              "valueLabel": "4836",
              "desc": "Mastercard Incorrect Account Number (en-us)"
            },
            {
              "id": 130,
              "value": "4837",
              "valueLabel": "4837",
              "desc": "Mastercard No Cardholder Authorization (en-us)"
            },
            {
              "id": 131,
              "value": "4840",
              "valueLabel": "4840",
              "desc": "Mastercard Fraudulent Processing Of Transactions (en-us)"
            },
            {
              "id": 132,
              "value": "4841",
              "valueLabel": "4841",
              "desc": "Mastercard Cancelled Recurring Transaction (en-us)"
            },
            {
              "id": 133,
              "value": "4842",
              "valueLabel": "4842",
              "desc": "Mastercard Late Presentment (en-us)"
            },
            {
              "id": 134,
              "value": "4846",
              "valueLabel": "4846",
              "desc": "Mastercard Correct Transaction Currency Code Not Provided (en-us)"
            },
            {
              "id": 135,
              "value": "4847",
              "valueLabel": "4847",
              "desc": "Mastercard Fraudulent Transaction - Exceeds Floor Limit Not Authorized (en-us)"
            },
            {
              "id": 136,
              "value": "4849",
              "valueLabel": "4849",
              "desc": "Mastercard Questionable Merchant Activity (en-us)"
            },
            {
              "id": 137,
              "value": "4850",
              "valueLabel": "4850",
              "desc": "Mastercard Credit Posted As A Purchase (en-us)"
            },
            {
              "id": 138,
              "value": "4851",
              "valueLabel": "4851",
              "desc": "Mastercard Incorrect Transaction Amount (en-us)"
            },
            {
              "id": 139,
              "value": "4852",
              "valueLabel": "4852",
              "desc": "Mastercard Mo To On Expired Or Never Issued Account Number (en-us)"
            },
            {
              "id": 140,
              "value": "4853",
              "valueLabel": "4853",
              "desc": "Mastercard Cardholder Dispute (en-us)"
            },
            {
              "id": 141,
              "value": "4854",
              "valueLabel": "4854",
              "desc": "Mastercard Cardholder Dispute - Not Elsewhere Classified (en-us)"
            },
            {
              "id": 142,
              "value": "4855",
              "valueLabel": "4855",
              "desc": "Mastercard Non-receipt Of Merchandise (en-us)"
            },
            {
              "id": 143,
              "value": "4856",
              "valueLabel": "4856",
              "desc": "Mastercard Defective Merchandise (en-us)"
            },
            {
              "id": 144,
              "value": "4857",
              "valueLabel": "4857",
              "desc": "Mastercard Credit Card Activated Telephone Transaction (en-us)"
            },
            {
              "id": 145,
              "value": "4858",
              "valueLabel": "4858",
              "desc": "Mastercard Fraudulent Transaction Before Embossed Valid Date (en-us)"
            },
            {
              "id": 146,
              "value": "4859",
              "valueLabel": "4859",
              "desc": "Mastercard Services Not Rendered (en-us)"
            },
            {
              "id": 147,
              "value": "4860",
              "valueLabel": "4860",
              "desc": "Mastercard Credit Not Processed (en-us)"
            },
            {
              "id": 148,
              "value": "4862",
              "valueLabel": "4862",
              "desc": "Mastercard Counterfeit Transaction - Magnetic Stripe Pos Fraud (en-us)"
            },
            {
              "id": 149,
              "value": "4863",
              "valueLabel": "4863",
              "desc": "Mastercard Cardholder Does Not Recognize-potential Fraud (en-us)"
            },
            {
              "id": 150,
              "value": "4870",
              "valueLabel": "4870",
              "desc": "Mastercard Chip Liability Shift (en-us)"
            },
            {
              "id": 151,
              "value": "4871",
              "valueLabel": "4871",
              "desc": "Mastercard Chip Pin Liability Shift (en-us)"
            },
            {
              "id": 152,
              "value": "49",
              "valueLabel": "49 [Multiple Values]",
              "desc": "Amex Questionable Merchant Activity (en-us), Mastercard Questionable Merchant Activity (en-us)"
            },
            {
              "id": 154,
              "value": "4900",
              "valueLabel": "4900",
              "desc": "Mastercard Generic System Generated (en-us)"
            },
            {
              "id": 155,
              "value": "4901",
              "valueLabel": "4901",
              "desc": "Mastercard Req Doc Not Rec To Support 2nd Pres (en-us)"
            },
            {
              "id": 156,
              "value": "4902",
              "valueLabel": "4902",
              "desc": "Mastercard Doc Received Was Illegible (en-us)"
            },
            {
              "id": 157,
              "value": "4903",
              "valueLabel": "4903",
              "desc": "Mastercard Doc Incomplete Or Invalid (en-us)"
            },
            {
              "id": 158,
              "value": "4905",
              "valueLabel": "4905",
              "desc": "Mastercard Inv Ard 2nd Pres; Doc Rec Or Not Req (en-us)"
            },
            {
              "id": 159,
              "value": "4908",
              "valueLabel": "4908",
              "desc": "Mastercard Inv Ard 2nd Pres; Doc Recieved (en-us)"
            },
            {
              "id": 160,
              "value": "50",
              "valueLabel": "50 [Multiple Values]",
              "desc": "Amex Credit Posted As A Purchase (en-us), Mastercard Credit Posted As A Purchase (en-us), Visa Credit Posted As A Purchase (en-us)"
            },
            {
              "id": 163,
              "value": "51",
              "valueLabel": "51 [Multiple Values]",
              "desc": "Amex Incorrect Transaction Amount (en-us), Mastercard Incorrect Transaction Amount (en-us), Visa Incorrect Transaction Amount (en-us)"
            },
            {
              "id": 166,
              "value": "52",
              "valueLabel": "52 [Multiple Values]",
              "desc": "Amex Mo To On Expired Or Never Issued Account Number (en-us), Mastercard Mo To On Expired Or Never Issued Account Number (en-us), Visa Mo To On Expired Or Never Issued Account Number (en-us)"
            },
            {
              "id": 169,
              "value": "53",
              "valueLabel": "53 [Multiple Values]",
              "desc": "Amex Not As Described (en-us), Mastercard Card Holder Dispute - Defected Not As Described (en-us), Visa Not As Described Or Defective Merchandise (en-us)"
            },
            {
              "id": 172,
              "value": "54",
              "valueLabel": "54 [Multiple Values]",
              "desc": "Amex Cardholder Dispute - Not Elsewhere Classified (en-us), Mastercard Cardholder Dispute - Not Elsewhere Classified (en-us), Visa Cardholder Dispute - Not Elsewhere Classified (en-us)"
            },
            {
              "id": 175,
              "value": "55",
              "valueLabel": "55 [Multiple Values]",
              "desc": "Amex Non-receipt Of Merchandise Or Service (en-us), Mastercard Non-receipt Of Merchandise (en-us)"
            },
            {
              "id": 177,
              "value": "56",
              "valueLabel": "56 [Multiple Values]",
              "desc": "Amex Defective Merchandise (en-us), Mastercard Defective Merchandise (en-us), Visa Defective Merchandise (en-us)"
            },
            {
              "id": 180,
              "value": "57",
              "valueLabel": "57 [Multiple Values]",
              "desc": "Amex Credit Card Activated Telephone Transaction (en-us), Mastercard Credit Card Activated Telephone Transaction (en-us), Visa Fraudulent Multiple Transactions (en-us)"
            },
            {
              "id": 183,
              "value": "58",
              "valueLabel": "58 [Multiple Values]",
              "desc": "Amex Fraudulent Transaction Before Embossed Valid Date (en-us), Mastercard Fraudulent Transaction Before Embossed Valid Date (en-us)"
            },
            {
              "id": 185,
              "value": "59",
              "valueLabel": "59 [Multiple Values]",
              "desc": "Amex Services Not Rendered (en-us), Mastercard Services Not Rendered (en-us), Visa Negative Account Number Verification (en-us)"
            },
            {
              "id": 188,
              "value": "60",
              "valueLabel": "60 [Multiple Values]",
              "desc": "Amex Credit Not Processed (en-us), Mastercard Credit Not Processed (en-us), Visa Requested Copy Illegible Or Invalid (en-us)"
            },
            {
              "id": 191,
              "value": "61",
              "valueLabel": "61 [Multiple Values]",
              "desc": "Amex No Interchange Agreement (en-us), Visa Fraudulent Moto Transaction (en-us)"
            },
            {
              "id": 193,
              "value": "62",
              "valueLabel": "62 [Multiple Values]",
              "desc": "Amex Local Use Only (en-us), Mastercard Counterfeit Transaction - Magnetic Stripe Pos Fraud (en-us), Visa Counterfeit Transaction (en-us)"
            },
            {
              "id": 196,
              "value": "63",
              "valueLabel": "63",
              "desc": "Visa Unknown (en-us)"
            },
            {
              "id": 197,
              "value": "6305",
              "valueLabel": "6305",
              "desc": "Mastercard Cardholder Does Not Agree With Amount Billed (en-us)"
            },
            {
              "id": 198,
              "value": "6321",
              "valueLabel": "6321",
              "desc": "Mastercard Cardholder Does Not Recognize Transaction. (en-us)"
            },
            {
              "id": 199,
              "value": "6322",
              "valueLabel": "6322",
              "desc": "Mastercard Request Transaction Certificate For A Chip Transaction (en-us)"
            },
            {
              "id": 200,
              "value": "6323",
              "valueLabel": "6323",
              "desc": "Mastercard Cardholder Needs For Personal Records. (en-us)"
            },
            {
              "id": 201,
              "value": "6341",
              "valueLabel": "6341",
              "desc": "Mastercard Legal Or Fraud Analysis  (en-us)"
            },
            {
              "id": 202,
              "value": "6342",
              "valueLabel": "6342",
              "desc": "Mastercard Potential Chargeback Or Compliance Documentation Request (en-us)"
            },
            {
              "id": 203,
              "value": "6343",
              "valueLabel": "6343",
              "desc": "Mastercard Real-time Substantiation Audit Request (en-us)"
            },
            {
              "id": 204,
              "value": "680",
              "valueLabel": "680",
              "desc": "Amex Incorrect Charge Amount (en-us)"
            },
            {
              "id": 205,
              "value": "684",
              "valueLabel": "684",
              "desc": "Amex Another Form Of Payment (en-us)"
            },
            {
              "id": 206,
              "value": "691",
              "valueLabel": "691",
              "desc": "Amex Incorrect Charge Amount (en-us)"
            },
            {
              "id": 207,
              "value": "693",
              "valueLabel": "693",
              "desc": "Amex Vehicle Rental - Theft Or Loss Of Use (en-us)"
            },
            {
              "id": 208,
              "value": "70",
              "valueLabel": "70",
              "desc": "Visa Account Number On Exception File (en-us)"
            },
            {
              "id": 209,
              "value": "71",
              "valueLabel": "71",
              "desc": "Visa Declined Authorization (en-us)"
            },
            {
              "id": 210,
              "value": "72",
              "valueLabel": "72",
              "desc": "Visa No Authorization (en-us)"
            },
            {
              "id": 211,
              "value": "73",
              "valueLabel": "73",
              "desc": "Visa Expired Card (en-us)"
            },
            {
              "id": 212,
              "value": "74",
              "valueLabel": "74",
              "desc": "Visa Late Presentment (en-us)"
            },
            {
              "id": 213,
              "value": "75",
              "valueLabel": "75",
              "desc": "Visa Cardholder Does Not Recognize Transaction (en-us)"
            },
            {
              "id": 214,
              "value": "76",
              "valueLabel": "76",
              "desc": "Visa Incorrect Currency Or Transaction Code Or Domestic Transaction Pr (en-us)"
            },
            {
              "id": 215,
              "value": "77",
              "valueLabel": "77",
              "desc": "Visa Non-matching Account Number (en-us)"
            },
            {
              "id": 216,
              "value": "78",
              "valueLabel": "78",
              "desc": "Visa Service Code Violation (en-us)"
            },
            {
              "id": 217,
              "value": "79",
              "valueLabel": "79",
              "desc": "Visa Requested Transaction Information Not Received (en-us)"
            },
            {
              "id": 218,
              "value": "80",
              "valueLabel": "80",
              "desc": "Visa Incorrect Transaction Amount Or Account Number (en-us)"
            },
            {
              "id": 219,
              "value": "81",
              "valueLabel": "81 [Multiple Values]",
              "desc": "Amex Improper Chargeback (en-us), Visa Fraudulent Transaction-card-present Environment (en-us)"
            },
            {
              "id": 221,
              "value": "82",
              "valueLabel": "82 [Multiple Values]",
              "desc": "Amex Documentation Not Received (en-us), Visa Duplicate Processing (en-us)"
            },
            {
              "id": 223,
              "value": "83",
              "valueLabel": "83 [Multiple Values]",
              "desc": "Amex Supplying Required Information (en-us), Visa Fraudulent Transaction-card-absent Environment (en-us)"
            },
            {
              "id": 225,
              "value": "84",
              "valueLabel": "84",
              "desc": "Visa Fraudlent Transaction - Signature Not Obtained (en-us)"
            },
            {
              "id": 226,
              "value": "85",
              "valueLabel": "85",
              "desc": "Visa Credit Not Processed (en-us)"
            },
            {
              "id": 227,
              "value": "86",
              "valueLabel": "86",
              "desc": "Visa Paid By Other Means (en-us)"
            },
            {
              "id": 228,
              "value": "87",
              "valueLabel": "87",
              "desc": "Visa Unknown (en-us)"
            },
            {
              "id": 229,
              "value": "90",
              "valueLabel": "90",
              "desc": "Visa Services Not Rendered-atm Or Visa Travelmoney Program (en-us)"
            },
            {
              "id": 230,
              "value": "91",
              "valueLabel": "91",
              "desc": "Amex Ch Billed Twice - Only 1 Credit (en-us)"
            },
            {
              "id": 231,
              "value": "92",
              "valueLabel": "92",
              "desc": "Amex Representment Doc Not Received (en-us)"
            },
            {
              "id": 232,
              "value": "93",
              "valueLabel": "93 [Multiple Values]",
              "desc": "Amex Risk Identification Service (en-us), Visa Risk Identification Service Or Merchant Fraud Performance (en-us)"
            },
            {
              "id": 234,
              "value": "94",
              "valueLabel": "94",
              "desc": "Visa T And E Cancelled Guaranteed Reservation (en-us)"
            },
            {
              "id": 235,
              "value": "95",
              "valueLabel": "95",
              "desc": "Visa T And E Advance Lodging Deposit (en-us)"
            },
            {
              "id": 236,
              "value": "96",
              "valueLabel": "96",
              "desc": "Visa Transaction Exceeds Limited Amount (en-us)"
            },
            {
              "id": 237,
              "value": "A",
              "valueLabel": "A",
              "desc": "Discover Inquiry Ticket Retrieval - Request For Transaction Document (en-us)"
            },
            {
              "id": 238,
              "value": "A01",
              "valueLabel": "A01",
              "desc": "Amex Charge Amount Exceeds Authorization Amount (en-us)"
            },
            {
              "id": 239,
              "value": "A02",
              "valueLabel": "A02",
              "desc": "Amex No Valid Authorization (en-us)"
            },
            {
              "id": 240,
              "value": "A08",
              "valueLabel": "A08",
              "desc": "Amex Authorization Approval Expired (en-us)"
            },
            {
              "id": 241,
              "value": "AA",
              "valueLabel": "AA",
              "desc": "Discover Cardholder Does Not Recognize The Card Transaction (en-us)"
            },
            {
              "id": 242,
              "value": "AL",
              "valueLabel": "AL",
              "desc": "Discover Airline Transaction Dispute (en-us)"
            },
            {
              "id": 243,
              "value": "AP",
              "valueLabel": "AP",
              "desc": "Discover Cancelled Recurring Transaction (en-us)"
            },
            {
              "id": 244,
              "value": "AT",
              "valueLabel": "AT",
              "desc": "Discover Authorization Non-compliance (en-us)"
            },
            {
              "id": 245,
              "value": "AW",
              "valueLabel": "AW",
              "desc": "Discover Altered Amount (en-us)"
            },
            {
              "id": 246,
              "value": "C02",
              "valueLabel": "C02",
              "desc": "Amex Credit Not Processed (en-us)"
            },
            {
              "id": 247,
              "value": "C04",
              "valueLabel": "C04",
              "desc": "Amex Goods Services Returned Or Refused (en-us)"
            },
            {
              "id": 248,
              "value": "C05",
              "valueLabel": "C05",
              "desc": "Amex Goods Services Cancelled (en-us)"
            },
            {
              "id": 249,
              "value": "C08",
              "valueLabel": "C08",
              "desc": "Amex Goods Services Not Received Or Only Partially Received (en-us)"
            },
            {
              "id": 250,
              "value": "C14",
              "valueLabel": "C14",
              "desc": "Amex Paid By Other Means (en-us)"
            },
            {
              "id": 251,
              "value": "C18",
              "valueLabel": "C18",
              "desc": "Amex No Show Or Cardeposit Cancelled (en-us)"
            },
            {
              "id": 252,
              "value": "C28",
              "valueLabel": "C28",
              "desc": "Amex Cancelled Recurring Billing (en-us)"
            },
            {
              "id": 253,
              "value": "C31",
              "valueLabel": "C31",
              "desc": "Amex Goods Services Not As Described (en-us)"
            },
            {
              "id": 254,
              "value": "C32",
              "valueLabel": "C32",
              "desc": "Amex Goods Services Damaged Or Defective (en-us)"
            },
            {
              "id": 255,
              "value": "CA",
              "valueLabel": "CA",
              "desc": "Discover Cash Advance, Quasi-cash, Cash Over (en-us)"
            },
            {
              "id": 256,
              "value": "CD",
              "valueLabel": "CD",
              "desc": "Discover Credit Posted As Debit (en-us)"
            },
            {
              "id": 257,
              "value": "CR",
              "valueLabel": "CR",
              "desc": "Discover Cancelled Reservation (en-us)"
            },
            {
              "id": 258,
              "value": "DA",
              "valueLabel": "DA",
              "desc": "Discover Declined Authorization (en-us)"
            },
            {
              "id": 259,
              "value": "DC",
              "valueLabel": "DC",
              "desc": "Discover Dispute Compliance (en-us)"
            },
            {
              "id": 260,
              "value": "DP",
              "valueLabel": "DP",
              "desc": "Discover Duplicate Processing: Service Dispute   Processing Error (en-us)"
            },
            {
              "id": 261,
              "value": "DP1",
              "valueLabel": "DP1",
              "desc": "Discover Duplicate Atm Processing (en-us)"
            },
            {
              "id": 262,
              "value": "EX",
              "valueLabel": "EX",
              "desc": "Discover Expired Card (en-us)"
            },
            {
              "id": 263,
              "value": "F10",
              "valueLabel": "F10",
              "desc": "Amex Missing Imprint (en-us)"
            },
            {
              "id": 264,
              "value": "F14",
              "valueLabel": "F14",
              "desc": "Amex Missing Signature (en-us)"
            },
            {
              "id": 265,
              "value": "F22",
              "valueLabel": "F22",
              "desc": "Amex Expired Or Not Yet Valid Card (en-us)"
            },
            {
              "id": 266,
              "value": "F24",
              "valueLabel": "F24",
              "desc": "Amex No Cardholder Authorization  (en-us)"
            },
            {
              "id": 267,
              "value": "F29",
              "valueLabel": "F29",
              "desc": "Amex Card Not Present (en-us)"
            },
            {
              "id": 268,
              "value": "FR2",
              "valueLabel": "FR2",
              "desc": "Amex Fraud Full Recourse Program (en-us)"
            },
            {
              "id": 269,
              "value": "FR4",
              "valueLabel": "FR4",
              "desc": "Amex Immediate Chargeback Program (en-us)"
            },
            {
              "id": 270,
              "value": "FR6",
              "valueLabel": "FR6",
              "desc": "Amex Partial Immediate Chargeback Program (en-us)"
            },
            {
              "id": 271,
              "value": "IC",
              "valueLabel": "IC",
              "desc": "Discover Illegible Draft (en-us)"
            },
            {
              "id": 272,
              "value": "IN",
              "valueLabel": "IN",
              "desc": "Discover Non-existent Acct. Number (en-us)"
            },
            {
              "id": 273,
              "value": "IS",
              "valueLabel": "IS",
              "desc": "Discover Illegible Non-existent Ch Signature (en-us)"
            },
            {
              "id": 274,
              "value": "LP",
              "valueLabel": "LP",
              "desc": "Discover Late Presentation (en-us)"
            },
            {
              "id": 275,
              "value": "M01",
              "valueLabel": "M01",
              "desc": "Amex Chargeback Authorization (en-us)"
            },
            {
              "id": 276,
              "value": "M10",
              "valueLabel": "M10",
              "desc": "Amex Vehicle Rental - Capital Damages (en-us)"
            },
            {
              "id": 277,
              "value": "M19",
              "valueLabel": "M19",
              "desc": "Amex Offset Adjustment (en-us)"
            },
            {
              "id": 278,
              "value": "M49",
              "valueLabel": "M49",
              "desc": "Amex Vehicle Rental - Theft Or Loss Of Use (en-us)"
            },
            {
              "id": 279,
              "value": "N",
              "valueLabel": "N",
              "desc": "Discover No Funds Received At Atm (en-us)"
            },
            {
              "id": 280,
              "value": "NA",
              "valueLabel": "NA",
              "desc": "Discover No Authorization Code Obtained (en-us)"
            },
            {
              "id": 281,
              "value": "NC",
              "valueLabel": "NC",
              "desc": "Discover Not Elsewhere Classified (en-us)"
            },
            {
              "id": 282,
              "value": "NR",
              "valueLabel": "NR",
              "desc": "Discover Non-response To A Ticket Retrieval Request (en-us)"
            },
            {
              "id": 283,
              "value": "OP1",
              "valueLabel": "OP1",
              "desc": "Amex One Point Reason Code (en-us)"
            },
            {
              "id": 284,
              "value": "P",
              "valueLabel": "P",
              "desc": "Discover Atm Dispute (en-us)"
            },
            {
              "id": 285,
              "value": "P01",
              "valueLabel": "P01",
              "desc": "Amex Unassigned Card Number (en-us)"
            },
            {
              "id": 286,
              "value": "P03",
              "valueLabel": "P03",
              "desc": "Amex Credit Processed As Charge (en-us)"
            },
            {
              "id": 287,
              "value": "P04",
              "valueLabel": "P04",
              "desc": "Amex Charge Processed As Credit (en-us)"
            },
            {
              "id": 288,
              "value": "P05",
              "valueLabel": "P05",
              "desc": "Amex Incorrect Charge Amount (en-us)"
            },
            {
              "id": 289,
              "value": "P07",
              "valueLabel": "P07",
              "desc": "Amex Late Submission (en-us)"
            },
            {
              "id": 290,
              "value": "P08",
              "valueLabel": "P08",
              "desc": "Amex Duplicate Charge (en-us)"
            },
            {
              "id": 291,
              "value": "P22",
              "valueLabel": "P22",
              "desc": "Amex Non-matching Card Number (en-us)"
            },
            {
              "id": 292,
              "value": "P23",
              "valueLabel": "P23",
              "desc": "Amex Currency Discrepancy (en-us)"
            },
            {
              "id": 293,
              "value": "R03",
              "valueLabel": "R03",
              "desc": "Amex Insufficient Reply (en-us)"
            },
            {
              "id": 294,
              "value": "R13",
              "valueLabel": "R13",
              "desc": "Amex No Reply (en-us)"
            },
            {
              "id": 295,
              "value": "RG",
              "valueLabel": "RG",
              "desc": "Discover Services Not Rendered Goods Not Received (en-us)"
            },
            {
              "id": 296,
              "value": "RM",
              "valueLabel": "RM",
              "desc": "Discover Cardholder Disputes Quality Of Goods Or Services (en-us)"
            },
            {
              "id": 297,
              "value": "RN1",
              "valueLabel": "RN1",
              "desc": "Discover Partial Credit (en-us)"
            },
            {
              "id": 298,
              "value": "RN2",
              "valueLabel": "RN2",
              "desc": "Discover Credit Not Processed (en-us)"
            },
            {
              "id": 299,
              "value": "SV",
              "valueLabel": "SV",
              "desc": "Discover Gift Card No Auth Obtained (en-us)"
            },
            {
              "id": 300,
              "value": "TF",
              "valueLabel": "TF",
              "desc": "Discover Violation Of Operating Regs (en-us)"
            },
            {
              "id": 301,
              "value": "TNM",
              "valueLabel": "TNM",
              "desc": "Discover Atm Transaction ? Cardholder Does Not Recognize A Transaction (en-us)"
            },
            {
              "id": 302,
              "value": "UA01",
              "valueLabel": "UA01",
              "desc": "Discover Fraud:  Card Present Transaction (en-us)"
            },
            {
              "id": 303,
              "value": "UA02",
              "valueLabel": "UA02",
              "desc": "Discover Fraud:  Card Not Present Transaction (en-us)"
            },
            {
              "id": 304,
              "value": "UA03",
              "valueLabel": "UA03",
              "desc": "Discover Fraud:  Processing Error (en-us)"
            },
            {
              "id": 305,
              "value": "UA10",
              "valueLabel": "UA10",
              "desc": "Discover Fraud Ticket: Card Not Present (en-us)"
            },
            {
              "id": 306,
              "value": "UA11",
              "valueLabel": "UA11",
              "desc": "Discover No Ch Signature Obtained (en-us)"
            },
            {
              "id": 307,
              "value": "UA12",
              "valueLabel": "UA12",
              "desc": "Discover Non-matching Ch Signature Obtained (en-us)"
            },
            {
              "id": 308,
              "value": "UA18",
              "valueLabel": "UA18",
              "desc": "Discover Illegible Mag-swiped Draft (en-us)"
            },
            {
              "id": 309,
              "value": "UA20",
              "valueLabel": "UA20",
              "desc": "Discover Fraud Ticket: Manual Imprint Required (en-us)"
            },
            {
              "id": 310,
              "value": "UA21",
              "valueLabel": "UA21",
              "desc": "Discover No Ch Signature Obtained (en-us)"
            },
            {
              "id": 311,
              "value": "UA22",
              "valueLabel": "UA22",
              "desc": "Discover Non-matching Ch Signature Obtained (en-us)"
            },
            {
              "id": 312,
              "value": "UA23",
              "valueLabel": "UA23",
              "desc": "Discover Illegible Imprinted Card Number (en-us)"
            },
            {
              "id": 313,
              "value": "UA28",
              "valueLabel": "UA28",
              "desc": "Discover Illegible Manual Imprint (en-us)"
            },
            {
              "id": 314,
              "value": "UA30",
              "valueLabel": "UA30",
              "desc": "Discover Fraud Ticket: Shipped Goods (en-us)"
            },
            {
              "id": 315,
              "value": "UA31",
              "valueLabel": "UA31",
              "desc": "Discover Cnp -- No Incomplete Pod (en-us)"
            },
            {
              "id": 316,
              "value": "UA32",
              "valueLabel": "UA32",
              "desc": "Discover Negative No Avs Response Received (en-us)"
            },
            {
              "id": 317,
              "value": "UA38",
              "valueLabel": "UA38",
              "desc": "Discover Cnp - Illegible (en-us)"
            },
            {
              "id": 318,
              "value": "UA99",
              "valueLabel": "UA99",
              "desc": "Discover Fraud Non-compliance (en-us)"
            },
            {
              "id": 319,
              "value": "UANR",
              "valueLabel": "UANR",
              "desc": "Discover Fraud:  Non-response To A Ticket Retrieval Request (en-us)"
            },
            {
              "id": 320,
              "value": "UP",
              "valueLabel": "UP",
              "desc": "Discover Fraud Unauthorized Purchase (en-us)"
            }
          ]
        },
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 4,
        "filterable": true,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 5,
        "type": "string",
        "displayOrder": 5,
        "jsonKey": "chargebacks.rpt_dispute_reason_desc",
        "label": "Dispute Reason Description ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 5,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 6,
        "type": "currency",
        "displayOrder": 6,
        "jsonKey": "chargebacks.case_merchant_pay_amount",
        "label": "Merchant Amount ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 6,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 7,
        "type": "date",
        "displayOrder": 7,
        "jsonKey": "chargebacks.case_received_datetime_date",
        "label": "Case Receipt Date ",
        "filter": {
          "id": 19,
          "type": "date",
          "values": [
            {
              "id": 7,
              "value": null,
              "valueLabel": null,
              "desc": null
            }
          ]
        },
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 7,
        "filterable": true,
        "primaryFilter": true,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 8,
        "type": "date",
        "displayOrder": 8,
        "jsonKey": "chargebacks.case_case_resolved_datetime_date",
        "label": "Case Resolved Date ",
        "filter": {
          "id": 20,
          "type": "date",
          "values": [
            {
              "id": 8,
              "value": null,
              "valueLabel": null,
              "desc": null
            }
          ]
        },
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 8,
        "filterable": true,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 9,
        "type": "date",
        "displayOrder": 9,
        "jsonKey": "chargebacks.tran_transaction_datetime_date",
        "label": "Tran Transaction Datetime Date ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 9,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 10,
        "type": "string",
        "displayOrder": 10,
        "jsonKey": "chargebacks.case_case_number",
        "label": "Case Number ",
        "filter": {
          "id": 21,
          "type": "string",
          "values": [
            {
              "id": 10,
              "value": null,
              "valueLabel": null,
              "desc": null
            }
          ]
        },
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 10,
        "filterable": true,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 11,
        "type": "string",
        "displayOrder": 11,
        "jsonKey": "chargebacks.case_corp_number",
        "label": "Corp ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 11,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 12,
        "type": "string",
        "displayOrder": 12,
        "jsonKey": "chargebacks.case_principal_number",
        "label": "Principal ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 12,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 13,
        "type": "string",
        "displayOrder": 13,
        "jsonKey": "chargebacks.case_region_number",
        "label": "Region ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 13,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 14,
        "type": "string",
        "displayOrder": 14,
        "jsonKey": "chargebacks.case_assoc_number",
        "label": "Associate ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 14,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 15,
        "type": "string",
        "displayOrder": 15,
        "jsonKey": "chargebacks.case_chain_number",
        "label": "Chain ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 15,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 16,
        "type": "string",
        "displayOrder": 16,
        "jsonKey": "chargebacks.case_merchant_comment_concat",
        "label": "Merchant Comments ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 16,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 17,
        "type": "string",
        "displayOrder": 17,
        "jsonKey": "chargebacks.case_acquirer_ref_number",
        "label": "Acquirer Reference Number ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 17,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 18,
        "type": "string",
        "displayOrder": 18,
        "jsonKey": "chargebacks.rpt_transaction_type",
        "label": "Transaction Type ",
        "filter": {
          "id": 5,
          "type": "multiselect",
          "values": [
            {
              "id": 428,
              "value": "05",
              "valueLabel": "05 / Sale (en-US)",
              "desc": "The transaction amount was deposited into the merchant account as a result of a sale. (en-US)"
            },
            {
              "id": 429,
              "value": "06",
              "valueLabel": "06 / Return (en-US)",
              "desc": "The transaction amount was rescinded from the merchant account as a result of a refund. (en-US)"
            },
            {
              "id": 430,
              "value": "07",
              "valueLabel": "07 / Cash advance (en-US)",
              "desc": "The transaction amount represents a cash advance to the cardholder. (en-US)"
            }
          ]
        },
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 18,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 19,
        "type": "string",
        "displayOrder": 19,
        "jsonKey": "chargebacks.case_auth_code",
        "label": "Auth Code ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 19,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 20,
        "type": "string",
        "displayOrder": 20,
        "jsonKey": "chargebacks.md_dba_name",
        "label": "DBA Name ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 20,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 21,
        "type": "string",
        "displayOrder": 21,
        "jsonKey": "chargebacks.md_bank_id",
        "label": "Bank ID ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 21,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 22,
        "type": "string",
        "displayOrder": 22,
        "jsonKey": "chargebacks.rpt_case_status_code",
        "label": "Case Status Code ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 22,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 23,
        "type": "string",
        "displayOrder": 23,
        "jsonKey": "chargebacks.rpt_case_type_code",
        "label": "Case Type Code ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 23,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 24,
        "type": "string",
        "displayOrder": 24,
        "jsonKey": "chargebacks.rpt_resolved_to_type_code",
        "label": "Resolved To Type Code ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 24,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 25,
        "type": "string",
        "displayOrder": 25,
        "jsonKey": "chargebacks.md_account_status",
        "label": "Merchant Account Status ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 25,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 26,
        "type": "currency",
        "displayOrder": 26,
        "jsonKey": "chargebacks.rpt_currency_code",
        "label": "Currency Code ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 26,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 27,
        "type": "string",
        "displayOrder": 27,
        "jsonKey": "chargebacks.md_dba_contact",
        "label": "DBA Contact Name ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 27,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 28,
        "type": "string",
        "displayOrder": 28,
        "jsonKey": "chargebacks.case_resolved_by",
        "label": "Case Resolved By ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 28,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 29,
        "type": "string",
        "displayOrder": 29,
        "jsonKey": "chargebacks.merchant_number",
        "label": "Merchant Number ",
        "categoryName": "Header",
        "categoryKey": "header",
        "categoryDisplayOrder": 1,
        "detailsDisplayOrder": 29,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 30,
        "type": "string",
        "displayOrder": 30,
        "jsonKey": "chargebacks.case_bank_adjustment",
        "label": "Bank Adjustment ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 30,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 31,
        "type": "string",
        "displayOrder": 31,
        "jsonKey": "chargebacks.md_dba_phone1",
        "label": "Merchant Phone Number ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 31,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 32,
        "type": "string",
        "displayOrder": 32,
        "jsonKey": "chargebacks.md_dba_fax",
        "label": "Merchant Fax ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 32,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 33,
        "type": "string",
        "displayOrder": 33,
        "jsonKey": "chargebacks.md_dba_address1",
        "label": "Merchant Address ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 33,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 34,
        "type": "string",
        "displayOrder": 34,
        "jsonKey": "chargebacks.md_dba_address2",
        "label": "Merchant Address 2 ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 34,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 35,
        "type": "string",
        "displayOrder": 35,
        "jsonKey": "chargebacks.md_dba_address3",
        "label": "Merchant Address 3 ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 35,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 36,
        "type": "string",
        "displayOrder": 36,
        "jsonKey": "chargebacks.md_dba_city",
        "label": "Merchant City ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 36,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 37,
        "type": "string",
        "displayOrder": 37,
        "jsonKey": "chargebacks.md_dba_state",
        "label": "Merchant State ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 37,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 38,
        "type": "string",
        "displayOrder": 38,
        "jsonKey": "chargebacks.md_dba_usstcd",
        "label": "Merchant State Code ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 38,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 39,
        "type": "string",
        "displayOrder": 39,
        "jsonKey": "chargebacks.md_dba_zip",
        "label": "Merchant Zip ",
        "categoryName": "Merchant Information",
        "categoryKey": "merchantInformation",
        "categoryDisplayOrder": 2,
        "detailsDisplayOrder": 39,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 40,
        "type": "date",
        "displayOrder": 40,
        "jsonKey": "chargebacks.cbk_rpt_refute_by_datetime_date",
        "label": "Refute By Date Date ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 40,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 41,
        "type": "string",
        "displayOrder": 41,
        "jsonKey": "chargebacks.cbk_rpt_chargeback_transaction_code",
        "label": "Transaction Code ",
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 41,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 42,
        "type": "badge",
        "displayOrder": 42,
        "jsonKey": "chargebacks.cbk_rpt_card_type",
        "label": "Card Type ",
        "filter": {
          "id": 4,
          "type": "multiselect",
          "values": [
            {
              "id": 399,
              "value": "",
              "valueLabel": " /  (en-US)",
              "desc": "COMMERCIAL (en-US)"
            },
            {
              "id": 321,
              "value": "01",
              "valueLabel": "01 / ACCL (en-US)",
              "desc": "ACCL/EXCH (en-US)"
            },
            {
              "id": 322,
              "value": "03",
              "valueLabel": "03 / IDP (en-US)",
              "desc": "IDP (en-US)"
            },
            {
              "id": 323,
              "value": "04",
              "valueLabel": "04 / CU24 (en-US)",
              "desc": "CU24 (en-US)"
            },
            {
              "id": 324,
              "value": "05",
              "valueLabel": "05 / JEAN (en-US)",
              "desc": "JEANIE (en-US)"
            },
            {
              "id": 325,
              "value": "06",
              "valueLabel": "06 / ALRT (en-US)",
              "desc": "ALERT (en-US)"
            },
            {
              "id": 326,
              "value": "07",
              "valueLabel": "07 / TYME (en-US)",
              "desc": "TYME DEBIT (en-US)"
            },
            {
              "id": 327,
              "value": "08",
              "valueLabel": "08 / ALSK (en-US)",
              "desc": "ALSK OPT (en-US)"
            },
            {
              "id": 328,
              "value": "09",
              "valueLabel": "09 / SHAZ (en-US)",
              "desc": "SHAZAM (en-US)"
            },
            {
              "id": 329,
              "value": "10",
              "valueLabel": "10 / DBT (en-US)",
              "desc": "DEBIT CARD (en-US)"
            },
            {
              "id": 330,
              "value": "11",
              "valueLabel": "11 / HONR (en-US)",
              "desc": "HONOR DEBT (en-US)"
            },
            {
              "id": 331,
              "value": "12",
              "valueLabel": "12 / INTR (en-US)",
              "desc": "INTERLINK (en-US)"
            },
            {
              "id": 332,
              "value": "13",
              "valueLabel": "13 / MAC (en-US)",
              "desc": "MAC DEBIT (en-US)"
            },
            {
              "id": 333,
              "value": "14",
              "valueLabel": "14 / MSTR (en-US)",
              "desc": "MAESTRO (en-US)"
            },
            {
              "id": 334,
              "value": "15",
              "valueLabel": "15 / MAGC (en-US)",
              "desc": "MAGIC LINE (en-US)"
            },
            {
              "id": 335,
              "value": "16",
              "valueLabel": "16 / MOST (en-US)",
              "desc": "MOST DEBIT (en-US)"
            },
            {
              "id": 336,
              "value": "17",
              "valueLabel": "17 / MSTN (en-US)",
              "desc": "MONEY STN (en-US)"
            },
            {
              "id": 337,
              "value": "18",
              "valueLabel": "18 / PULS (en-US)",
              "desc": "PULSE DBT (en-US)"
            },
            {
              "id": 338,
              "value": "19",
              "valueLabel": "19 / STAR (en-US)",
              "desc": "STAR DEBIT (en-US)"
            },
            {
              "id": 339,
              "value": "20",
              "valueLabel": "20 / CKSR (en-US)",
              "desc": "CHECK GUARANTEE/VERIFICATION (en-US)"
            },
            {
              "id": 340,
              "value": "21",
              "valueLabel": "21 / YNKE (en-US)",
              "desc": "YANKEE DBT (en-US)"
            },
            {
              "id": 341,
              "value": "22",
              "valueLabel": "22 / NYCE (en-US)",
              "desc": "NYCE DEBIT (en-US)"
            },
            {
              "id": 342,
              "value": "23",
              "valueLabel": "23 / CSTN (en-US)",
              "desc": "CASH STATN (en-US)"
            },
            {
              "id": 343,
              "value": "25",
              "valueLabel": "25 / EXPL (en-US)",
              "desc": "EXPLORE (en-US)"
            },
            {
              "id": 344,
              "value": "27",
              "valueLabel": "27 / ATH (en-US)",
              "desc": " (en-US)"
            },
            {
              "id": 345,
              "value": "28",
              "valueLabel": "28 / BKMT (en-US)",
              "desc": "BANKMATE (en-US)"
            },
            {
              "id": 346,
              "value": "29",
              "valueLabel": "29 / AFFN (en-US)",
              "desc": "AFFN (en-US)"
            },
            {
              "id": 347,
              "value": "30",
              "valueLabel": "30 / AMEX (en-US)",
              "desc": "AMERICAN EXPRESS (en-US)"
            },
            {
              "id": 348,
              "value": "31",
              "valueLabel": "31 / DNRS (en-US)",
              "desc": "DINERS CLUB (en-US)"
            },
            {
              "id": 349,
              "value": "32",
              "valueLabel": "32 / DISC (en-US)",
              "desc": "DISCOVER (en-US)"
            },
            {
              "id": 350,
              "value": "33",
              "valueLabel": "33 / JCB (en-US)",
              "desc": "JCB (en-US)"
            },
            {
              "id": 351,
              "value": "34",
              "valueLabel": "34 / ENRT (en-US)",
              "desc": "ENROUTE (en-US)"
            },
            {
              "id": 352,
              "value": "35",
              "valueLabel": "35 / DSBS (en-US)",
              "desc": "DISCOVER BUSINESS (en-US)"
            },
            {
              "id": 353,
              "value": "36",
              "valueLabel": "36 / DDBT (en-US)",
              "desc": "DISCOVER DEBIT (en-US)"
            },
            {
              "id": 354,
              "value": "37",
              "valueLabel": "37 / CUP (en-US)",
              "desc": "CHINA UNION PAY (en-US)"
            },
            {
              "id": 355,
              "value": "38",
              "valueLabel": "38 / DSPM (en-US)",
              "desc": "DISCOVER PREMIUM (en-US)"
            },
            {
              "id": 356,
              "value": "39",
              "valueLabel": "39 / DCOR (en-US)",
              "desc": "DISCOVER CORE (en-US)"
            },
            {
              "id": 357,
              "value": "3A",
              "valueLabel": "3A / DDPP (en-US)",
              "desc": "DISCOVER PREPAID (en-US)"
            },
            {
              "id": 358,
              "value": "3B",
              "valueLabel": "3B / PPAL (en-US)",
              "desc": "PAYPAL (en-US)"
            },
            {
              "id": 359,
              "value": "3P",
              "valueLabel": "3P / DSPP (en-US)",
              "desc": "DISCOVER PREMIUM PLUS (en-US)"
            },
            {
              "id": 360,
              "value": "40",
              "valueLabel": "40 / VISA (en-US)",
              "desc": "VISA (en-US)"
            },
            {
              "id": 361,
              "value": "41",
              "valueLabel": "41 / VIBS (en-US)",
              "desc": "VISA BUSINESS (en-US)"
            },
            {
              "id": 362,
              "value": "42",
              "valueLabel": "42 / VDBT (en-US)",
              "desc": "VISA DEBIT (en-US)"
            },
            {
              "id": 363,
              "value": "43",
              "valueLabel": "43 / VISP (en-US)",
              "desc": "VISA SIGNATURE PREFERRED (en-US)"
            },
            {
              "id": 364,
              "value": "44",
              "valueLabel": "44 / VINF (en-US)",
              "desc": "VISA INFINITE (en-US)"
            },
            {
              "id": 365,
              "value": "45",
              "valueLabel": "45 / VIPP (en-US)",
              "desc": "VISA PREPAID (en-US)"
            },
            {
              "id": 366,
              "value": "46",
              "valueLabel": "46 / VIPL (en-US)",
              "desc": "VISA PLATINUM (en-US)"
            },
            {
              "id": 367,
              "value": "47",
              "valueLabel": "47 / VISG (en-US)",
              "desc": "VISA SIGNATURE (en-US)"
            },
            {
              "id": 368,
              "value": "48",
              "valueLabel": "48 /  (en-US)",
              "desc": "VISA GOLD (en-US)"
            },
            {
              "id": 369,
              "value": "4B",
              "valueLabel": "4B /  (en-US)",
              "desc": "VISA COMMERCIAL DEBIT (en-US)"
            },
            {
              "id": 370,
              "value": "4C",
              "valueLabel": "4C /  (en-US)",
              "desc": "VISA CORPORATE (en-US)"
            },
            {
              "id": 371,
              "value": "4E",
              "valueLabel": "4E /  (en-US)",
              "desc": "VISA ELECTRON (en-US)"
            },
            {
              "id": 372,
              "value": "4F",
              "valueLabel": "4F /  (en-US)",
              "desc": "VISA FLEET (en-US)"
            },
            {
              "id": 373,
              "value": "4N",
              "valueLabel": "4N / VIBE (en-US)",
              "desc": "VISA BUSINESS ENHANCED (en-US)"
            },
            {
              "id": 374,
              "value": "4P",
              "valueLabel": "4P /  (en-US)",
              "desc": "VISA CHARGE CARD (en-US)"
            },
            {
              "id": 375,
              "value": "4Q",
              "valueLabel": "4Q /  (en-US)",
              "desc": "VISA PURCHASING (en-US)"
            },
            {
              "id": 376,
              "value": "4S",
              "valueLabel": "4S / VISB (en-US)",
              "desc": "VISA SIGNATURE BUSINESS (en-US)"
            },
            {
              "id": 377,
              "value": "4V",
              "valueLabel": "4V /  (en-US)",
              "desc": "VISA VPAY (en-US)"
            },
            {
              "id": 378,
              "value": "4Z",
              "valueLabel": "4Z / VDCB (en-US)",
              "desc": "VISA CASHBACK (en-US)"
            },
            {
              "id": 379,
              "value": "50",
              "valueLabel": "50 / MC (en-US)",
              "desc": "MASTERCARD (en-US)"
            },
            {
              "id": 380,
              "value": "51",
              "valueLabel": "51 / MCBS (en-US)",
              "desc": "MASTERCARD BUSINESS (en-US)"
            },
            {
              "id": 381,
              "value": "52",
              "valueLabel": "52 / MDBT (en-US)",
              "desc": "MASTERCARD DEBIT (en-US)"
            },
            {
              "id": 382,
              "value": "53",
              "valueLabel": "53 / MCWC (en-US)",
              "desc": "MASTERCARD WORLD (en-US)"
            },
            {
              "id": 383,
              "value": "54",
              "valueLabel": "54 / MWEL (en-US)",
              "desc": "MASTERCARD WORLD ELITE (en-US)"
            },
            {
              "id": 384,
              "value": "55",
              "valueLabel": "55 / MCEC (en-US)",
              "desc": "MASTERCARD ENHANCED CONSUMER (en-US)"
            },
            {
              "id": 385,
              "value": "56",
              "valueLabel": "56 / MCBW (en-US)",
              "desc": "MASTERCARD WORLD BUSINESS (en-US)"
            },
            {
              "id": 386,
              "value": "57",
              "valueLabel": "57 / MBWE (en-US)",
              "desc": "MASTERCARD WORLD ELITE BUSINESS (en-US)"
            },
            {
              "id": 387,
              "value": "58",
              "valueLabel": "58 / MCCW (en-US)",
              "desc": "MASTERCARD WORLD CORPORATE (en-US)"
            },
            {
              "id": 388,
              "value": "59",
              "valueLabel": "59 / MCWE (en-US)",
              "desc": "MASTERCARD WORLD ELITE CORPORATE (en-US)"
            },
            {
              "id": 389,
              "value": "5A",
              "valueLabel": "5A / MCPP (en-US)",
              "desc": "MASTERCARD PREPAID CONSUMER (en-US)"
            },
            {
              "id": 390,
              "value": "5B",
              "valueLabel": "5B /  (en-US)",
              "desc": "MASTERCARD COMMERCIAL DEBIT (en-US)"
            },
            {
              "id": 391,
              "value": "5C",
              "valueLabel": "5C /  (en-US)",
              "desc": "MASTERCARD CORPORATE (en-US)"
            },
            {
              "id": 392,
              "value": "5D",
              "valueLabel": "5D /  (en-US)",
              "desc": "MASTERCARD PREMIUM DEBIT (en-US)"
            },
            {
              "id": 393,
              "value": "5E",
              "valueLabel": "5E / MCEB (en-US)",
              "desc": "MASTERCARD ENHANCED BUSINESS (en-US)"
            },
            {
              "id": 394,
              "value": "5F",
              "valueLabel": "5F /  (en-US)",
              "desc": "MASTERCARD FLEET (en-US)"
            },
            {
              "id": 395,
              "value": "5G",
              "valueLabel": "5G /  (en-US)",
              "desc": "MASTERCARD GOLD (en-US)"
            },
            {
              "id": 396,
              "value": "5H",
              "valueLabel": "5H / MCHV (en-US)",
              "desc": "MASTERCARD HIGH VALUE (en-US)"
            },
            {
              "id": 397,
              "value": "5J",
              "valueLabel": "5J /  (en-US)",
              "desc": "MASTERCARD PREPAID COMMERCIAL (en-US)"
            },
            {
              "id": 398,
              "value": "5K",
              "valueLabel": "5K /  (en-US)",
              "desc": "MASTERCARD PREPAID MAESTRO (en-US)"
            },
            {
              "id": 400,
              "value": "5L",
              "valueLabel": "5L /  (en-US)",
              "desc": "MASTERCARD MAESTRO SMALL BUSINESS (en-US)"
            },
            {
              "id": 401,
              "value": "5M",
              "valueLabel": "5M /  (en-US)",
              "desc": "MASTERCARD INTERNATIONAL MAESTRO (en-US)"
            },
            {
              "id": 402,
              "value": "5N",
              "valueLabel": "5N /  (en-US)",
              "desc": "MASTERCARD NEW WORLD (en-US)"
            },
            {
              "id": 403,
              "value": "5P",
              "valueLabel": "5P /  (en-US)",
              "desc": "MASTERCARD PLATINUM (en-US)"
            },
            {
              "id": 404,
              "value": "5Q",
              "valueLabel": "5Q /  (en-US)",
              "desc": "MASTERCARD PURCHASING (en-US)"
            },
            {
              "id": 405,
              "value": "5R",
              "valueLabel": "5R /  (en-US)",
              "desc": "MASTERCARD PREPAID MAESTRO (en-US)"
            },
            {
              "id": 406,
              "value": "5S",
              "valueLabel": "5S /  (en-US)",
              "desc": "MASTERCARD WORLD SIGNIA (en-US)"
            },
            {
              "id": 407,
              "value": "5T",
              "valueLabel": "5T /  (en-US)",
              "desc": "MASTERCARD REWARDS ONLY (en-US)"
            },
            {
              "id": 408,
              "value": "5U",
              "valueLabel": "5U /  (en-US)",
              "desc": "MASTERCARD UK MAESTRO (en-US)"
            },
            {
              "id": 409,
              "value": "5Z",
              "valueLabel": "5Z / MDCB (en-US)",
              "desc": "MASTERCARD CASHBACK (en-US)"
            },
            {
              "id": 410,
              "value": "60",
              "valueLabel": "60 / PL­0 (en-US)",
              "desc": "CUSTOMER SPECIFIC PRIVATE LABEL (en-US)"
            },
            {
              "id": 411,
              "value": "61",
              "valueLabel": "61 / PL­1 (en-US)",
              "desc": "CUSTOMER SPECIFIC PRIVATE LABEL (en-US)"
            },
            {
              "id": 412,
              "value": "62",
              "valueLabel": "62 / PL62 (en-US)",
              "desc": "IPURCHASE (en-US)"
            },
            {
              "id": 413,
              "value": "70",
              "valueLabel": "70 / PL70 (en-US)",
              "desc": "CUSTOMER SPECIFIC PRIVATE LABEL (en-US)"
            },
            {
              "id": 414,
              "value": "71",
              "valueLabel": "71 / PL71 (en-US)",
              "desc": "CUSTOMER SPECIFIC PRIVATE LABEL (en-US)"
            },
            {
              "id": 415,
              "value": "75",
              "valueLabel": "75 / PL75 (en-US)",
              "desc": "PRIVATE LABEL (en-US)"
            },
            {
              "id": 416,
              "value": "76",
              "valueLabel": "76 / PL76 (en-US)",
              "desc": "VOYAGER (en-US)"
            },
            {
              "id": 417,
              "value": "78",
              "valueLabel": "78 / PL78 (en-US)",
              "desc": "EBT (en-US)"
            },
            {
              "id": 418,
              "value": "79",
              "valueLabel": "79 / PL79 (en-US)",
              "desc": "CUSTOMER SPECIFIC PRIVATE LABEL (en-US)"
            },
            {
              "id": 419,
              "value": "80",
              "valueLabel": "80 / CHGB (en-US)",
              "desc": "NON­FINANCIAL CHARGEBACK/RETRIEVAL (en-US)"
            },
            {
              "id": 420,
              "value": "81",
              "valueLabel": "81 / XBA1 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 421,
              "value": "82",
              "valueLabel": "82 / XBA2 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 422,
              "value": "83",
              "valueLabel": "83 / XBA3 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 423,
              "value": "84",
              "valueLabel": "84 / XBA4 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 424,
              "value": "85",
              "valueLabel": "85 / XBA5 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 425,
              "value": "87",
              "valueLabel": "87 / XBA7 (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 426,
              "value": "8H",
              "valueLabel": "8H / XBAH (en-US)",
              "desc": "ASSESSMENTS (en-US)"
            },
            {
              "id": 427,
              "value": "90",
              "valueLabel": "90 / ADJ (en-US)",
              "desc": "ADJUSTMENTS (en-US)"
            }
          ]
        },
        "categoryName": "Transaction Information",
        "categoryKey": "transactionInformation",
        "categoryDisplayOrder": 3,
        "detailsDisplayOrder": 42,
        "filterable": true,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 43,
        "type": "string",
        "displayOrder": 43,
        "jsonKey": "chargebacks.message_concat",
        "label": "Message ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 43,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 44,
        "type": "currency",
        "displayOrder": 44,
        "jsonKey": "chargebacks.case_chargeback_amount",
        "label": "Case Chargeback Amount ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 44,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 45,
        "type": "currency",
        "displayOrder": 1,
        "jsonKey": "chargebacks.case_adjustment_amount",
        "label": "Case Adjustment Amount ",
        "categoryName": "Chargeback Information",
        "categoryKey": "chargebackInformation",
        "categoryDisplayOrder": 4,
        "detailsDisplayOrder": 45,
        "filterable": false,
        "primaryFilter": false,
        "selected": false,
        "primaryIdentifier": false
      },
      {
        "reportId": 1,
        "columnId": 46,
        "type": "string",
        "displayOrder": 46,
        "jsonKey": "chargebacks.seq_key",
        "label": "Sequence Key ",
        "categoryDisplayOrder": 0,
        "detailsDisplayOrder": 46,
        "filterable": false,
        "primaryFilter": false,
        "selected": true,
        "primaryIdentifier": true
      }
    ]
  };
}

export function getMockReportData() {
  return {
    'rows': [
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-19',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-19',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-18',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-18',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-17',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-17',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-17',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-16',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-16',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-15',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-15',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-15',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-14',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-14',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-14',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-13',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-13',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-13',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-13',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-12',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-12',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-12',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-12',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-11',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-11',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-11',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-11',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-10',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-10',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-10',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-10',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-09',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-09',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-09',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-09',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-08',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-08',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-08',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-08',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-07',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-07',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-07',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-07',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-06',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-06',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-06',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-06',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-05',
        'chargebacks.cbk_rpt_card_type': 'VISA',
        'chargebacks.rpt_case_type_code': '1'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-05',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '3'
      },
      {
        'chargebacks.tran_transaction_datetime_date': '2017-08-05',
        'chargebacks.cbk_rpt_card_type': 'MASTER',
        'chargebacks.rpt_case_type_code': '1'
      }
    ],
  };
}

/* eslint-enable */
