import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track isMultiSelect = true; // Set to true for multi-select, false for single-select

    // Sample data for the dropdown options
    options = [
        { label: 'Option 1', value: 'opt1', selected: false },
        { label: 'Option 2', value: 'opt2', selected: false },
        { label: 'Option 3', value: 'opt3', selected: false }
    ];

    connectedCallback() {
        // Pass the options to the child component after the component has been inserted into the DOM
        const dropdown = this.template.querySelector('c-filter-menu');
        if (dropdown) {
            dropdown.setOptions(this.options);
        }
    }

    handleSelectionChange(event) {
        // Handle the selection change event from the multi-select dropdown
        const selectedOptions = event.detail.selectedOptions;
        console.log('Selected options:', selectedOptions);
        // Perform further actions based on the selected options...
    }
}
