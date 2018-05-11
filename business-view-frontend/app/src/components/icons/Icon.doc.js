import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import AdminIcon from 'Components/icons/AdminIcon';
import CheckIcon from 'Components/icons/check-icon/CheckIcon.js';
import ChevronDownIcon from 'Components/icons/ChevronDownIcon';
import ChevronUpIcon from 'Components/icons/ChevronUpIcon';
import CloseIcon from 'Components/icons/CloseIcon';
import DashboardIcon from 'Components/icons/DashboardIcon';
import DisputesIcon from 'Components/icons/disputes-icon/DisputesIcon.js';
import DragHandleIcon from 'Components/icons/DragHandleIcon';
import ErrorIcon from 'Components/icons/error-icon/ErrorIcon.js';
import EyeIcon from 'Components/icons/EyeIcon';
import GarbageIcon from 'Components/icons/GarbageIcon';
import InformationIcon from 'Components/icons/information-icon/InformationIcon.js';
import LockIcon from 'Components/icons/LockIcon';
import PlusIcon from 'Components/icons/PlusIcon';
import StarIcon from 'Components/icons/StarIcon';
import MinusIcon from 'Components/icons/MinusIcon';
import RightPointerIcon from 'Components/icons/right-pointer-icon/RightPointerIcon.js';
import ReportsIcon from 'Components/icons/ReportsIcon';
import StatementsIcon from 'Components/icons/StatementsIcon';
import TransactionsIcon from 'Components/icons/TransactionsIcon';
import UserIcon from 'Components/icons/user-icon/UserIcon.js';
import ToggleArrow from 'Components/icons/toggle-arrow/ToggleArrow.js';

import PrimaryButton from 'Components/Button/PrimaryButton';
import SelectInput from 'Components/forms/select-input/SelectInput.js';

function sampleClickHandler() {
  alert('You clicked the button.'); // eslint-disable-line no-alert
}

const paddedDarkBackground = {
  backgroundColor: '#000',
  display: 'inline-block',
  margin: '8px 0',
  padding: '8px',
};

const dataList = [
  {
    value: 'merchant users',
    text: 'Merchant Users',
  },
  {
    value: 'internal users',
    text: 'Internal Users',
  },
  {
    value: 'acquirer users',
    text: 'Acquirer Users',
  },
];

let selectedItem = dataList[0];

function handleSelection(value, event) {
  event.stopPropagation();
  const newSelection = dataList.find((item) => {
    return item.value === value;
  });

  if (newSelection) {
    selectedItem = newSelection;
  }
}

export default () => (
  <Page>
    <h2>Icon</h2>

    <p>Use this component to display an inline SVG icon. The icon name should be passed in as a prop to its respected component.</p>

    <ReactSpecimen span={3}>
      <div>
        <h3>Admin Icon</h3>
        <AdminIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Check Icon</h3>
        <CheckIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Chevron Down Icon</h3>
        <ChevronDownIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Chevron Up Icon</h3>
        <ChevronUpIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Close Icon</h3>
        <CloseIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Dashboard Icon</h3>
        <span style={paddedDarkBackground}>
          <DashboardIcon />
        </span>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Disputes Icon</h3>
        <span style={paddedDarkBackground}>
          <DisputesIcon />
        </span>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Drag Handle Icon</h3>
        <DragHandleIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Error Icon</h3>
        <ErrorIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Eye Icon</h3>
        <EyeIcon />
        <h3>Eye Icon with slash</h3>
        <EyeIcon slash />
        <h3>Eye Icon with color of parent element</h3>
        <div style={{ color: '#007dc3' }}>
          <EyeIcon />
        </div>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Garbage Icon</h3>
        <GarbageIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Information Icon</h3>
        <InformationIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Lock Icon</h3>
        <LockIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Minus Icon</h3>
        <MinusIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Plus Icon</h3>
        <PlusIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Pointer Icon Right</h3>
        <span style={paddedDarkBackground}>
          <RightPointerIcon />
        </span>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Reports Icon</h3>
        <ReportsIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Star Icon</h3>
        <StarIcon />

        <h3>Star Icon Filled</h3>
        <StarIcon filled />

        <h3>Star Icon Inline</h3>
        <StarIcon inline />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Statements Icon</h3>
        <span style={paddedDarkBackground}>
          <StatementsIcon />
        </span>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Transactions Icon</h3>
        <span style={paddedDarkBackground}>
          <TransactionsIcon />
        </span>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>User Icon</h3>
        <UserIcon />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Toggle Arrow</h3>
        <ToggleArrow />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>Plus Icon in a Button</h3>
        <PrimaryButton
          type="submit"
          icon={PlusIcon}
          iconDirection="left"
          action={sampleClickHandler}
        >
          Add New User
        </PrimaryButton>
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div>
        <h3>User Icon in a Search/Filter Bar</h3>
        <span className="select-icon">{UserIcon()}</span>
        <SelectInput
          dataList={dataList}
          handleSelection={handleSelection}
          selectedItem={selectedItem}
          wrapperClass="select-menu__table"
        />
      </div>
    </ReactSpecimen>
  </Page>
);
