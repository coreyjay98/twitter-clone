/* import { createClient } from '@supabase/supabase-js'

export async function loginUser(email: string, password: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password    
  })

  if (error) {
    throw error
  }

  return user
} */
