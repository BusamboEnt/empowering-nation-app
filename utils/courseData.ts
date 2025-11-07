export interface Course {
  id: string;
  title: string;
  duration: string;
  price: number;
  purpose: string;
  content: string[];
}

export const COURSES: Course[] = [
  {
    id: 'first_aid',
    title: 'First Aid',
    duration: '12 weeks',
    price: 1500,
    purpose: 'Provide basic life support and first aid awareness.',
    content: ['Wounds and bleeding', 'Burns', 'Fractures', 'CPR'],
  },
  {
    id: 'sewing',
    title: 'Sewing',
    duration: '12 weeks',
    price: 1500,
    purpose: 'Provide alterations and tailoring services.',
    content: ['Stitching techniques', 'Fabric types', 'Pattern cutting'],
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    duration: '12 weeks',
    price: 1500,
    purpose: 'Teach professional landscaping and garden design.',
    content: ['Planting design', 'Soil management', 'Lawn care'],
  },
  {
    id: 'life_skills',
    title: 'Life Skills',
    duration: '12 weeks',
    price: 1500,
    purpose: 'Develop essential personal and professional life skills.',
    content: ['Time management', 'Communication', 'Problem-solving'],
  },
  {
    id: 'child_minding',
    title: 'Child Minding',
    duration: '6 weeks',
    price: 750,
    purpose: 'Train learners in basic childcare and supervision.',
    content: ['Child safety', 'Play activities', 'Nutrition basics'],
  },
  {
    id: 'cooking',
    title: 'Cooking',
    duration: '6 weeks',
    price: 750,
    purpose: 'Learn basic cooking techniques for everyday meals.',
    content: ['Meal prep', 'Cooking methods', 'Food safety'],
  },
  {
    id: 'garden_maintenance',
    title: 'Garden Maintenance',
    duration: '6 weeks',
    price: 750,
    purpose: 'Provide essential skills for maintaining gardens.',
    content: ['Pruning', 'Weeding', 'Fertilizing', 'Watering techniques'],
  },
];

export function calculateTotal(selectedIds: string[]) {
  const selected = COURSES.filter((c) => selectedIds.includes(c.id));
  const subTotal = selected.reduce((sum, c) => sum + c.price, 0);

  let discountRate = 0;
  if (selected.length === 2) discountRate = 0.05;
  else if (selected.length === 3) discountRate = 0.1;
  else if (selected.length > 3) discountRate = 0.15;

  const discounted = subTotal - subTotal * discountRate;
  const vat = discounted * 0.15;
  const total = discounted + vat;

  return { subTotal, discountRate, vat, total };
}
