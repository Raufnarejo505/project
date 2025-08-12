// src/components/sections/AboutUsSection/AboutUsSection.jsx
import React from 'react';
import styles from './AboutUsSection.module.css';
import Button from '../../components/common/Button/Button.jsx'; // Assuming you have a reusable Button component

const AboutUsSection = () => {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.mainHeading}>
        About Us
      </h2>
      <p className={styles.subHeading}>
        Smarter Betting Through Real-Time Software
      </p>

      {/* New container for the cards */}
      <div className={styles.cardsGridContainer}>
        {/* What We Do - Now a Card */}
        <div className={styles.contentCard}>
          <h3 className={styles.blockTitle}>What We Do</h3>
          <p className={styles.blockDescription}>
            Every second, bookmakers in the UK adjust their odds based on supply, demand, and risk. But
            because each bookmaker does this independently, their odds don’t always match up. This
            creates small windows of opportunity — called surebets — where placing bets on all possible
            outcomes across different sites guarantees a profit.
          </p>
          <p className={styles.blockDescription}>
            Our software tracks millions of odds across dozens of bookmakers 24/7. When it detects one of
            these opportunities, we notify our users instantly — with:
          </p>
          <ul className={styles.checkmarksList}>
            <li><span className={styles.checkmarkIcon}>✅</span> Exact odds</li>
            <li><span className={styles.checkmarkIcon}>✅</span> Bookmakers to use</li>
            <li><span className={styles.checkmarkIcon}>✅</span> Which bets to place</li>
            <li><span className={styles.checkmarkIcon}>✅</span> What amount to stake</li>
            <li><span className={styles.checkmarkIcon}>✅</span> And your exact risk-free profit</li>
          </ul>
        </div>

        {/* Key Features - Now a Card */}
        <div className={styles.contentCard}>
          <h3 className={styles.blockTitle}>Key Features</h3>
          <ul className={styles.featuresList}>
            <li><span className={styles.featureEmoji}>🔍</span> <span className={styles.featureHighlight}>Surebet Detection Engine</span> – Continuously scans all outcomes across all sports for price mismatches</li>
            <li><span className={styles.featureEmoji}>📱</span> <span className={styles.featureHighlight}>Instant Notifications</span> – Alerts you in real-time when an opportunity appears</li>
            <li><span className={styles.featureEmoji}>📈</span> <span className={styles.featureHighlight}>Profit Calculator</span> – Automatically calculates how much to bet and what you’ll earn</li>
            <li><span className={styles.featureEmoji}>📊</span> <span className={styles.featureHighlight}>Bankroll Tracker</span> – Monitor your total ROI and profits over time</li>
            <li><span className={styles.featureEmoji}>💬</span> <span className={styles.featureHighlight}>Guides & Tips</span> – Resources for both beginners and experienced bettors</li>
          </ul>
        </div>

        {/* Who Is It For? - Now a Card */}
        <div className={styles.contentCard}>
          <h3 className={styles.blockTitle}>Who Is It For?</h3>
          <ul className={styles.bulletList}>
            <li><span className={styles.bulletIcon}>●</span> Beginners who want to get started with low-risk strategies</li>
            <li><span className={styles.bulletIcon}>●</span> Experienced bettors who want to scale their operations with automation</li>
            <li><span className={styles.bulletIcon}>●</span> Anyone who prefers numbers over gut feeling</li>
          </ul>
        </div>

        {/* Why It Works - Now a Card */}
        <div className={styles.contentCard}>
          <h3 className={styles.blockTitle}>Why It Works</h3>
          <p className={styles.blockDescription}>
            Bookmakers make mistakes — and we catch them. With the right timing and tools, you can
            profit from inefficiencies in the market. Our job is to find them for you before they disappear.
          </p>
          <p className={`${styles.blockDescription} ${styles.italicText}`}>
            This isn’t gambling. It’s exploiting math — with software that works.
          </p>
        </div>
      </div> {/* End of cardsGridContainer */}

      {/* Call to Action */}
      <div className={styles.callToAction}>
        <p className={styles.ctaText}>Want to see how it works in action?</p>
        <div className={styles.ctaButtons}>
          <Button variant="secondary" size="large">
            Start your free trial
          </Button>
          <Button variant="secondary" size="large">
            Watch demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;