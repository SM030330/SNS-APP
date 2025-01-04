import { supabase } from '../lib/supabase';

const authRepository = {
  async signup(name, email, password) {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options: {data: { name: name } }
    });

    if (error != null)throw new Error(error.message);
    return { ...data.user, userName: data.user.user_metadata.name};
  },

  async signin(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error != null) throw new Error(error.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name
    }
  }
}

export default authRepository;