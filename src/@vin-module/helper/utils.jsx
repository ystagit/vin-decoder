export const isValidVariable = (variable) =>
    !variable?.toLowerCase().includes('error') ?? false

export const isValidValue = (value) =>
    value !== null
    && value.trim() !== ''
    && value !== 'Not Applicable'