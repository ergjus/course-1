import { LightningElement, api } from 'lwc';

export default class MultiSelectDropdown extends LightningElement {
    @api name;
    @api icon;
    @api multiSelect;
    @api options = [];
    dropdownOpened = false;

    get dropdownClass() {
        return `slds-dropdown-trigger slds-dropdown-trigger_click ${this.dropdownOpened ? 'slds-is-open' : ''}`;
    }

    @api
    toggleDropdown() {
        this.dropdownOpened = !this.dropdownOpened;
    }

    handleSelect(event) {
        const value = event.currentTarget.dataset.value;
        const selectedOption = this.options.find(option => option.value === value);

        if (this.multiSelect) {
            selectedOption.selected = !selectedOption.selected;
        } else {
            this.options.forEach(option => {
                option.selected = option.value === value;
            });
            this.dropdownOpened = false; // Close the dropdown for single select
        }

        // Dispatch a custom event to notify the parent component of the change
        this.dispatchEvent(new CustomEvent('selectionchange', {
            detail: { selectedOptions: this.selectedValues }
        }));
    }

    get selectedValues() {
        return this.options.filter(option => option.selected).map(option => option.value);
    }
}
