import  ParentType  from "@/types/ParentType";
import  BabyType  from "@/types/BabyType";
import { create } from "zustand";
import { persist } from "zustand/middleware";



type ActionParentType = {
  setClerkId: (clerkId: string) => void;
  setParentName: (parentName: string) => void;
  setPhone: (phone: string) => void;
  setRelation: (relation: string) => void;
  setImage: (image: string) => void;
  setEmail: (email: string) => void;
  setBaby: (baby: BabyType) => void;
  fetchParent: (userId: string) => Promise<void>;
};



const ParentInitialState = {
  clerkId: "",
  parentName: "",
  phone: "",
  relation: "",
  image: "",
  email: "",
  baby: [],
};



export const useParentStore = create<ParentType & ActionParentType>()(
  persist(
    (set) => ({
      ...ParentInitialState,
      setClerkId: (clerkId) => set({ clerkId }),
      setParentName: (parentName) => set({ parentName }),
      setPhone: (phone) => set({ phone }),
      setRelation: (relation) => set({ relation }),
      setImage: (image) => set({ image }),
      setEmail: (email) => set({ email }),
      setBaby: (baby) =>
        set((state) => ({ baby: [...(state.baby || []), baby] })),
      fetchParent: async (userId) => {
        try {
          
          const response = await fetch(`/api/parent/${userId}`, {
            method: "GET",
          });
          const data = await response.json();
          set({
            clerkId: data.clerkId,
            parentName: data.parentName,
            phone: data.phone,
            relation: data.relation,
            image: data.image,
            email: data.email,
            baby: data.baby,
          });
        } catch (error) {
          console.error("Error fetching parent data:", error);
        }
      },
    }),
    {
      name: "parentStore", // Storage key
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      }, // Use sessionStorage instead of localStorage
    }
  )
);