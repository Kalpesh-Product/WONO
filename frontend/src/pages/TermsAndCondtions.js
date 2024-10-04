import React from "react";
import "../styles/bodyTermsAndConditions.css";
import "../styles/componentStyle.css";
import { Link, useNavigate } from "react-router-dom";
import greenUnderLine from "../assets/underline-bg/blue-line.png";
import "../styles/terms-condition.css";

const TermsAndCondtions = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="privacy-container wono-text-spacing fontPoppinsRegular paddingForTab">
        <h3 className="Title-font terms-title pb-5">
          <img src={greenUnderLine} alt="" /> TERMS AND CONDITIONS
        </h3>
        <div className="privacy-section">
          <h4>1.Introduction</h4>
          <span>
            Welcome to WONOCO PRIVATE LIMITED (SINGAPORE COMPANY)
            (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;)
            govern your use of our SaaS platform, located at{" "}
            <span
              className="text-decoration-none WONOBLUE"
              onClick={() => navigate("/home")}>
              www.wono.co
            </span>{" "}
            , and any services, features, or content provided by the platform
            (collectively, the &quot;Service&quot;).
          </span>
          <br />
          <br />
          <span>
            By accessing or using the Service, you (&quot;User&quot;,
            &quot;you&quot;, or &quot;your&quot;) agree to comply with and be
            bound by these Terms. If you do not agree with any part of these
            Terms, you must discontinue using the Service immediately.
          </span>
        </div>
        <div className="privacy-section">
          <h4>2. Eligibility</h4>
          <span>
            To use the Service, you must be at least 18 years of age or have
            reached the legal age in your jurisdiction. By using the Service,
            you represent that you are of legal age and have the legal capacity
            to enter into a binding agreement.
          </span>
        </div>
        <div className="privacy-section">
          <h4>3. Account Registration</h4>
          <span>
            To access certain features of the Service, you must create an
            account. You agree to provide accurate and complete information
            during registration and to keep your account information updated.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </span>
          <br />
          <br />
          <span>
            We reserve the right to suspend or terminate your account if we
            suspect unauthorized activity or if you breach these Terms.
          </span>
        </div>
        <div className="privacy-section">
          <h4>4. Subscription and Payment</h4>
          <span>
            The Service is available on a subscription basis. By subscribing,
            you agree to pay the fees indicated at the time of subscription,
            which may vary based on the plan you choose.
          </span>
          <br />
          <br />
          <ul>
            <li>
              <b>Billing Cycle:</b> Subscriptions are billed on a monthly or
              annual basis, depending on your plan.
            </li>
            <li>
              <b>Automatic Renewal:</b> Subscriptions automatically renew at the
              end of each billing cycle unless you cancel your subscription.
            </li>
            <li>
              <b>Payment Methods:</b> We accept [list payment methods]. You
              authorize us to charge your selected payment method for all
              subscription fees.
            </li>
            <li>
              <b>Refunds:</b>All fees are non-refundable, except where required
              by law.
            </li>
          </ul>
        </div>
        <div className="privacy-section">
          <h4>5. License and Usage</h4>
          <span>
            We grant you a limited, non-exclusive, non-transferable, and
            revocable license to access and use the Service for your internal
            business purposes. You agree not to:
          </span>
          <br />
          <br />
          <ul>
            <li>
              Reverse engineer, decompile, or disassemble any part of the
              Service.
            </li>
            <li>Use the Service to build a competing product.</li>
            <li>
              Misuse the Service, such as by introducing malware, spamming, or
              disrupting the platform.
            </li>
          </ul>
          <br />
          <span>
            We reserve the right to terminate or restrict your access to the
            Service if we believe you have violated these Terms.
          </span>
        </div>
        <div className="privacy-section">
          <h4>6. Intellectual Property</h4>
          <span>
            All content, materials, trademarks, and technology on the platform,
            including the software and its features, are owned by or licensed to
            the Company and are protected by intellectual property laws. You may
            not copy, modify, distribute, or use any of these materials without
            prior written consent from the Company.
          </span>
        </div>
        <div className="privacy-section">
          <h4>7. Data Protection and Privacy</h4>
          <span>
            We value your privacy. Our collection, use, and storage of your data
            are governed by our{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                navigate("/privacy");
              }}>
              Privacy Policy
            </span>
            . By using the Service, you consent to the collection and use of
            your information as described in the Privacy Policy.
          </span>
        </div>
        <div className="privacy-section">
          <h4>8. Third-Party Integrations</h4>
          <span>
            Our platform may integrate with third-party services. We are not
            responsible for the availability, accuracy, or content of any
            third-party services or platforms. Your use of third- party
            integrations is subject to the terms and conditions of the
            respective third parties.
          </span>
        </div>
        <div className="privacy-section">
          <h4>9. Service Availability</h4>
          <span>
            We strive to provide continuous access to the Service, but we do not
            guarantee that the Service will be available at all times. The
            Service may be interrupted for maintenance, updates, or technical
            reasons. We are not liable for any loss or damage resulting from
            interruptions in service.
          </span>
        </div>
        <div className="privacy-section">
          <h4>10. Modifications to the Service and Terms</h4>
          <span>
            We may modify or update the Service, these Terms, or our pricing at
            any time. We will provide notice of significant changes by posting
            the updated Terms on our platform or by sending you a notification.
            Continued use of the Service after changes are made constitutes your
            acceptance of the new Terms.
          </span>
        </div>
        <div className="privacy-section">
          <h4>11. Termination</h4>
          <span>
            You may terminate your account at any time by contacting us or
            through your account settings. We reserve the right to suspend or
            terminate your account or access to the Service at our discretion,
            especially if you breach these Terms.
          </span>
          <span>
            Upon termination, you will lose access to the Service, and any data
            associated with your account may be deleted.
          </span>
        </div>
        <div className="privacy-section">
          <h4>12. Limitation of Liability</h4>
          <span>
            To the fullest extent permitted by law, the Company and its
            affiliates, officers, employees, or agents shall not be liable for
            any indirect, incidental, special, or consequential damages arising
            from your use of the Service, including but not limited to loss of
            profits, data, or business opportunities.
          </span>
          <span>
            In no event shall our total liability exceed the amount you paid to
            the Company for your use of the Service in the twelve (12) months
            preceding the claim.
          </span>
        </div>
        <div className="privacy-section">
          <h4>13. Indemnification</h4>
          <span>
            You agree to indemnify and hold harmless the Company, its
            affiliates, employees, and agents from any claims, liabilities,
            damages, losses, or expenses arising from your use of the Service,
            your violation of these Terms, or your infringement of any
            intellectual property or other rights of a third party.
          </span>
        </div>
        <div className="privacy-section">
          <h4>14. Governing Law and Dispute Resolution</h4>
          <span>
            These Terms are governed by the laws of Singapore, without regard to
            its conflict of law principles. Any disputes arising from or related
            to these Terms or the Service will be resolved through binding
            arbitration in accordance with the rules of the [Arbitration
            Association], and judgment on the award rendered by the arbitrator
            may be entered in any court having jurisdiction.
          </span>
        </div>
        <div className="privacy-section">
          <h4>15. Force Majeure</h4>
          <span>
            We will not be liable for any failure or delay in the performance of
            our obligations due to events beyond our reasonable control,
            including but not limited to natural disasters, war, terrorism,
            cyber-attacks, strikes, or governmental actions.
          </span>
        </div>
        <div className="privacy-section">
          <h4>16. Severability</h4>
          <span>
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect.
          </span>
        </div>
        <div className="privacy-section">
          <h4>17. Entire Agreement</h4>
          <span>
            These Terms, along with our Privacy Policy and any additional
            agreements or terms you agree to when using the Service, constitute
            the entire agreement between you and the Company regarding the
            Service and supersede any prior agreements.
          </span>
        </div>
        <div className="privacy-section">
          <h4>18. Contact Information</h4>
          <span>
            If you have any questions or concerns about these Terms, please
            contact us at:
          </span>
          <br />
          <br />
          <div className="d-flex flex-column fw-semibold">
            <span>WONOCO PRIVATE LIMITED</span>
            <span>10 ANSON ROAD #33-10 INTERNATIONAL PLAZA</span>
            <span>SINGAPORE - 079903</span>
            <div className="d-flex flex-column fw-regular mt-1">
              <Link
                className="WONOBLUE text-decoration-none"
                to={"mailto:response@wono.co"}>
                response@wono.co
              </Link>
              <Link className="WONOBLUE text-decoration-none" to={"/contact"}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondtions;
