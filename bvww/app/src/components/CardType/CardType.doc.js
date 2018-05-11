import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import CardType from './CardType.js';

const cards = [
  {
    type: 'American Express',
    abbreviation: 'AMEX',
    id: 1,
  },
  {
    type: 'Cirrus',
    abbreviation: 'CIRR',
    id: 2,
  },
  {
    type: 'Diner\'s Club International',
    abbreviation: 'DC',
    id: 3,
  },
  {
    type: 'Discover',
    abbreviation: 'DISC',
    id: 4,
  },
  {
    type: 'Maestro',
    abbreviation: 'TO',
    id: 5,
  },
  {
    type: 'Mastercard',
    abbreviation: 'MC',
    id: 6,
  },
  {
    type: 'Paypal',
    abbreviation: 'PAY',
    id: 7,
  },
  {
    type: 'Visa',
    abbreviation: 'VISA',
    id: 8,
  },
  {
    type: 'Target',
    abbreviation: 'TARG',
    id: 9,
  },
  {
    type: 'Visa Electron',
    abbreviation: 'VIS-E',
    id: 10,
  },
  {
    type: 'Wal Mart',
    abbreviation: 'WAL',
    id: 11,
  },
  {
    type: 'Shell',
    abbreviation: 'SHEL',
    id: 12,
  },
  {
    type: 'JC Bamford',
    abbreviation: 'JC',
    id: 13,
  },
  {
    type: 'Laser',
    abbreviation: 'LASE',
    id: 14,
  },
  {
    type: 'Switch',
    abbreviation: 'SWI',
    id: 15,
  },
];

export default () => (
  <Page>
    <h2>CardType</h2>

    <p>Use this component for representing a type of credit card image to display from a given set of data.</p>

    <ReactSpecimen span={3}>
      <div className="card-types">
        {cards.map((card) => {
          return (
            <div style={{ marginBottom: '4px' }}>
              <CardType
                type={card.type}
                key={card.id}
                abbreviation={card.abbreviation}
              />
            </div>
          );
        })}
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>type</strong>: name of card type</li>
      <li><strong>abbreviation</strong>: abbreviation for card type; should it not exist in the default list, a backup will be provided with this abbreviation</li>
    </ul>

  </Page>
);
