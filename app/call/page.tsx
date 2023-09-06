"use client";
import { useEffect, useState } from "react";
import { User } from "@/src/common/types";
import { createClient } from "@supabase/supabase-js";

export default function Index() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    // Access environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl!, supabaseApiKey!);

    // Fetch data from Supabase
    async function fetchUsers() {
      const { data, error } = await supabase.from("users").select();

      if (error) {
        console.error("Error fetching users:", error);
        return;
      }

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <ul className="my-auto text-white">
      {users?.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
}
