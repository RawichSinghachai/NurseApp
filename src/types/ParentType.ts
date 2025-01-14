import BabyType from "./BabyType";

export default interface ParentType {
  clerkId: string;
  email: string;
  parentName: string;
  phone: string;
  relation: string;
  image: string;
  baby?: BabyType[];
}
