import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const likeTweet = async (
  username: string,
  tweetId: string,
  unlike: boolean
) => {
  const { data: user } = await supabase
    .from("users")
    .select("likedTweets")
    .eq("username", username)
    .single();
  if (user) {
    if (unlike) {
      // Remove the tweetId from likedTweets array
      user.likedTweets = user.likedTweets.filter(
        (id: string) => id !== tweetId
      );
    } else {
      // Add the tweetId to likedTweets array
      user.likedTweets.push(tweetId);
    }

    await supabase
      .from("users")
      .update({ likedTweets: user.likedTweets })
      .eq("username", username);
  }
};

export default likeTweet;
