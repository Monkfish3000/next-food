'use server';

import { redirect } from 'next/dist/server/api-utils';
import { saveMeal } from './meals';

function isValidInput(text) {
  return !text || text.trim() === '';
}

export async function uploadNewMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isValidInput(meal.title) ||
    isValidInput(meal.summary) ||
    isValidInput(meal.instructions) ||
    isValidInput(meal.creator) ||
    isValidInput(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Please check all fields were filled out correctly',
    };
  }

  await saveMeal(meal);
  redirect('/meals');
}
