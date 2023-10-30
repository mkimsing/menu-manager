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
      meal: {
        Row: {
          description: string | null
          id: number
          image_url: string | null
          last_updated: string | null
          name: string
        }
        Insert: {
          description?: string | null
          id: number
          image_url?: string | null
          last_updated?: string | null
          name?: string
        }
        Update: {
          description?: string | null
          id?: number
          image_url?: string | null
          last_updated?: string | null
          name?: string
        }
        Relationships: []
      }
      menu: {
        Row: {
          created_at: string
          day: string | null
          id: number
          meal_time: Database["public"]["Enums"]["meal_time"] | null
          menu_period_id: number | null
          name: string | null
        }
        Insert: {
          created_at?: string
          day?: string | null
          id?: number
          meal_time?: Database["public"]["Enums"]["meal_time"] | null
          menu_period_id?: number | null
          name?: string | null
        }
        Update: {
          created_at?: string
          day?: string | null
          id?: number
          meal_time?: Database["public"]["Enums"]["meal_time"] | null
          menu_period_id?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_menu_period_id_fkey"
            columns: ["menu_period_id"]
            referencedRelation: "menu_period"
            referencedColumns: ["id"]
          }
        ]
      }
      menu_meals: {
        Row: {
          id: number
          meal_id: number
          menu_id: number | null
        }
        Insert: {
          id?: number
          meal_id: number
          menu_id?: number | null
        }
        Update: {
          id?: number
          meal_id?: number
          menu_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_meals_meal_id_fkey"
            columns: ["meal_id"]
            referencedRelation: "meal"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_meals_menu_id_fkey"
            columns: ["menu_id"]
            referencedRelation: "menu"
            referencedColumns: ["id"]
          }
        ]
      }
      menu_period: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          name: string | null
          start_date: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          name?: string | null
          start_date?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          name?: string | null
          start_date?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          count: number | null
          created_at: string
          id: number
          meal_id: number | null
          menu_id: number | null
        }
        Insert: {
          count?: number | null
          created_at?: string
          id?: number
          meal_id?: number | null
          menu_id?: number | null
        }
        Update: {
          count?: number | null
          created_at?: string
          id?: number
          meal_id?: number | null
          menu_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_meal_id_fkey"
            columns: ["meal_id"]
            referencedRelation: "meal"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_menu_id_fkey"
            columns: ["menu_id"]
            referencedRelation: "menu"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      meal_time: "breakfast" | "lunch" | "dinner"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
