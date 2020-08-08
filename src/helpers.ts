import * as React from 'react'
import { ValidationError, Schema } from 'yup';

const errorReduce =
(allErrors: ValidationError, currentError: ValidationError) => ({
  ...allErrors,
  [currentError.path]: {
    type: currentError.type ?? "validation",
    message: currentError.message
  }
})

export const useYupValidationResolver = (validationSchema: Schema<any>) =>
  React.useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(errorReduce, {})
        };
      }
    },
    [validationSchema]
  );
