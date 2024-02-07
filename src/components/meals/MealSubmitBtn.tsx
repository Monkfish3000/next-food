'use client';

import { useFormStatus } from 'react-dom';

const MealsSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
};

export default MealsSubmitBtn;
