// import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import xss from 'xss';

const prisma = new PrismaClient();

const s3 = new S3({
  region: 'eu-central-1',
});

export async function getMeals() {
  return await prisma.meal.findMany();
}

export async function getMeal(slug) {
  console.log('in the getMeal function > ' + slug);
  return await prisma.meal.findUnique({
    where: { slug },
  });
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error('Saving image failed');
  //   }
  // });

  s3.putObject({
    Bucket: 'monkfish-next-food-bucker',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  return await prisma.meal.create({
    data: meal,
  });
}
