import { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../Context/TranslationContext";
/**
 * @typedef {Object} MainLogo
 * @property {string} LogoBGR - Path to the main logo background image.
 * @property {string} SubLogo1 - Path to the first sub logo image.
 * @property {string} IconDown - Path to the down icon image.
 */

/**
 * @typedef {Object} Seo
 * @property {string} title - Path to the main logo background image.
 */

/**
 * @typedef {Object} ProfileItem
 * @property {string} id - Unique identifier for the profile.
 * @property {string} image_Profile - Path to the profile image.
 * @property {string} image_FullProfile - Path to the full profile image.
 * @property {string} imageProfileLogo - Path to the profile logo image.
 * @property {string} en_name - English name of the person.
 * @property {string} heb_name - Hebrew name of the person.
 * @property {string} typeRule - Type or rule related to the person.
 * @property {string} aboutPerson - Brief about the person.
 * @property {string} aboutPersonFullProfile - Detailed about the person.
 */

/**
 * @typedef {Object} TitleContactDetails
 * @property {string} ImageLogoSmall - Path to the small logo image.
 */

/**
 * @typedef {Object} ContactForm
 * @property {string} name - Label for the name field.
 * @property {string} reason - Label for the reason field.
 * @property {string} send - Label for the send button.
 * @property {string} title - Title of the contact form.
 * @property {string} phone - Label for the phone field.
 * @property {string} required - Label indicating required fields.
 */

/**
 * @typedef {Object} ForPageContact
 * @property {string} contextOffice - Office address.
 * @property {string} contextPost - Postal address.
 * @property {ContactForm} form - Form labels and placeholders.
 */

/**
 * @typedef {Object} ForAccessibilityPage
 * @property {string} accessibilityStatement - Accessibility statement.
 */

/**
 * @typedef {Object} TranslationData
 * @property {MainLogo} MainLogo - Main logo data.
 * @property {Seo} Seo - Main logo data.
 * @property {ProfileItem[]} Profile - Array of profile items.
 * @property {string} Icon_Back - Path to the back icon image.
 * @property {string} Icon_Continue_Reading - Path to the continue reading icon image.
 * @property {string} imageMeetingOfficeOutside - Path to the meeting office outside image.
 * @property {string} imageMeetingOffice - Path to the meeting office image.
 * @property {string} imageAllWorkers - Path to the all workers image.
 * @property {TitleContactDetails} TitleContactDetails - Title contact details.
 * @property {ForPageContact} forPageContact - Contact information.
 * @property {ForAccessibilityPage} forAccessibilityPage - Accessibility page details.
 * @property {string} email - Contact email.
 * @property {string} phone - Contact phone number.
 * @property {string} fax - Fax number.
 */

/**
 * @returns {TranslationData | undefined} The translation context value or undefined if context is not provided.
 */
export const useTranslation = () => useContext(TranslationContext);
