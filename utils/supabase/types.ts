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
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'owner' | 'admin' | 'editor' | 'viewer'
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'owner' | 'admin' | 'editor' | 'viewer'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'owner' | 'admin' | 'editor' | 'viewer'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      pages: {
        Row: {
          id: string
          title: string
          slug: string
          content: Json
          status: 'draft' | 'published' | 'archived'
          seo_title: string | null
          seo_description: string | null
          seo_image: string | null
          created_by: string
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: Json
          status?: 'draft' | 'published' | 'archived'
          seo_title?: string | null
          seo_description?: string | null
          seo_image?: string | null
          created_by: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: Json
          status?: 'draft' | 'published' | 'archived'
          seo_title?: string | null
          seo_description?: string | null
          seo_image?: string | null
          created_by?: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      page_revisions: {
        Row: {
          id: string
          page_id: string
          content: Json
          created_by: string
          created_at: string
          revision_note: string | null
        }
        Insert: {
          id?: string
          page_id: string
          content: Json
          created_by: string
          created_at?: string
          revision_note?: string | null
        }
        Update: {
          id?: string
          page_id?: string
          content?: Json
          created_by?: string
          created_at?: string
          revision_note?: string | null
        }
      }
      assets: {
        Row: {
          id: string
          filename: string
          original_name: string
          file_size: number
          mime_type: string
          url: string
          alt_text: string | null
          caption: string | null
          metadata: Json | null
          uploaded_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          filename: string
          original_name: string
          file_size: number
          mime_type: string
          url: string
          alt_text?: string | null
          caption?: string | null
          metadata?: Json | null
          uploaded_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          filename?: string
          original_name?: string
          file_size?: number
          mime_type?: string
          url?: string
          alt_text?: string | null
          caption?: string | null
          metadata?: Json | null
          uploaded_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          start_date: string
          end_date: string | null
          location: string | null
          max_attendees: number | null
          registration_deadline: string | null
          status: 'draft' | 'published' | 'cancelled'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          start_date: string
          end_date?: string | null
          location?: string | null
          max_attendees?: number | null
          registration_deadline?: string | null
          status?: 'draft' | 'published' | 'cancelled'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          location?: string | null
          max_attendees?: number | null
          registration_deadline?: string | null
          status?: 'draft' | 'published' | 'cancelled'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      event_registrations: {
        Row: {
          id: string
          event_id: string
          name: string
          email: string
          phone: string | null
          message: string | null
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          name: string
          email: string
          phone?: string | null
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string | null
          company: string | null
          content: string
          rating: number | null
          image_url: string | null
          video_url: string | null
          status: 'draft' | 'published'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role?: string | null
          company?: string | null
          content: string
          rating?: number | null
          image_url?: string | null
          video_url?: string | null
          status?: 'draft' | 'published'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string | null
          company?: string | null
          content?: string
          rating?: number | null
          image_url?: string | null
          video_url?: string | null
          status?: 'draft' | 'published'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: Json
          description: string | null
          updated_by: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          description?: string | null
          updated_by: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          description?: string | null
          updated_by?: string
          updated_at?: string
        }
      }
      activity_logs: {
        Row: {
          id: string
          user_id: string
          action: string
          resource_type: string
          resource_id: string | null
          details: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          resource_type: string
          resource_id?: string | null
          details?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          resource_type?: string
          resource_id?: string | null
          details?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'owner' | 'admin' | 'editor' | 'viewer'
      content_status: 'draft' | 'published' | 'archived'
      event_status: 'draft' | 'published' | 'cancelled'
      registration_status: 'pending' | 'confirmed' | 'cancelled'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}