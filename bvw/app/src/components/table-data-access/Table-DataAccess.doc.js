import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import TableDataAccess from './Table-DataAccess.js';

class TableDataAccessDoc extends Component {
  constructor(props) {
    super(props);

    const dataAccessChains = getSampleAccessRows();

    this.state = {
      dataAccessChains,
      lastRowEdited: null,
    };
    this.attachBindings();
  }

  attachBindings() {
    this.editChain = this.editChain.bind(this);
    this.deleteChain = this.deleteChain.bind(this);
  }

  editChain(row) {
    const newLastRowEdited = row + 1;

    this.setState({
      lastRowEdited: newLastRowEdited,
    });
  }

  deleteChain(row) {
    const newDataAccessChains = this.state.dataAccessChains.filter((item, index) => {
      return index !== row;
    });

    this.setState({
      dataAccessChains: newDataAccessChains,
      lastRowEdited: null,
    });
  }

  render() {
    return (
      <Page>
        <h2>TableDataAccess</h2>

        <p>Use this component for showing the data access of a Merchant Admin user</p>

        <ReactSpecimen span={6}>
          <TableDataAccess
            dataAccessChains={this.state.dataAccessChains}
            editButtonHandler={this.editChain}
            deleteButtonHandler={this.deleteChain}
          />
        </ReactSpecimen>

        {this.state.lastRowEdited &&
          <p>
            Last row edited was {this.state.lastRowEdited}
          </p>
        }

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>dataAccessChains</strong>: an array of data access objects</li>
          <li><strong>editButtonHandler</strong>: a function which takes the array index of the data access chain to edit</li>
          <li><strong>deleteButtonHandler</strong>: a function which takes the array index of the data access chain to delete</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>(none)</strong>
          </li>
        </ul>

      </Page>
    );
  }
}

export default TableDataAccessDoc;

/* eslint-disable quotes, quote-props, comma-dangle */
function getSampleAccessRows() {
  return [
    {
      "corp": {
        "id": 16,
        "label": "057",
        "hasAccess": false,
        "organizations": [
          {
            "id": 28,
            "label": "04",
            "hasAccess": false,
            "organizations": [
              {
                "id": 59,
                "label": "300",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 196,
                    "label": "012",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 130,
                        "label": "001",
                        "hasAccess": true,
                        "organizations": [
                          {
                            "id": 323,
                            "label": "0000062243315704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 321,
                            "label": "0000062243955704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 324,
                            "label": "0000062242445704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 322,
                            "label": "0000062243405704",
                            "hasAccess": true,
                            "organizations": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": 54,
                "label": "805",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 186,
                    "label": "001",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 122,
                        "label": "000",
                        "hasAccess": true,
                        "organizations": [
                          {
                            "id": 306,
                            "label": "0000062207875704",
                            "hasAccess": true,
                            "organizations": []
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
      "region": {
        "id": 28,
        "label": "04",
        "hasAccess": false,
        "organizations": [
          {
            "id": 59,
            "label": "300",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 196,
                "label": "012",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 130,
                    "label": "001",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 323,
                        "label": "0000062243315704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 321,
                        "label": "0000062243955704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 324,
                        "label": "0000062242445704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 322,
                        "label": "0000062243405704",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 54,
            "label": "805",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 186,
                "label": "001",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 122,
                    "label": "000",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 306,
                        "label": "0000062207875704",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "principal": {
        "id": 59,
        "label": "300",
        "hasAccess": true,
        "endOfChain": true,
        "organizations": [
          {
            "id": 196,
            "label": "012",
            "hasAccess": true,
            "organizations": [
              {
                "id": 130,
                "label": "001",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 323,
                    "label": "0000062243315704",
                    "hasAccess": true,
                    "organizations": []
                  },
                  {
                    "id": 321,
                    "label": "0000062243955704",
                    "hasAccess": true,
                    "organizations": []
                  },
                  {
                    "id": 324,
                    "label": "0000062242445704",
                    "hasAccess": true,
                    "organizations": []
                  },
                  {
                    "id": 322,
                    "label": "0000062243405704",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "associate": {
        "label": "All"
      },
      "chain": {
        "label": "All"
      },
      "merchant": {
        "label": "All"
      }
    },
    {
      "corp": {
        "id": 16,
        "label": "057",
        "hasAccess": false,
        "organizations": [
          {
            "id": 28,
            "label": "04",
            "hasAccess": false,
            "organizations": [
              {
                "id": 59,
                "label": "300",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 196,
                    "label": "012",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 130,
                        "label": "001",
                        "hasAccess": true,
                        "organizations": [
                          {
                            "id": 323,
                            "label": "0000062243315704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 321,
                            "label": "0000062243955704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 324,
                            "label": "0000062242445704",
                            "hasAccess": true,
                            "organizations": []
                          },
                          {
                            "id": 322,
                            "label": "0000062243405704",
                            "hasAccess": true,
                            "organizations": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": 54,
                "label": "805",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 186,
                    "label": "001",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 122,
                        "label": "000",
                        "hasAccess": true,
                        "organizations": [
                          {
                            "id": 306,
                            "label": "0000062207875704",
                            "hasAccess": true,
                            "organizations": []
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
      "region": {
        "id": 28,
        "label": "04",
        "hasAccess": false,
        "organizations": [
          {
            "id": 59,
            "label": "300",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 196,
                "label": "012",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 130,
                    "label": "001",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 323,
                        "label": "0000062243315704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 321,
                        "label": "0000062243955704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 324,
                        "label": "0000062242445704",
                        "hasAccess": true,
                        "organizations": []
                      },
                      {
                        "id": 322,
                        "label": "0000062243405704",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 54,
            "label": "805",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 186,
                "label": "001",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 122,
                    "label": "000",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 306,
                        "label": "0000062207875704",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "principal": {
        "id": 54,
        "label": "805",
        "hasAccess": true,
        "endOfChain": true,
        "organizations": [
          {
            "id": 186,
            "label": "001",
            "hasAccess": true,
            "organizations": [
              {
                "id": 122,
                "label": "000",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 306,
                    "label": "0000062207875704",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "associate": {
        "label": "All"
      },
      "chain": {
        "label": "All"
      },
      "merchant": {
        "label": "All"
      }
    },
    {
      "corp": {
        "id": 15,
        "label": "042",
        "hasAccess": false,
        "organizations": [
          {
            "id": 22,
            "label": "70",
            "hasAccess": false,
            "organizations": [
              {
                "id": 37,
                "label": "027",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 163,
                    "label": "014",
                    "hasAccess": false,
                    "organizations": [
                      {
                        "id": 100,
                        "label": "402",
                        "hasAccess": true,
                        "endOfChain": true,
                        "organizations": [
                          {
                            "id": 226,
                            "label": "0008788270082700",
                            "hasAccess": true,
                            "organizations": []
                          }
                        ]
                      },
                      {
                        "id": 100,
                        "label": "000",
                        "hasAccess": true,
                        "organizations": [
                          {
                            "id": 227,
                            "label": "0008788270082214",
                            "hasAccess": true,
                            "organizations": []
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
      "region": {
        "id": 22,
        "label": "70",
        "hasAccess": false,
        "organizations": [
          {
            "id": 37,
            "label": "027",
            "hasAccess": false,
            "organizations": [
              {
                "id": 163,
                "label": "014",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 100,
                    "label": "402",
                    "hasAccess": true,
                    "endOfChain": true,
                    "organizations": [
                      {
                        "id": 226,
                        "label": "0008788270082700",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  },
                  {
                    "id": 100,
                    "label": "000",
                    "hasAccess": true,
                    "organizations": [
                      {
                        "id": 227,
                        "label": "0008788270082214",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "principal": {
        "id": 37,
        "label": "027",
        "hasAccess": false,
        "organizations": [
          {
            "id": 163,
            "label": "014",
            "hasAccess": false,
            "organizations": [
              {
                "id": 100,
                "label": "402",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 226,
                    "label": "0008788270082700",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              },
              {
                "id": 100,
                "label": "000",
                "hasAccess": true,
                "organizations": [
                  {
                    "id": 227,
                    "label": "0008788270082214",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "associate": {
        "id": 163,
        "label": "014",
        "hasAccess": false,
        "organizations": [
          {
            "id": 100,
            "label": "402",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 226,
                "label": "0008788270082700",
                "hasAccess": true,
                "organizations": []
              }
            ]
          },
          {
            "id": 100,
            "label": "000",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 227,
                "label": "0008788270082214",
                "hasAccess": true,
                "organizations": []
              }
            ]
          }
        ]
      },
      "chain": {
        "id": 100,
        "label": "402",
        "hasAccess": true,
        "endOfChain": true,
        "organizations": [
          {
            "id": 226,
            "label": "0008788270082700",
            "hasAccess": true,
            "organizations": []
          }
        ]
      },
      "merchant": {
        "label": "All"
      }
    },
    {
      "corp": {
        "id": 15,
        "label": "042",
        "hasAccess": false,
        "organizations": [
          {
            "id": 22,
            "label": "70",
            "hasAccess": false,
            "organizations": [
              {
                "id": 37,
                "label": "027",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 163,
                    "label": "014",
                    "hasAccess": false,
                    "organizations": [
                      {
                        "id": 100,
                        "label": "402",
                        "hasAccess": true,
                        "endOfChain": true,
                        "organizations": [
                          {
                            "id": 226,
                            "label": "0008788270082700",
                            "hasAccess": true,
                            "organizations": []
                          }
                        ]
                      },
                      {
                        "id": 100,
                        "label": "000",
                        "hasAccess": true,
                        "endOfChain": true,
                        "organizations": [
                          {
                            "id": 227,
                            "label": "0008788270082214",
                            "hasAccess": true,
                            "organizations": []
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
      "region": {
        "id": 22,
        "label": "70",
        "hasAccess": false,
        "organizations": [
          {
            "id": 37,
            "label": "027",
            "hasAccess": false,
            "organizations": [
              {
                "id": 163,
                "label": "014",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 100,
                    "label": "402",
                    "hasAccess": true,
                    "endOfChain": true,
                    "organizations": [
                      {
                        "id": 226,
                        "label": "0008788270082700",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  },
                  {
                    "id": 100,
                    "label": "000",
                    "hasAccess": true,
                    "endOfChain": true,
                    "organizations": [
                      {
                        "id": 227,
                        "label": "0008788270082214",
                        "hasAccess": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "principal": {
        "id": 37,
        "label": "027",
        "hasAccess": false,
        "organizations": [
          {
            "id": 163,
            "label": "014",
            "hasAccess": false,
            "organizations": [
              {
                "id": 100,
                "label": "402",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 226,
                    "label": "0008788270082700",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              },
              {
                "id": 100,
                "label": "000",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": [
                  {
                    "id": 227,
                    "label": "0008788270082214",
                    "hasAccess": true,
                    "organizations": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "associate": {
        "id": 163,
        "label": "014",
        "hasAccess": false,
        "organizations": [
          {
            "id": 100,
            "label": "402",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 226,
                "label": "0008788270082700",
                "hasAccess": true,
                "organizations": []
              }
            ]
          },
          {
            "id": 100,
            "label": "000",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": [
              {
                "id": 227,
                "label": "0008788270082214",
                "hasAccess": true,
                "organizations": []
              }
            ]
          }
        ]
      },
      "chain": {
        "id": 100,
        "label": "000",
        "hasAccess": true,
        "endOfChain": true,
        "organizations": [
          {
            "id": 227,
            "label": "0008788270082214",
            "hasAccess": true,
            "organizations": []
          }
        ]
      },
      "merchant": {
        "label": "All"
      }
    },
    {
      "corp": {
        "id": 17,
        "label": "052",
        "hasAccess": false,
        "organizations": [
          {
            "id": 32,
            "label": "04",
            "hasAccess": false,
            "organizations": [
              {
                "id": 64,
                "label": "004",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 203,
                    "label": "006",
                    "hasAccess": false,
                    "organizations": [
                      {
                        "id": 137,
                        "label": "DJL",
                        "hasAccess": false,
                        "organizations": [
                          {
                            "id": 346,
                            "label": "0000000031393751",
                            "hasAccess": true,
                            "endOfChain": true,
                            "organizations": []
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
      "region": {
        "id": 32,
        "label": "04",
        "hasAccess": false,
        "organizations": [
          {
            "id": 64,
            "label": "004",
            "hasAccess": false,
            "organizations": [
              {
                "id": 203,
                "label": "006",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 137,
                    "label": "DJL",
                    "hasAccess": false,
                    "organizations": [
                      {
                        "id": 346,
                        "label": "0000000031393751",
                        "hasAccess": true,
                        "endOfChain": true,
                        "organizations": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "principal": {
        "id": 64,
        "label": "004",
        "hasAccess": false,
        "organizations": [
          {
            "id": 203,
            "label": "006",
            "hasAccess": false,
            "organizations": [
              {
                "id": 137,
                "label": "DJL",
                "hasAccess": false,
                "organizations": [
                  {
                    "id": 346,
                    "label": "0000000031393751",
                    "hasAccess": true,
                    "endOfChain": true,
                    "organizations": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "associate": {
        "id": 203,
        "label": "006",
        "hasAccess": false,
        "organizations": [
          {
            "id": 137,
            "label": "DJL",
            "hasAccess": false,
            "organizations": [
              {
                "id": 346,
                "label": "0000000031393751",
                "hasAccess": true,
                "endOfChain": true,
                "organizations": []
              }
            ]
          }
        ]
      },
      "chain": {
        "id": 137,
        "label": "DJL",
        "hasAccess": false,
        "organizations": [
          {
            "id": 346,
            "label": "0000000031393751",
            "hasAccess": true,
            "endOfChain": true,
            "organizations": []
          }
        ]
      },
      "merchant": {
        "id": 346,
        "label": "0000000031393751",
        "hasAccess": true,
        "endOfChain": true,
        "organizations": []
      }
    }
  ];
}
/* eslint-enable quotes, quote-props, comma-dangle */
