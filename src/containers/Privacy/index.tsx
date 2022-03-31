import styles from "./Privacy.module.scss";

interface IPrivacyProps {}

const Privacy: React.FC<IPrivacyProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span>1.1</span>
        <h2>Basic Account Information</h2>
        <p>
          You don’t have to create an account to use some of our service
          features, such as searching and viewing public Twitter profiles or
          watching a broadcast on Periscope’s website. If you do choose to
          create an account, you must provide us with some personal data so that
          we can provide our services to you. On Twitter this includes a display
          name (for example, “Twitter Moments”), a username (for example,
          @TwitterMoments), a password, and an email address or phone number.
          Your display name and username are always public, but you can use
          either your real name or a pseudonym. If you choose to create a
          professional account, you must also provide us with your professional
          category, and may provide us with additional information, including
          street address, contact email address, and contact phone number, all
          of which will always be public. You can also create and manage
          multiple Twitter accounts1, for example to express different parts of
          your identity.
        </p>
      </div>
      <div className={styles.section}>
        <span>1.2</span>
        <h2>Public Information</h2>
        <p>
          Most activity on Twitter is public, including your profile
          information2, your display language, when you created your account,
          and your Tweets and certain information about your Tweets like the
          date, time, and application and version of Twitter you Tweeted from.
          You also may choose to publish your location in your Tweets or your
          Twitter profile. When you share audio or visual content on our service
          we may analyze that data to operate our services, for example by
          providing audio transcription. The lists you create, people you follow
          and who follow you, and Tweets you Like or Retweet are also public. If
          you like, Retweet, reply, or otherwise publicly engage with an ad on
          our services, that advertiser might thereby learn information about
          you associated with the ad with which you engaged such as
          characteristics of the audience the ad was intended to reach.
          Broadcasts (including Twitter Spaces) you create are public along with
          when you created them. Your engagement with broadcasts, including
          viewing, listening, commenting, speaking, reacting to, or otherwise
          participating in them, either on Periscope (subject to your settings)
          or on Twitter, is public along with when you took those actions. On
          Periscope, so are your hearts, comments, the number of hearts you’ve
          received, which accounts you are a Superfan of, and whether you
          watched a broadcast live or on replay. Any engagement with another
          account’s broadcast will remain part of that broadcast for as long as
          it remains on our services. Information posted about you by other
          people who use our services may also be public. For example, other
          people may tag you in a photo3 (if your settings allow) or mention you
          in a Tweet.
          <br />
          <br />
          You are responsible for your Tweets and other information you provide
          through our services, and you should think carefully about what you
          make public, especially if it is sensitive information. If you update
          your public information on Twitter, such as by deleting a Tweet or
          deactivating your account, we will reflect your updated content on
          Twitter.com, Twitter for iOS, and Twitter for Android.
          <br />
          <br />
          By publicly posting content, you are directing us to disclose that
          information as broadly as possible, including through our APIs, and
          directing those accessing the information through our APIs to do the
          same. To facilitate the fast global dissemination of Tweets to people
          around the world, we use technology like application programming
          interfaces (APIs) and embeds to make that information available to
          websites, apps, and others for their use - for example, displaying
          Tweets on a news website or analyzing what people say on Twitter. We
          generally make this content available in limited quantities for free
          and charge licensing fees for large-scale access. We have standard
          terms that govern how this data can be used, and a compliance program
          to enforce these terms. But these individuals and companies are not
          affiliated with Twitter, and their offerings may not reflect updates
          you make on Twitter. For more information about how we make public
          data on Twitter available to the world, visit
          https://developer.twitter.com.
        </p>
      </div>
      <div className={styles.section}>
        <span>1.3</span>
        <h2>Contact Information and Address Books</h2>
        <p>
          We use your contact information, such as your email address or phone
          number, to authenticate your account and keep it - and our services -
          secure, and to help prevent spam, fraud, and abuse. Subject to your
          settings, we also use contact information to enable certain account
          features (for example, for login verification), to send you
          information about our services, and to personalize our services,
          including ads. If you provide us with your phone number, you agree to
          receive text messages from Twitter to that number as your country’s
          laws allow. Twitter also uses your contact information to market to
          you as your country’s laws allow, and to help others find your account
          if your settings permit, including through third-party services and
          client applications. You can use your settings for email and mobile
          notifications to control notifications you receive from Twitter. You
          can also unsubscribe from a notification by following the instructions
          contained within the notification or here.
          <br />
          <br />
          You can choose to upload and sync your address book on Twitter so that
          we can help you find and connect with people you know and help others
          find and connect with you. We also use this information to better
          recommend content to you and others.
          <br />
          <br />
          You can sign up for Periscope with an account from another service
          like Twitter, Google, or Facebook, or connect your Periscope account
          to these other services. If you do, we will use information from that
          service, including your email address, friends, or contacts list, to
          recommend other accounts or content to you or to recommend your
          account or content to others. You can control whether your Periscope
          account is discoverable by email through your Periscope settings.
          <br />
          <br />
          If you email us, we will keep the content of your message, your email
          address, and your contact information to respond to your request.
        </p>
      </div>
      <div className={styles.section}>
        <span>1.4</span>
        <h2>Direct Messages and Non-Public Communications</h2>
        <p>
          We provide certain features that let you communicate more privately or
          control who sees your content. For example, you can use Direct
          Messages to have non-public conversations on Twitter, protect your
          Tweets, or host private broadcasts on Periscope. When you communicate
          with others by sending or receiving Direct Messages, we will store and
          process your communications and information related to them. This
          includes link scanning for malicious content, link shortening to
          http://t.co URLs, detection of spam4, abuse and prohibited images, and
          use of reported issues. We also use information about whom you have
          communicated with and when (but not the content of those
          communications) to better understand the use of our services, to
          protect the safety and integrity of our platform, and to show more
          relevant content. We share the content of your Direct Messages with
          the people you’ve sent them to; we do not use them to serve you ads.
          Note that if you interact in a way that would ordinarily be public
          with Twitter content shared with you via Direct Message, for instance
          by liking a Tweet, those interactions will be public. When you use
          features like Direct Messages to communicate, remember that recipients
          have their own copy5 of your communications on Twitter - even if you
          delete your copy of those messages from your account - which they may
          duplicate, store, or re-share.
        </p>
      </div>
      <div className={styles.section}>
        <span>1.5</span>
        <h2>Payment Information</h2>
        <p>
          You may provide us with payment information6, including your credit or
          debit card number, card expiration date, CVV code, and billing
          address, in order to purchase advertising or other offerings provided
          as part of our services. If you make a payment or send money using
          Twitter features or services, including through an intermediary, we
          may receive information about your transaction such as when it was
          made or when a subscription is set to expire or auto-renew.
        </p>
      </div>
      <div className={styles.section}>
        <span>1.6</span>
        <h2>How You Control the Information You Share with Us</h2>
        <p>Your Privacy and safety settings let you decide:</p>
        <ul>
          <li>Whether your Tweets are publicly available on Twitter</li>
          <li>Whether others can tag you in a photo</li>
          <li>
            Whether you will be able to receive Direct Messages from anyone on
            Twitter or just your followers
          </li>
          <li>
            Whether others can find you based on your email or phone number
          </li>
          <li>
            Whether you upload your address book to Twitter for storage and use
          </li>
          <li>When and where you may see sensitive content on Twitter</li>
          <li>Whether you want to block or mute other Twitter accounts</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
