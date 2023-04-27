import { createClient } from './../../node_modules/@supabase/supabase-js/src/index';
import {} from '@supabase/supabase-js'

export const supabase = createClient(
  'https://qhkxpfbvggprygpehhij.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoa3hwZmJ2Z2dwcnlncGVoaGlqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU2Njk5MCwiZXhwIjoxOTk4MTQyOTkwfQ.xIBXXu5w62CbhFkV4F1pzOhjFkmWk8q2Nihv0QtRMz0'
)