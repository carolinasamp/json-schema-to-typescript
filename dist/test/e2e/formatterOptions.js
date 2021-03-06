"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Example Schema',
    type: 'object',
    properties: {
        firstName: {
            type: 'string'
        },
        lastName: {
            id: 'lastName',
            type: 'string'
        }
    },
    required: ['firstName', 'lastName']
};
exports.options = {
    style: {
        semi: false,
        trailingComma: 'all',
        useTabs: true
    }
};
//# sourceMappingURL=formatterOptions.js.map