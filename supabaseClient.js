import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://noxrffgpooxhgbgxvnyw.supabase.com'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5veHJmZmdwb294aGdiZ3h2bnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NzY3NzEsImV4cCI6MjA4NjI1Mjc3MX0.FynZeHNEl_fbZL2esohFpdwZzKbMy66rEHDypOGULM0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
