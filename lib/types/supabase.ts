// Supabase Database Types
// Generate types using: npx supabase gen types typescript --project-id cdmexgwritlzsxsiafdk > lib/types/supabase.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      // Add your table types here as you create them in Supabase
      // Example structure:
      // profiles: {
      //   Row: {
      //     id: string
      //     created_at: string
      //     // ... other columns
      //   }
      //   Insert: {
      //     id?: string
      //     created_at?: string
      //     // ... other columns
      //   }
      //   Update: {
      //     id?: string
      //     created_at?: string
      //     // ... other columns
      //   }
      // }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}







