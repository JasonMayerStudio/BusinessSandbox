import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import MultiSelectInput from './MultiSelectInput.js';

export default class MultiSelectInputDoc extends Component {
  constructor(props) {
    super(props);
    const filterColumns = getMockValues();

    // const stateValues = values.map((value) => {
    //   return Object.assign({}, value, { isChecked: false });
    // });

    this.state = {
      // multiSelectName: 'Reason Code',
      // values: stateValues,
      filtersWithValues: filterColumns.map((filterColumn) => {
        const currentValues = {
          list: [],
        };

        return Object.assign({}, filterColumn, { currentValues });
      }),
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  }

  handleMultiSelectChange(id, groupId) {
    const newFiltersWithValues = this.state.filtersWithValues.map((filterColumn) => {
      if (filterColumn.filter.id === groupId) {
        // first, toggle the checked attr of the id for the given option
        const newValues = filterColumn.filter.values.map((value) => {
          if (value.id === id) {
            return Object.assign({}, value, { isChecked: !value.isChecked });
          } else {
            return value;
          }
        });

        // second, build a list of IDs of all the now-selected values
        const selectedValues = newValues.reduce((selectedList, value) => {
          if (value.isChecked) {
            return selectedList.concat([value.value]);
          } else return selectedList;
        }, []);

        // third, substitute the current state of all values into the filter sub-property
        const newFilter = Object.assign({}, filterColumn.filter, { values: newValues });

        // fourth, substitute the new filter and the currently selected values into the column object
        const newFilterColumn = Object.assign({}, filterColumn, {
          filter: newFilter,
          currentValues: { list: selectedValues },
        });

        return newFilterColumn;
      } else {
        return filterColumn;
      }
    });

    this.setState({
      filtersWithValues: newFiltersWithValues,
    });
  }

  render() {
    return (
      <Page>
        <h2>MultiSelectInput</h2>

        <p>Use this component for a list of checkboxes to select items.</p>

        <ReactSpecimen span={3}>
          <MultiSelectInput
            name={this.state.filtersWithValues[0].label}
            groupId={this.state.filtersWithValues[0].filter.id}
            extraClass="some-extra-class"
            values={this.state.filtersWithValues[0].filter.values}
            handleChange={this.handleMultiSelectChange}
          />
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <MultiSelectInput
            name={this.state.filtersWithValues[1].label}
            groupId={this.state.filtersWithValues[1].filter.id}
            extraClass="some-extra-class"
            values={this.state.filtersWithValues[1].filter.values}
            handleChange={this.handleMultiSelectChange}
          />
        </ReactSpecimen>

        <p>Selected IDs for {this.state.filtersWithValues[0].label}</p>
        <ul>
          {this.state.filtersWithValues[0].currentValues.list.map((id) => {
            return (
              <li key={id}>{id}</li>
            );
          })}
        </ul>

        <p>Selected IDs for {this.state.filtersWithValues[1].label}</p>
        <ul>
          {this.state.filtersWithValues[1].currentValues.list.map((id) => {
            return (
              <li key={id}>{id}</li>
            );
          })}
        </ul>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>name</strong>:
            a string used for the label of the component
          </li>
          <li><strong>values</strong>:
            an array of value object, each with an id, valueLabel, and optional desc property for its checkbox
          </li>
          <li><strong>handleChange</strong>:
            a change handler function, that will be called with the value object ID of the checkbox changed
          </li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>groupId</strong>:
            an optional number or string which can be used to identify the group of options a toggle is updating, if more than one Mulitselect component is on a page
          </li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}

/* eslint-disable */

function getMockValues() {
  return [
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
    }
  ];
}

/* eslint-enable */
