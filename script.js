"use strict";

const calculateButton = document.querySelector('.calculate-button');
const mortgageAmountInput = document.querySelector('#mortgage-amount-input');
const mortgageTermInput = document.querySelector('#mortgage-term-input');
const interestRateInput = document.querySelector('#interest-rate-input');
const repaymentOption = document.querySelector('#repayment-option');
const interestOnlyOption = document.querySelector('#interest-only-option');
const clearButton = document.querySelector('.clear-button');
const errorMessages = document.querySelectorAll('.error-msg');
const symbolElements = document.querySelectorAll('.symbol-background');
const inputElements = document.querySelectorAll('input');
const repaymentLabel = document.querySelector('.repayment-label');
const interestOnlyLabel = document.querySelector('.interest-only-label');
const resultHeader = document.querySelector('.results-header');
const resultDetails = document.querySelector('.results-details');
const labelAmount = document.querySelectorAll('.label-amount');

function showError(index, msg) {
    errorMessages[index].textContent = msg;
    inputElements[index].classList.add('error-button');
    symbolElements[index].classList.add('error-background');
}

function hideError(index, msg) {
    errorMessages[index].textContent = msg;
    inputElements[index].classList.remove('error-button');
    symbolElements[index].classList.remove('error-background');
}

function validInput(input, index) {
    if (input === "") {
        showError(index, "This field is required");
    } else {
        hideError(index, null);
        return +input;
    }
}

const formatNumber = (number) => 
    Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
    }).format(number);


function checkRadioButton() {
    const repayment = repaymentOption.checked;
    const interestOnly = interestOnlyOption.checked;
    let option = null;

    if (repayment ===  true && interestOnly === false) {
        option === "repayment";
        return option;
    } else if (interestOnly === true && repayment === false) {
        option === "interestOnly";
        return option;
    } else {
        return (errorMessages[3].textContent = "This field is required");
    }
}

function calculateRepayment() {
    const mortgageAmount = validInput(mortgageAmountInput.value, 0);
    const mortgageTerm = validInput(mortgageTermInput.value, 1);
    const interestRate = validInput(interestRateInput.value, 2);
    const isRadioButtonChecked = checkRadioButton();

    
}

