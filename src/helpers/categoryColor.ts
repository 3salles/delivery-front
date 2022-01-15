import { Category } from "../models";

export function categoryColor(category: Category){
  switch(category){
    case 'drinks':
      return 'blue'
    case 'food':
      return 'orange'
    case 'snacks':
      return 'purple'
    default:
      return 'gray'
  }
}