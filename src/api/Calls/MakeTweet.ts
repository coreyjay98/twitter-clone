import { Tweet } from "@/src/common/types";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function makeTweet(tweet: Tweet) {
  const { data, error } = await supabase.from("tweets").insert([{ ...tweet }]);

  if (error) {
    console.log("Error inserting tweet:", error);
    return error;
  }

  return data;
}

export default makeTweet;
